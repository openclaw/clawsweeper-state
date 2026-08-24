---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128858"
mode: "autonomous"
run_id: "32776039638"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32776039638"
head_sha: "ce250708c1ea10228f29fc5740cba95460dcdf74"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-24T22:03:07.341Z"
canonical: "https://github.com/openclaw/openclaw/issues/128858"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128858"
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

# issue-openclaw-openclaw-128858

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32776039638](https://github.com/openclaw/clawsweeper/actions/runs/32776039638)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/128858

## Summary

#128858 remains the canonical, source-reproducible doubled-full-width DSML recovery bug. A narrow fix requires synchronized parser and fallback-filter grammar plus regression coverage, but this worker cannot modify or validate the checkout: the mandatory ../codex source checkout is absent and cloning it failed on the read-only filesystem; dependencies and Corepack cache are also unavailable.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] packages/ai/src/transports/deepseek-text-filter.ts: core production [check:changed] packages/ai/src/transports/openai-completions-dsml.recovery.test.ts: core test [check:changed] packages/ai/src/transports/openai-completions-dsml.test.ts: core test [check:changed] packages/ai/src/transports/openai-completions-dsml.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] max-lines suppression ratchet $ node --import tsx scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import tsx scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import tsx scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import tsx scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import tsx scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import tsx scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] coercion helper declaration guard $ node --import tsx scripts/check-coercion-helper-declarations.mts [check:changed] dependency pin guard $ node --import tsx scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- packages/ai/src/transports/deepseek-text-filter.ts packages/ai/src/transports/openai-completions-dsml.recovery.test.ts packages/ai/src/transports/openai-completions-dsml.test.ts packages/ai/src/transports/openai-completions-dsml.ts [check:changed] deprecated API usage $ node --import tsx scripts/check-deprecated-api-usage.mts [check:changed] plugin boundaries $ node --import tsx scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] package patch guard $ node --import tsx scripts/check-package-patches.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. [ERR_PNPM_NO_OFFLINE_META] Failed to resolve knip@6.32.2 in package mirror /tmp/clawsweeper-target-user-mutjkB/cache/pnpm/v11/metadata-full-filtered/registry.npmjs.org/knip.jsonl [check:changed] summary 348ms ok conflict markers 14.66s ok max-lines suppression ratchet 7.06s ok assertion SAFETY comment ratchet 303ms ok changelog attributions 314ms ok doctor deprecation registry 329ms ok guarded extension wildcard re-exports 308ms ok plugin-sdk wildcard re-exports 348ms ok duplicate scan target coverage 9.35s ok coercion helper declaration guard 342ms ok dependency pin guard 303ms ok format changed files 5.30s ok deprecated API usage 888ms ok plugin boundaries 520ms ok package patch guard 341ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) max-lines ratchet OK: 897 grandfathered suppressions. OPENCLAW_* count 501/501 assertion SAFETY ratchet OK: 4272 files, 13427 grandfathered assertions. [doctor-deprecation-registry] OK as of 2026-08-24 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok Coercion helper declaration guard passed (106 allowlisted declarations). PASS direct dependency pin guard: checked 622 directly declared dependency specs across 177 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 18ms on 4 files using 4 threads. deprecated API usage guard passed Plugin Boundary Report compat deprecated=23 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=44 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=23 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/memory-get-corpus.test.ts,extensions/memory-core/src/public-artifacts.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=57 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=336 supportedBundledFacade=2 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=10 PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #128858 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #85918 | keep_closed | skipped |  | Already closed in live preflight state. |
| #104868 | keep_independent | planned | independent | Different provider grammar and trust-boundary decision; no dedupe or implementation action belongs in this cluster. |
| #114888 | keep_related | planned | related | Overlapping symptom, but distinct malformed-wrapper and argument-normalization work. |
| #128858 | fix_needed | blocked | canonical | Implementation and local regression validation require a writable checkout with the mandatory Codex sibling source and installed dependencies. |
| cluster:issue-openclaw-openclaw-128858 | build_fix_artifact | planned | canonical | A writable executor can implement and validate the narrow repair. |

## Needs Human

- none
