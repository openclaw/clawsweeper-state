---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-160577"
mode: "autonomous"
run_id: "36457506490"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36457506490"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T17:52:50.078Z"
canonical: "https://github.com/openclaw/openclaw/issues/160577"
canonical_issue: "https://github.com/openclaw/openclaw/issues/160577"
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

# issue-openclaw-openclaw-160577

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36457506490](https://github.com/openclaw/clawsweeper/actions/runs/36457506490)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/160577

## Summary

Current main (7e6dd89766ce57499b38962882d12f0caaefb165) still has the reported error-classification mismatch. The required composed regression could not be run because this checkout is read-only and has no node_modules, so no code was changed or PR created.

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
| #160577 | fix_needed | planned | canonical | The source path supports a narrow bridge fix, pending the job-required failing regression through the composed path. |
| cluster:issue-openclaw-openclaw-160577 | build_fix_artifact | blocked |  | The executor must first reproduce the failure through the real mirror bridge composed with provenance, then make and validate the narrow change in a writable checkout. |

## Needs Human

- none
