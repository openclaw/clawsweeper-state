---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-61949"
mode: "autonomous"
run_id: "30735079454"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30735079454"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-02T06:30:30.582Z"
canonical: "https://github.com/openclaw/openclaw/issues/61949"
canonical_issue: "https://github.com/openclaw/openclaw/issues/61949"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-61949

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30735079454](https://github.com/openclaw/clawsweeper/actions/runs/30735079454)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/61949

## Summary

#61949 remains a reproducible prompt-contract bug: the canonical agent prompt tells models to prefer aliases even when an explicit provider/model reference is available. The narrow owner-boundary repair is a wording-only update plus one focused regression assertion. This worker could not write or run the test suite because the target filesystem is read-only and `node_modules` is absent; the supplied new-PR artifact is ready for a writable executor.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/117869 | clawsweeper/issue-openclaw-openclaw-61949 |  |
| issue_implementation_status_comment | updated | #61949 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117869 | merge_canonical | blocked | fix_pr | checks are not clean: build-artifacts: FAILURE, openclaw/ci-gate: FAILURE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #61949 | fix_needed | blocked | canonical | A narrow fix is clear, but this worker cannot edit or execute the focused tests in the supplied read-only checkout. |
| cluster:issue-openclaw-openclaw-61949 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR from `clawsweeper/issue-openclaw-openclaw-61949` after applying the repair artifact. |
| #85155 | keep_closed | skipped | superseded | Historical evidence only; no close or mutation is valid for an already-closed PR. |
| #100209 | keep_closed | skipped | related | Historical related evidence only; this merged PR is not the candidate fix for #61949. |

## Needs Human

- none
