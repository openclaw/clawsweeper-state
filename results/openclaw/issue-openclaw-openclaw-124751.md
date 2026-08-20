---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124751"
mode: "autonomous"
run_id: "32394284326"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32394284326"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T17:02:41.750Z"
canonical: "https://github.com/openclaw/openclaw/issues/124751"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124751"
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

# issue-openclaw-openclaw-124751

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32394284326](https://github.com/openclaw/clawsweeper/actions/runs/32394284326)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124751

## Summary

Current main has a real shared-Apple reconciliation gap: a partial chat.final is retained under its run scope, but a fuller session.message with a different durable idempotency identity is appended instead of adopted. A narrow Swift repair artifact is ready; this worker could not write the regression or run Swift tests because the checkout is read-only, and the required sibling ../codex source checkout is unavailable.

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
| #108692 | keep_closed | skipped | related | Historical related context only; no closure action is permitted or needed. |
| #123792 | keep_independent | planned | independent | Related duplicate symptom family, but independent root cause and repair path. |
| #124751 | fix_needed | planned | canonical | Implement the narrow per-run fallback because the current protocol does not carry the terminal run identity into a differently keyed durable row. |
| cluster:issue-openclaw-openclaw-124751 | build_fix_artifact | planned | canonical | A writable executor can make the bounded repair on clawsweeper/issue-openclaw-openclaw-124751 and open the one credited fix PR. |

## Needs Human

- none
