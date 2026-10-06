---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-166178"
mode: "autonomous"
run_id: "37497645357"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37497645357"
head_sha: "7b767cc6bf7ed7176a94b1e8732b478ea49012d2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-10-06T17:38:20.498Z"
canonical: "https://github.com/openclaw/openclaw/issues/166178"
canonical_issue: "https://github.com/openclaw/openclaw/issues/166178"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-166178

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37497645357](https://github.com/openclaw/clawsweeper/actions/runs/37497645357)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/166178

## Summary

Verified the Teams channel-reply addressing defect on preflight main 8177060846209e40a506e442785a7736f31db674. Prepared a narrow implementation plan with contributor credit. No files or GitHub state were changed; runtime validation remains for the executor.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests [check:changed] extensions/msteams/src/action-threading.ts: extension production [check:changed] extensions/msteams/src/channel.actions.test.ts: extension test [check:changed] extensions/msteams/src/channel.ts: extension production [check:changed] extensions/msteams/src/graph-messages.read.test.ts: extension test [check:changed] extensions/msteams/src/graph-messages.ts: extension production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] line-cap growth ratchet $ node --import ./scripts/tsx.mjs scripts/check-line-cap-ratchet.mts --base origin/main [check:changed] max-lines suppression ratchet $ node --import ./scripts/tsx.mjs scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import ./scripts/tsx.mjs scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] SQLite worker ratchet $ node --import ./scripts/tsx.mjs scripts/check-database-worker-ratchet.mts --base origin/main [check:changed] test timeout race ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-timeout-race-ratchet.mts --base origin/main [check:changed] first-party mock export ratchet $ node --import ./scripts/tsx.mjs scripts/check-test-mock-exports.mts --base origin/main [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] extension test core imports $ node --import ./scripts/tsx.mjs scripts/check-no-extension-test-core-imports.ts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- extensions/msteams/src/action-threading.ts extensions/msteams/src/channel.actions.test.ts extensions/msteams/src/channel.ts extensions/msteams/src/graph-messages.read.test.ts extensions/msteams/src/graph-messages.ts [check:changed] doctor contract declaration + closure guard tests $ node --import ./scripts/tsx.mjs scripts/test-projects-serial.mts src/plugins/doctor-contract-declarations.test.ts src/plugins/doctor-contract-closure-guard.test.ts [test] starting test/vitest/vitest.plugins.config.ts [test] passed 1 Vitest shard in 7.16s [check:changed] plugin boundaries $ node --import ./scripts/tsx.mjs scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] test temp creation report (warning-only) No new test temp-directory migration warnings found. [check:changed] typecheck extensions $ node scripts/run-tsgo.mjs -p tsconfig.extensions.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/extensions.tsbuildinfo [check:changed] typecheck extension tests $ node scripts/run-tsgo.mjs -p test/tsconfig/tsconfig.extensions.test.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/extensions-test.tsbuildinfo [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] deprecated API usage $ node --import ./scripts/tsx.mjs scripts/check-deprecated-api-usage.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. .../muwykq9e-1ld | Progress: resolved 0, reused 1, downloaded 0, added 0 Packages are copied from the content-addressable store to the virtual store. Content-addressable store is at: /tmp/clawsweeper-repair-target-niPRF0/openclaw-openclaw/node_modules/.pnpm-store/v11 Virtual store is at: ../../clawsweeper-target-user-ZeIsX2/cache/pnpm/dlx/7f31525768783ede3ed02ef8ff1d2281/muwykq9e-1ld/node_modules/.pacquet Error: ERR_PNPM_NO_OFFLINE_TARBALL × adding a new package ╰─▶ Failed to fetch tarball for formatly@0.3.0 from https:// registry.npmjs.org/formatly/-/formatly-0.3.0.tgz in offline mode: snapshot not present in local store help: Drop `--offline` (or `offline=true` in pnpm-workspace.yaml) or run an online install first to populate the store. deadcode full-tree unused-export scan produced no export sections. .../muwykq9e-1lf | Progress: resolved 0, reused 1, downloaded 0, added 0 Packages are copied from the content-addressable store to the virtual store. Content-addressable store is at: /tmp/clawsweeper-repair-target-niPRF0/openclaw-openclaw/node_modules/.pnpm-store/v11 Virtual store is at: ../../clawsweeper-target-user-ZeIsX2/cache/pnpm/dlx/7f31525768783ede3ed02ef8ff1d2281/muwykq9e-1lf/node_modules/.pacquet Error: ERR_PNPM_NO_OFFLINE_TARBALL × adding a new package ╰─▶ Failed to fetch tarball for @oxc-project/types@0.143.0 from https:// registry.npmjs.org/@oxc-project/types/-/types-0.143.0.tgz in offline mode: snapshot not present in local store help: Drop `--offline` (or `offline=true` in pnpm-workspace.yaml) or run an online install first to populate the store. deadcode script unused-export scan produced no export sections. .../muwykq9e-1lh | Progress: resolved 0, reused 1, downloaded 0, added 0 Packages are copied from the content-addressable store to the virtual store. Content-addressable store is at: /tmp/clawsweeper-repair-target-niPRF0/openclaw-openclaw/node_modules/.pnpm-store/v11 Virtual store is at: ../../clawsweeper-target-user-ZeIsX2/cache/pnpm/dlx/7f31525768783ede3ed02ef8ff1d2281/muwykq9e-1lh/node_modules/ ...  and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=27 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/codex/src/app-server/run-attempt-memory.test-support.ts,extensions/memory-core/index.ts removal-pending 2026-10-01 agent-harness-terminal-result-aliases due=true blocker=AgentHarnessAttemptResult.terminal and AgentHarnessDeliveryDefaults.visibleReplies; retain until harness migration verifies that legacy terminal fields and sourceVisibleReplies are unread readerRefs=0 readers=none removal-pending 2026-10-01 message-presentation-legacy-bridges due=true blocker=MessagePresentation values and channel presentation renderers; retain until reply producers and official channel packages no longer emit or read legacy interactive replies readerRefs=162 readers=extensions/a2a/src/inbound.ts,extensions/codex/src/app-server/run-attempt-active-turn.ts,extensions/codex/src/app-server/run-attempt.final-media.test.ts,extensions/codex/src/conversation-binding-hooks.ts,extensions/codex/src/conversation-binding.ts removal-pending 2026-10-01 official-plugin-export-aliases due=true blocker=MessagePresentation renderers and host-owned timeout/runtime behavior; retain until minimum supported official plugin packages no longer import these aliases readerRefs=24 readers=extensions/discord/api.ts,extensions/discord/src/voice/audio-worker-thread.ts,extensions/qa-lab/src/crabline-discord-thread-delivery.test.ts,extensions/qa-lab/src/live-transports/discord/discord-live.runtime.ts,extensions/qa-lab/src/live-transports/discord/discord-transcripts-authorization.runtime.test.ts removal-pending 2026-10-01 plugin-sdk-channel-setup-input-fields due=true blocker=plugin-local setup input intersections that declare each owning channel field; retain each field until a new published-plugin artifact sweep finds no reader readerRefs=0 readers=none removal-pending 2026-10-01 plugin-runtime-api-compat-aliases due=true blocker=the namespaced plugin API and focused runtime methods named per surface; retain until all enumerated flat API and runtime aliases have no readers readerRefs=8 readers=extensions/buzz/src/inbound.test.ts,extensions/feishu/src/bot.broadcast.routing.test.ts,extensions/feishu/src/bot.test.ts,extensions/feishu/src/comment-handler.test.ts,extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts removal-pending 2026-10-01 plugin-provider-manifest-compat-aliases due=true blocker=manifest-owned plugin kind/setup metadata and model catalog registration; retain until providers no longer publish runtime kind or legacy catalog hooks readerRefs=0 readers=none removal-pending 2026-10-01 plugin-sdk-provider-owned-helper-shims due=true blocker=provider-local auth, model, replay, OAuth, and stream helper APIs; retain until every helper is migrated in official providers and absent from published plugins readerRefs=463 readers=extensions/agentsapi/agentsapi-harness.persistence.test.ts,extensions/agentsapi/agentsapi-harness.ts,extensions/amazon-bedrock-mantle/discovery.ts,extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts removal-pending 2026-10-01 media-legacy-projection due=true blocker=ordered `MsgContext.media` / `InboundMediaFacts[]`; typed hook `media` and `originalMedia`; `Attachment*` template variables; and `openclaw/plugin-sdk/media-local-roots`; retain until a clean published-plugin artifact sweep verifies that the legacy media surfaces have no readers readerRefs=2 readers=src/plugins/compat/media-legacy-projection.ts,test/scripts/check-deprecated-api-usage.test.ts removal-pending 2026-10-01 memory-host-compatibility-aliases due=true blocker=canonical memory cache/FTS tables; retain until supported memory integrations are verified to use canonical tables without overrides and legacy table data remains preserved readerRefs=2 readers=src/plugins/compat/deprecation-marking.ts,src/plugins/contracts/extension-package-project-boundaries.test.ts removal-pending 2026-10-01 plugin-sdk-broad-runtime-barrels due=true blocker=focused plugin SDK subpaths for each runtime capability; retain until bundled and published plugins no longer import any of the seven broad barrels readerRefs=858 readers=extensions/a2a/src/http.test.ts,extensions/acpx/src/runtime.ts,extensions/acpx/src/session-owner-migration.ts,extensions/active-memory/index.ts,extensions/active-memory/query.ts removal-pending 2026-10-01 plugin-sdk-focused-compat-aliases due=true blocker=the focused replacement named by each TypeScript @deprecated annotation; retain until every enumerated alias has zero bundled and published readers readerRefs=463 readers=extensions/a2a/src/inbound.ts,extensions/acpx/index.test.ts,extensions/acpx/index.ts,extensions/acpx/register.runtime.test.ts,extensions/acpx/register.runtime.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=57 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/active-memory/trigger-recall.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts plugin-sdk entrypoints=366 supportedBundledFacade=0 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=22 PASS package patch guard: no new pnpm patches; 10 approved patches allowlisted. Coercion helper declaration guard passed (112 allowlisted declarations). deprecated API usage guard passed |
| issue_implementation_status_comment | updated | #166178 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #166178 | fix_needed | planned | canonical | A bounded plugin bug remains. Build one implementation PR on the designated branch; leave the issue open. |
| #127605 | keep_related | planned | related | Distinct routing work; preserve its existing thread. |
| #151128 | keep_related | planned | related | Useful separate contract repair; do not adopt or merge it in this issue lane. |
| #151251 | keep_related | planned | related | Distinct enhancement and product decision outside this implementation. |
| #151382 | keep_closed | skipped | related | Historical context; no closure action. |
| #155713 | keep_closed | skipped | related | Historical context; no closure action. |
| #156378 | keep_closed | skipped | related | Historical routing caution; do not change inbound event semantics. |
| #161443 | keep_related | planned | related | Acknowledgement lifecycle support is outside this addressing fix. |
| #165794 | keep_closed | skipped | related | Implementation history, not an open repair target; preserve credit and proof limitations. |
| cluster:issue-openclaw-openclaw-166178 | build_fix_artifact | planned | canonical | Prepare one new issue implementation PR using the authorized branch and required autogenerated label. Merge and issue closure remain disabled. |

## Needs Human

- none
