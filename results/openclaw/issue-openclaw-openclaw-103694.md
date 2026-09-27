---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-103694"
mode: "autonomous"
run_id: "36295175407"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36295175407"
head_sha: "ccf606d924429a0a57b3d1e743d249f5002b9412"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-27T05:14:06.159Z"
canonical: "https://github.com/openclaw/openclaw/issues/103694"
canonical_issue: "https://github.com/openclaw/openclaw/issues/103694"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-103694

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36295175407](https://github.com/openclaw/clawsweeper/actions/runs/36295175407)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/103694

## Summary

Current main still passes non-draft MCP schemas directly to the SDK validator, matching the reported warning path. The required failing regression could not run: this read-only checkout has no node_modules, and the focused test and changed-check commands stop before loading code. No files or GitHub state were changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impacting surface; extension typecheck included [check:changed] package.json: root config/package surface [check:changed] pnpm-lock.yaml: root config/package surface [check:changed] src/agents/mcp-json-schema-validator.ts: core production [check:changed] src/agents/mcp-tool-metadata.test.ts: core test [check:changed] mobile protocol event coverage [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] line-cap growth ratchet $ node --import ./scripts/tsx.mjs scripts/check-line-cap-ratchet.mts --base origin/main [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] extension test core imports $ node --import ./scripts/tsx.mjs scripts/check-no-extension-test-core-imports.ts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- package.json pnpm-lock.yaml src/agents/mcp-json-schema-validator.ts src/agents/mcp-tool-metadata.test.ts [check:changed] npm package-lock guard (102 packages) Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund npm error code ENOTCACHED npm error request to https://registry.npmjs.org/@agentclientprotocol%2fsdk failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_12_34_742Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund npm error code ENOTCACHED npm error request to https://registry.npmjs.org/@agentclientprotocol%2fclaude-agent-acp failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_12_34_711Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund npm error code ENOTCACHED npm error request to https://registry.npmjs.org/@aws-sdk%2fclient-bedrock failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_12_34_695Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund npm error code ENOTCACHED npm error request to https://registry.npmjs.org/@anthropic-ai%2fsdk failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_12_34_681Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund npm error code ENOTCACHED npm error request to https://registry.npmjs.org/@anthropic-ai%2fvertex-sdk failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_12_35_550Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund --legacy-peer-deps npm error code ENOTCACHED npm error request to https://registry.npmjs.org/nostr-tools failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_12_36_460Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund --legacy-peer-deps npm error code ENOTCACHED npm error request to https://registry.npmjs.org/ws failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_12_37_431Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund npm error code ENOTCACHED npm error request to https://registry.npmjs.org/@openai%2fcodex failed: cache mode is 'only-if-cached' ... ry.npmjs.org/typebox failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_12_58_914Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund --legacy-peer-deps npm error code ENOTCACHED npm error request to https://registry.npmjs.org/typebox failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_12_59_044Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund --legacy-peer-deps npm error code ENOTCACHED npm error request to https://registry.npmjs.org/audio-decode failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_13_00_153Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund --legacy-peer-deps npm error code ENOTCACHED npm error request to https://registry.npmjs.org/zod failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_13_01_186Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund --legacy-peer-deps npm error code ENOTCACHED npm error request to https://registry.npmjs.org/typebox failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_13_01_491Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund --legacy-peer-deps npm error code ENOTCACHED npm error request to https://registry.npmjs.org/typebox failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_13_02_049Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund npm error code ENOTCACHED npm error request to https://registry.npmjs.org/@anthropic-ai%2fsdk failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_13_02_393Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund npm error code ENOTCACHED npm error request to https://registry.npmjs.org/ipaddr.js failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_13_02_336Z-debug-0.log Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund npm error code ENOTCACHED npm error request to https://registry.npmjs.org/typebox failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-Muqgi8/home/.npm/_logs/2026-09-27T05_13_02_525Z-debug-0.log [check:changed] summary 531ms ok mobile protocol event coverage 275ms ok conflict markers 411ms ok line-cap growth ratchet 5.77s ok max-lines suppression ratchet 23.45s ok assertion SAFETY comment ratchet 181ms ok changelog attributions 152ms ok doctor deprecation registry 168ms ok guarded extension wildcard re-exports 154ms ok plugin-sdk wildcard re-exports 603ms ok extension test core imports 242ms ok duplicate scan target coverage 191ms ok dependency pin guard 77ms ok format changed files 28.87s failed:1 npm package-lock guard (102 packages) [check:changed] FAILED (exit 1) [ELIFECYCLE] Command failed with exit code 1. Protocol event coverage OK: 64 gateway events; ios handles 27, allowlists 37; android handles 25, allowlists 39. Line-cap ratchet OK: 2 changed source files; no new violations or over-cap growth. max-lines ratchet OK: 746 grandfathered suppressions. OPENCLAW_* count 486/486 assertion SAFETY ratchet OK: 3441 files, 9232 grandfathered assertions. [doctor-deprecation-registry] OK as of 2026-09-27 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. OK: extension test files, support helpers, and plugin test helpers avoid direct core test/internal imports (4551 extension files, 0 plugin helpers checked). [dup:check] target coverage ok PASS direct dependency pin guard: checked 712 directly declared dependency specs across 193 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 3ms on 2 files using 4 threads. Validating 102 npm package locks with 4 jobs. |
| issue_implementation_status_comment | updated | #103694 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #103694 | fix_needed | planned | canonical | The bug remains plausible, but the job requires a failing catalog-path regression before implementation. |
| #103699 | keep_closed | skipped | superseded | Historical proposal only; retain @jincheng-xydt's contribution credit in the new fix path. |
| cluster:issue-openclaw-openclaw-103694 | build_fix_artifact | blocked |  | Run the required pre-fix regression in a writable checkout with installed dependencies before editing or opening a PR. |

## Needs Human

- none
