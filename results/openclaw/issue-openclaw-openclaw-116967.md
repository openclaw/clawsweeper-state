---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-116967"
mode: "autonomous"
run_id: "30652172891"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30652172891"
head_sha: "3637a9424ec20396a3903cd79cffb2e4e360bc28"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-07-31T17:49:55.195Z"
canonical: "https://github.com/openclaw/openclaw/issues/116967"
canonical_issue: "https://github.com/openclaw/openclaw/issues/116967"
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

# issue-openclaw-openclaw-116967

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30652172891](https://github.com/openclaw/clawsweeper/actions/runs/30652172891)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/116967

## Summary

Verified the reported defect on current main 8a4da1d19fadb839d59bd581e8b2403460c873c9. The replay-invalid classification is computed before formatting, but generic parsed invalid_request_error formatting returns before the replay recovery copy; the silent-error retry path also needs an explicit deterministic-failure exclusion. This worker checkout is read-only, so no branch edits or local test execution can be completed here; a narrow executable fix artifact is prepared.

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
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 |
| issue_implementation_status_comment | updated | #116967 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #116967 | keep_canonical | planned | canonical | The issue is a bounded existing-behavior bug with one clear canonical implementation path. |
| #116967 | fix_needed | blocked | canonical | Implementation is clear and narrow, but this worker cannot modify the read-only checkout. The executor should apply the prepared new-fix-PR artifact. |
| cluster:issue-openclaw-openclaw-116967 | build_fix_artifact | planned | canonical | Create one narrow PR from clawsweeper/issue-openclaw-openclaw-116967; do not merge or close the issue from this lane. |

## Needs Human

- none
