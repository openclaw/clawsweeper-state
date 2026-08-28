---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-131374"
mode: "autonomous"
run_id: "33133608883"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33133608883"
head_sha: "78540e0458bfcf452635b259b728516d59347343"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-28T02:57:04.016Z"
canonical: "https://github.com/openclaw/openclaw/issues/131374"
canonical_issue: "https://github.com/openclaw/openclaw/issues/131374"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-131374

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33133608883](https://github.com/openclaw/clawsweeper/actions/runs/33133608883)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/131374

## Summary

#131374 remains a focused canonical bug: the outcome store inserts a row whose session_key has a declared FK to session_nodes, so a transient absent base throws after an otherwise successful silent heartbeat. Implementation and validation are blocked because this checkout is read-only and required sibling ../codex source is absent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/infra/heartbeat-outcome-store.test.ts: core test [check:changed] src/infra/heartbeat-outcome-store.ts: core production [check:changed] src/infra/heartbeat-runner.isolated-key-stability.test.ts: core test [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- src/infra/heartbeat-outcome-store.test.ts src/infra/heartbeat-outcome-store.ts src/infra/heartbeat-runner.isolated-key-stability.test.ts [check:changed] deprecated API usage $ node --import ./scripts/tsx.mjs scripts/check-deprecated-api-usage.mts [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] wrapper shadowing $ node --import ./scripts/tsx.mjs scripts/check-wrapper-shadowing.mts [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. [ERR_PNPM_NO_OFFLINE_META] Failed to resolve knip@6.32.2 in package mirror /tmp/clawsweeper-target-user-Y3tru7/cache/pnpm/v11/metadata-full-filtered/registry.npmjs.org/knip.jsonl [check:changed] summary 477ms ok conflict markers 19.62s ok max-lines suppression ratchet 8.20s ok assertion SAFETY comment ratchet 450ms ok changelog attributions 413ms ok doctor deprecation registry 495ms ok guarded extension wildcard re-exports 452ms ok plugin-sdk wildcard re-exports 515ms ok duplicate scan target coverage 11.39s ok coercion helper declaration guard 462ms ok dependency pin guard 401ms ok format changed files 6.10s ok deprecated API usage 1.03s ok plugin boundaries 4.29s ok wrapper shadowing 671ms ok package patch guard 424ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) max-lines ratchet OK: 889 grandfathered suppressions. OPENCLAW_* count 501/501 assertion SAFETY ratchet OK: 4213 files, 13136 grandfathered assertions. [doctor-deprecation-registry] OK as of 2026-08-28 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok Coercion helper declaration guard passed (106 allowlisted declarations). PASS direct dependency pin guard: checked 635 directly declared dependency specs across 180 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 14ms on 3 files using 4 threads. deprecated API usage guard passed Plugin Boundary Report compat deprecated=23 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=44 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=23 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/memory-get-corpus.test.ts,extensions/memory-core/src/public-artifacts.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=58 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=339 supportedBundledFacade=2 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=11 wrapper shadowing guard passed. PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #131374 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #131374 | fix_needed | blocked | canonical | A writable checkout with the required ../codex source is needed before changing code, proving the pre-fix regression, and running the requested validation. |
| cluster:issue-openclaw-openclaw-131374 | build_fix_artifact | planned | canonical | Narrow new-PR plan prepared; its execution is blocked only by the current read-only checkout and unavailable required Codex source. |

## Needs Human

- none
