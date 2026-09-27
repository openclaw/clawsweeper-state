---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159184"
mode: "autonomous"
run_id: "36305711093"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36305711093"
head_sha: "f59e3c90cef851563ab7283f7170ceb623c0f7bb"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-27T08:47:52.407Z"
canonical: "https://github.com/openclaw/openclaw/issues/159184"
canonical_issue: "https://github.com/openclaw/openclaw/issues/159184"
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

# issue-openclaw-openclaw-159184

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36305711093](https://github.com/openclaw/clawsweeper/actions/runs/36305711093)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/159184

## Summary

At main 8620e909, the reported HTTP 400 no longer triggers same-model retries: an existing regression covers the reported prompt-size wording. The user-facing copy still follows the rate-limit path and gives wait guidance for a request that must be shortened. A narrow copy fix is warranted, but this read-only checkout has no installed dependencies, so the failing regression, patch, and validation could not be completed.

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
| #159184 | fix_needed | planned | canonical | Repair the remaining misleading user copy while preserving the existing no-retry behavior and general rate-limit guidance. |
| cluster:issue-openclaw-openclaw-159184 | build_fix_artifact | blocked |  | The proposed fix needs a writable checkout with dependencies and a demonstrated failing copy regression. |

## Needs Human

- none
