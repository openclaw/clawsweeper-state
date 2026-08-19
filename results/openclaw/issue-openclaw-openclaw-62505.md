---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-62505"
mode: "autonomous"
run_id: "32241471395"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32241471395"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T10:23:06.659Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32241471395](https://github.com/openclaw/clawsweeper/actions/runs/32241471395)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/62505

## Summary

#62505 remains the canonical report. Current main’s exec completion producer emits a targeted `exec-event` with `intent: "event"`, but the shared unscheduled-wake policy accepts only `intent: "immediate"` and has no exec-event case; both the scheduler and execution-stage cadence gates therefore reject it when `heartbeat.every` is `0m`. No implementation branch was created: this worker is read-only, dependencies cannot be installed, and the mandatory sibling ../codex source is absent and cannot be cloned on the read-only filesystem.

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
| #62505 | fix_needed | blocked | canonical | The narrow repair is source-supported, but this worker cannot write the branch, install its test dependencies, or satisfy the required direct Codex-source gate. |
| #67913 | keep_closed | skipped | superseded | Already closed; do not mutate. |
| #76877 | keep_closed | skipped | independent | Already closed and outside this root cause. |
| #79869 | route_security | planned | security_sensitive | Quarantine this exact ref for central OpenClaw security handling; no GitHub mutation is planned. |
| #109738 | keep_independent | planned | independent | Open but not part of the disabled-heartbeat completion-dispatch defect. |
| cluster:issue-openclaw-openclaw-62505 | build_fix_artifact | planned | canonical | A writable executor with ../codex available can apply this narrow repair and run the required regression proof. |

## Needs Human

- none
