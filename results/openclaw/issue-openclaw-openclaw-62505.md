---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-62505"
mode: "autonomous"
run_id: "32242591030"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32242591030"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T10:35:47.343Z"
canonical: "https://github.com/openclaw/openclaw/issues/62505"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62505"
canonical_pr: null
actions_total: 6
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32242591030](https://github.com/openclaw/clawsweeper/actions/runs/32242591030)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/62505

## Summary

Latest main source still routes completed node execs as targeted `exec-event` wakes, but the shared unscheduled-wake policy accepts only immediate sources and excludes `exec-event`; with `heartbeat.every: "0m"`, scheduler and execution gates return `disabled`. No edits or tests ran: this worker has a read-only checkout and the mandatory sibling `../codex` source checkout is unavailable.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #62505 | fix_needed | planned | canonical | Narrow bug-only repair is indicated, but local implementation and validation are blocked by the read-only sandbox and missing required ../codex checkout. |
| cluster:issue-openclaw-openclaw-62505 | build_fix_artifact | planned | canonical | Create one narrow branch from current main once a writable checkout and the required sibling Codex source are available. |
| #67913 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #76877 | keep_closed | skipped | independent | Already closed and outside this repair invariant. |
| #79869 | route_security | planned | security_sensitive | Quarantined independently; it does not block the ordinary #62505 repair. |
| #109738 | keep_independent | planned | independent | Open but independent from the heartbeat-cadence dispatch defect. |

## Needs Human

- none
