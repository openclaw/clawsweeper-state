import fs from "node:fs";
import path from "node:path";

export const PROFILES = [
  {
    slug: "openclaw-openclaw",
    displayName: "OpenClaw",
    repo: "openclaw/openclaw",
  },
  {
    slug: "openclaw-clawhub",
    displayName: "ClawHub",
    repo: "openclaw/clawhub",
  },
  {
    slug: "openclaw-clawsweeper",
    displayName: "ClawSweeper",
    repo: "openclaw/clawsweeper",
  },
];

export function profileForSlug(slug) {
  return PROFILES.find((profile) => profile.slug === slug);
}

export function readText(file) {
  const stats = lstatOrMissing(file);
  if (!stats) return "";
  assertNotSymlink(file, stats);
  return fs.readFileSync(file, "utf8");
}

export function readJson(file, fallback = null) {
  const stats = lstatOrMissing(file);
  if (!stats) return fallback;
  assertNotSymlink(file, stats);
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    throw new Error(`[clawsweeper-state] readJson: malformed JSON in ${file}`, { cause: error });
  }
}

export function writeText(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text, "utf8");
}

export function markdownFiles(dir) {
  return listedFiles(dir, ".md");
}

export function jsonFiles(dir) {
  return listedFiles(dir, ".json");
}

function lstatOrMissing(file) {
  try {
    return fs.lstatSync(file);
  } catch (error) {
    if (error?.code === "ENOENT") return null;
    throw error;
  }
}

function assertNotSymlink(file, stats) {
  if (stats.isSymbolicLink()) {
    throw new Error(`[clawsweeper-state] source contains symlink: ${file}`);
  }
}

function listedFiles(dir, suffix) {
  const dirStats = lstatOrMissing(dir);
  if (!dirStats) return [];
  assertNotSymlink(dir, dirStats);
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name),
  )) {
    const file = path.join(dir, entry.name);
    if (entry.isSymbolicLink()) {
      throw new Error(`[clawsweeper-state] source contains symlink: ${file}`);
    }
    if (entry.isFile() && entry.name.endsWith(suffix)) files.push(file);
  }
  return files;
}

export function parseFrontMatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  const body = {};
  if (!match?.[1]) return body;
  for (const line of match[1].split(/\r?\n/)) {
    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) continue;
    body[pair[1]] = parseFrontMatterScalar(pair[2]);
  }
  return body;
}

function parseFrontMatterScalar(value) {
  const trimmed = String(value ?? "").trim();
  if (!trimmed) return "";
  try {
    return JSON.parse(trimmed);
  } catch {
    return trimmed.replace(/^"|"$/g, "");
  }
}

export function relativePath(root, file) {
  return path.relative(root, file).split(path.sep).join("/");
}

export function numberFromFile(file) {
  const match = path.basename(file).match(/(\d+)\.md$/);
  return match ? Number(match[1]) : 0;
}

export function newestTimestamp(...values) {
  return values.filter(Boolean).sort((a, b) => Date.parse(b) - Date.parse(a))[0] ?? "";
}
