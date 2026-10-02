---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-163568"
mode: "autonomous"
run_id: "37019308664"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37019308664"
head_sha: "3b069266298d6cfaf878ff7671be6b2e5a94436c"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-02T19:56:33.044Z"
canonical: "https://github.com/openclaw/openclaw/issues/163568"
canonical_issue: "https://github.com/openclaw/openclaw/issues/163568"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-163568

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37019308664](https://github.com/openclaw/clawsweeper/actions/runs/37019308664)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/163568

## Summary

Confirmed the reported unsafe cleanup path in preflight main 779c5aae5e882da47460e0a49d820b2bd3ee4254. Implementation and runtime reproduction are blocked by the read-only filesystem and unavailable dependencies. Returned a narrow fix artifact; no code or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/agents/embedded-agent-runner/run/runtime-context-prompt.ts: core production [check:changed] src/agents/embedded-agent-runner/runs.test.ts: core test [check:changed] src/agents/embedded-agent-runner/runs.ts: core production [check:changed] src/agents/embedded-agent-runner/runs.wait.ts: core production [check:changed] src/cron/isolated-agent/run.ts: core production [check:changed] src/cron/service/timer.timeout-watchdog.test.ts: core test [check:changed] src/cron/types.ts: core production [check:changed] src/gateway/server-cron-timeout.ts: core production [check:changed] src/gateway/server-cron.test.ts: core test [check:changed] src/gateway/server-cron.timeout.test-support.ts: core test [check:changed] src/gateway/server-cron.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] line-cap growth ratchet $ node --import ./scripts/tsx.mjs scripts/check-line-cap-ratchet.mts --base origin/main [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] SQLite worker ratchet $ node --import ./scripts/tsx.mjs scripts/check-database-worker-ratchet.mts --base origin/main [check:changed] test timeout race ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-timeout-race-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- src/agents/embedded-agent-runner/run/runtime-context-prompt.ts src/agents/embedded-agent-runner/runs.test.ts src/agents/embedded-agent-runner/runs.ts src/agents/embedded-agent-runner/runs.wait.ts src/cron/isolated-agent/run.ts src/cron/service/timer.timeout-watchdog.test.ts src/cron/types.ts src/gateway/server-cron-timeout.ts src/gateway/server-cron.test.ts src/gateway/server-cron.timeout.test-support.ts src/gateway/server-cron.ts [check:changed] config docs baseline $ node --import ./scripts/tsx.mjs scripts/generate-config-doc-baseline.ts --check [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] wrapper shadowing $ node --import ./scripts/tsx.mjs scripts/check-wrapper-shadowing.mts [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] test temp creation report (warning-only) No new test temp-directory migration warnings found. [check:changed] core tsgo graph boundary [check:changed] typecheck core $ node scripts/run-tsgo.mjs -p tsconfig.core.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/core.tsbuildinfo [check:changed] typecheck core tests [check:changed] core test graphs: agents-root, agents-other, agents-tools, gateway-root, gateway-server, gateway-other, infra, state-logging, commands, plugins-platform, config-cli, messaging, services, other, ui-pages, ui-e2e, ui-other, packages, plugin-sdk, commands-doctor, cli-update, gateway-methods, ui-chat, agents-sessions, services-cron, ui-app, ui-components [tsgo:agents-root] passed in 35.2s [tsgo:agents-other] passed in 36.4s [tsgo:agents-tools] passed in 36.5s [tsgo:gateway-root] passed in 48.9s [tsgo:gateway-server] passed in 37.4s [tsgo:gateway-other] failed (exit 2) in 40.1s [check:changed] summary 214ms ok conflict markers 398ms ok line-cap growth ratchet 4.91s ok max-lines suppression ratchet 24.48s ok assertion SAFETY comment ratchet 2.16s ok SQLite worker ratchet 914ms ok test timeout race ratchet 269ms ok changelog attributions 262ms ok doctor deprecation registry 199ms ok guarded extension wildcard re-exports 158ms ok plugin-sdk wildcard re-exports 268ms ok duplicate scan target coverage 232ms ok dependency pin guard 90ms ok format changed files 3.73s ok config docs baseline 1.72s ok plugin boundaries 7.35s ok wrapper shadowing 456ms ok package patch guard 238ms ok test temp creation report (warning-only) 65.82s ok core tsgo graph boundary 45.54s ok typecheck core 234.59s failed:2 typecheck core tests [check:changed] FAILED (exit 2) [ELIFECYCLE] Command failed with exit code 2. Line-cap ratchet OK: 11 changed source files; no new violations or over-cap growth. max-lines ratchet OK: 642 grandfathered suppressions. OPENCLAW_* count 476/476 assertion SAFETY ratchet OK: 3088 files, 7754 grandfathered assertions. SQLite worker ratchet OK: no T1 call-count growth against 3932cbe4c91c5f3838a141f6a8cdeeb48fdf50b6. test timeout race ratchet OK: 134 files, 326 grandfathered sites. [doctor-deprecation-registry] OK as of 2026-10-02 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok PASS direct dependency pin guard: checked 708 directly declared dependency specs across 196 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 14ms on 11 files using 4 threads. OK docs/.generated/config-baseline.sha256 and docs/.generated/config-baseline.counts.json Plugin B ... facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=27 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/codex/src/app-server/run-attempt-memory.test-support.ts,extensions/memory-core/index.ts removal-pending 2026-10-01 agent-harness-terminal-result-aliases due=true blocker=AgentHarnessAttemptResult.terminal and AgentHarnessDeliveryDefaults.visibleReplies; retain until harness migration verifies that legacy terminal fields and sourceVisibleReplies are unread readerRefs=0 readers=none removal-pending 2026-10-01 message-presentation-legacy-bridges due=true blocker=MessagePresentation values and channel presentation renderers; retain until reply producers and official channel packages no longer emit or read legacy interactive replies readerRefs=162 readers=extensions/a2a/src/inbound.ts,extensions/codex/src/app-server/run-attempt-active-turn.ts,extensions/codex/src/app-server/run-attempt.final-media.test.ts,extensions/codex/src/conversation-binding-hooks.ts,extensions/codex/src/conversation-binding.ts removal-pending 2026-10-01 official-plugin-export-aliases due=true blocker=MessagePresentation renderers and host-owned timeout/runtime behavior; retain until minimum supported official plugin packages no longer import these aliases readerRefs=24 readers=extensions/discord/api.ts,extensions/discord/src/voice/audio-worker-thread.ts,extensions/qa-lab/src/crabline-discord-thread-delivery.test.ts,extensions/qa-lab/src/live-transports/discord/discord-live.runtime.ts,extensions/qa-lab/src/live-transports/discord/discord-transcripts-authorization.runtime.test.ts removal-pending 2026-10-01 plugin-sdk-channel-setup-input-fields due=true blocker=plugin-local setup input intersections that declare each owning channel field; retain each field until a new published-plugin artifact sweep finds no reader readerRefs=0 readers=none removal-pending 2026-10-01 plugin-runtime-api-compat-aliases due=true blocker=the namespaced plugin API and focused runtime methods named per surface; retain until all enumerated flat API and runtime aliases have no readers readerRefs=8 readers=extensions/buzz/src/inbound.test.ts,extensions/feishu/src/bot.broadcast.routing.test.ts,extensions/feishu/src/bot.test.ts,extensions/feishu/src/comment-handler.test.ts,extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts removal-pending 2026-10-01 plugin-provider-manifest-compat-aliases due=true blocker=manifest-owned plugin kind/setup metadata and model catalog registration; retain until providers no longer publish runtime kind or legacy catalog hooks readerRefs=0 readers=none removal-pending 2026-10-01 plugin-sdk-provider-owned-helper-shims due=true blocker=provider-local auth, model, replay, OAuth, and stream helper APIs; retain until every helper is migrated in official providers and absent from published plugins readerRefs=464 readers=extensions/amazon-bedrock-mantle/discovery.ts,extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/bedrock-options.ts,extensions/amazon-bedrock/discovery.ts removal-pending 2026-10-01 media-legacy-projection due=true blocker=ordered `MsgContext.media` / `InboundMediaFacts[]`; typed hook `media` and `originalMedia`; `Attachment*` template variables; and `openclaw/plugin-sdk/media-local-roots`; retain until a clean published-plugin artifact sweep verifies that the legacy media surfaces have no readers readerRefs=2 readers=src/plugins/compat/media-legacy-projection.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 memory-host-compatibility-aliases due=true blocker=canonical memory cache/FTS tables; retain until supported memory integrations are verified to use canonical tables without overrides and legacy table data remains preserved readerRefs=2 readers=src/plugins/compat/deprecation-marking.ts,src/plugins/contracts/extension-package-project-boundaries.test.ts removal-pending 2026-10-01 plugin-sdk-broad-runtime-barrels due=true blocker=focused plugin SDK subpaths for each runtime capability; retain until bundled and published plugins no longer import any of the seven broad barrels readerRefs=848 readers=extensions/a2a/src/http.test.ts,extensions/acpx/src/runtime.ts,extensions/acpx/src/session-owner-migration.ts,extensions/active-memory/index.ts,extensions/active-memory/query.ts removal-pending 2026-10-01 plugin-sdk-focused-compat-aliases due=true blocker=the focused replacement named by each TypeScript @deprecated annotation; retain until every enumerated alias has zero bundled and published readers readerRefs=446 readers=extensions/a2a/src/inbound.ts,extensions/acpx/index.test.ts,extensions/acpx/index.ts,extensions/acpx/register.runtime.test.ts,extensions/acpx/register.runtime.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=57 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/plugin-enabled.ts plugin-sdk entrypoints=366 supportedBundledFacade=0 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=21 wrapper shadowing guard passed. PASS package patch guard: no new pnpm patches; 10 approved patches allowlisted. src/gateway/worker-environments/worker-turn-launcher.claim-recovery.test.ts(346,43): error TS2339: Property 'appendMessage' does not exist on type 'Promise<SessionManager>'. |
| issue_implementation_status_comment | updated | #163568 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #163568 | fix_needed | planned | canonical | A narrow repair remains justified by current source. Local implementation is blocked by host permissions, not unresolved product judgment. Keep the issue open for completion-stall and writer-claim symptoms. |
| #143624 | keep_related | planned | related | Separate admission/settlement recovery investigation; the proposed cancellation fence does not prove it fixed. |
| #145588 | keep_related | planned | related | Distinct pre-execution admission mechanism; preserve the existing investigation. |
| #151311 | keep_related | planned | related | Timer-scope lifetime repair is outside the narrow wrong-run cancellation fix. |
| #156983 | keep_related | planned | related | Delivery-generation behavior is not covered by binding timeout cleanup to its original run. |
| #159692 | keep_related | planned | related | Retain separate transcript-admission and writer-claim investigation. |
| #161506 | keep_related | planned | related | Preserve the lane/admission investigation; do not change FIFO admission or timeout policy in this repair. |
| cluster:issue-openclaw-openclaw-163568 | build_fix_artifact | planned |  | The artifact is actionable, but this worker cannot implement or validate it on the read-only host. No merge, closure, or PR creation is recommended before regression and required validation pass. |

## Needs Human

- none
