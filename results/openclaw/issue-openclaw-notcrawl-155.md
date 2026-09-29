---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-155"
mode: "autonomous"
run_id: "36510570912"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36510570912"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-29T02:04:19.311Z"
canonical: "https://github.com/openclaw/notcrawl/issues/155"
canonical_issue: "https://github.com/openclaw/notcrawl/issues/155"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-notcrawl-155

Repo: openclaw/notcrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36510570912](https://github.com/openclaw/clawsweeper/actions/runs/36510570912)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/notcrawl/issues/155

## Summary

Issue #155 remains valid on main 204af2f8be192709ee3f0acaef120d583465ab3c. A focused fix is defined, but the read-only checkout prevents creating the regression test, changing code, or validating a PR branch.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #155 | fix_needed | planned | canonical | The existing API table omission needs a narrow export and search fix. |
| #101 | keep_related | planned | related | The table fix does not settle #101's broader output policy. |
| cluster:issue-openclaw-notcrawl-155 | build_fix_artifact | blocked |  | Implementation is blocked by the read-only checkout. A writable checkout is required to establish the failing regression, apply the fix, and validate the branch. |

## Needs Human

- none
