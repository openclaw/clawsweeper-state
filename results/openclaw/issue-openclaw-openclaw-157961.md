---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157961"
mode: "autonomous"
run_id: "36102569462"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36102569462"
head_sha: "3d8d89c12d45e24c0922d95e4a11f410869dc12e"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-25T06:55:17.751Z"
canonical: "https://github.com/openclaw/openclaw/issues/157961"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157961"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-157961

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36102569462](https://github.com/openclaw/clawsweeper/actions/runs/36102569462)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/157961

## Summary

Current main retains a source-proven silent failure: a non-definitive Check outcome replay error leaves the saved operation in place but clears the visible chat error. The successful replay path is covered by existing tests. The read-only checkout prevented adding the required failing rendered regression, implementing the fix, and validating a PR branch.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #157961 | fix_needed | planned | canonical | A narrow Control UI bug fix is needed. Keep the issue open while its implementation is validated. |
| cluster:issue-openclaw-openclaw-157961 | build_fix_artifact | blocked |  | Implementation requires a writable target checkout. First make the rendered Check outcome regression fail on current main, then repair and validate the branch. |

## Needs Human

- none
