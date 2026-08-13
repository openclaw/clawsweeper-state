---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122865"
mode: "plan"
run_id: "31655597674"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31655597674"
head_sha: "637c3339dbef38ca3f7444510c8f7e72b95903c6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-13T00:53:33.918Z"
canonical: "https://github.com/openclaw/openclaw/issues/122865"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122865"
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

# issue-openclaw-openclaw-122865

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31655597674](https://github.com/openclaw/clawsweeper/actions/runs/31655597674)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/122865

## Summary

#122865 remains reproducible on main af497642: the page subscribes to shared roster updates and schedules a direct sessions.list call, bypassing the capability-owned event debounce. Plan a narrow page-consumer repair and regression; no mutations made.

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
| #122865 | fix_needed | planned | canonical | The issue is an ordinary Control UI bug with a clear shared-owner boundary and no security or product-policy change. |
| cluster:issue-openclaw-openclaw-122865 | build_fix_artifact | planned | canonical | A narrow new fix PR is appropriate once executed in a writable checkout with dependencies installed. |

## Needs Human

- none
