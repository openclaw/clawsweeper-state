---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-62505"
mode: "autonomous"
run_id: "32271671500"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32271671500"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T16:10:50.357Z"
canonical: "https://github.com/openclaw/openclaw/issues/62505"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62505"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-62505

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32271671500](https://github.com/openclaw/clawsweeper/actions/runs/32271671500)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/62505

## Summary

Confirmed on main ae55a409: scoped background-exec completion wakes use intent:event, while the shared unscheduled policy admits only intent:immediate; with heartbeat.every=0m both scheduler and execution gates return disabled before a completion turn. A narrow fix artifact is ready, but this read-only checkout cannot create the branch, install dependencies, run tests, or inspect required sibling ../codex source.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #62505 | fix_needed | planned | canonical | Real provider-independent regression; no open viable PR exists. |
| cluster:issue-openclaw-openclaw-62505 | build_fix_artifact | planned | canonical | Narrow replacement plan preserves configured-agent, exact-session, global-enable, busy, and completion-preflight guards. |
| #67913 | keep_closed | skipped | related | Already closed; do not mutate. |
| #76877 | keep_closed | skipped | independent | Already closed and independent. |

## Needs Human

- none
