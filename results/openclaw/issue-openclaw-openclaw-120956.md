---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120956"
mode: "autonomous"
run_id: "31314135438"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31314135438"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-09T13:24:57.964Z"
canonical: "https://github.com/openclaw/openclaw/issues/120956"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120956"
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

# issue-openclaw-openclaw-120956

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31314135438](https://github.com/openclaw/clawsweeper/actions/runs/31314135438)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/120956

## Summary

Confirmed #120956 on main d5809b40: an oversized persisted SQLite notification throws during ready-card dispatch before worker start. The checkout is read-only, so no branch, patch, test run, or PR can be produced here; a narrow, executable fix artifact is ready.

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
| #120956 | fix_needed | planned | canonical | Plugin-owned persisted-state repair is valid and narrow; implementation is blocked only by the read-only checkout. |
| cluster:issue-openclaw-openclaw-120956 | build_fix_artifact | planned |  | Prepared narrow repair plan; executor must apply it on clawsweeper/issue-openclaw-openclaw-120956. |

## Needs Human

- none
