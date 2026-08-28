---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-131490"
mode: "autonomous"
run_id: "33140333422"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33140333422"
head_sha: "9bad4750e84b4666c0b5e616d0f8c7f191744496"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-28T05:11:32.419Z"
canonical: "https://github.com/openclaw/openclaw/issues/131490"
canonical_issue: "https://github.com/openclaw/openclaw/issues/131490"
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

# issue-openclaw-openclaw-131490

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33140333422](https://github.com/openclaw/clawsweeper/actions/runs/33140333422)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/131490

## Summary

#131490 remains a valid, narrow cron bug on main a2c186ac. Terminal one-shot error and disabled-heartbeat retry exhaustion bypass the canonical auto-disable owner, so no durable autoDisabled record or post-persist recovery notification is created. Local implementation and validation are blocked by the read-only worker filesystem.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cron/service/timer-outcomes.ts: core production [check:changed] src/cron/service/timer.batch-finalization.test.ts: core test [check:changed] src/cron/service/timer.regression.test.ts: core test [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- src/cron/service/timer-outcomes.ts src/cron/service/timer.batch-finalization.test.ts src/cron/service/timer.regression.test.ts [check:changed] deprecated API usage $ node --import ./scripts/tsx.mjs scripts/check-deprecated-api-usage.mts [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] wrapper shadowing $ node --import ./scripts/tsx.mjs scripts/check-wrapper-shadowing.mts [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. [ERR_PNPM_NO_OFFLINE_META] Failed to resolve knip@6.32.2 in package mirror /tmp/clawsweeper-target-user-veTR47/cache/pnpm/v11/metadata-full-filtered/registry.npmjs.org/knip.jsonl [check:changed] summary 333ms ok conflict markers 14.49s ok max-lines suppression ratchet 6.58s ok assertion SAFETY comment ratchet 323ms ok changelog attributions 309ms ok doctor deprecation registry 344ms ok guarded extension wildcard re-exports 342ms ok plugin-sdk wildcard re-exports 405ms ok duplicate scan target coverage 9.54s ok coercion helper declaration guard 353ms ok dependency pin guard 328ms ok format changed files 5.55s ok deprecated API usage 967ms ok plugin boundaries 3.94s ok wrapper shadowing 555ms ok package patch guard 356ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) max-lines ratchet OK: 889 grandfathered suppressions. OPENCLAW_* count 501/501 assertion SAFETY ratchet OK: 4211 files, 13110 grandfathered assertions. [doctor-deprecation-registry] OK as of 2026-08-28 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok Coercion helper declaration guard passed (106 allowlisted declarations). PASS direct dependency pin guard: checked 635 directly declared dependency specs across 180 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 26ms on 3 files using 4 threads. deprecated API usage guard passed Plugin Boundary Report compat deprecated=23 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=44 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=23 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/memory-get-corpus.test.ts,extensions/memory-core/src/public-artifacts.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=58 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=339 supportedBundledFacade=2 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=11 wrapper shadowing guard passed. PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #131490 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #131490 | fix_needed | blocked | canonical | Implementation is blocked only in this read-only checkout; the executor should apply the attached narrow new-PR artifact. |
| cluster:issue-openclaw-openclaw-131490 | build_fix_artifact | planned | canonical | Create one narrow credited ClawSweeper fix PR; no config, schema, classifier, or cron-list filtering change is required. |

## Needs Human

- none
