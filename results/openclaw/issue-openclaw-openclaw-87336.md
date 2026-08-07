---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-87336"
mode: "plan"
run_id: "31216402645"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31216402645"
head_sha: "f6f6bfca7d65aa54eec9daa82ab84cda9ad6e0e8"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-07T20:52:26.468Z"
canonical: "https://github.com/openclaw/openclaw/issues/87336"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87336"
canonical_pr: "https://github.com/openclaw/openclaw/pull/120347"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# issue-openclaw-openclaw-87336

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31216402645](https://github.com/openclaw/clawsweeper/actions/runs/31216402645)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/87336

## Summary

#87336 is a reproducible non-security session-lifecycle defect and #120347 is its narrow, writable implementation path. A maintainer must first approve the intentional compatibility change: sessions_send will no longer materialize arbitrary explicit key-shaped targets on first send.

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
| Needs human | 2 |

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
| #15558 | keep_closed | skipped | independent | Already closed; no closeout action is valid. |
| #87336 | keep_canonical | planned | canonical | Keep the issue open until the compatibility decision and candidate validation are complete. |
| #120347 | needs_human | blocked | needs_human | Maintainer decision required: may sessions_send stop materializing arbitrary explicit key-shaped targets on their first send and instead return a structured missing-target result, retaining only configured-agent-main bootstrap? Approval is also needed before repairing the behind branch and diagnosing the unhydrated CI failures. |
| cluster:issue-openclaw-openclaw-87336 | fix_needed | blocked | needs_human | The technical repair path is clear, but its deliberate compatibility change is not authorized by the hydrated maintainer state. |
| cluster:issue-openclaw-openclaw-87336 | build_fix_artifact | blocked | needs_human | Executable only after the maintainer accepts the compatibility change. |

## Needs Human

- Approve or reject changing sessions_send so arbitrary explicit missing key-shaped targets return structured not-found instead of materializing a session on first send; configured-agent-main bootstrap remains the sole creation exception.
- If approved, authorize repair of #120347 after the executor re-fetches state, rebases the branch, and diagnoses the unhydrated checks-node-compact-small-6/openclaw-ci-gate failures.
