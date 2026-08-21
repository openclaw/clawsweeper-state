---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124751"
mode: "autonomous"
run_id: "32439830893"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32439830893"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T02:36:14.935Z"
canonical: "https://github.com/openclaw/openclaw/issues/124751"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124751"
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

# issue-openclaw-openclaw-124751

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32439830893](https://github.com/openclaw/clawsweeper/actions/runs/32439830893)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124751

## Summary

Current main reproduces the identity-loss path by source inspection: Gateway emits the session.message envelope runId, but the shared Apple payload decoder drops it; reconciliation then cannot match a partial chat.final to a fuller canonical row with a different durable idempotency key. A narrow Apple-side fix artifact is ready, but this checkout is read-only, so no regression, branch, or PR could be created here.

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
| #98116 | keep_closed | skipped | related | Already closed; no closure or mutation is permitted. |
| #98117 | keep_closed | skipped | fixed_by_candidate | Already merged and not the canonical fix for this remaining defect. |
| #108692 | keep_closed | skipped | related | Already closed; keyboard-follow behavior is outside this narrow reconciliation fix. |
| #123792 | keep_independent | planned | independent | Separate root cause and implementation owner. |
| #124751 | fix_needed | planned | canonical | The authoritative run identity is available at the producer but lost before Apple reconciliation. |
| cluster:issue-openclaw-openclaw-124751 | build_fix_artifact | blocked | canonical | Implementation is blocked only by the local execution environment; the narrow repair plan is supplied below. |

## Needs Human

- none
