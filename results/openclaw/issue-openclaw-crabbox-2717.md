---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2717"
mode: "autonomous"
run_id: "37615561373"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37615561373"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-10-07T11:42:59.272Z"
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
needs_human_count: 1
---

# issue-openclaw-crabbox-2717

Repo: openclaw/crabbox

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37615561373](https://github.com/openclaw/clawsweeper/actions/runs/37615561373)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/crabbox/issues/2717

## Summary

Independent Windows image selection is implemented on the supplied main SHA. The remaining Server 2025 default switch requires the canary-backed rollout explicitly requested in the issue discussion. No implementation PR is appropriate yet; no files or GitHub state were changed.

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
| Needs human | 1 |

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
| #2717 | needs_human | blocked | canonical | Implementation is blocked on the explicitly deferred rollout decision and canary evidence. A fallback-only patch would leave promoted defaults unchanged and would not satisfy the remaining request. |
| #2715 | keep_closed | skipped | independent | Historical context only. |
| #2720 | keep_closed | skipped | related | Completed selector implementation; does not cover the remaining default rollout. |

## Needs Human

- For https://github.com/openclaw/crabbox/issues/2717, complete and accept Server 2025 native readiness, desktop and WSL2 canaries, regional promoted-image inventory/rebakes, and rollback preparation before scheduling the separate default-switch implementation.
