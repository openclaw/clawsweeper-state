---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-166708"
mode: "autonomous"
run_id: "37674954566"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37674954566"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-07T20:26:55.695Z"
canonical: "https://github.com/openclaw/openclaw/issues/166708"
canonical_issue: "https://github.com/openclaw/openclaw/issues/166708"
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

# issue-openclaw-openclaw-166708

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37674954566](https://github.com/openclaw/clawsweeper/actions/runs/37674954566)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/166708

## Summary

Source inspection confirms the subscription WebSocket expiry recovery gap on preflight main. A narrow fix artifact is prepared. Implementation, failing-regression proof, and validation are blocked by the read-only host and missing dependencies; no code or GitHub state changed.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, extensions, extensionTests [check:changed] extensions/openai/openai-provider.failover.test.ts: extension test [check:changed] extensions/openai/openai-provider.test.ts: extension test [check:changed] extensions/openai/openai-provider.ts: extension production [check:changed] extensions/openai/provider-contract-api.ts: extension production [check:changed] packages/ai/src/providers/openai-chatgpt-responses.test-support.ts: core test [check:changed] packages/ai/src/providers/openai-chatgpt-responses.test.ts: core test [check:changed] packages/ai/src/providers/openai-chatgpt-responses.ts: core production [check:changed] src/agents/embedded-agent-runner/run/assistant-failure.test.ts: core test [check:changed] src/agents/embedded-agent-runner/run/attempt-recovery.test.ts: core test [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] line-cap growth ratchet $ node --import ./scripts/tsx.mjs scripts/check-line-cap-ratchet.mts --base origin/main [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] SQLite worker ratchet $ node --import ./scripts/tsx.mjs scripts/check-database-worker-ratchet.mts --base origin/main [check:changed] test timeout race ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-timeout-race-ratchet.mts --base origin/main [check:changed] first-party mock export ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-mock-exports.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] extension test core imports $ node --import ./scripts/tsx.mjs scripts/check-no-extension-test-core-imports.ts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- extensions/openai/openai-provider.failover.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-provider.ts extensions/openai/provider-contract-api.ts packages/ai/src/providers/openai-chatgpt-responses.test-support.ts packages/ai/src/providers/openai-chatgpt-responses.test.ts packages/ai/src/providers/openai-chatgpt-responses.ts src/agents/embedded-agent-runner/run/assistant-failure.test.ts src/agents/embedded-agent-runner/run/attempt-recovery.test.ts [check:changed] doctor contract declaration + closure guard tests $ node --import ./scripts/tsx.mjs scripts/test-projects-serial.mts src/plugins/doctor-contract-declarations.test.ts src/plugins/doctor-contract-closure-guard.test.ts [test] starting test/vitest/vitest.plugins.config.ts [test] passed 1 Vitest shard in 6.24s [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] wrapper shadowing $ node --import ./scripts/tsx.mjs scripts/check-wrapper-shadowing.mts [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] test temp creation report (warning-only) No new test temp-directory migration warnings found. [check:changed] core tsgo graph boundary $ node --import ./scripts/tsx.mjs scripts/check-tsgo-core-boundary.mts Core tsgo graphs must not include bundled extension files: - core-test-agents-other: extensions/openai/default-models.ts - core-test-agents-other: extensions/openai/base-url.ts - core-test-agents-other: extensions/openai/audio-transcription.ts - core-test-agents-other: extensions/openai/media-understanding-provider.ts - core-test-agents-other: extensions/openai/openai-chatgpt-oauth-authorization.runtime.ts - core-test-agents-other: extensions/openai/openai-oauth-http.runtime.ts - core-test-agents-other: extensions/openai/openai-chatgpt-oauth-token.runtime.ts - core-test-agents-other: extensions/openai/openai-chatgpt-oauth-flow.runtime.ts - core-test-agents-other: extensions/openai/openai-chatgpt-oauth-preflight.runtime.ts - core-test-agents-other: extensions/openai/openai-chatgpt-oauth.runtime.ts - core-test-agents-other: extensions/openai/openai-chatgpt-provider.runtime.ts - core-test-agents-other: extensions/openai/model-route-contract.ts - core-test-agents-other: extensions/openai/account-models.ts - core-test-agents-other: extensions/openai/codex-model-rows.ts - core-test-agents-other: extensions/openai/model-service-tiers.ts - core-test-agents-other: extensions/openai/openclaw.plugin.json - core-test-agents-other: extensions/openai/replay-policy.ts - core-test-agents-other: extensions/openai/token-sharing.ts - core-test-agents-other: extensions/openai/transport-policy.ts - core-test-agents-other: extensions/openai/native-web-search-policy.ts - core-test-agents-other: extensions/openai/native-web-search.ts - core-test-agents-other: extensions/openai/service-tier-policy.ts - core-test-agents-other: extensions/openai/responses-stream.runtime.ts - core-test-agents-other: extensions/openai/shared.ts - core-test-agents-other: extensions/openai/usage.ts - core-test-agents-other: extensions/openai/openai-chatgpt-device-code.ts - core-test-agents-other: extensions/openai/openai-chatgpt-provider.ts - core-test-agents-other: e ... ue=true blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=27 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/codex/src/app-server/run-attempt-memory.test-support.ts,extensions/memory-core/index.ts removal-pending 2026-10-01 agent-harness-terminal-result-aliases due=true blocker=AgentHarnessAttemptResult.terminal and AgentHarnessDeliveryDefaults.visibleReplies; retain until harness migration verifies that legacy terminal fields and sourceVisibleReplies are unread readerRefs=0 readers=none removal-pending 2026-10-01 message-presentation-legacy-bridges due=true blocker=MessagePresentation values and channel presentation renderers; retain until reply producers and official channel packages no longer emit or read legacy interactive replies readerRefs=162 readers=extensions/a2a/src/inbound.ts,extensions/codex/src/app-server/run-attempt-active-turn.ts,extensions/codex/src/app-server/run-attempt.final-media.test.ts,extensions/codex/src/conversation-binding-hooks.ts,extensions/codex/src/conversation-binding.ts removal-pending 2026-10-01 official-plugin-export-aliases due=true blocker=MessagePresentation renderers and host-owned timeout/runtime behavior; retain until minimum supported official plugin packages no longer import these aliases readerRefs=24 readers=extensions/discord/api.ts,extensions/discord/src/voice/audio-worker-thread.ts,extensions/qa-lab/src/crabline-discord-thread-delivery.test.ts,extensions/qa-lab/src/live-transports/discord/discord-live.runtime.ts,extensions/qa-lab/src/live-transports/discord/discord-transcripts-authorization.runtime.test.ts removal-pending 2026-10-01 plugin-sdk-channel-setup-input-fields due=true blocker=plugin-local setup input intersections that declare each owning channel field; retain each field until a new published-plugin artifact sweep finds no reader readerRefs=0 readers=none removal-pending 2026-10-01 plugin-runtime-api-compat-aliases due=true blocker=the namespaced plugin API and focused runtime methods named per surface; retain until all enumerated flat API and runtime aliases have no readers readerRefs=8 readers=extensions/buzz/src/inbound.test.ts,extensions/feishu/src/bot.broadcast.routing.test.ts,extensions/feishu/src/bot.test.ts,extensions/feishu/src/comment-handler.test.ts,extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts removal-pending 2026-10-01 plugin-provider-manifest-compat-aliases due=true blocker=manifest-owned plugin kind/setup metadata and model catalog registration; retain until providers no longer publish runtime kind or legacy catalog hooks readerRefs=0 readers=none removal-pending 2026-10-01 plugin-sdk-provider-owned-helper-shims due=true blocker=provider-local auth, model, replay, OAuth, and stream helper APIs; retain until every helper is migrated in official providers and absent from published plugins readerRefs=462 readers=extensions/agentsapi/agentsapi-harness.persistence.test.ts,extensions/agentsapi/agentsapi-harness.ts,extensions/amazon-bedrock-mantle/discovery.ts,extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts removal-pending 2026-10-01 media-legacy-projection due=true blocker=ordered `MsgContext.media` / `InboundMediaFacts[]`; typed hook `media` and `originalMedia`; `Attachment*` template variables; and `openclaw/plugin-sdk/media-local-roots`; retain until a clean published-plugin artifact sweep verifies that the legacy media surfaces have no readers readerRefs=2 readers=src/plugins/compat/media-legacy-projection.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 memory-host-compatibility-aliases due=true blocker=canonical memory cache/FTS tables; retain until supported memory integrations are verified to use canonical tables without overrides and legacy table data remains preserved readerRefs=2 readers=src/plugins/compat/deprecation-marking.ts,src/plugins/contracts/extension-package-project-boundaries.test.ts removal-pending 2026-10-01 plugin-sdk-broad-runtime-barrels due=true blocker=focused plugin SDK subpaths for each runtime capability; retain until bundled and published plugins no longer import any of the seven broad barrels readerRefs=855 readers=extensions/a2a/src/http.test.ts,extensions/acpx/src/runtime.ts,extensions/acpx/src/session-owner-migration.ts,extensions/active-memory/index.ts,extensions/active-memory/query.ts removal-pending 2026-10-01 plugin-sdk-focused-compat-aliases due=true blocker=the focused replacement named by each TypeScript @deprecated annotation; retain until every enumerated alias has zero bundled and published readers readerRefs=463 readers=extensions/a2a/src/inbound.ts,extensions/acpx/index.test.ts,extensions/acpx/index.ts,extensions/acpx/register.runtime.test.ts,extensions/acpx/register.runtime.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=55 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/active-memory/trigger-recall.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts plugin-sdk entrypoints=366 supportedBundledFacade=0 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=22 wrapper shadowing guard passed. PASS package patch guard: no new pnpm patches; 10 approved patches allowlisted. |
| issue_implementation_status_comment | updated | #166708 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #166708 | fix_needed | planned | canonical | The source-confirmed defect has existing transport, provider-classification, and transcript-recovery owners. Runtime reproduction remains required before implementation. |
| #122717 | keep_closed | skipped | related | Historical context only; its resolved direct API-key path does not establish that the subscription defect is fixed. |
| #122727 | keep_closed | skipped | related | Already merged historical context; no mutation or fresh merge recommendation. |
| cluster:issue-openclaw-openclaw-166708 | build_fix_artifact | planned |  | The artifact is ready for a writable executor. Implementation must start with a failing regression against refreshed main and stop if the defect cannot be reproduced. |
| cluster:issue-openclaw-openclaw-166708 | open_fix_pr | blocked |  | PR publication is blocked on implementation and regression-first validation in a writable, dependency-equipped executor. This is an environment blocker, not an unresolved maintainer decision. |

## Needs Human

- none
