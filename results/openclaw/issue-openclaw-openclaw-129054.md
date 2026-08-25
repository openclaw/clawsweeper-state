---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-129054"
mode: "autonomous"
run_id: "32818179703"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32818179703"
head_sha: "56591f8ebaf3e958cf659786adeb69dd2d095046"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-25T07:48:03.149Z"
canonical: "https://github.com/openclaw/openclaw/issues/129054"
canonical_issue: "https://github.com/openclaw/openclaw/issues/129054"
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

# issue-openclaw-openclaw-129054

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32818179703](https://github.com/openclaw/clawsweeper/actions/runs/32818179703)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/129054

## Summary

#129054 remains a narrow, source-reproducible bug on main eb1929c5: the published sessions_search schema accepts an empty query, while execution later rejects it. A scoped fix plan is ready, but implementation is blocked because this read-only checkout lacks dependencies (tsx) and the mandatory sibling Codex source is absent; no branch or PR was changed.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/agent-tools.deferred-followup-guidance.test.ts: core test [check:changed] src/agents/agent-tools.deferred-followup.ts: core production [check:changed] src/agents/tool-description-presets.test.ts: core test [check:changed] src/agents/tool-description-presets.ts: core production [check:changed] src/agents/tools/sessions-search-tool.test.ts: core test [check:changed] src/agents/tools/sessions-search-tool.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] max-lines suppression ratchet $ node --import tsx scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import tsx scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import tsx scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import tsx scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import tsx scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import tsx scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] coercion helper declaration guard $ node --import tsx scripts/check-coercion-helper-declarations.mts [check:changed] dependency pin guard $ node --import tsx scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- src/agents/agent-tools.deferred-followup-guidance.test.ts src/agents/agent-tools.deferred-followup.ts src/agents/tool-description-presets.test.ts src/agents/tool-description-presets.ts src/agents/tools/sessions-search-tool.test.ts src/agents/tools/sessions-search-tool.ts [check:changed] deprecated API usage $ node --import tsx scripts/check-deprecated-api-usage.mts [check:changed] plugin boundaries $ node --import tsx scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] wrapper shadowing $ node --import tsx scripts/check-wrapper-shadowing.mts [check:changed] package patch guard $ node --import tsx scripts/check-package-patches.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. [ERR_PNPM_NO_OFFLINE_META] Failed to resolve knip@6.32.2 in package mirror /tmp/clawsweeper-target-user-SsdprL/cache/pnpm/v11/metadata-full-filtered/registry.npmjs.org/knip.jsonl [check:changed] summary 417ms ok conflict markers 21.72s ok max-lines suppression ratchet 9.56s ok assertion SAFETY comment ratchet 373ms ok changelog attributions 368ms ok doctor deprecation registry 418ms ok guarded extension wildcard re-exports 382ms ok plugin-sdk wildcard re-exports 393ms ok duplicate scan target coverage 11.23s ok coercion helper declaration guard 487ms ok dependency pin guard 378ms ok format changed files 6.17s ok deprecated API usage 1.16s ok plugin boundaries 4.86s ok wrapper shadowing 814ms ok package patch guard 568ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) max-lines ratchet OK: 897 grandfathered suppressions. OPENCLAW_* count 501/501 assertion SAFETY ratchet OK: 4271 files, 13419 grandfathered assertions. [doctor-deprecation-registry] OK as of 2026-08-25 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok Coercion helper declaration guard passed (106 allowlisted declarations). PASS direct dependency pin guard: checked 622 directly declared dependency specs across 177 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 16ms on 6 files using 4 threads. deprecated API usage guard passed Plugin Boundary Report compat deprecated=23 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=44 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=23 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/memory-get-corpus.test.ts,extensions/memory-core/src/public-artifacts.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=57 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=336 supportedBundledFacade=2 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=10 wrapper shadowing guard passed. PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #129054 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #129054 | fix_needed | planned | canonical | Repair the public schema and model guidance at the sessions_search owner boundary; no config, persistence, or product-policy change is needed. |
| cluster:issue-openclaw-openclaw-129054 | build_fix_artifact | planned | canonical | The implementation path is narrow and ready for the deterministic executor. |
| cluster:issue-openclaw-openclaw-129054 | open_fix_pr | blocked | canonical | Provision a writable checkout with dependencies and the required sibling Codex checkout, then apply the attached artifact and validations. |

## Needs Human

- none
