---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119578"
mode: "autonomous"
run_id: "31004599505"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31004599505"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-05T12:52:07.124Z"
canonical: "https://github.com/openclaw/openclaw/issues/119578"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119578"
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

# issue-openclaw-openclaw-119578

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31004599505](https://github.com/openclaw/clawsweeper/actions/runs/31004599505)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119578

## Summary

Current main still parses the SQLite chat-history candidate tail before enforcing its byte budget. A narrow, chat-only metadata-first repair is warranted; it must preserve oversized placeholders, reset-aware sequence IDs, NO_REPLY filtering, and pagination.

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
| execute_fix | blocked |  |  | Codex fix worker timed out after 1800000ms |
| issue_implementation_status_comment | updated | #119578 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119578 | fix_needed | planned | canonical | The issue is source-reproducible on main and has a narrow canonical owner-boundary repair. |
| cluster:issue-openclaw-openclaw-119578 | build_fix_artifact | planned | canonical | A focused new PR can repair only chat.history without changing generic reader or session-memory semantics. |
| cluster:issue-openclaw-openclaw-119578 | open_fix_pr | planned | canonical | The job permits a new implementation PR but not merge or closure. |

## Needs Human

- none
