---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-150805"
mode: "plan"
run_id: "35216053996"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35216053996"
head_sha: "971582747fe2d14b96aea8f4ffdf2f559f7e55c4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-17T11:34:07.535Z"
canonical: "#150805"
canonical_issue: "#150805"
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

# issue-openclaw-openclaw-150805

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35216053996](https://github.com/openclaw/clawsweeper/actions/runs/35216053996)

Workflow conclusion: success

Worker result: planned

Canonical: #150805

## Summary

Plan one narrow repair for #150805. Source inspection at preflight main 6955a376f485beadaea9c4faf7218a79e1de0ae3 confirms the missing CLI plan event and discarded empty arguments. No code or GitHub changes were made; executable reproduction and validation remain pending.

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
| #150805 | fix_needed | planned | canonical | The supplied issue and job define an existing behavior defect with a narrow repair path. Keep the issue open and require a failing regression on current main before implementing. |

## Needs Human

- none
