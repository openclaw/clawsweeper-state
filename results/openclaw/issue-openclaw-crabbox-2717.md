---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2717"
mode: "autonomous"
run_id: "37725481988"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37725481988"
head_sha: "11c625de8a3cd43b7943a7d1f3100dde7a851216"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-08T04:05:08.383Z"
canonical: "https://github.com/openclaw/crabbox/issues/2717"
canonical_issue: "https://github.com/openclaw/crabbox/issues/2717"
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

# issue-openclaw-crabbox-2717

Repo: openclaw/crabbox

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37725481988](https://github.com/openclaw/clawsweeper/actions/runs/37725481988)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2717

## Summary

Independent Windows image selection is already implemented. The remaining Server 2025 default switch requires live qualification and regional promoted-image rollout evidence absent from this run. The issue remains open for that operational follow-up; no executable fix PR plan is emitted.

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
| issue_implementation_status_comment | updated | #2717 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #2717 | keep_related | planned | related | Keep https://github.com/openclaw/crabbox/issues/2717 open for the remaining operational rollout. An executable implementation plan is not safely supported by the supplied artifacts: native, desktop, and WSL2 Server 2025 qualification, regional promoted-image inventory and qualification, and promotion/rollback receipts are absent. A fallback-only PR would bypass the documented rollout requirement while leaving promoted-image users on their existing images. |
| #2720 | keep_closed | skipped | related | Historical partial implementation; no action on this closed PR. |
| #2734 | keep_closed | skipped | related | Historical rollout preparation; no action on this closed PR. |

## Needs Human

- none
