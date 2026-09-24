---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-77717"
mode: "autonomous"
run_id: "36016554671"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36016554671"
head_sha: "f4322a8542135175b2a96f6a63fde8685ef14cf5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-24T15:18:42.370Z"
canonical: "https://github.com/openclaw/openclaw/issues/77717"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77717"
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

# issue-openclaw-openclaw-77717

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36016554671](https://github.com/openclaw/clawsweeper/actions/runs/36016554671)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/77717

## Summary

Current main still permits an aborted Feishu account probe to overwrite replacement identity. A failing regression, repair, and validation could not be completed because the checkout is read-only. No PR was created.

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
| #77717 | fix_needed | planned | canonical | The source establishes the stale-write path. The reported permanent disconnection has not been reproduced on current main. |
| cluster:issue-openclaw-openclaw-77717 | build_fix_artifact | blocked |  | Implementation is blocked by read-only filesystem access. The executor needs a writable checkout to reproduce the race through startAccount, repair it, and validate the branch. |

## Needs Human

- none
