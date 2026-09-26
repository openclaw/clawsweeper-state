---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-82121"
mode: "autonomous"
run_id: "36246583070"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36246583070"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T14:21:19.343Z"
canonical: "https://github.com/openclaw/openclaw/issues/82121"
canonical_issue: "https://github.com/openclaw/openclaw/issues/82121"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-82121

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36246583070](https://github.com/openclaw/clawsweeper/actions/runs/36246583070)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/82121

## Summary

Current main still has a source-proven path that can deliver a truncated chat.history preview as a complete isolated automation reply. The worker checkout is read-only, so the failing regression, patch, and validation could not be completed here. A narrow fix artifact is ready for a writable executor.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #82121 | fix_needed | planned | canonical | The existing reply-delivery contract remains broken on the inspected main SHA. |
| #82128 | keep_closed | skipped | related | Historical context only. |
| #93694 | keep_closed | skipped | related | Historical contributor work to credit in the new fix. |
| #94094 | keep_closed | skipped | related | Historical context; the planned fix preserves literal marker text. |
| cluster:issue-openclaw-openclaw-82121 | build_fix_artifact | blocked |  | Implementation is blocked by the worker's read-only filesystem sandbox. |

## Needs Human

- none
