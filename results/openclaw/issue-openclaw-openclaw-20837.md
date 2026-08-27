---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-20837"
mode: "autonomous"
run_id: "33023999125"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33023999125"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-27T00:35:38.810Z"
canonical: "https://github.com/openclaw/openclaw/issues/20837"
canonical_issue: "https://github.com/openclaw/openclaw/issues/20837"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-20837

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33023999125](https://github.com/openclaw/clawsweeper/actions/runs/33023999125)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/20837

## Summary

#20837 remains a reproducible command-prompt fidelity bug on main 02a60e0d. Plan a narrow new fix PR; no GitHub mutations were made.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/auto-reply/reply/commands-system-prompt.test.ts: core test [check:changed] src/auto-reply/reply/commands-system-prompt.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] max-lines suppression ratchet $ node --import tsx scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import tsx scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import tsx scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import tsx scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import tsx scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import tsx scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] coercion helper declaration guard $ node --import tsx scripts/check-coercion-helper-declarations.mts [check:changed] dependency pin guard $ node --import tsx scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- src/auto-reply/reply/commands-system-prompt.test.ts src/auto-reply/reply/commands-system-prompt.ts [check:changed] deprecated API usage $ node --import tsx scripts/check-deprecated-api-usage.mts [check:changed] plugin boundaries $ node --import tsx scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] wrapper shadowing $ node --import tsx scripts/check-wrapper-shadowing.mts [check:changed] package patch guard $ node --import tsx scripts/check-package-patches.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. [ERR_PNPM_NO_OFFLINE_META] Failed to resolve knip@6.32.2 in package mirror /tmp/clawsweeper-target-user-CS8qy5/cache/pnpm/v11/metadata-full-filtered/registry.npmjs.org/knip.jsonl [check:changed] summary 424ms ok conflict markers 23.15s ok max-lines suppression ratchet 8.95s ok assertion SAFETY comment ratchet 461ms ok changelog attributions 516ms ok doctor deprecation registry 666ms ok guarded extension wildcard re-exports 612ms ok plugin-sdk wildcard re-exports 607ms ok duplicate scan target coverage 13.22s ok coercion helper declaration guard 431ms ok dependency pin guard 445ms ok format changed files 6.18s ok deprecated API usage 1.11s ok plugin boundaries 5.53s ok wrapper shadowing 815ms ok package patch guard 622ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) max-lines ratchet OK: 891 grandfathered suppressions. OPENCLAW_* count 501/501 assertion SAFETY ratchet OK: 4240 files, 13248 grandfathered assertions. [doctor-deprecation-registry] OK as of 2026-08-27 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok Coercion helper declaration guard passed (106 allowlisted declarations). PASS direct dependency pin guard: checked 630 directly declared dependency specs across 179 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 21ms on 2 files using 4 threads. deprecated API usage guard passed Plugin Boundary Report compat deprecated=23 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=44 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=23 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/memory-get-corpus.test.ts,extensions/memory-core/src/public-artifacts.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=58 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=338 supportedBundledFacade=2 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=10 wrapper shadowing guard passed. PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #20837 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #20837 | keep_canonical | planned | canonical | Open canonical issue; selective reply routing remains outside this bug-only repair. |
| #21271 | keep_closed | skipped | superseded | Already closed; do not mutate or use as the candidate fix. |
| cluster:issue-openclaw-openclaw-20837 | fix_needed | planned | canonical | A new narrow PR is needed; the former contributor PR is closed and uneditable. |
| cluster:issue-openclaw-openclaw-20837 | build_fix_artifact | planned | canonical | Open/update clawsweeper/issue-openclaw-openclaw-20837 with the artifact below. |

## Needs Human

- none
