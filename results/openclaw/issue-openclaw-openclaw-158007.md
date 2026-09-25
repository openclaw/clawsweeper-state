---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158007"
mode: "plan"
run_id: "36116264792"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36116264792"
head_sha: "3d8d89c12d45e24c0922d95e4a11f410869dc12e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-25T09:09:29.207Z"
canonical: "https://github.com/openclaw/openclaw/issues/158007"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158007"
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

# issue-openclaw-openclaw-158007

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36116264792](https://github.com/openclaw/clawsweeper/actions/runs/36116264792)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/158007

## Summary

No fix PR is planned. The preflight shows the source issue is closed, and checked-out main at 1ae730f6750bfc841d2444fa61111f93d0662dea already requests a drained exit after successful root and precomputed help. Existing process coverage includes a retained-handle help case. A fresh process run was unavailable because this read-only checkout has no node_modules.

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
| https://github.com/openclaw/openclaw/issues/158007 | keep_closed | skipped | canonical | The source issue is already closed; a closure or new PR is unwarranted without a failing current-main reproduction. |
| https://github.com/openclaw/openclaw/issues/114067 | keep_related | planned | related | Help startup cost is distinct from failure to exit after printing. |
| https://github.com/openclaw/openclaw/pull/147932 | keep_related | planned | related | This contributor PR owns a separate performance repair and must remain available for its own review. |
| https://github.com/openclaw/openclaw/pull/157884 | keep_independent | planned | independent | Cache maintenance is a different cause of a lingering CLI process. |
| https://github.com/openclaw/openclaw/issues/97793 | keep_closed | skipped | related | Closed historical context only. |

## Needs Human

- none
