---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-115037"
mode: "autonomous"
run_id: "30695474227"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30695474227"
head_sha: "1c9cb5dc6dd27321cd37daed40bc09afde400e1b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-01T11:07:03.408Z"
canonical: "https://github.com/openclaw/openclaw/issues/115037"
canonical_issue: "https://github.com/openclaw/openclaw/issues/115037"
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

# issue-openclaw-openclaw-115037

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30695474227](https://github.com/openclaw/clawsweeper/actions/runs/30695474227)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/115037

## Summary

#115037 remains a real, narrow Claude CLI live-session recovery bug on main aa2a5c96f69a1be639c602649d4aa2e4de8da0a8. After the exact resumed synthetic placeholder and its bounded continuation grace expire, the live-session owner currently resolves an empty output. The generic CLI runner then throws an unmarked empty_response, bypassing its existing same-model fresh-session recovery gate and allowing the outer model-fallback loop to select a configured fallback model. The narrow repair is to make that specific terminal lifecycle outcome reject as the already-supported retryable empty-response code, so the runner clears the stale binding and retries once on the originally selected model with a fresh CLI process.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/cli-runner/claude-live-session.background-tasks.test.ts: core test [check:changed] src/agents/cli-runner/claude-live-session.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] environment variable count ratchet $ node scripts/check-env-var-count.mjs --base origin/main [check:changed] max-lines suppression ratchet $ node scripts/check-max-lines-ratchet.mjs --base origin/main [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- src/agents/cli-runner/claude-live-session.background-tasks.test.ts src/agents/cli-runner/claude-live-session.ts [check:changed] Plugin SDK API contract manifest $ node --max-old-space-size=8192 --import tsx scripts/generate-plugin-sdk-api-baseline.ts --check [check:changed] deprecated API usage $ node scripts/check-deprecated-api-usage.mjs [check:changed] plugin boundaries $ node --import tsx scripts/plugin-boundary-report.ts --summary --fail-on-cross-owner --fail-on-unclassified-unused-reserved --fail-on-eligible-compat [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [deadcode] Knip production unused-export scan still running after 60s. [deadcode] Knip full-tree unused-export scan still running after 60s. [deadcode] Knip script unused-export scan still running after 60s. deadcode production unused-export scan produced no export sections. [WARN] GET https://registry.npmjs.org/knip error (EAI_AGAIN). Will retry in 10 seconds. 2 retries left. [WARN] GET https://registry.npmjs.org/knip error (EAI_AGAIN). Will retry in 1 minute. 1 retries left. [ERR_PNPM_META_FETCH_FAIL] GET https://registry.npmjs.org/knip: fetch failed [check:changed] summary 322ms ok conflict markers 354ms ok environment variable count ratchet 13.55s ok max-lines suppression ratchet 247ms ok changelog attributions 259ms ok guarded extension wildcard re-exports 244ms ok plugin-sdk wildcard re-exports 261ms ok duplicate scan target coverage 254ms ok dependency pin guard 305ms ok format changed files 7.17s ok Plugin SDK API contract manifest 5.39s ok deprecated API usage 907ms ok plugin boundaries 445ms ok package patch guard 70.31s failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) OPENCLAW_* count 515/515 max-lines ratchet OK: 1015 grandfathered suppressions. No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok PASS direct dependency pin guard: checked 612 directly declared dependency specs across 179 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 23ms on 2 files using 4 threads. OK docs/.generated/plugin-sdk-api-baseline.sha256 deprecated API usage guard passed Plugin Boundary Report compat deprecated=39 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=28 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=21 readers=extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/public-artifacts.ts,extensions/memory-core/src/session-search-visibility.ts,extensions/memory-core/src/tools.citations.test.ts,extensions/memory-core/src/tools.test.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=57 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=321 reserved=0 reservedImports=0 crossOwnerReservedImports=0 unusedReserved=0 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=6 PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #115037 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90789 | keep_related | planned | related | Related synthetic-placeholder family, but no duplicate closure or shared implementation scope. |
| #90799 | keep_closed | skipped | related | Closed merged context only; it is not a candidate fix for the remaining terminal-placeholder downgrade. |
| #99131 | keep_closed | skipped | fixed_by_candidate | Already closed by the merged continuation repair; no mutation is valid. |
| #99139 | keep_closed | skipped | superseded | Already closed superseded context; no mutation is valid. |
| #115037 | fix_needed | planned | canonical | A narrow owner-boundary repair is available; create or update the single ClawSweeper implementation PR for this issue. |
| cluster:issue-openclaw-openclaw-115037 | build_fix_artifact | planned |  | Open a narrow new fix PR from clawsweeper/issue-openclaw-openclaw-115037 after applying the artifact. |

## Needs Human

- none
