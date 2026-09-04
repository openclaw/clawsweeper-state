---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-138561"
mode: "autonomous"
run_id: "33918957084"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33918957084"
head_sha: "66af14ef3f725f5ecb1c0ab8f6b085cc40b3d642"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-04T22:06:58.329Z"
canonical: "https://github.com/openclaw/openclaw/issues/138561"
canonical_issue: "https://github.com/openclaw/openclaw/issues/138561"
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

# issue-openclaw-openclaw-138561

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33918957084](https://github.com/openclaw/clawsweeper/actions/runs/33918957084)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/138561

## Summary

Current main d3adc01d75e2b189732bd4d86c6b3be3cfa7e03e has a narrow Active Memory observability bug: the eligible no-recall-intent path logs only at debug even with logging enabled. Implementation is blocked in this read-only worker: the mandatory ../codex checkout is absent and cannot be cloned, and Corepack cannot create its cache to run validation. A narrow, regression-backed fix artifact is ready for the writable executor.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] extensions/active-memory/index.test.ts: extension test [check:changed] extensions/active-memory/index.ts: extension production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] extension test core imports $ node --import ./scripts/tsx.mjs scripts/check-no-extension-test-core-imports.ts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- extensions/active-memory/index.test.ts extensions/active-memory/index.ts [check:changed] doctor contract declaration + closure guard tests $ node --import ./scripts/tsx.mjs scripts/test-projects-serial.mts src/plugins/doctor-contract-declarations.test.ts src/plugins/doctor-contract-closure-guard.test.ts [test] starting test/vitest/vitest.plugins.config.ts [vitest-workers] prepared d23aafe547e8 in 2341ms (8290 inputs, 4100 outputs) [vitest-workers] verifying completed generation before cleanup [test] passed 1 Vitest shard in 7.96s [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] test temp creation report (warning-only) No new test temp-directory migration warnings found. [check:changed] typecheck extensions $ node scripts/run-tsgo.mjs -p tsconfig.extensions.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/extensions.tsbuildinfo [check:changed] typecheck extension tests $ node scripts/run-tsgo.mjs -p test/tsconfig/tsconfig.extensions.test.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/extensions-test.tsbuildinfo [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] deprecated API usage $ node --import ./scripts/tsx.mjs scripts/check-deprecated-api-usage.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode script unused-export scan produced no export sections. Error: ERR_PNPM_NO_OFFLINE_META × adding a new package ╰─▶ Failed to resolve knip@6.32.2 in package mirror "/tmp/clawsweeper- target-user-vhK4jB/cache/pnpm/v11/metadata/registry.npmjs.org/ knip.jsonl" deadcode full-tree unused-export scan produced no export sections. Error: ERR_PNPM_NO_OFFLINE_META × adding a new package ╰─▶ Failed to resolve knip@6.32.2 in package mirror "/tmp/clawsweeper- target-user-vhK4jB/cache/pnpm/v11/metadata/registry.npmjs.org/ knip.jsonl" deadcode production unused-export scan produced no export sections. Error: ERR_PNPM_NO_OFFLINE_META × adding a new package ╰─▶ Failed to resolve knip@6.32.2 in package mirror "/tmp/clawsweeper- target-user-vhK4jB/cache/pnpm/v11/metadata/registry.npmjs.org/ knip.jsonl" [check:changed] summary 217ms ok conflict markers 17.82s ok max-lines suppression ratchet 6.85s ok assertion SAFETY comment ratchet 156ms ok changelog attributions 151ms ok doctor deprecation registry 155ms ok guarded extension wildcard re-exports 142ms ok plugin-sdk wildcard re-exports 490ms ok extension test core imports 215ms ok duplicate scan target coverage 175ms ok dependency pin guard 126ms ok format changed files 8.19s ok doctor contract declaration + closure guard tests 1.12s ok plugin boundaries 430ms ok package patch guard 540ms ok test temp creation report (warning-only) 15.69s ok typecheck extensions 21.78s ok typecheck extension tests 11.91s ok coercion helper declaration guard 6.02s ok deprecated API usage 109ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) [ELIFECYCLE] Command failed with exit code 1. max-lines ratchet OK: 867 grandfathered suppressions. OPENCLAW_* count 498/498 assertion SAFETY ratchet OK: 4066 files, 12330 grandfathered assertions. [doctor-deprecation-registry] OK as of 2026-09-04 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. OK: extension test files, support helpers, and plugin test helpers avoid direct core test/internal imports (3604 extension files, 0 plugin helpers checked). [dup:check] target coverage ok PASS direct dependency pin guard: checked 668 directly declared dependency specs across 181 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 7ms on 2 files using 4 threads. [1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/tmp/clawsweeper-repair-target-ZeiT9m/openclaw-openclaw[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-closure-guard.test.ts[2m > [22mdoctor contract import closures[2m > [22mclassifies only static value module edges[32m 40[2mms[22m[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-closure-guard.test.ts[2m > [22mdoctor contract import closures[2m > [22mkeeps broad agent runtime and heavy doctor barrels off doctor enumeration paths[33m 360[2mms[22m[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-closure-guard.test.ts[2m > [22mdoctor contract import closures[2m > [22mkeeps the runtime doctor migration helper off state DB and plugin-state graphs[32m 30[2mms[22m[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-closure-guard.test.ts[2m > [22mdoctor contract import closures[2m > [22mkeeps kysely statically unreachable from every plugin closure[33m 548[2mms[22m[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-declarations.test.ts[2m > [22mbundled plugin doctor contract declarations[2m > [22mmatches every resolvable artifact's coerced doctor surfaces[33m 1894[2mms[22m[39m [2m Test Files [22m [1m[32m2 passed[39m[22m[90m (2)[39m [2m Tests [22m [1m[32m5 passed[39m[22m[90m (5)[39m [2m Start at [22m 21:57:39 [2m Duration [22m 6.97s[2m (transform 12.73s, setup 265ms, import 3.30s, tests 2.87s, environment 0ms)[22m Plugin Boundary Report compat deprecated=19 eligibleForRemoval=0 removalPending=8 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=45 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/cli/browser-cli-extension.test.ts,extensions/browser/src/cli/browser-cli.test.ts,extensions/browser/src/sdk-setup-tools.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=27 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/memory-get-corpus.test.ts,extensions/memory-core/src/public-artifacts.ts removal-pending 2026-10-01 plugin-sdk-channel-lifecycle-subpath due=false blocker=`openclaw/plugin-sdk/channel-outbound`; retain until supported external plugin migration is verified readerRefs=1 readers=src/plugins/contracts/plugin-sdk-subpaths.test.ts removal-pending 2026-10-01 plugin-sdk-channel-message-subpath due=false blocker=`openclaw/plugin-sdk/channel-outbound` and `openclaw/plugin-sdk/channel-inbound`; retain until supported external plugin migration is verified readerRefs=2 readers=src/plugin-sdk/channel-message.test.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 plugin-sdk-channel-reply-pipeline-subpath due=false blocker=`openclaw/plugin-sdk/channel-outbound`; retain until supported external plugin migration is verified readerRefs=3 readers=src/plugin-sdk/channel-message.test.ts,src/plugins/contracts/plugin-sdk-subpaths.test.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 plugin-sdk-config-runtime-subpath due=false blocker=`api.pluginConfig`, `openclaw/plugin-sdk/config-mutation`, `openclaw/plugin-sdk/runtime-config-snapshot`, and `openclaw/plugin-sdk/config-contracts`; retain until supported external plugin migration is verified readerRefs=3 readers=scripts/check-no-monolithic-plugin-sdk-entry-imports.ts,scripts/lib/config-boundary-guard.mts,src/plugins/contracts/config-boundary-guard.test.ts removal-pending 2026-10-01 plugin-sdk-infra-runtime-subpath due=false blocker=focused subpaths including `openclaw/plugin-sdk/delivery-queue-runtime`, `openclaw/plugin-sdk/diagnostic-runtime`, `openclaw/plugin-sdk/error-runtime`, `openclaw/plugin-sdk/exec-approvals-runtime`, `openclaw/plugin-sdk/fetch-runtime`, and `openclaw/plugin-sdk/ssrf-runtime`; retain until supported external plugin migration is verified and system-event snapshot inspection and consumption have a modern public replacement readerRefs=1 readers=scripts/check-no-monolithic-plugin-sdk-entry-imports.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=62 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=351 supportedBundledFacade=2 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=17 PASS package patch guard: no new pnpm patches; 7 approved patches allowlisted. Coercion helper declaration guard passed (111 allowlisted declarations). deprecated API usage guard passed |
| issue_implementation_status_comment | updated | #138561 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #138561 | fix_needed | blocked | canonical | The issue remains a clear canonical bug-only repair, but this worker cannot satisfy the repository’s mandatory direct Codex inspection or execute/write the repair in the read-only checkout. |
| cluster:issue-openclaw-openclaw-138561 | build_fix_artifact | planned | canonical | Produce the narrow writable-executor repair plan; no GitHub mutation is performed by this worker. |

## Needs Human

- none
