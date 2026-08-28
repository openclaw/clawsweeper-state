---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-131850"
mode: "autonomous"
run_id: "33186610612"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33186610612"
head_sha: "f72ea010c1d7fd134b1bd0826b3a707778c312bc"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-28T19:21:51.683Z"
canonical: "https://github.com/openclaw/openclaw/issues/131850"
canonical_issue: "https://github.com/openclaw/openclaw/issues/131850"
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

# issue-openclaw-openclaw-131850

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33186610612](https://github.com/openclaw/clawsweeper/actions/runs/33186610612)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/131850

## Summary

#131850 is a current-main, narrow heartbeat-policy bug. The planned repair admits only the restart-sentinel immediate/session-targeted/wake shape and adds scheduler-boundary regression coverage. This read-only worker could not modify or validate a branch: pnpm failed before test startup when Corepack attempted to create its cache on the read-only filesystem; required sibling ../codex source is also absent and cannot be cloned here.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/infra/heartbeat-runner.targeted-unscheduled-wake.test.ts: core test [check:changed] src/infra/heartbeat-wake-policy.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- src/infra/heartbeat-runner.targeted-unscheduled-wake.test.ts src/infra/heartbeat-wake-policy.ts [check:changed] deprecated API usage $ node --import ./scripts/tsx.mjs scripts/check-deprecated-api-usage.mts [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] wrapper shadowing $ node --import ./scripts/tsx.mjs scripts/check-wrapper-shadowing.mts [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. [ERR_PNPM_NO_OFFLINE_META] Failed to resolve knip@6.32.2 in package mirror /tmp/clawsweeper-target-user-wAOrlc/cache/pnpm/v11/metadata-full-filtered/registry.npmjs.org/knip.jsonl [check:changed] summary 351ms ok conflict markers 15.03s ok max-lines suppression ratchet 6.89s ok assertion SAFETY comment ratchet 337ms ok changelog attributions 338ms ok doctor deprecation registry 342ms ok guarded extension wildcard re-exports 333ms ok plugin-sdk wildcard re-exports 400ms ok duplicate scan target coverage 9.98s ok coercion helper declaration guard 389ms ok dependency pin guard 320ms ok format changed files 5.72s ok deprecated API usage 990ms ok plugin boundaries 3.90s ok wrapper shadowing 638ms ok package patch guard 396ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) max-lines ratchet OK: 887 grandfathered suppressions. OPENCLAW_* count 500/500 assertion SAFETY ratchet OK: 4199 files, 13042 grandfathered assertions. [doctor-deprecation-registry] OK as of 2026-08-28 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok Coercion helper declaration guard passed (107 allowlisted declarations). PASS direct dependency pin guard: checked 632 directly declared dependency specs across 179 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 18ms on 2 files using 4 threads. deprecated API usage guard passed Plugin Boundary Report compat deprecated=23 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=44 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=23 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/memory-get-corpus.test.ts,extensions/memory-core/src/public-artifacts.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=58 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=339 supportedBundledFacade=2 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=12 wrapper shadowing guard passed. PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #131850 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #131850 | fix_needed | planned | canonical | Current main matches the preflight SHA and has the reported source-proven omission. No configuration, schema, provider, or security-boundary change is required. |
| #131855 | keep_related | planned | related | Keep open as the explicitly excluded downstream restart-wake context-loss follow-up. |
| cluster:issue-openclaw-openclaw-131850 | build_fix_artifact | planned | canonical | Executor should implement and validate the narrow artifact on the designated branch, then open the one credited fix PR. |

## Needs Human

- none
