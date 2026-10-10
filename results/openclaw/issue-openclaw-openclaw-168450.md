---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-168450"
mode: "autonomous"
run_id: "38053844155"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/38053844155"
head_sha: "ff328679cb3940489b2f2cd59e5bc69c3505e204"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-10T14:37:26.960Z"
canonical: "https://github.com/openclaw/openclaw/issues/168450"
canonical_issue: "https://github.com/openclaw/openclaw/issues/168450"
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

# issue-openclaw-openclaw-168450

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/38053844155](https://github.com/openclaw/clawsweeper/actions/runs/38053844155)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/168450

## Summary

Confirmed the shared auth matcher collision on checkout main/origin/main 9eb38c76cd864951e8981512b96dfed6a6c26d0a. Required assistant-entry-point reproduction is blocked by missing dependencies; this read-only host cannot install dependencies or edit files. Returned a narrow fix plan. No patch, PR, or GitHub mutation was made.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:changed] src/agents/embedded-agent-helpers/assistant-message-failures.test.ts: core test [check:changed] src/agents/embedded-agent-runner/run/assistant-failure.test.ts: core test [check:changed] src/agents/embedded-agent-runner/run/terminal-resolution.rejected-tool-call.test.ts: core test [check:changed] src/agents/failover/failover-classification.auth-format.cases.ts: core production [check:changed] src/agents/failover/message-patterns.ts: core production [check:changed] src/agents/worktrees/git-lock.ts: core production [check:changed] test/tsconfig/tsconfig.core.test.ui-e2e.json: root test/support surface [check:changed] test/tsconfig/tsconfig.core.test.ui-other.json: root test/support surface [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] line-cap growth ratchet $ node --import ./scripts/tsx.mjs scripts/check-line-cap-ratchet.mts --base origin/main [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] SQLite worker ratchet $ node --import ./scripts/tsx.mjs scripts/check-database-worker-ratchet.mts --base origin/main [check:changed] test timeout race ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-timeout-race-ratchet.mts --base origin/main [check:changed] first-party mock export ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-mock-exports.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- src/agents/embedded-agent-helpers/assistant-message-failures.test.ts src/agents/embedded-agent-runner/run/assistant-failure.test.ts src/agents/embedded-agent-runner/run/terminal-resolution.rejected-tool-call.test.ts src/agents/failover/failover-classification.auth-format.cases.ts src/agents/failover/message-patterns.ts src/agents/worktrees/git-lock.ts test/tsconfig/tsconfig.core.test.ui-e2e.json test/tsconfig/tsconfig.core.test.ui-other.json [check:changed] config docs baseline $ node --import ./scripts/tsx.mjs scripts/generate-config-doc-baseline.ts --check [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] wrapper shadowing $ node --import ./scripts/tsx.mjs scripts/check-wrapper-shadowing.mts [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] test temp creation report (warning-only) No new test temp-directory migration warnings found. [check:changed] core tsgo graph boundary $ node --import ./scripts/tsx.mjs scripts/check-tsgo-core-boundary.mts [check:changed] typecheck core $ node scripts/run-tsgo.mjs -p tsconfig.core.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/core.tsbuildinfo [check:changed] typecheck core tests $ node scripts/run-tsgo-core-test-shards.mjs [tsgo:agents-root] passed in 44.5s [tsgo:agents-other] passed in 39.8s [tsgo:agents-tools] passed in 42.6s [tsgo:gateway-root] passed in 46.9s [tsgo:gateway-server] passed in 49.5s [tsgo:gateway-other] passed in 40.3s [tsgo:infra] passed in 40.3s [tsgo:state-logging] passed in 40.3s [tsgo:commands] passed in 40.6s [tsgo:plugins-platform] passed in 42.8s [tsgo:config-cli] passed in 38.0s [tsgo:messaging] passed in 39.9s [tsgo:services] passed in 39.1s [tsgo:other] passed in 39.5s [tsgo:ui-pages] passed in 44.6s [tsgo:ui-e2e] passed in 44.3s [tsgo:ui-other] passed in 44.6s [tsgo:packages] passed in 32.7s [tsgo:plugin-sdk] passed in 35.9s [tsgo:commands-doctor] passed in 36.5s [tsgo:cli-update] passed in 38.0s [tsgo:gateway-methods] passed in 49.1s [tsgo:ui-chat] passed in 48.0s [tsgo:agents-sessions] passed in 43.9s [tsgo:services-cron] passed in 34.8s [tsgo:ui-app] passed in 42.4s [tsgo:ui-components] passed in 43.7s [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] deprecated API usage $ node --import ./scripts/tsx.mjs scripts/check-deprecated-api-usage.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) production unused-export scan: Unused exports are not allowed: src/cli/update-cli/update-command-post-activation-inspections.ts: POST_ACTIVATION_INSPECTIONS_STEP Delete the exports or model their real production consumers in Knip. script unused-export scan: Unused exports are not allowed: tools/solid-lint/index.mjs: default Delete the exports or model their real production consumers in Knip. full-tree unused-export scan: Unused exports are not allowed: src/agents/tools/sessions-channel-fixture.test-support.ts: resolveSessionConversationStub src/agents/tools/sessions-channel-fixture.test-support.ts: resolveSessionTargetStub src/cli/update-cli/update-command-post-activation-inspections.ts: POST_ACTIVATION_INSPECTIONS_STEP Delete the exports or model their real production consumers in Knip. [check:changed] summary 245ms ok conflict markers 413ms ok line-cap growth ratchet 4.53s ok ma ... on through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=27 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/codex/src/app-server/run-attempt-memory.test-support.ts,extensions/memory-core/index.ts removal-pending 2026-10-01 agent-harness-terminal-result-aliases due=true blocker=AgentHarnessAttemptResult.terminal and AgentHarnessDeliveryDefaults.visibleReplies; retain until harness migration verifies that legacy terminal fields and sourceVisibleReplies are unread readerRefs=0 readers=none removal-pending 2026-10-01 message-presentation-legacy-bridges due=true blocker=MessagePresentation values and channel presentation renderers; retain until reply producers and official channel packages no longer emit or read legacy interactive replies readerRefs=161 readers=extensions/a2a/src/inbound.ts,extensions/codex/src/app-server/run-attempt-active-turn.ts,extensions/codex/src/app-server/run-attempt.final-media.test.ts,extensions/codex/src/conversation-binding-hooks.ts,extensions/codex/src/conversation-binding.ts removal-pending 2026-10-01 official-plugin-export-aliases due=true blocker=MessagePresentation renderers and host-owned timeout/runtime behavior; retain until minimum supported official plugin packages no longer import these aliases readerRefs=21 readers=extensions/discord/api.ts,extensions/discord/src/voice/audio-worker-thread.ts,extensions/qa-lab/src/crabline-discord-thread-delivery.test.ts,extensions/qa-lab/src/live-transports/discord/discord-live.runtime.ts,extensions/qa-lab/src/live-transports/discord/discord-transcripts-authorization.runtime.test.ts removal-pending 2026-10-01 plugin-sdk-channel-setup-input-fields due=true blocker=plugin-local setup input intersections that declare each owning channel field; retain each field until a new published-plugin artifact sweep finds no reader readerRefs=0 readers=none removal-pending 2026-10-01 plugin-runtime-api-compat-aliases due=true blocker=the namespaced plugin API and focused runtime methods named per surface; retain until all enumerated flat API and runtime aliases have no readers readerRefs=8 readers=extensions/buzz/src/inbound.test.ts,extensions/feishu/src/bot.broadcast.routing.test.ts,extensions/feishu/src/bot.test.ts,extensions/feishu/src/comment-handler.test.ts,extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts removal-pending 2026-10-01 plugin-provider-manifest-compat-aliases due=true blocker=manifest-owned plugin kind/setup metadata and model catalog registration; retain until providers no longer publish runtime kind or legacy catalog hooks readerRefs=0 readers=none removal-pending 2026-10-01 plugin-sdk-provider-owned-helper-shims due=true blocker=provider-local auth, model, replay, OAuth, and stream helper APIs; retain until every helper is migrated in official providers and absent from published plugins readerRefs=468 readers=extensions/agentsapi/agentsapi-harness.lifecycle.test-helpers.ts,extensions/agentsapi/agentsapi-harness.persistence.test.ts,extensions/agentsapi/agentsapi-harness.ts,extensions/agentsapi/native-session-binding.test-api.ts,extensions/amazon-bedrock-mantle/discovery.ts removal-pending 2026-10-01 media-legacy-projection due=true blocker=ordered `MsgContext.media` / `InboundMediaFacts[]`; typed hook `media` and `originalMedia`; `Attachment*` template variables; and `openclaw/plugin-sdk/media-local-roots`; retain until a clean published-plugin artifact sweep verifies that the legacy media surfaces have no readers readerRefs=2 readers=src/plugins/compat/media-legacy-projection.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 memory-host-compatibility-aliases due=true blocker=canonical memory cache/FTS tables; retain until supported memory integrations are verified to use canonical tables without overrides and legacy table data remains preserved readerRefs=2 readers=src/plugins/compat/deprecation-marking.ts,src/plugins/contracts/extension-package-project-boundaries.test.ts removal-pending 2026-10-01 plugin-sdk-broad-runtime-barrels due=true blocker=focused plugin SDK subpaths for each runtime capability; retain until bundled and published plugins no longer import any of the seven broad barrels readerRefs=850 readers=extensions/a2a/src/http.test.ts,extensions/acpx/src/runtime.ts,extensions/acpx/src/session-owner-migration.ts,extensions/active-memory/index.ts,extensions/active-memory/query.ts removal-pending 2026-10-01 plugin-sdk-focused-compat-aliases due=true blocker=the focused replacement named by each TypeScript @deprecated annotation; retain until every enumerated alias has zero bundled and published readers readerRefs=463 readers=extensions/a2a/src/inbound.ts,extensions/acpx/index.test.ts,extensions/acpx/index.ts,extensions/acpx/register.runtime.test.ts,extensions/acpx/register.runtime.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=56 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/active-memory/trigger-recall.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts plugin-sdk entrypoints=366 supportedBundledFacade=0 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=26 wrapper shadowing guard passed. PASS package patch guard: no new pnpm patches; 9 approved patches allowlisted. Coercion helper declaration guard passed (112 allowlisted declarations). deprecated API usage guard passed |
| issue_implementation_status_comment | updated | #168450 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #168450 | fix_needed | planned | canonical | A narrow shared-matcher repair remains warranted. Implementation requires a writable executor with installed dependencies and a failing regression through the required assistant entry point. |
| #155457 | keep_related | planned | related | Keep open; this matcher repair does not resolve the broader streaming report. |
| #164274 | keep_closed | skipped | related | Historical recovery context only; no replacement, merge, or closure action is appropriate. |
| cluster:issue-openclaw-openclaw-168450 | build_fix_artifact | planned | canonical | Concrete narrow plan is available for the authorized executor; local implementation and post-fix validation remain incomplete. |

## Needs Human

- none
