---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-139669"
mode: "autonomous"
run_id: "34008961849"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34008961849"
head_sha: "e4d0e82050300cafb9459a6d9cf8a2041f4e62cb"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-06T04:10:54.273Z"
canonical: "https://github.com/openclaw/openclaw/issues/139669"
canonical_issue: "https://github.com/openclaw/openclaw/issues/139669"
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

# issue-openclaw-openclaw-139669

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34008961849](https://github.com/openclaw/clawsweeper/actions/runs/34008961849)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/139669

## Summary

Reproduced the loss on preflight main. A fetch-budget-only change tested in memory recovers 100/100 and 600/600 rows. Narrow repair artifact prepared; filesystem edits and repository validation are blocked by the read-only workspace. No GitHub mutations occurred.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] extensions/imessage/src/monitor/catchup-bridge.test-support.ts: extension test [check:changed] extensions/imessage/src/monitor/catchup-bridge.ts: extension production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] extension test core imports $ node --import ./scripts/tsx.mjs scripts/check-no-extension-test-core-imports.ts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- extensions/imessage/src/monitor/catchup-bridge.test-support.ts extensions/imessage/src/monitor/catchup-bridge.ts [check:changed] doctor contract declaration + closure guard tests $ node --import ./scripts/tsx.mjs scripts/test-projects-serial.mts src/plugins/doctor-contract-declarations.test.ts src/plugins/doctor-contract-closure-guard.test.ts [test] starting test/vitest/vitest.plugins.config.ts [vitest-workers] prepared 0ddbc98cf983 in 3532ms (8370 inputs, 4176 outputs) [vitest-workers] verifying completed generation before cleanup [test] passed 1 Vitest shard in 8.46s [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] test temp creation report (warning-only) No new test temp-directory migration warnings found. [check:changed] typecheck extensions $ node scripts/run-tsgo.mjs -p tsconfig.extensions.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/extensions.tsbuildinfo [check:changed] typecheck extension tests $ node scripts/run-tsgo.mjs -p test/tsconfig/tsconfig.extensions.test.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/extensions-test.tsbuildinfo [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] deprecated API usage $ node --import ./scripts/tsx.mjs scripts/check-deprecated-api-usage.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. Error: ERR_PNPM_NO_OFFLINE_META × adding a new package ╰─▶ Failed to resolve knip@6.32.2 in package mirror "/tmp/clawsweeper- target-user-izUoLX/cache/pnpm/v11/metadata/registry.npmjs.org/ knip.jsonl" deadcode full-tree unused-export scan produced no export sections. Error: ERR_PNPM_NO_OFFLINE_META × adding a new package ╰─▶ Failed to resolve knip@6.32.2 in package mirror "/tmp/clawsweeper- target-user-izUoLX/cache/pnpm/v11/metadata/registry.npmjs.org/ knip.jsonl" deadcode script unused-export scan produced no export sections. Error: ERR_PNPM_NO_OFFLINE_META × adding a new package ╰─▶ Failed to resolve knip@6.32.2 in package mirror "/tmp/clawsweeper- target-user-izUoLX/cache/pnpm/v11/metadata/registry.npmjs.org/ knip.jsonl" [check:changed] summary 164ms ok conflict markers 14.45s ok max-lines suppression ratchet 6.52s ok assertion SAFETY comment ratchet 154ms ok changelog attributions 140ms ok doctor deprecation registry 157ms ok guarded extension wildcard re-exports 147ms ok plugin-sdk wildcard re-exports 515ms ok extension test core imports 213ms ok duplicate scan target coverage 182ms ok dependency pin guard 119ms ok format changed files 8.71s ok doctor contract declaration + closure guard tests 926ms ok plugin boundaries 349ms ok package patch guard 401ms ok test temp creation report (warning-only) 13.56s ok typecheck extensions 23.23s ok typecheck extension tests 11.20s ok coercion helper declaration guard 5.45s ok deprecated API usage 102ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) [ELIFECYCLE] Command failed with exit code 1. max-lines ratchet OK: 861 grandfathered suppressions. OPENCLAW_* count 498/498 assertion SAFETY ratchet OK: 4030 files, 12123 grandfathered assertions. [doctor-deprecation-registry] OK as of 2026-09-06 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. OK: extension test files, support helpers, and plugin test helpers avoid direct core test/internal imports (3647 extension files, 0 plugin helpers checked). [dup:check] target coverage ok PASS direct dependency pin guard: checked 665 directly declared dependency specs across 181 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 1ms on 2 files using 4 threads. [1m[30m[46m RUN [49m[39m[22m [36mv5.0.0 [39m[90m/tmp/clawsweeper-repair-target-2LnOa8/openclaw-openclaw[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-closure-guard.test.ts[2m > [22mdoctor contract import closures[2m > [22mclassifies only static value module edges[32m 45[2mms[22m[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-closure-guard.test.ts[2m > [22mdoctor contract import closures[2m > [22mkeeps broad agent runtime and heavy doctor barrels off doctor enumeration paths[33m 353[2mms[22m[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-closure-guard.test.ts[2m > [22mdoctor contract import closures[2m > [22mkeeps the runtime doctor migration helper off state DB and plugin-state graphs[32m 28[2mms[22m[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-closure-guard.test.ts[2m > [22mdoctor contract import closures[2m > [22mkeeps kysely statically unreachable from every plugin closure[33m 503[2mms[22m[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-declarations.test.ts[2m > [22mbundled plugin doctor contract declarations[2m > [22mmatches every resolvable artifact's coerced doctor surfaces[33m 1349[2mms[22m[39m [2m Test Files [22m [1m[32m2 passed[39m[22m[90m (2)[39m [2m Tests [22m [1m[32m5 passed[39m[22m[90m (5)[39m [2m Start at [22m 04:05:59 [2m Duration [22m 7.44s[2m (transform 61%, tests 31%, worker 5%, import 3%, setup 1%)[22m Plugin Boundary Report compat deprecated=19 eligibleForRemoval=0 removalPending=8 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=45 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/cli/browser-cli-extension.test.ts,extensions/browser/src/cli/browser-cli.test.ts,extensions/browser/src/sdk-setup-tools.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=27 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/memory-get-corpus.test.ts,extensions/memory-core/src/public-artifacts.ts removal-pending 2026-10-01 plugin-sdk-channel-lifecycle-subpath due=false blocker=`openclaw/plugin-sdk/channel-outbound`; retain until supported external plugin migration is verified readerRefs=1 readers=src/plugins/contracts/plugin-sdk-subpaths.test.ts removal-pending 2026-10-01 plugin-sdk-channel-message-subpath due=false blocker=`openclaw/plugin-sdk/channel-outbound` and `openclaw/plugin-sdk/channel-inbound`; retain until supported external plugin migration is verified readerRefs=2 readers=src/plugin-sdk/channel-message.test.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 plugin-sdk-channel-reply-pipeline-subpath due=false blocker=`openclaw/plugin-sdk/channel-outbound`; retain until supported external plugin migration is verified readerRefs=3 readers=src/plugin-sdk/channel-message.test.ts,src/plugins/contracts/plugin-sdk-subpaths.test.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 plugin-sdk-config-runtime-subpath due=false blocker=`api.pluginConfig`, `openclaw/plugin-sdk/config-mutation`, `openclaw/plugin-sdk/runtime-config-snapshot`, and `openclaw/plugin-sdk/config-contracts`; retain until supported external plugin migration is verified readerRefs=3 readers=scripts/check-no-monolithic-plugin-sdk-entry-imports.ts,scripts/lib/config-boundary-guard.mts,src/plugins/contracts/config-boundary-guard.test.ts removal-pending 2026-10-01 plugin-sdk-infra-runtime-subpath due=false blocker=focused subpaths including `openclaw/plugin-sdk/delivery-queue-runtime`, `openclaw/plugin-sdk/diagnostic-runtime`, `openclaw/plugin-sdk/error-runtime`, `openclaw/plugin-sdk/exec-approvals-runtime`, `openclaw/plugin-sdk/fetch-runtime`, and `openclaw/plugin-sdk/ssrf-runtime`; retain until supported external plugin migration is verified and system-event snapshot inspection and consumption have a modern public replacement readerRefs=1 readers=scripts/check-no-monolithic-plugin-sdk-entry-imports.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=62 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=351 supportedBundledFacade=2 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=17 PASS package patch guard: no new pnpm patches; 6 approved patches allowlisted. Coercion helper declaration guard passed (111 allowlisted declarations). deprecated API usage guard passed |
| issue_implementation_status_comment | updated | #139669 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #139669 | fix_needed | blocked | canonical | The defect is confirmed. Local implementation and required repository checks are blocked because this workspace is read-only and node_modules is absent. Continue through the planned executor artifact. |
| #116961 | keep_closed | skipped | related | Historical source work for the same defect, not a closure target. Preserve @yetval's credit and recheck whether the PR reopened before creating new implementation work. |
| cluster:issue-openclaw-openclaw-139669 | build_fix_artifact | planned | canonical | A narrow non-security bug repair is supported by current-main reproduction. The executor can implement and validate it without changing configuration, storage, or pagination policy. |

## Needs Human

- none
