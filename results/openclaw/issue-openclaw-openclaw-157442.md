---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157442"
mode: "autonomous"
run_id: "36037481563"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36037481563"
head_sha: "f4322a8542135175b2a96f6a63fde8685ef14cf5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-24T18:42:48.979Z"
canonical: "https://github.com/openclaw/openclaw/issues/157442"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157442"
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

# issue-openclaw-openclaw-157442

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36037481563](https://github.com/openclaw/clawsweeper/actions/runs/36037481563)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/157442

## Summary

Current main still retains a stopped ACP manager after Gateway shutdown. A narrow fix is warranted, but this worker's filesystem is read-only, so no implementation or validation was run.

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
| #157442 | fix_needed | planned | canonical | Retire the stopped singleton after its shutdown drain so the next same-process Gateway boot obtains a fresh manager. |
| cluster:issue-openclaw-openclaw-157442 | build_fix_artifact | blocked |  | Implementation requires a writable executor checkout. |

## Needs Human

- none
