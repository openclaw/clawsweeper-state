---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128826"
mode: "autonomous"
run_id: "32835796158"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32835796158"
head_sha: "d61664303d1bcab286362c8386cc2b5cb77e2c7f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-25T11:33:28.721Z"
canonical: "https://github.com/openclaw/openclaw/issues/128826"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128826"
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

# issue-openclaw-openclaw-128826

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32835796158](https://github.com/openclaw/clawsweeper/actions/runs/32835796158)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/128826

## Summary

Current-main core evidence matches the report: a configured Codex route reaches the bundled-only `codex/api.js` loader, while the root package excludes `dist/extensions/codex/**`. A narrow external-plugin-root repair is identified, but its executable PR path is blocked because the required sibling `../codex` source is absent and cannot be cloned in this read-only worker.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/flows/bundled-health-checks.test.ts: core test [check:changed] src/flows/bundled-health-checks.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] max-lines suppression ratchet $ node --import tsx scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import tsx scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import tsx scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import tsx scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import tsx scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import tsx scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] coercion helper declaration guard $ node --import tsx scripts/check-coercion-helper-declarations.mts [check:changed] dependency pin guard $ node --import tsx scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- src/flows/bundled-health-checks.test.ts src/flows/bundled-health-checks.ts [check:changed] deprecated API usage $ node --import tsx scripts/check-deprecated-api-usage.mts [check:changed] plugin boundaries $ node --import tsx scripts/plugin-boundary-report.ts --summary --fail-on-eligible-compat [check:changed] wrapper shadowing $ node --import tsx scripts/check-wrapper-shadowing.mts [check:changed] package patch guard $ node --import tsx scripts/check-package-patches.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. [ERR_PNPM_NO_OFFLINE_META] Failed to resolve knip@6.32.2 in package mirror /tmp/clawsweeper-target-user-RgRmEv/cache/pnpm/v11/metadata-full-filtered/registry.npmjs.org/knip.jsonl [check:changed] summary 685ms ok conflict markers 26.73s ok max-lines suppression ratchet 10.92s ok assertion SAFETY comment ratchet 363ms ok changelog attributions 369ms ok doctor deprecation registry 363ms ok guarded extension wildcard re-exports 363ms ok plugin-sdk wildcard re-exports 399ms ok duplicate scan target coverage 10.67s ok coercion helper declaration guard 442ms ok dependency pin guard 392ms ok format changed files 5.85s ok deprecated API usage 1.05s ok plugin boundaries 4.07s ok wrapper shadowing 640ms ok package patch guard 458ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) max-lines ratchet OK: 897 grandfathered suppressions. OPENCLAW_* count 501/501 assertion SAFETY ratchet OK: 4268 files, 13402 grandfathered assertions. [doctor-deprecation-registry] OK as of 2026-08-25 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok Coercion helper declaration guard passed (106 allowlisted declarations). PASS direct dependency pin guard: checked 622 directly declared dependency specs across 177 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 27ms on 2 files using 4 threads. deprecated API usage guard passed Plugin Boundary Report compat deprecated=23 eligibleForRemoval=0 removalPending=3 removalPendingDue=0 removal-pending 2026-09-30 plugin-sdk-media-understanding-public-demotion due=false blocker=`api.registerMediaUnderstandingProvider(...)` with provider-owned request helpers and types from `openclaw/plugin-sdk/plugin-entry`; retain the public subpath through the 2026-09-30 window while official plugin consumers migrate readerRefs=44 readers=extensions/anthropic/media-understanding-provider.ts,extensions/browser/src/browser/vision.ts,extensions/browser/src/sdk-setup-tools.ts,extensions/codex/media-understanding-provider.ts,extensions/deepgram/audio.ts removal-pending 2026-09-30 plugin-sdk-memory-host-core-public-demotion due=false blocker=host-prepared memory prompts via `openclaw/plugin-sdk/core` and memory capability registration through the injected plugin API; retain the facade through the 2026-09-30 window and until a focused public-artifact read seam exists readerRefs=23 readers=extensions/active-memory/index.test.ts,extensions/active-memory/index.ts,extensions/codex/src/app-server/attempt-context.test.ts,extensions/memory-core/src/memory-get-corpus.test.ts,extensions/memory-core/src/public-artifacts.ts removal-pending 2026-12-01 plugin-sdk-plugin-config-runtime-public-demotion due=false blocker=`api.pluginConfig`, runtime tool context config, and focused `config-contracts`, `runtime-config-snapshot`, or `config-mutation` subpaths; retain the public subpath through the 2026-12-01 window while official plugin consumers migrate readerRefs=58 readers=extensions/active-memory/index.ts,extensions/active-memory/session-policy.ts,extensions/amazon-bedrock-mantle/register.sync.runtime.ts,extensions/amazon-bedrock/register.sync.runtime.ts,extensions/browser/src/sdk-config.ts plugin-sdk entrypoints=336 supportedBundledFacade=2 publicPluginOwned=1 memory-host-sdk implementation=private-package-core-integrated private=true exports=10 sourceBridgeFiles=0 coreReferenceFiles=10 wrapper shadowing guard passed. PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #128826 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #128826 | fix_needed | planned | canonical | The open canonical issue is a narrow owner-boundary defect. Preserve the Codex doctor check by selecting the manifest record and using its trusted external plugin root when Codex is externalized; do not replace the failure with a silent no-op. |
| cluster:issue-openclaw-openclaw-128826 | build_fix_artifact | blocked | canonical | Blocked only on the repository-mandated direct Codex source inspection; provide a readable sibling checkout or an executor environment that can clone it, then apply the narrow new-PR plan. |

## Needs Human

- none
