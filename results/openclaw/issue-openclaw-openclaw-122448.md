---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122448"
mode: "autonomous"
run_id: "31566125123"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31566125123"
head_sha: "408c28329c188c15e2d3dbefe98a2393cbca4989"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-12T05:27:21.728Z"
canonical: "https://github.com/openclaw/openclaw/issues/122448"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122448"
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

# issue-openclaw-openclaw-122448

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31566125123](https://github.com/openclaw/clawsweeper/actions/runs/31566125123)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122448

## Summary

#122448 is a current, narrow diagnostics bug on main dd57cfb6c150b8201680b8e8930de0403d71856c. The implementation is blocked only because this worker checkout is read-only and lacks the tsx dependency required to run Vitest; a tested new-PR artifact is ready for the executor.

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
| #122448 | fix_needed | planned | canonical | Repair the classifier owner: fresh, explicitly recorded queued progress with no active-work marker must be non-recovery long-running; missing or stale progress remains recoverable stuck state. |
| cluster:issue-openclaw-openclaw-122448 | build_fix_artifact | blocked | canonical | A writable executor with dependencies installed must apply and validate this narrow artifact before opening the single credited autofix PR. |

## Needs Human

- none
