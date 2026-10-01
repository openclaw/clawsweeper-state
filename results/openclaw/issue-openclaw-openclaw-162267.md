---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-162267"
mode: "autonomous"
run_id: "36802711969"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36802711969"
head_sha: "8c7a382f5bca9a09564ce326f3c4892dff7ef4a6"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-01T02:54:13.526Z"
canonical: "https://github.com/openclaw/openclaw/issues/162267"
canonical_issue: "https://github.com/openclaw/openclaw/issues/162267"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-162267

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36802711969](https://github.com/openclaw/clawsweeper/actions/runs/36802711969)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/162267

## Summary

At main SHA 80680fb3428a5d06bbccafaccaaade703da651ef, source inspection confirms that a terminal suspended descendant without cleanupCompletedAt counts against its ancestor’s spawn slots and appears as pending in the sub-agent list. The checkout is read-only, so I could not add a failing regression, implement the fix, run tests, or prepare the PR branch.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #162267 | fix_needed | planned | canonical | A separate admission and display projection is needed; changing the cleanup-pending count globally would alter cleanup decisions. |
| cluster:issue-openclaw-openclaw-162267 | build_fix_artifact | planned |  | Prepared for the executor; no source files were changed. |
| cluster:issue-openclaw-openclaw-162267 | open_fix_pr | blocked |  | The executor must first create and validate the narrow patch in a writable checkout. |

## Needs Human

- none
