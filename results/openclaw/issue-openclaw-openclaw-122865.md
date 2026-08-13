---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122865"
mode: "autonomous"
run_id: "31653059935"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31653059935"
head_sha: "ae36d608d01701af7e06c313be96689068b5c890"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-13T00:14:32.195Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31653059935](https://github.com/openclaw/clawsweeper/actions/runs/31653059935)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122865

## Summary

Confirmed #122865 on main 52cda537: shared event reconciliation already debounces canonical refreshes, but the sessions page subscribes to each reconciled result and schedules a direct sessions.list microtask. Implementation is blocked only because this checkout is read-only and lacks tsx for focused Vitest.

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
| #122865 | fix_needed | planned | canonical | A narrow owner-boundary repair is valid; no security, configuration, or product-policy change is involved. |
| cluster:issue-openclaw-openclaw-122865 | build_fix_artifact | blocked | canonical | Build artifact is ready, but this worker cannot edit the read-only checkout or install the missing test dependency. |

## Needs Human

- none
