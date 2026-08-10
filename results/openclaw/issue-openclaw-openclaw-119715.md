---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119715"
mode: "autonomous"
run_id: "31394165338"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31394165338"
head_sha: "0559e03857fa9a9a6de28c984ed495287ec3b9cc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-10T14:45:07.669Z"
canonical: "https://github.com/openclaw/openclaw/issues/119715"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119715"
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

# issue-openclaw-openclaw-119715

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31394165338](https://github.com/openclaw/clawsweeper/actions/runs/31394165338)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119715

## Summary

Confirmed on current main: terminal timeout finalization retains the earlier generic error payload and appends detailed timeout guidance, yielding two final errors. Planned a narrow new fix PR; no GitHub mutation or checkout edit was performed.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/embedded-agent-runner/run.terminal-timeout.test.ts: core test [check:changed] src/agents/embedded-agent-runner/run/terminal-timeout.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] environment variable count ratchet $ node --import tsx scripts/check-env-var-count.mts --base origin/main [check:changed] max-lines suppression ratchet $ node --import tsx scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import tsx scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import tsx scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import tsx scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import tsx scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node --import tsx scripts/check-duplicates.mts --coverage [check:changed] dependency pin guard $ node --import tsx scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- src/agents/embedded-agent-runner/run.terminal-timeout.test.ts src/agents/embedded-agent-runner/run/terminal-timeout.ts [check:changed] Plugin SDK API contract manifest $ node --max-old-space-size=8192 --import tsx scripts/generate-plugin-sdk-api-baseline.ts --check [check:changed] deprecated API usage $ node --import tsx scripts/check-deprecated-api-usage.mts [check:changed] plugin boundaries $ node --import tsx scripts/plugin-boundary-report.ts --summary --fail-on-cross-owner --fail-on-unclassified-unused-reserved --fail-on-eligible-compat [check:changed] wrapper shadowing $ node --import tsx scripts/check-wrapper-shadowing.mts [check:changed] package patch guard $ node --import tsx scripts/check-package-patches.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. [ERR_PNPM_NO_OFFLINE_META] Failed to resolve knip@6.8.0 in package mirror /tmp/clawsweeper-target-user-85AUTX/cache/pnpm/v11/metadata-full-filtered/registry.npmjs.org/knip.jsonl [check:changed] summary 469ms ok conflict markers 617ms ok environment variable count ratchet 19.93s ok max-lines suppression ratchet 387ms ok changelog attributions 372ms ok doctor deprecation registry 420ms ok guarded extension wildcard re-exports 396ms ok plugin-sdk wildcard re-exports 399ms ok duplicate scan target coverage 409ms ok dependency pin guard 347ms ok format changed files 35.38s ok Plugin SDK API contract manifest 5.86s ok deprecated API usage 1.11s ok plugin boundaries 3.99s ok wrapper shadowing 610ms ok package patch guard 433ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) OPENCLAW_* count 507/507 max-lines ratchet OK: 970 grandfathered suppressions. [doctor-deprecation-registry] OK as of 2026-08-10 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok PASS direct dependency pin guard: checked 624 directly declared dependency specs across 179 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 15ms on 2 files using 4 threads. OK docs/.generated/plugin-sdk-api-baseline.jsonl deprecated API usage guard passed Plugin Boundary Report compat deprecated=39 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=40 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=20 readers=extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/public-artifacts.ts,extensions/memory-core/src/session-search-visibility.ts,extensions/memory-core/src/tools.citations.test.ts,extensions/memory-core/src/tools.test.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=55 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=336 reserved=0 reservedImports=0 crossOwnerReservedImports=0 unusedReserved=0 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=9 wrapper shadowing guard passed (76 current, 77 baselined). PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #119715 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119715 | fix_needed | planned | canonical | The canonical owner is terminal-timeout finalization. Filter prior isError payloads there, retain non-error media, then append exactly one actionable timeout error. |
| #119716 | keep_closed | skipped | superseded | Historical source only; do not reopen, modify, or close an already-closed PR. |
| cluster:issue-openclaw-openclaw-119715 | build_fix_artifact | planned | canonical | A two-file owner-boundary repair is appropriate and no viable open contributor PR exists. |

## Needs Human

- none
