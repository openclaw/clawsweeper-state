---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125792"
mode: "autonomous"
run_id: "32146411064"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32146411064"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-18T15:12:02.682Z"
canonical: "#125792"
canonical_issue: "#125792"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-125792

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32146411064](https://github.com/openclaw/clawsweeper/actions/runs/32146411064)

Workflow conclusion: success

Worker result: blocked

Canonical: #125792

## Summary

#125792 remains a narrow canonical bug, but this worker has a read-only checkout and cannot create the required branch, regression test, or validation evidence. Current main renders the embedding preset without ctx-size while retaining chat context handling separately.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #125792 | fix_needed | blocked | canonical | Filesystem policy permits reading only; no branch, test edit, test run, PR, label, or managed-server proof can be produced. |

## Needs Human

- none
