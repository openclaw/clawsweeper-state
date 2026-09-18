---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-137781"
mode: "plan"
run_id: "35308753326"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35308753326"
head_sha: "f3b7e8dbb5d7735202c46c94043a641f26a15f56"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-18T04:59:05.097Z"
canonical: "#137781"
canonical_issue: "#137781"
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

# issue-openclaw-openclaw-137781

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35308753326](https://github.com/openclaw/clawsweeper/actions/runs/35308753326)

Workflow conclusion: success

Worker result: planned

Canonical: #137781

## Summary

Plan a narrow metadata-owner fix for #137781. The clean checkout matches preflight main 52c88f048e84d1213bb4d0657623713ddc3f2a83 and supports the reported identity downgrade. Runtime reproduction, subsequent inbound behavior, and the UNIQUE failure remain unverified. No files or GitHub state were changed.

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
| #137781 | fix_needed | planned | canonical | The source-supported bug has a narrow existing owner and no viable open candidate PR. Proceed through the fix artifact only after establishing a failing regression on current main. |
| #139011 | keep_closed | skipped | related | Retain as historical context and acknowledge the contributor; do not reopen, close again, or adopt its coercion as the complete repair. |

## Needs Human

- none
