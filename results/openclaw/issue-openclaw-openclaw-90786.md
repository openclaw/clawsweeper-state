---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-90786"
mode: "autonomous"
run_id: "30669198364"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30669198364"
head_sha: "54b6b7c4f2336e9c06255e5c45be9d0d87a7d7d2"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-07-31T22:56:03.563Z"
canonical: "https://github.com/openclaw/openclaw/issues/90786"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90786"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-90786

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30669198364](https://github.com/openclaw/clawsweeper/actions/runs/30669198364)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/90786

## Summary

The current checkout still reproduces the source-level resolver gap: memory lookup only checks exact/configured IDs, while the Google adapter declares id "gemini" and authProviderId "google". A narrow two-file repair remains appropriate, but this worker's checkout is read-only, has no node_modules, and does not contain the preflight main SHA 4278760caf8996a1ae08e4a5adf68d599ea3f66c, so it cannot safely create or validate the branch patch.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/plugins/memory-embedding-provider-runtime.test.ts: core test [check:changed] src/plugins/memory-embedding-provider-runtime.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] environment variable count ratchet $ node scripts/check-env-var-count.mjs --base origin/main [check:changed] max-lines suppression ratchet $ node scripts/check-max-lines-ratchet.mjs --base origin/main [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- src/plugins/memory-embedding-provider-runtime.test.ts src/plugins/memory-embedding-provider-runtime.ts [check:changed] Plugin SDK API contract manifest $ node --max-old-space-size=8192 --import tsx scripts/generate-plugin-sdk-api-baseline.ts --check [check:changed] deprecated API usage $ node scripts/check-deprecated-api-usage.mjs [check:changed] plugin boundaries $ node --import tsx scripts/plugin-boundary-report.ts --summary --fail-on-cross-owner --fail-on-unclassified-unused-reserved --fail-on-eligible-compat [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [deadcode] Knip production unused-export scan still running after 60s. [deadcode] Knip full-tree unused-export scan still running after 60s. [deadcode] Knip script unused-export scan still running after 60s. deadcode production unused-export scan produced no export sections. [WARN] GET https://registry.npmjs.org/knip error (EAI_AGAIN). Will retry in 10 seconds. 2 retries left. [WARN] GET https://registry.npmjs.org/knip error (EAI_AGAIN). Will retry in 1 minute. 1 retries left. [ERR_PNPM_META_FETCH_FAIL] GET https://registry.npmjs.org/knip: fetch failed [check:changed] summary 377ms ok conflict markers 426ms ok environment variable count ratchet 14.48s ok max-lines suppression ratchet 275ms ok changelog attributions 276ms ok guarded extension wildcard re-exports 266ms ok plugin-sdk wildcard re-exports 298ms ok duplicate scan target coverage 285ms ok dependency pin guard 327ms ok format changed files 8.45s ok Plugin SDK API contract manifest 5.69s ok deprecated API usage 1.00s ok plugin boundaries 495ms ok package patch guard 70.29s failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) OPENCLAW_* count 517/517 [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) max-lines ratchet OK: 1023 grandfathered suppressions. [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) No guarded extension wildcard re-exports found. [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) No plugin-sdk wildcard re-exports found in extension API barrels. [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) [dup:check] target coverage ok [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) PASS direct dependency pin guard: checked 610 directly declared dependency specs across 179 tracked package manifests; 0 violations. [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) Checking formatting... All matched files use the correct format. Finished in 12ms on 2 files using 4 threads. [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) OK docs/.generated/plugin-sdk-api-baseline.sha256 [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) deprecated API usage guard passed [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) Plugin Boundary Report compat deprecated=39 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=28 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=21 readers=extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/public-artifacts.ts,extensions/memory-core/src/session-search-visibility.ts,extensions/memory-core/src/tools.citations.test.ts,extensions/memory-core/src/tools.test.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=57 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=321 reserved=0 reservedImports=0 crossOwnerReservedImports=0 unusedReserved=0 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=6 [WARN] Unsupported engine: wanted: {"node":">=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0"} (current: {"node":"v24.13.0","pnpm":"11.15.1"}) PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #90786 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90786 | keep_canonical | planned | canonical | #90786 remains the canonical narrow lookup regression. |
| #90787 | keep_related | planned | related | Related provider family, but it needs separate product and migration decisions. |
| #90801 | keep_related | planned | related | Related upgrade symptom family, but not covered by this narrow resolver repair. |
| #90786 | fix_needed | blocked | canonical | The bug is source-reproducible, but branch implementation and validation are blocked only by this worker environment. |
| cluster:issue-openclaw-openclaw-90786 | build_fix_artifact | planned |  | A writable executor can make and validate the narrow repair without config, migration, command-specific alias, or changelog changes. |

## Needs Human

- none
