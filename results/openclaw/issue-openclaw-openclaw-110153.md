---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-110153"
mode: "autonomous"
run_id: "31369391922"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31369391922"
head_sha: "2cc2c0df8d533677c5ff82cf3b86a148dd869554"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-10T09:14:57.726Z"
canonical: "https://github.com/openclaw/openclaw/issues/110153"
canonical_issue: "https://github.com/openclaw/openclaw/issues/110153"
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

# issue-openclaw-openclaw-110153

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31369391922](https://github.com/openclaw/clawsweeper/actions/runs/31369391922)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/110153

## Summary

Confirmed on current main (4b015168): final reply payloads only recognize failed/failure/errored acknowledgement wording, so a reply saying a mutating API action was rejected receives a duplicate warning. A narrow two-file fix is planned, but this checkout is read-only and lacks tsx/node_modules, so no local edit or validation could be completed.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/agents/embedded-agent-runner/run/payloads.test.ts: core test [check:changed] src/agents/embedded-agent-runner/run/tool-failure-acknowledgement.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] environment variable count ratchet $ node --import tsx scripts/check-env-var-count.mts --base origin/main [check:changed] max-lines suppression ratchet $ node --import tsx scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import tsx scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import tsx scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import tsx scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import tsx scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node --import tsx scripts/check-duplicates.mts --coverage [check:changed] dependency pin guard $ node --import tsx scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- docs/.generated/plugin-sdk-api-baseline.sha256 src/agents/embedded-agent-runner/run/payloads.test.ts src/agents/embedded-agent-runner/run/tool-failure-acknowledgement.ts [check:changed] Plugin SDK API contract manifest $ node --max-old-space-size=8192 --import tsx scripts/generate-plugin-sdk-api-baseline.ts --check [check:changed] deprecated API usage $ node --import tsx scripts/check-deprecated-api-usage.mts [check:changed] plugin boundaries $ node --import tsx scripts/plugin-boundary-report.ts --summary --fail-on-cross-owner --fail-on-unclassified-unused-reserved --fail-on-eligible-compat [check:changed] package patch guard $ node --import tsx scripts/check-package-patches.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. [ERR_PNPM_NO_OFFLINE_META] Failed to resolve knip@6.8.0 in package mirror /tmp/clawsweeper-target-user-9KgyRz/cache/pnpm/v11/metadata-full-filtered/registry.npmjs.org/knip.jsonl [check:changed] summary 328ms ok conflict markers 424ms ok environment variable count ratchet 15.10s ok max-lines suppression ratchet 315ms ok changelog attributions 301ms ok doctor deprecation registry 300ms ok guarded extension wildcard re-exports 294ms ok plugin-sdk wildcard re-exports 331ms ok duplicate scan target coverage 335ms ok dependency pin guard 313ms ok format changed files 30.30s ok Plugin SDK API contract manifest 5.08s ok deprecated API usage 1.03s ok plugin boundaries 540ms ok package patch guard 391ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) OPENCLAW_* count 507/507 max-lines ratchet OK: 972 grandfathered suppressions. [doctor-deprecation-registry] OK as of 2026-08-10 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok PASS direct dependency pin guard: checked 624 directly declared dependency specs across 179 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 15ms on 2 files using 4 threads. OK docs/.generated/plugin-sdk-api-baseline.sha256 deprecated API usage guard passed Plugin Boundary Report compat deprecated=39 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=40 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=20 readers=extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/public-artifacts.ts,extensions/memory-core/src/session-search-visibility.ts,extensions/memory-core/src/tools.citations.test.ts,extensions/memory-core/src/tools.test.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=55 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=336 reserved=0 reservedImports=0 crossOwnerReservedImports=0 unusedReserved=0 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=9 PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #110153 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #110153 | fix_needed | blocked | canonical | Implementation is blocked only by the read-only checkout and missing dependencies; the repair scope and regression boundary are clear. |
| cluster:issue-openclaw-openclaw-110153 | build_fix_artifact | planned |  |  |
| #25592 | keep_independent | planned | independent | Different user-visible failure and owner path. |
| #93228 | keep_closed | skipped | related | Already merged and closed. |
| #111574 | keep_closed | skipped | superseded | Already closed and superseded. |
| #115737 | keep_closed | skipped | related | Already merged; partial historical fix only. |

## Needs Human

- none
