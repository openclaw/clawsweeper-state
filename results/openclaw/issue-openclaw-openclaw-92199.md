---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-92199"
mode: "plan"
run_id: "31000389101"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31000389101"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-05T11:37:47.972Z"
canonical: "https://github.com/openclaw/openclaw/issues/92199"
canonical_issue: "https://github.com/openclaw/openclaw/issues/92199"
canonical_pr: "https://github.com/openclaw/openclaw/pull/119589"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-92199

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31000389101](https://github.com/openclaw/clawsweeper/actions/runs/31000389101)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/92199

## Summary

Keep #92199 as the canonical issue and #119589 as its active narrow fix PR. The Feishu report is related but has a distinct dispatcher root cause; the older contributor PR is already closed historical context.

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
| #92199 | keep_canonical | planned | canonical | Canonical tracker remains open because closure is blocked by job policy and the candidate fix is not merged. |
| #119589 | keep_canonical | planned | canonical | This is the viable canonical fix path; the job forbids merge, so it remains open pending the required exact-head review and normal merge gates. |
| #84486 | keep_related | planned | related | Same user-visible message-loss family, but a distinct owner and root cause; no closure is appropriate. |
| #84501 | keep_closed | skipped | superseded | Historical closed context only; no close action may be emitted. |

## Needs Human

- none
