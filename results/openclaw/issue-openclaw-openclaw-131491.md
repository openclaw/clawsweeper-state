---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-131491"
mode: "autonomous"
run_id: "33148139995"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33148139995"
head_sha: "af8f89fe69e1e35009591a640c55d12a4a083cf9"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-28T06:42:40.043Z"
canonical: "#131491"
canonical_issue: "#131491"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-131491

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33148139995](https://github.com/openclaw/clawsweeper/actions/runs/33148139995)

Workflow conclusion: success

Worker result: blocked

Canonical: #131491

## Summary

No implementation PR is justified: current main already retains a default announce one-shot whose delivery is skipped solely for staleness. The requested default-path regression would pass on main, not fail. The remaining explicit bestEffort case is a distinct policy/contract decision, outside this bug-only job. No writes were possible in this read-only worker environment.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #131491 | keep_canonical | blocked | canonical | The reported default announce behavior is already repaired on current main; adding its requested regression would not reproduce a failure. |

## Needs Human

- Decide whether a stale delivery must override an explicitly configured delivery.bestEffort=true success/deletion contract. That is a distinct behavior-policy change; it cannot be justified as the reported default-path regression.
