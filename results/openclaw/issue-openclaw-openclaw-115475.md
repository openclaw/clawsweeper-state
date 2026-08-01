---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-115475"
mode: "autonomous"
run_id: "30683325957"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30683325957"
head_sha: "a80c24ebf2f19d74cd07645f8d377271c587586b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-01T05:15:49.230Z"
canonical: "https://github.com/openclaw/openclaw/issues/115475"
canonical_issue: "https://github.com/openclaw/openclaw/issues/115475"
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

# issue-openclaw-openclaw-115475

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30683325957](https://github.com/openclaw/clawsweeper/actions/runs/30683325957)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/115475

## Summary

Current main still sends a plain `openclaw gateway restart` through the direct service-manager path. Gateway-hosted exec inherits the Gateway service environment, so restarting from that child can terminate the command before it reports success. Plan a narrow CLI-owner repair: automatically use the existing safe Gateway RPC only for an unqualified restart launched from the Gateway service environment; preserve explicit `--force` and `--wait` behavior.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, tooling [check:changed] config/env-var-count-budget.txt: tooling surface [check:changed] src/cli/daemon-cli/lifecycle.test.ts: core test [check:changed] src/cli/daemon-cli/lifecycle.ts: core production [check:changed] src/daemon/service-env-merge.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] environment variable count ratchet $ node scripts/check-env-var-count.mjs --base origin/main [check:changed] max-lines suppression ratchet $ node scripts/check-max-lines-ratchet.mjs --base origin/main [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- config/env-var-count-budget.txt src/cli/daemon-cli/lifecycle.test.ts src/cli/daemon-cli/lifecycle.ts src/daemon/service-env-merge.ts [check:changed] Plugin SDK API contract manifest $ node --max-old-space-size=8192 --import tsx scripts/generate-plugin-sdk-api-baseline.ts --check [check:changed] deprecated API usage $ node scripts/check-deprecated-api-usage.mjs [check:changed] plugin boundaries $ node --import tsx scripts/plugin-boundary-report.ts --summary --fail-on-cross-owner --fail-on-unclassified-unused-reserved --fail-on-eligible-compat [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [deadcode] Knip production unused-export scan still running after 60s. [deadcode] Knip full-tree unused-export scan still running after 60s. [deadcode] Knip script unused-export scan still running after 60s. deadcode production unused-export scan produced no export sections. [WARN] GET https://registry.npmjs.org/knip error (EAI_AGAIN). Will retry in 10 seconds. 2 retries left. [WARN] GET https://registry.npmjs.org/knip error (EAI_AGAIN). Will retry in 1 minute. 1 retries left. [ERR_PNPM_META_FETCH_FAIL] GET https://registry.npmjs.org/knip: fetch failed [check:changed] summary 325ms ok conflict markers 386ms ok environment variable count ratchet 13.99s ok max-lines suppression ratchet 241ms ok changelog attributions 273ms ok guarded extension wildcard re-exports 263ms ok plugin-sdk wildcard re-exports 272ms ok duplicate scan target coverage 276ms ok dependency pin guard 315ms ok format changed files 7.45s ok Plugin SDK API contract manifest 5.50s ok deprecated API usage 974ms ok plugin boundaries 495ms ok package patch guard 70.30s failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) OPENCLAW_* count 515/515 max-lines ratchet OK: 1015 grandfathered suppressions. No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok PASS direct dependency pin guard: checked 612 directly declared dependency specs across 179 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 19ms on 3 files using 4 threads. OK docs/.generated/plugin-sdk-api-baseline.sha256 deprecated API usage guard passed Plugin Boundary Report compat deprecated=39 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=28 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=21 readers=extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/public-artifacts.ts,extensions/memory-core/src/session-search-visibility.ts,extensions/memory-core/src/tools.citations.test.ts,extensions/memory-core/src/tools.test.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=57 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=321 reserved=0 reservedImports=0 crossOwnerReservedImports=0 unusedReserved=0 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=6 PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #115475 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #115475 | fix_needed | planned | canonical | The issue remains valid on current main. The prior closed PR #116033 did not modify `src/cli/daemon-cli/lifecycle.ts` or the service-environment ownership boundary, so it is not a candidate fix for this failure. |
| cluster:issue-openclaw-openclaw-115475 | build_fix_artifact | planned | canonical | Create one narrow implementation PR from `clawsweeper/issue-openclaw-openclaw-115475`. |
| #116033 | keep_closed | skipped | related | Closed historical context only; no closeout or mutation is applicable. |

## Needs Human

- none
