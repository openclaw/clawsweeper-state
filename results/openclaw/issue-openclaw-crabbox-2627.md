---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2627"
mode: "autonomous"
run_id: "36765907363"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36765907363"
head_sha: "ad9ac7f287fdf88e9de0de0ef7913d0c7b0c5e7a"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-30T19:41:31.569Z"
canonical: "https://github.com/openclaw/crabbox/issues/2627"
canonical_issue: "https://github.com/openclaw/crabbox/issues/2627"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-crabbox-2627

Repo: openclaw/crabbox

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36765907363](https://github.com/openclaw/clawsweeper/actions/runs/36765907363)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2627

## Summary

The cancellation gap remains at main 4979ad55d68aa9afa7babd01bfa7ff638e5cd04d. A narrow fix is viable, but this checkout is read only, so no branch, regression test, or validated PR could be produced.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | validation command failed (go test ./internal/cli -run ^TestTypeRFBText -count=1): go: cannot find GOROOT directory: 'go' binary is trimmed and GOROOT is not set |
| issue_implementation_status_comment | updated | #2627 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #2627 | fix_needed | planned | canonical | Implement and validate the reported cancellation cleanup. |
| cluster:issue-openclaw-crabbox-2627 | build_fix_artifact | blocked |  | Implementation and validation require a writable checkout. |

## Needs Human

- none
