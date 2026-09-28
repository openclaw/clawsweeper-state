---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "36466924602"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36466924602"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-28T20:37:58.340Z"
canonical: "https://github.com/openclaw/openclaw/issues/125873"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125873"
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

# issue-openclaw-openclaw-125873

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36466924602](https://github.com/openclaw/clawsweeper/actions/runs/36466924602)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125873

## Summary

The checked-out Bedrock replay path still passes stored tool arguments to toolUse.input unchanged. Implementation is blocked: this read-only checkout lacks dependencies and does not contain the preflight main SHA, so the required failing regression on latest main could not be run. No code or GitHub state was changed.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, tooling [check:changed] config/assertion-safety-baseline.txt: tooling surface [check:changed] extensions/amazon-bedrock/stream.runtime.test.ts: extension test [check:changed] extensions/amazon-bedrock/stream.runtime.ts: extension production [check:changed] extensions/amazon-bedrock/tool-config.ts: extension production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] line-cap growth ratchet $ node --import ./scripts/tsx.mjs scripts/check-line-cap-ratchet.mts --base origin/main [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] extension test core imports $ node --import ./scripts/tsx.mjs scripts/check-no-extension-test-core-imports.ts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- config/assertion-safety-baseline.txt extensions/amazon-bedrock/stream.runtime.test.ts extensions/amazon-bedrock/stream.runtime.ts extensions/amazon-bedrock/tool-config.ts [check:changed] doctor contract declaration + closure guard tests $ node --import ./scripts/tsx.mjs scripts/test-projects-serial.mts src/plugins/doctor-contract-declarations.test.ts src/plugins/doctor-contract-closure-guard.test.ts [test] starting test/vitest/vitest.plugins.config.ts [test] passed 1 Vitest shard in 6.16s [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] test temp creation report (warning-only) No new test temp-directory migration warnings found. [check:changed] core tsgo graph boundary $ node --import ./scripts/tsx.mjs scripts/check-tsgo-core-boundary.mts [check:changed] typecheck extensions $ node scripts/run-tsgo.mjs -p tsconfig.extensions.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/extensions.tsbuildinfo [check:changed] typecheck extension tests $ node scripts/run-tsgo.mjs -p test/tsconfig/tsconfig.extensions.test.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/extensions-test.tsbuildinfo [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] deprecated API usage $ node --import ./scripts/tsx.mjs scripts/check-deprecated-api-usage.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode script unused-export scan produced no export sections. .../mulphyd3-1y5 | Progress: resolved 0, reused 1, downloaded 0, added 0 Packages are copied from the content-addressable store to the virtual store. Content-addressable store is at: /tmp/clawsweeper-repair-target-yBO05H/openclaw-openclaw/node_modules/.pnpm-store/v11 Virtual store is at: ../../clawsweeper-target-user-UshYJU/cache/pnpm/dlx/7f31525768783ede3ed02ef8ff1d2281/mulphyd3-1y5/node_modules/.pacquet Error: ERR_PNPM_NO_OFFLINE_TARBALL × adding a new package ╰─▶ Failed to fetch tarball for strip-json-comments@5.0.3 from https:// registry.npmjs.org/strip-json-comments/-/strip-json-comments-5.0.3.tgz in offline mode: snapshot not present in local store help: Drop `--offline` (or `offline=true` in pnpm-workspace.yaml) or run an online install first to populate the store. deadcode full-tree unused-export scan produced no export sections. .../mulphyd3-1y3 | Progress: resolved 0, reused 1, downloaded 0, added 0 Packages are copied from the content-addressable store to the virtual store. Content-addressable store is at: /tmp/clawsweeper-repair-target-yBO05H/openclaw-openclaw/node_modules/.pnpm-store/v11 Virtual store is at: ../../clawsweeper-target-user-UshYJU/cache/pnpm/dlx/7f31525768783ede3ed02ef8ff1d2281/mulphyd3-1y3/node_modules/.pacquet Error: ERR_PNPM_NO_OFFLINE_TARBALL × adding a new package ╰─▶ Failed to fetch tarball for oxc-resolver@11.24.2 from https:// registry.npmjs.org/oxc-resolver/-/oxc-resolver-11.24.2.tgz in offline mode: snapshot not present in local store help: Drop `--offline` (or `offline=true` in pnpm-workspace.yaml) or run an online install first to populate the store. deadcode production unused-export scan produced no export sections. .../mulphyd3-1y1 | Progress: resolved 0, reused 1, downloaded 0, added 0 Packages are copied from the content-addressable store to the virtual store. Content-addressable store is at: /tmp/clawsweeper-repair-target-yBO05H/openclaw-openclaw/node_modules/.pnpm-store/v11 Virtual store is at: ../../clawsweeper-target-user-UshYJU/cache/pnpm/dlx/7f31525768783ede3ed02ef8ff1d2281/mulphyd3-1y1/node_modules/.pacquet Error: ERR_PNPM_NO_OFFLINE_TARBALL × adding a new package ╰─▶ Failed to fetch tarball for unbash@4.0.11 from https:// registry.npmjs.org/unbash/-/unbash-4.0.11.tgz in offline mode: snapshot not present in local store help: Drop `--offline` (or `offline=true` in pnpm-workspace.yaml) or run an online install first to populate the store. [check:changed] summary 242ms ok conflict ...  plugins [49m[39m src/plugins/doctor-contract-closure-guard.test.ts[2m > [22mdoctor contract import closures[2m > [22mkeeps the runtime doctor migration helper off state DB and plugin-state graphs[32m 25[2mms[22m[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-closure-guard.test.ts[2m > [22mdoctor contract import closures[2m > [22mkeeps kysely statically unreachable from every plugin closure[33m 608[2mms[22m[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-declarations.test.ts[2m > [22mbundled plugin doctor contract declarations[2m > [22mmatches every resolvable artifact's coerced doctor surfaces[33m 1886[2mms[22m[39m [32m✓[39m [30m[45m plugins [49m[39m src/plugins/doctor-contract-declarations.test.ts[2m > [22mbundled plugin doctor contract declarations[2m > [22mdeclares every state migration identity and phase in module order[32m 70[2mms[22m[39m [2m Test Files [22m [1m[32m2 passed[39m[22m[90m (2)[39m [2m Tests [22m [1m[32m6 passed[39m[22m[90m (6)[39m [2m Start at [22m 20:29:58 [2m Duration [22m 5.23s[2m (tests 64%, transform 20%, setup 13%, import 3%)[22m Plugin Boundary Report compat deprecated=23 eligibleForRemoval=0 removalPending=9 removalPendingDue=1 removal-pending 2026-09-08 sdk-untrusted-context-identifier-aliases due=true blocker=`MsgContext.ChannelPromptContext`, `MsgContext.ChannelStructuredContext`, `ChannelStructuredContextEntry`, `SupplementalContextFacts.channelStructuredContext`, and `buildChannelMetadata`; retain the aliases until migration of published plugin readers is verified and explicit breaking-release approval is granted readerRefs=8039 readers=extensions/a2a/index.ts,extensions/a2a/runtime-api.ts,extensions/a2a/setup-entry.ts,extensions/a2a/src/accounts.ts,extensions/a2a/src/channel-base.ts removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=54 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser-tool.runtime.ts,extensions/browser/src/browser-tool.test-support.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/cli/browser-cli-extension.test.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=28 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/codex/src/app-server/run-attempt-memory.test-support.ts,extensions/memory-core/index.ts removal-pending 2026-10-01 plugin-sdk-channel-lifecycle-subpath due=false blocker=`openclaw/plugin-sdk/channel-outbound`; retain until supported external plugin migration is verified readerRefs=1 readers=src/plugins/contracts/plugin-sdk-subpaths.test.ts removal-pending 2026-10-01 plugin-sdk-channel-message-subpath due=false blocker=`openclaw/plugin-sdk/channel-outbound` and `openclaw/plugin-sdk/channel-inbound`; retain until supported external plugin migration is verified readerRefs=3 readers=src/plugin-sdk/channel-message.test.ts,src/plugins/plugin-sdk-native-resolver.test.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 plugin-sdk-channel-reply-pipeline-subpath due=false blocker=`openclaw/plugin-sdk/channel-outbound`; retain until supported external plugin migration is verified readerRefs=3 readers=src/plugin-sdk/channel-message.test.ts,src/plugins/contracts/plugin-sdk-subpaths.test.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 plugin-sdk-config-runtime-subpath due=false blocker=`api.pluginConfig`, `openclaw/plugin-sdk/config-mutation`, `openclaw/plugin-sdk/runtime-config-snapshot`, and `openclaw/plugin-sdk/config-contracts`; retain until supported external plugin migration is verified readerRefs=3 readers=scripts/check-no-monolithic-plugin-sdk-entry-imports.ts,scripts/lib/config-boundary-guard.mts,src/plugins/contracts/config-boundary-guard.test.ts removal-pending 2026-10-01 plugin-sdk-infra-runtime-subpath due=false blocker=focused subpaths including `openclaw/plugin-sdk/delivery-queue-runtime`, `openclaw/plugin-sdk/diagnostic-runtime`, `openclaw/plugin-sdk/error-runtime`, `openclaw/plugin-sdk/exec-approvals-runtime`, `openclaw/plugin-sdk/fetch-runtime`, and `openclaw/plugin-sdk/ssrf-runtime`; retain until supported external plugin migration is verified and system-event snapshot inspection and consumption have a modern public replacement readerRefs=1 readers=scripts/check-no-monolithic-plugin-sdk-entry-imports.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=58 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/plugin-enabled.ts plugin-sdk entrypoints=373 supportedBundledFacade=2 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=21 PASS package patch guard: no new pnpm patches; 9 approved patches allowlisted. Coercion helper declaration guard passed (112 allowlisted declarations). deprecated API usage guard passed |
| issue_implementation_status_comment | updated | #125873 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #125873 | fix_needed | planned | canonical | A narrow provider-scoped repair is indicated by the inspected source, subject to reproduction on the preflight main SHA. |
| cluster:issue-openclaw-openclaw-125873 | build_fix_artifact | blocked |  | Reproduce the defect through the outbound Converse request on the preflight main SHA before implementing. This worker cannot complete that gate in the supplied checkout. |

## Needs Human

- none
