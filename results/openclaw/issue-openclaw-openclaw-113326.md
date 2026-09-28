---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "36466451545"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36466451545"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T21:07:39.527Z"
canonical: "https://github.com/openclaw/openclaw/issues/113326"
canonical_issue: "https://github.com/openclaw/openclaw/issues/113326"
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

# issue-openclaw-openclaw-113326

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36466451545](https://github.com/openclaw/clawsweeper/actions/runs/36466451545)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

The checked-out source contains the reported non-TTY guard, but this worker could not verify the preflight main SHA, edit the read-only checkout, or run the regression. A narrow fix artifact is ready for execution after current-main verification.

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
| #113326 | fix_needed | planned | canonical | The source supports a narrow bug fix, pending reproduction against the preflight main revision. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | blocked |  | Implementation and PR creation require a writable, current checkout and successful local validation. |

## Needs Human

- none
