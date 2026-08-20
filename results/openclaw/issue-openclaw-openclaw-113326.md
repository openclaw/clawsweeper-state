---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32355351976"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32355351976"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T09:55:54.984Z"
canonical: "https://github.com/openclaw/openclaw/issues/113326"
canonical_issue: "https://github.com/openclaw/openclaw/issues/113326"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-113326

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32355351976](https://github.com/openclaw/clawsweeper/actions/runs/32355351976)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

Implementation is blocked locally: the required sibling ../codex source is absent and cannot be cloned in the read-only sandbox, and dependencies cannot be installed or run because Corepack cache creation fails with EROFS. Source inspection shows the documented explicit device-code route is rejected by the generic non-TTY gate before provider dispatch; a narrow repair artifact is ready for an executor with a writable checkout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| issue_implementation_status_comment | updated | #113326 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #50452 | keep_closed | skipped | related | Historical context only. |
| #71864 | keep_closed | skipped | related | Historical context only. |
| #79021 | keep_closed | skipped | related | Historical context only. |
| #100067 | keep_related | planned | related | Distinct auth-store migration and product-policy surface. |
| #113326 | fix_needed | blocked | canonical | Narrow bug-only repair identified, but code changes and validation cannot proceed until the Codex hard gate and writable dependency environment are available. |
| #113505 | keep_closed | skipped | related | Historical adjacent issue, not the non-TTY gate. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | blocked | canonical | Executor must first satisfy the required direct ../codex inspection and use a writable checkout with installed dependencies. |

## Needs Human

- none
