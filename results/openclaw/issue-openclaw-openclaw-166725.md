---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-166725"
mode: "autonomous"
run_id: "37683662065"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37683662065"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-07T21:34:10.523Z"
canonical: "https://github.com/openclaw/openclaw/issues/166725"
canonical_issue: "https://github.com/openclaw/openclaw/issues/166725"
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

# issue-openclaw-openclaw-166725

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37683662065](https://github.com/openclaw/clawsweeper/actions/runs/37683662065)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/166725

## Summary

The supplied current main contains the source-proven $schema diagnostic mismatch. Implementation and runtime reproduction are blocked by the read-only filesystem and missing dependencies. No files or GitHub state changed; a narrow executor fix artifact is prepared.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:changed] config/assertion-safety-baseline.txt: tooling surface [check:changed] config/test-mock-exports-baseline.txt: tooling surface [check:changed] src/cli/config-cli.schema-output.test-support.ts: core test [check:changed] src/cli/config-cli.test.ts: core test [check:changed] src/cli/config-cli.ts: core production [check:changed] src/config/schema-base.ts: core production [check:changed] src/config/schema-cli.test.ts: core test [check:changed] src/config/schema.test.ts: core test [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] line-cap growth ratchet $ node --import ./scripts/tsx.mjs scripts/check-line-cap-ratchet.mts --base origin/main [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] SQLite worker ratchet $ node --import ./scripts/tsx.mjs scripts/check-database-worker-ratchet.mts --base origin/main [check:changed] test timeout race ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-timeout-race-ratchet.mts --base origin/main [check:changed] first-party mock export ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-mock-exports.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- config/assertion-safety-baseline.txt config/test-mock-exports-baseline.txt src/cli/config-cli.schema-output.test-support.ts src/cli/config-cli.test.ts src/cli/config-cli.ts src/config/schema-base.ts src/config/schema-cli.test.ts src/config/schema.test.ts [check:changed] config docs baseline $ node --import ./scripts/tsx.mjs scripts/generate-config-doc-baseline.ts --check [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] wrapper shadowing $ node --import ./scripts/tsx.mjs scripts/check-wrapper-shadowing.mts [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] test temp creation report (warning-only) No new test temp-directory migration warnings found. [check:changed] core tsgo graph boundary $ node --import ./scripts/tsx.mjs scripts/check-tsgo-core-boundary.mts [check:changed] typecheck core $ node scripts/run-tsgo.mjs -p tsconfig.core.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/core.tsbuildinfo [tsgo] FAILED (exit 2) [ELIFECYCLE] Command failed with exit code 2. [check:changed] summary 311ms ok conflict markers 580ms ok line-cap growth ratchet 7.01s ok max-lines suppression ratchet 19.56s ok assertion SAFETY comment ratchet 2.56s ok SQLite worker ratchet 811ms ok test timeout race ratchet 13.37s ok first-party mock export ratchet 199ms ok changelog attributions 150ms ok doctor deprecation registry 176ms ok guarded extension wildcard re-exports 180ms ok plugin-sdk wildcard re-exports 309ms ok duplicate scan target coverage 282ms ok dependency pin guard 97ms ok format changed files 4.80s ok config docs baseline 1.98s ok plugin boundaries 10.63s ok wrapper shadowing 684ms ok package patch guard 406ms ok test temp creation report (warning-only) 108.45s ok core tsgo graph boundary 70.42s failed:2 typecheck core [check:changed] FAILED (exit 2) [ELIFECYCLE] Command failed with exit code 2. Line-cap ratchet OK: 6 changed source files; no new violations or over-cap growth. max-lines ratchet OK: 601 grandfathered suppressions. OPENCLAW_* count 455/455 assertion SAFETY ratchet OK: 2924 files, 7119 grandfathered assertions. SQLite worker ratchet OK: no T1 call-count growth against 87f2a98ff46bc530a3f07627a234d4aafe142d6e. test timeout race ratchet OK: 132 files, 318 grandfathered sites. Mock factory ratchet OK: 10461 grandfathered factories. [doctor-deprecation-registry] OK as of 2026-10-07 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok PASS direct dependency pin guard: checked 716 directly declared dependency specs across 198 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 8ms on 6 files using 4 threads. OK docs/.generated/config-baseline.sha256 and docs/.generated/config-baseline.counts.json Plugin Boundary Report compat deprecated=36 eligibleForRemoval=0 removalPending=15 removalPendingDue=14 removal-pending 2026-09-08 sdk-untrusted-context-identifier-aliases due=true blocker=`MsgContext.ChannelPromptContext`, `MsgContext.ChannelStructuredContext`, `ChannelStructuredContextEntry`, `SupplementalContextFacts.channelStructuredContext`, and `buildChannelMetadata`; retain the aliases until migration of published plugin readers is verified and explicit breaking-release approval is granted readerRefs=8229 readers=extensions/a2a/index.ts,extensions/a2a/runtime-api.ts,extensions/a2a/setup-entry.ts,extensions/a2a/src/accounts.test.ts,extensions/a2a/src/accounts.ts removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotio ... nal and AgentHarnessDeliveryDefaults.visibleReplies; retain until harness migration verifies that legacy terminal fields and sourceVisibleReplies are unread readerRefs=0 readers=none removal-pending 2026-10-01 message-presentation-legacy-bridges due=true blocker=MessagePresentation values and channel presentation renderers; retain until reply producers and official channel packages no longer emit or read legacy interactive replies readerRefs=162 readers=extensions/a2a/src/inbound.ts,extensions/codex/src/app-server/run-attempt-active-turn.ts,extensions/codex/src/app-server/run-attempt.final-media.test.ts,extensions/codex/src/conversation-binding-hooks.ts,extensions/codex/src/conversation-binding.ts removal-pending 2026-10-01 official-plugin-export-aliases due=true blocker=MessagePresentation renderers and host-owned timeout/runtime behavior; retain until minimum supported official plugin packages no longer import these aliases readerRefs=24 readers=extensions/discord/api.ts,extensions/discord/src/voice/audio-worker-thread.ts,extensions/qa-lab/src/crabline-discord-thread-delivery.test.ts,extensions/qa-lab/src/live-transports/discord/discord-live.runtime.ts,extensions/qa-lab/src/live-transports/discord/discord-transcripts-authorization.runtime.test.ts removal-pending 2026-10-01 plugin-sdk-channel-setup-input-fields due=true blocker=plugin-local setup input intersections that declare each owning channel field; retain each field until a new published-plugin artifact sweep finds no reader readerRefs=0 readers=none removal-pending 2026-10-01 plugin-runtime-api-compat-aliases due=true blocker=the namespaced plugin API and focused runtime methods named per surface; retain until all enumerated flat API and runtime aliases have no readers readerRefs=8 readers=extensions/buzz/src/inbound.test.ts,extensions/feishu/src/bot.broadcast.routing.test.ts,extensions/feishu/src/bot.test.ts,extensions/feishu/src/comment-handler.test.ts,extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts removal-pending 2026-10-01 plugin-provider-manifest-compat-aliases due=true blocker=manifest-owned plugin kind/setup metadata and model catalog registration; retain until providers no longer publish runtime kind or legacy catalog hooks readerRefs=0 readers=none removal-pending 2026-10-01 plugin-sdk-provider-owned-helper-shims due=true blocker=provider-local auth, model, replay, OAuth, and stream helper APIs; retain until every helper is migrated in official providers and absent from published plugins readerRefs=462 readers=extensions/agentsapi/agentsapi-harness.persistence.test.ts,extensions/agentsapi/agentsapi-harness.ts,extensions/amazon-bedrock-mantle/discovery.ts,extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts removal-pending 2026-10-01 media-legacy-projection due=true blocker=ordered `MsgContext.media` / `InboundMediaFacts[]`; typed hook `media` and `originalMedia`; `Attachment*` template variables; and `openclaw/plugin-sdk/media-local-roots`; retain until a clean published-plugin artifact sweep verifies that the legacy media surfaces have no readers readerRefs=2 readers=src/plugins/compat/media-legacy-projection.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 memory-host-compatibility-aliases due=true blocker=canonical memory cache/FTS tables; retain until supported memory integrations are verified to use canonical tables without overrides and legacy table data remains preserved readerRefs=2 readers=src/plugins/compat/deprecation-marking.ts,src/plugins/contracts/extension-package-project-boundaries.test.ts removal-pending 2026-10-01 plugin-sdk-broad-runtime-barrels due=true blocker=focused plugin SDK subpaths for each runtime capability; retain until bundled and published plugins no longer import any of the seven broad barrels readerRefs=855 readers=extensions/a2a/src/http.test.ts,extensions/acpx/src/runtime.ts,extensions/acpx/src/session-owner-migration.ts,extensions/active-memory/index.ts,extensions/active-memory/query.ts removal-pending 2026-10-01 plugin-sdk-focused-compat-aliases due=true blocker=the focused replacement named by each TypeScript @deprecated annotation; retain until every enumerated alias has zero bundled and published readers readerRefs=463 readers=extensions/a2a/src/inbound.ts,extensions/acpx/index.test.ts,extensions/acpx/index.ts,extensions/acpx/register.runtime.test.ts,extensions/acpx/register.runtime.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=55 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/active-memory/trigger-recall.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts plugin-sdk entrypoints=366 supportedBundledFacade=0 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=22 wrapper shadowing guard passed. PASS package patch guard: no new pnpm patches; 10 approved patches allowlisted. src/cli/config-cli.schema-output.test-support.ts(32,37): error TS2322: Type 'string | undefined' is not assignable to type 'string'. Type 'undefined' is not assignable to type 'string'. src/cli/config-cli.schema-output.test-support.ts(36,74): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'. Type 'undefined' is not assignable to type 'string'. src/cli/config-cli.schema-output.test-support.ts(40,31): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'. Type 'undefined' is not assignable to type 'string'. |
| issue_implementation_status_comment | updated | #166725 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #166725 | fix_needed | planned | canonical | The narrow bug-only repair is supported by current source and documented behavior. The executor must establish the requested failing regression before editing; local implementation is blocked by host restrictions. |
| #163749 | keep_related | planned | related | Different root cause and existing repair ownership; retain as related context. |
| #163750 | keep_related | planned | related | Useful contributor work by @sxh313 remains separately owned. This job must not repair, replace, merge, or close it. |
| cluster:issue-openclaw-openclaw-166725 | build_fix_artifact | planned | canonical | Artifact preparation is complete; implementation and PR readiness remain blocked by the read-only host, not by unresolved maintainer judgment. |

## Needs Human

- none
