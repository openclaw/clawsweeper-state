---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122616"
mode: "autonomous"
run_id: "31599694581"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31599694581"
head_sha: "ac340908bf694c902f5a673374be1639ef9f220f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-12T13:18:01.787Z"
canonical: "https://github.com/openclaw/openclaw/issues/122616"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122616"
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

# issue-openclaw-openclaw-122616

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31599694581](https://github.com/openclaw/clawsweeper/actions/runs/31599694581)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122616

## Summary

Source inspection confirms the canonical bug on main. Implementation is narrowly planned but blocked in this read-only checkout: the required test runner cannot load `tsx`, so no branch edit or validation can be completed here.

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
| #122616 | fix_needed | planned | canonical | The active agent’s scoped media roots must be threaded through CLI image hydration; do not weaken the unscoped sibling-workspace guard. |
| cluster:issue-openclaw-openclaw-122616 | build_fix_artifact | blocked | canonical | Executor must apply the artifact on clawsweeper/issue-openclaw-openclaw-122616 after restoring dependencies and write access. |

## Needs Human

- none
