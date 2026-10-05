---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-165786"
mode: "autonomous"
run_id: "37375592898"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37375592898"
head_sha: "7b767cc6bf7ed7176a94b1e8732b478ea49012d2"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-05T21:52:09.407Z"
canonical: "https://github.com/openclaw/openclaw/issues/165786"
canonical_issue: "https://github.com/openclaw/openclaw/issues/165786"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-165786

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37375592898](https://github.com/openclaw/clawsweeper/actions/runs/37375592898)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/165786

## Summary

Confirmed the allocation-key collision in source on preflight main 0e54386a46344884e0317c21b81d21b29ccdb615. Prepared a narrow executor fix plan. Implementation and required Gateway regression proof are blocked by the read-only workspace; no code or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impacting surface; extension typecheck included [check:changed] extensions/crabbox/api.ts: extension production [check:changed] extensions/crabbox/index.ts: extension production [check:changed] extensions/crabbox/src/crabbox-tool.test.ts: extension test [check:changed] extensions/crabbox/src/crabbox-tool.ts: extension production [check:changed] package.json: root config/package surface [check:changed] scripts/lib/plugin-sdk-entrypoints.json: public core/plugin contract affects extensions [check:changed] src/gateway/worker-environments/session-attachment-service.test.ts: core test [check:changed] src/plugin-sdk/tool-execution-context.ts: public core/plugin contract affects extensions [check:changed] mobile protocol event coverage [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] line-cap growth ratchet $ node --import ./scripts/tsx.mjs scripts/check-line-cap-ratchet.mts --base origin/main [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] SQLite worker ratchet $ node --import ./scripts/tsx.mjs scripts/check-database-worker-ratchet.mts --base origin/main [check:changed] test timeout race ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-timeout-race-ratchet.mts --base origin/main [check:changed] first-party mock export ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-mock-exports.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] extension test core imports $ node --import ./scripts/tsx.mjs scripts/check-no-extension-test-core-imports.ts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- docs/plugins/sdk-entrypoints.md extensions/crabbox/api.ts extensions/crabbox/index.ts extensions/crabbox/src/crabbox-tool.test.ts extensions/crabbox/src/crabbox-tool.ts package.json scripts/lib/plugin-sdk-entrypoints.json src/gateway/worker-environments/session-attachment-service.test.ts src/plugin-sdk/tool-execution-context.ts [check:changed] npm package-lock guard Command failed: /opt/hostedtoolcache/node/24.21.0/x64/bin/node /opt/hostedtoolcache/node/24.21.0/x64/lib/node_modules/npm/bin/npm-cli.js install --package-lock-only --ignore-scripts --no-audit --no-fund npm error code ENOTCACHED npm error request to https://registry.npmjs.org/@agentclientprotocol%2fsdk failed: cache mode is 'only-if-cached' but no cached response is available. npm error A complete log of this run can be found in: /tmp/clawsweeper-target-user-t6G56y/home/.npm/_logs/2026-10-05T21_50_47_787Z-debug-0.log [check:changed] summary 421ms ok mobile protocol event coverage 219ms ok conflict markers 329ms ok line-cap growth ratchet 5.17s ok max-lines suppression ratchet 11.06s ok assertion SAFETY comment ratchet 2.22s ok SQLite worker ratchet 853ms ok test timeout race ratchet 10.79s ok first-party mock export ratchet 187ms ok changelog attributions 188ms ok doctor deprecation registry 222ms ok guarded extension wildcard re-exports 191ms ok plugin-sdk wildcard re-exports 570ms ok extension test core imports 315ms ok duplicate scan target coverage 281ms ok dependency pin guard 252ms ok format changed files 770ms failed:1 npm package-lock guard [check:changed] FAILED (exit 1) [ELIFECYCLE] Command failed with exit code 1. Protocol event coverage OK: 65 gateway events; ios handles 28, allowlists 37; android handles 26, allowlists 39. Line-cap ratchet OK: 6 changed source files; no new violations or over-cap growth. max-lines ratchet OK: 618 grandfathered suppressions. OPENCLAW_* count 464/464 assertion SAFETY ratchet OK: 2962 files, 7236 grandfathered assertions. SQLite worker ratchet OK: no T1 call-count growth against 0e54386a46344884e0317c21b81d21b29ccdb615. test timeout race ratchet OK: 132 files, 319 grandfathered sites. Mock factory ratchet OK: 10622 grandfathered factories. [doctor-deprecation-registry] OK as of 2026-10-05 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. OK: extension test files, support helpers, and plugin test helpers avoid direct core test/internal imports (4556 extension files, 0 plugin helpers checked). [dup:check] target coverage ok PASS direct dependency pin guard: checked 716 directly declared dependency specs across 198 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 161ms on 7 files using 4 threads. Validating 1 npm package lock with 1 job. |
| issue_implementation_status_comment | updated | #165786 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #165786 | fix_needed | planned | canonical | Distinct Crabbox key-producer defect remains source-confirmed. Reproduce through createCrabboxTool and the real attachment owner before changing production code. |
| #165210 | keep_closed | skipped | related | Historical context only. |
| #165212 | keep_closed | skipped | related | Historical context and existing identity-owner precedent. |
| #165297 | keep_closed | skipped | related | Historical context only; its prior checks are not validation for this proposed fix. |
| cluster:issue-openclaw-openclaw-165786 | build_fix_artifact | planned | canonical | A narrow bug-only fix remains appropriate for a writable executor, conditional on the required failing regression. |
| cluster:issue-openclaw-openclaw-165786 | open_fix_pr | blocked | canonical | Executor must implement and validate the artifact in a writable isolated checkout before opening or updating the single authorized PR. |

## Needs Human

- none
