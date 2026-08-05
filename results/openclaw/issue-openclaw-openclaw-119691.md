---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119691"
mode: "autonomous"
run_id: "31035673723"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31035673723"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-05T19:06:29.324Z"
canonical: "https://github.com/openclaw/openclaw/issues/119691"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119691"
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

# issue-openclaw-openclaw-119691

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31035673723](https://github.com/openclaw/clawsweeper/actions/runs/31035673723)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119691

## Summary

#119691 is a confirmed P0 data-loss defect on main e69c3df. Orphan reconciliation descends into a Git worktree placed directly under the worktrees root and deletes its nested project directories. Build a narrow credited fix PR; do not merge or close the issue.

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
| #119691 | fix_needed | planned | canonical | Live hydrated issue is open, canonical, non-security-sensitive, and describes a source-confirmed destructive path. No viable implementation PR is hydrated. |
| cluster:issue-openclaw-openclaw-119691 | build_fix_artifact | planned | canonical | A narrow non-security fix is appropriate and allowed by the job. |
| cluster:issue-openclaw-openclaw-119691 | open_fix_pr | planned | canonical | The job permits a single implementation PR but prohibits merge and close actions. |

## Needs Human

- none
