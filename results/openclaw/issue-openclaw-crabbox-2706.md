---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2706"
mode: "autonomous"
run_id: "37325836099"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37325836099"
head_sha: "7b767cc6bf7ed7176a94b1e8732b478ea49012d2"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-05T14:49:12.900Z"
canonical: "https://github.com/openclaw/crabbox/issues/2706"
canonical_issue: "https://github.com/openclaw/crabbox/issues/2706"
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

# issue-openclaw-crabbox-2706

Repo: openclaw/crabbox

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37325836099](https://github.com/openclaw/clawsweeper/actions/runs/37325836099)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2706

## Summary

The target-precedence defect remains on supplied main SHA 8991bab59198fe532b15d8e559f5938fd4d021ac. A narrow fix artifact is ready for the executor; implementation and validation are blocked by the read-only checkout. Native Apple Silicon Tart proof remains pending.

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
| execute_fix | blocked |  |  | validation command failed (go test -count=1 -timeout=5m ./internal/providers/tart -run ^TestTartStop): go: cannot find GOROOT directory: 'go' binary is trimmed and GOROOT is not set |
| issue_implementation_status_comment | updated | #2706 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #2706 | fix_needed | planned | canonical | The ordinary flag-precedence bug is source-confirmed and has a narrow repair path. Keep the issue open; close and merge are prohibited by this job. |
| cluster:issue-openclaw-crabbox-2706 | build_fix_artifact | planned |  | Emit the concrete repair plan for a writable executor. Only implementation and validation are blocked; classification and artifact preparation are complete. |

## Needs Human

- none
