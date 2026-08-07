---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120157"
mode: "autonomous"
run_id: "31158543465"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31158543465"
head_sha: "f6f6bfca7d65aa54eec9daa82ab84cda9ad6e0e8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-07T08:35:39.737Z"
canonical: "https://github.com/openclaw/openclaw/issues/120157"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120157"
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

# issue-openclaw-openclaw-120157

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31158543465](https://github.com/openclaw/clawsweeper/actions/runs/31158543465)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120157

## Summary

#120157 is reproducible on main ea4466e5: contextless plugin follow-up registration replaces a yielded child’s requester-owned row before normal reactivation runs, losing completion delivery and the parent wake obligation. A narrow new-fix-PR artifact is ready; local focused validation is blocked by the checkout’s missing p-map dependency and read-only filesystem.

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
| #120157 | fix_needed | planned | canonical | Existing behavior is broken lifecycle preservation, not a new feature or security boundary change. |
| #95535 | keep_related | planned | related | Same sessions_yield area, distinct isolated-cron product contract. |
| #106704 | keep_related | planned | related | Shared yield lifecycle area, different root cause and repair. |
| #112668 | keep_related | planned | related | Distinct transport-delivery reliability path. |
| cluster:issue-openclaw-openclaw-120157 | build_fix_artifact | planned | canonical | A writable executor should implement and validate the narrow canonical repair. |

## Needs Human

- none
