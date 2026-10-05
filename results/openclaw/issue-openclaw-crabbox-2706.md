---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2706"
mode: "autonomous"
run_id: "37345115549"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37345115549"
head_sha: "7b767cc6bf7ed7176a94b1e8732b478ea49012d2"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-05T17:04:53.706Z"
canonical: "https://github.com/openclaw/crabbox/issues/2706"
canonical_issue: "https://github.com/openclaw/crabbox/issues/2706"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-crabbox-2706

Repo: openclaw/crabbox

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37345115549](https://github.com/openclaw/clawsweeper/actions/runs/37345115549)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2706

## Summary

The target-precedence defect remains on supplied current main 8991bab59198fe532b15d8e559f5938fd4d021ac. A narrow fix artifact is ready; implementation and validation are blocked by the read-only filesystem and unavailable required Go toolchain. No code or GitHub mutations were performed.

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
| #2706 | fix_needed | planned | canonical | An ordinary flag-precedence bug has a focused repair path without changing ownership policy, claim formats, or release authorization. |
| #209 | keep_closed | skipped | related | Historical provider work is not a mutation target. |
| #2327 | keep_closed | skipped | related | Historical configuration work is not a mutation target. |
| cluster:issue-openclaw-crabbox-2706 | build_fix_artifact | planned |  | The artifact provides a narrow implementation and validation contract for a writable executor. |
| cluster:issue-openclaw-crabbox-2706 | open_fix_pr | blocked |  | Opening the implementation PR is blocked until a writable executor establishes the failing regression, applies the fix, and validates with Go 1.26.5. Native proof additionally requires an Apple Silicon host with Tart. |

## Needs Human

- none
