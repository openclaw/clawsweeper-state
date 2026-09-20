import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { jsonFiles, markdownFiles, readJson, readText } from "../scripts/source.mjs";

test("readJson returns null fallback for missing file", () => {
  assert.equal(readJson("/nonexistent/path/does-not-exist.json"), null);
});

test("readJson returns custom fallback for missing file", () => {
  assert.deepEqual(readJson("/nonexistent/path/does-not-exist.json", []), []);
});

test("readJson parses valid JSON", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clawsweeper-source-"));
  try {
    const file = path.join(dir, "valid.json");
    fs.writeFileSync(file, JSON.stringify({ ok: true }), "utf8");
    assert.deepEqual(readJson(file), { ok: true });
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test("readJson throws on malformed JSON", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clawsweeper-source-"));
  try {
    const file = path.join(dir, "bad.json");
    fs.writeFileSync(file, "{bad json", "utf8");
    assert.throws(() => readJson(file, "FALLBACK"), /malformed JSON in .*bad\.json/);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test("readJson throws on malformed JSON without a fallback", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clawsweeper-source-"));
  try {
    const file = path.join(dir, "truncated.json");
    fs.writeFileSync(file, '{"incomplete":', "utf8");
    assert.throws(() => readJson(file), /malformed JSON in .*truncated\.json/);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test("markdownFiles and jsonFiles skip missing directories", () => {
  const missing = path.join(os.tmpdir(), "clawsweeper-source-missing", "nope");
  assert.deepEqual(markdownFiles(missing), []);
  assert.deepEqual(jsonFiles(missing), []);
});

test("markdownFiles lists regular markdown files", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clawsweeper-source-"));
  try {
    const file = path.join(dir, "1.md");
    fs.writeFileSync(file, "ok\n", "utf8");
    assert.deepEqual(markdownFiles(dir), [file]);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test("source readers reject a symlinked markdown file", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clawsweeper-source-"));
  const external = fs.mkdtempSync(path.join(os.tmpdir(), "clawsweeper-source-ext-"));
  try {
    const target = path.join(external, "secret.md");
    fs.writeFileSync(target, "escaped\n", "utf8");
    const link = path.join(dir, "1.md");
    fs.symlinkSync(target, link, "file");
    assert.throws(() => markdownFiles(dir), /source contains symlink/);
    assert.throws(() => readText(link), /source contains symlink/);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
    fs.rmSync(external, { recursive: true, force: true });
  }
});

test("source readers reject a symlinked json file", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clawsweeper-source-"));
  const external = fs.mkdtempSync(path.join(os.tmpdir(), "clawsweeper-source-ext-"));
  try {
    const target = path.join(external, "secret.json");
    fs.writeFileSync(target, '{"escaped":true}\n', "utf8");
    const link = path.join(dir, "run.json");
    fs.symlinkSync(target, link, "file");
    assert.throws(() => jsonFiles(dir), /source contains symlink/);
    assert.throws(() => readJson(link), /source contains symlink/);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
    fs.rmSync(external, { recursive: true, force: true });
  }
});
