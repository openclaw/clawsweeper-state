---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-129118"
mode: "autonomous"
run_id: "32822804057"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32822804057"
head_sha: "56591f8ebaf3e958cf659786adeb69dd2d095046"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-25T08:47:50.877Z"
canonical: "https://github.com/openclaw/openclaw/issues/129118"
canonical_issue: "https://github.com/openclaw/openclaw/issues/129118"
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

# issue-openclaw-openclaw-129118

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32822804057](https://github.com/openclaw/clawsweeper/actions/runs/32822804057)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/129118

## Summary

#129118 remains the canonical narrow RTL Markdown Preview defect on main ebf07e56. A new credited fix PR is appropriate, but this worker cannot edit or validate it because the sandbox is read-only and dependencies are incomplete.

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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/pages/chat/components/chat-sidebar-content.ts: UI production [check:changed] ui/src/pages/chat/components/chat-sidebar-scroll.browser.test.ts: UI test [check:changed] ui/src/styles/sidebar-markdown.css: UI production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] max-lines suppression ratchet $ node --import tsx scripts/check-max-lines-ratchet.mts --base origin/main [check:changed] assertion SAFETY comment ratchet $ node --import tsx scripts/check-assertion-safety-ratchet.mts --base origin/main [check:changed] changelog attributions $ node --import tsx scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import tsx scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import tsx scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import tsx scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] coercion helper declaration guard $ node --import tsx scripts/check-coercion-helper-declarations.mts [check:changed] dependency pin guard $ node --import tsx scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- ui/src/pages/chat/components/chat-sidebar-content.ts ui/src/pages/chat/components/chat-sidebar-scroll.browser.test.ts ui/src/styles/sidebar-markdown.css [check:changed] package patch guard $ node --import tsx scripts/check-package-patches.mts [check:changed] dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) deadcode production unused-export scan produced no export sections. [ERR_PNPM_NO_OFFLINE_META] Failed to resolve knip@6.32.2 in package mirror /tmp/clawsweeper-target-user-nVxxLz/cache/pnpm/v11/metadata-full-filtered/registry.npmjs.org/knip.jsonl [check:changed] summary 446ms ok conflict markers 19.31s ok max-lines suppression ratchet 9.48s ok assertion SAFETY comment ratchet 376ms ok changelog attributions 362ms ok doctor deprecation registry 426ms ok guarded extension wildcard re-exports 382ms ok plugin-sdk wildcard re-exports 428ms ok duplicate scan target coverage 11.06s ok coercion helper declaration guard 384ms ok dependency pin guard 417ms ok format changed files 593ms ok package patch guard 393ms failed:1 dead export scan (skip with OPENCLAW_CHECK_CHANGED_SKIP_DEADCODE=1) [check:changed] FAILED (exit 1) max-lines ratchet OK: 897 grandfathered suppressions. OPENCLAW_* count 501/501 assertion SAFETY ratchet OK: 4270 files, 13412 grandfathered assertions. [doctor-deprecation-registry] OK as of 2026-08-25 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok Coercion helper declaration guard passed (106 allowlisted declarations). PASS direct dependency pin guard: checked 622 directly declared dependency specs across 177 tracked package manifests; 0 violations. Checking formatting... All matched files use the correct format. Finished in 78ms on 3 files using 4 threads. PASS package patch guard: no new pnpm patches; 2 approved patches allowlisted. [ELIFECYCLE] Command failed with exit code 1. |
| issue_implementation_status_comment | updated | #129118 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #129118 | keep_canonical | planned | canonical | Keep the issue open as the sole implementation and validation thread. |
| #129118 | fix_needed | planned | canonical | A narrow owner-boundary repair and browser regression are defined; implementation is blocked only by this worker environment. |
| cluster:issue-openclaw-openclaw-129118 | build_fix_artifact | blocked |  | Return an executable narrow artifact, but do not claim a locally repaired or validated branch from a read-only checkout. |

## Needs Human

- none
