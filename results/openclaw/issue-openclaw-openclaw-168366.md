---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-168366"
mode: "autonomous"
run_id: "38041745857"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/38041745857"
head_sha: "f9f7db87cd8dbb83d50ba6e52c78b476b2c986e0"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-10T11:18:33.157Z"
canonical: "https://github.com/openclaw/openclaw/issues/168366"
canonical_issue: "https://github.com/openclaw/openclaw/issues/168366"
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

# issue-openclaw-openclaw-168366

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/38041745857](https://github.com/openclaw/clawsweeper/actions/runs/38041745857)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/168366

## Summary

Source inspection supports a narrow parser/renderer repair on preflight main db6449d3f6091740dbddcf02fdc0e34dc94ca424. Implementation and executable reproduction are blocked by the read-only workspace and missing dependencies. No code or GitHub changes were made; a conditional fix artifact is ready for the executor.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, extensions, extensionTests [check:changed] extensions/telegram/src/rich-blocks-list.ts: extension production [check:changed] extensions/telegram/src/rich-blocks.test.ts: extension test [check:changed] extensions/telegram/src/rich-blocks.ts: extension production [check:changed] packages/markdown-core/src/ir-metadata.ts: core production [check:changed] packages/markdown-core/src/ir.test.ts: core test [check:changed] packages/markdown-core/src/ir.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] line-cap growth ratchet $ node --import ./scripts/tsx.mjs scripts/check-line-cap-ratchet.mts --base origin/main [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] SQLite worker ratchet $ node --import ./scripts/tsx.mjs scripts/check-database-worker-ratchet.mts --base origin/main [check:changed] test timeout race ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-timeout-race-ratchet.mts --base origin/main [check:changed] first-party mock export ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-mock-exports.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] extension test core imports $ node --import ./scripts/tsx.mjs scripts/check-no-extension-test-core-imports.ts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- extensions/telegram/src/rich-blocks-list.ts extensions/telegram/src/rich-blocks.test.ts extensions/telegram/src/rich-blocks.ts packages/markdown-core/src/ir-metadata.ts packages/markdown-core/src/ir.test.ts packages/markdown-core/src/ir.ts [check:changed] doctor contract declaration + closure guard tests $ node --import ./scripts/tsx.mjs scripts/test-projects-serial.mts src/plugins/doctor-contract-declarations.test.ts src/plugins/doctor-contract-closure-guard.test.ts [test] starting test/vitest/vitest.plugins.config.ts [test] passed 1 Vitest shard in 4.38s [check:changed] config docs baseline $ node --import ./scripts/tsx.mjs scripts/generate-config-doc-baseline.ts --check [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] test temp creation report (warning-only) No new test temp-directory migration warnings found. [check:changed] core tsgo graph boundary $ node --import ./scripts/tsx.mjs scripts/check-tsgo-core-boundary.mts [check:changed] Control UI i18n catalog $ pnpm ui:i18n:verify $ node --import ./scripts/tsx.mjs scripts/control-ui-i18n-verify.ts verify [check:changed] typecheck core $ node scripts/run-tsgo.mjs -p tsconfig.core.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/core.tsbuildinfo [check:changed] typecheck core tests $ node scripts/run-tsgo-core-test-shards.mjs [tsgo:agents-root] passed in 40.1s [tsgo:agents-other] passed in 41.8s [tsgo:agents-tools] passed in 39.1s [tsgo:gateway-root] passed in 47.6s [tsgo:gateway-server] passed in 48.2s [tsgo:gateway-other] passed in 39.7s [tsgo:infra] passed in 39.0s [tsgo:state-logging] passed in 40.4s [tsgo:commands] passed in 41.0s [tsgo:plugins-platform] passed in 42.2s [tsgo:config-cli] passed in 41.0s [tsgo:messaging] passed in 38.4s [tsgo:services] passed in 39.5s [tsgo:other] passed in 40.7s [tsgo:ui-pages] passed in 47.2s [tsgo:ui-e2e] passed in 44.3s [tsgo:ui-other] passed in 42.3s [tsgo:packages] passed in 35.8s [tsgo:plugin-sdk] passed in 38.1s [tsgo:commands-doctor] passed in 36.5s [tsgo:cli-update] passed in 36.8s [tsgo:gateway-methods] passed in 45.1s [tsgo:ui-chat] passed in 45.2s [tsgo:agents-sessions] passed in 40.7s [tsgo:services-cron] passed in 34.7s [tsgo:ui-app] passed in 42.1s [tsgo:ui-components] passed in 42.9s [check:changed] typecheck extensions $ node scripts/run-tsgo.mjs -p tsconfig.extensions.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/extensions.tsbuildinfo [check:changed] typecheck extension tests $ node scripts/run-tsgo.mjs -p test/tsconfig/tsconfig.extensions.test.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/extensions-test.tsbuildinfo [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] deprecated API usage $ node --import ./scripts/tsx.mjs scripts/check-deprecated-api-usage.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) production unused-export scan: Unused exports are not allowed: packages/markdown-core/src/ir-metadata.ts: MarkdownListItemMarker src/gateway/control-ui-public-session-render.ts: PUBLIC_SESSION_ENTRY_SCRIPT Delete the exports or model their real production consumers in Knip. full-tree unused-export scan: Unused exports are not allowed: packages/markdown-core/src/ir-metadata.ts: MarkdownListItemMarker src/gateway/live-agent-probes.ts: isClaudeLikeLiveAgent Delete the exports or model their real pr ... rc/app-server/attempt-context.test.ts,extensions/codex/src/app-server/run-attempt-memory.test-support.ts,extensions/memory-core/index.ts removal-pending 2026-10-01 agent-harness-terminal-result-aliases due=true blocker=AgentHarnessAttemptResult.terminal and AgentHarnessDeliveryDefaults.visibleReplies; retain until harness migration verifies that legacy terminal fields and sourceVisibleReplies are unread readerRefs=0 readers=none removal-pending 2026-10-01 message-presentation-legacy-bridges due=true blocker=MessagePresentation values and channel presentation renderers; retain until reply producers and official channel packages no longer emit or read legacy interactive replies readerRefs=161 readers=extensions/a2a/src/inbound.ts,extensions/codex/src/app-server/run-attempt-active-turn.ts,extensions/codex/src/app-server/run-attempt.final-media.test.ts,extensions/codex/src/conversation-binding-hooks.ts,extensions/codex/src/conversation-binding.ts removal-pending 2026-10-01 official-plugin-export-aliases due=true blocker=MessagePresentation renderers and host-owned timeout/runtime behavior; retain until minimum supported official plugin packages no longer import these aliases readerRefs=21 readers=extensions/discord/api.ts,extensions/discord/src/voice/audio-worker-thread.ts,extensions/qa-lab/src/crabline-discord-thread-delivery.test.ts,extensions/qa-lab/src/live-transports/discord/discord-live.runtime.ts,extensions/qa-lab/src/live-transports/discord/discord-transcripts-authorization.runtime.test.ts removal-pending 2026-10-01 plugin-sdk-channel-setup-input-fields due=true blocker=plugin-local setup input intersections that declare each owning channel field; retain each field until a new published-plugin artifact sweep finds no reader readerRefs=0 readers=none removal-pending 2026-10-01 plugin-runtime-api-compat-aliases due=true blocker=the namespaced plugin API and focused runtime methods named per surface; retain until all enumerated flat API and runtime aliases have no readers readerRefs=8 readers=extensions/buzz/src/inbound.test.ts,extensions/feishu/src/bot.broadcast.routing.test.ts,extensions/feishu/src/bot.test.ts,extensions/feishu/src/comment-handler.test.ts,extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts removal-pending 2026-10-01 plugin-provider-manifest-compat-aliases due=true blocker=manifest-owned plugin kind/setup metadata and model catalog registration; retain until providers no longer publish runtime kind or legacy catalog hooks readerRefs=0 readers=none removal-pending 2026-10-01 plugin-sdk-provider-owned-helper-shims due=true blocker=provider-local auth, model, replay, OAuth, and stream helper APIs; retain until every helper is migrated in official providers and absent from published plugins readerRefs=467 readers=extensions/agentsapi/agentsapi-harness.lifecycle.test-helpers.ts,extensions/agentsapi/agentsapi-harness.persistence.test.ts,extensions/agentsapi/agentsapi-harness.ts,extensions/agentsapi/native-session-binding.test-api.ts,extensions/amazon-bedrock-mantle/discovery.ts removal-pending 2026-10-01 media-legacy-projection due=true blocker=ordered `MsgContext.media` / `InboundMediaFacts[]`; typed hook `media` and `originalMedia`; `Attachment*` template variables; and `openclaw/plugin-sdk/media-local-roots`; retain until a clean published-plugin artifact sweep verifies that the legacy media surfaces have no readers readerRefs=2 readers=src/plugins/compat/media-legacy-projection.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 memory-host-compatibility-aliases due=true blocker=canonical memory cache/FTS tables; retain until supported memory integrations are verified to use canonical tables without overrides and legacy table data remains preserved readerRefs=2 readers=src/plugins/compat/deprecation-marking.ts,src/plugins/contracts/extension-package-project-boundaries.test.ts removal-pending 2026-10-01 plugin-sdk-broad-runtime-barrels due=true blocker=focused plugin SDK subpaths for each runtime capability; retain until bundled and published plugins no longer import any of the seven broad barrels readerRefs=849 readers=extensions/a2a/src/http.test.ts,extensions/acpx/src/runtime.ts,extensions/acpx/src/session-owner-migration.ts,extensions/active-memory/index.ts,extensions/active-memory/query.ts removal-pending 2026-10-01 plugin-sdk-focused-compat-aliases due=true blocker=the focused replacement named by each TypeScript @deprecated annotation; retain until every enumerated alias has zero bundled and published readers readerRefs=463 readers=extensions/a2a/src/inbound.ts,extensions/acpx/index.test.ts,extensions/acpx/index.ts,extensions/acpx/register.runtime.test.ts,extensions/acpx/register.runtime.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=56 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/active-memory/trigger-recall.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts plugin-sdk entrypoints=366 supportedBundledFacade=0 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=26 PASS package patch guard: no new pnpm patches; 9 approved patches allowlisted. control-ui-i18n: raw-copy: baseline entries=84 control-ui-i18n: source: keys=10447 literal_references=8290 template_prefix_references=296 control-ui-i18n: plugin=workboard keys=372 locales=20 unused_translations=1180 Coercion helper declaration guard passed (112 allowlisted declarations). deprecated API usage guard passed [deadcode] Knip script unused-export scan passed with 0 entries. |
| issue_implementation_status_comment | updated | #168366 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #168366 | fix_needed | planned | canonical | Keep the issue open. A focused bug fix is justified by source evidence, but the executor must reproduce both failures before editing or opening a PR. |
| cluster:issue-openclaw-openclaw-168366 | build_fix_artifact | planned |  | The planned repair is narrow and non-security. A writable, dependency-ready executor must establish failing regressions, implement, validate, review, and obtain the required live proof. |

## Needs Human

- none
