---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119592"
mode: "autonomous"
run_id: "31004605443"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31004605443"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-05T12:56:19.603Z"
canonical: "https://github.com/openclaw/openclaw/issues/119592"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119592"
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

# issue-openclaw-openclaw-119592

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31004605443](https://github.com/openclaw/clawsweeper/actions/runs/31004605443)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119592

## Summary

#119592 is reproducible on main: `workboard_move` preserves a live claim, running execution, and running attempt when moved to `done` or `blocked`. Plan one narrow PR that settles those lifecycle facts atomically in the move owner. `review` remains unchanged because current operator and dispatcher contracts intentionally treat it as active.

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
| #119592 | fix_needed | planned | canonical | Open canonical issue; no viable implementation PR is hydrated. |
| #113582 | keep_related | planned | related | Related Workboard area, distinct root cause and product scope. |
| #113641 | keep_closed | skipped | superseded | Already closed; historical context only. |
| cluster:issue-openclaw-openclaw-119592 | build_fix_artifact | planned | canonical | A narrow new fix PR is appropriate; no GitHub mutation is performed by this worker. |

## Needs Human

- none
