---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-146956"
mode: "plan"
run_id: "34757687635"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34757687635"
head_sha: "d75f027faca8704bcc220f7ae5127cc93bedaa67"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-13T12:47:19.289Z"
canonical: "#146956"
canonical_issue: "#146956"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-146956

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34757687635](https://github.com/openclaw/clawsweeper/actions/runs/34757687635)

Workflow conclusion: success

Worker result: planned

Canonical: #146956

## Summary

Plan a narrow launcher fix for #146956. The checkout matches preflight main 4aff70f27016f9acf62d0acc19c8bd3592993e4c and retains the competing two-second shutdown deadline. Keep all three linked items open as related work. No code or GitHub mutations occurred; real-process reproduction and validation remain executor gates.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #146956 | fix_needed | planned | canonical | Restore the established Gateway-owned shutdown contract through the launcher layers, subject to a failing real-process regression on the executor's current main. |
| #127256 | keep_related | planned | related | Transport admission during teardown is distinct from launcher-enforced premature termination. This fix must not change admission behavior. |
| #143420 | keep_related | planned | related | Durable task settlement and successor recovery require separate work; allowing launcher cleanup to finish does not establish that this issue is fixed. |
| #145241 | keep_related | planned | related | This useful contributor PR addresses premature cancellation of Gateway deadlines, a separate defect. Preserve its branch and credit; it is not a replacement or candidate fix for #146956. |

## Needs Human

- none
