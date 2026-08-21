---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124751"
mode: "autonomous"
run_id: "32441473696"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32441473696"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T03:05:27.644Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32441473696](https://github.com/openclaw/clawsweeper/actions/runs/32441473696)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124751

## Summary

#124751 is a real, narrow Apple-client identity-loss bug. Gateway already emits terminal `session.message.runId`; the shared Swift payload codec drops it, so a partial `chat.final` cannot adopt a fuller canonical row with a different durable identity. The sandbox is read-only: no branch or regression could be written, and SwiftPM stops before compilation with `permissionDenied`.

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
| #124751 | fix_needed | planned | canonical | Canonical issue remains open and needs the executor to implement the narrow Swift repair. |
| #123792 | keep_independent | planned | independent | Related only by duplicate-rendering symptom; no mutation in this cluster. |
| #98116 | keep_closed | skipped | fixed_by_candidate | Already closed; no closure action is permitted. |
| #98117 | keep_closed | skipped | related | Already merged and closed; it is evidence, not a target. |
| #108692 | keep_closed | skipped | related | Already closed; no closure action is permitted. |
| cluster:issue-openclaw-openclaw-124751 | build_fix_artifact | planned | canonical | Implementation is blocked only by the read-only worker sandbox; the executor can apply this narrow artifact on clawsweeper/issue-openclaw-openclaw-124751. |

## Needs Human

- none
