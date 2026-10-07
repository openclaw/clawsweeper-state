---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2717"
mode: "autonomous"
run_id: "37609434072"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37609434072"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-07T10:49:22.754Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37609434072](https://github.com/openclaw/clawsweeper/actions/runs/37609434072)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2717

## Summary

Independent Windows image selection is already implemented on supplied main a67dd997f64483ae6dfc7d318f470a429eb542fd. The remaining Server 2025 default rollout is explicitly gated on live canaries and regional promoted-image migration. No code changed or PR planned.

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
| #2717 | keep_related | planned | related | Keep this issue open for the separate operational rollout. Implementation is blocked on the explicitly required live Server 2025 qualification and regional promoted-image rollout evidence, which is absent from the hydrated artifact. This operational migration exceeds a narrow implementation PR; do not switch only the stock fallback or duplicate the shipped selector work. |
| #2715 | keep_closed | skipped | related | Closed historical context; no action required. |
| #2720 | keep_closed | skipped | related | Merged partial implementation is historical evidence, not an open implementation candidate or a complete fix for the remaining rollout. |

## Needs Human

- none
