---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-114989"
mode: "autonomous"
run_id: "30887835080"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30887835080"
head_sha: "3d4b45a19e50dbe373c138c7c198029d15173ce7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-04T07:57:21.352Z"
canonical: "https://github.com/openclaw/openclaw/issues/114989"
canonical_issue: "https://github.com/openclaw/openclaw/issues/114989"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-114989

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30887835080](https://github.com/openclaw/clawsweeper/actions/runs/30887835080)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/114989

## Summary

Current main (45643863d7132a2580864ac05d007dcc724a5dbf) still omits the best-effort Gateway auth refresh after successful auth-order set/clear. A narrow fix PR is warranted, but this checkout is read-only, so implementation and validation are planned for the deterministic executor.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #114989 | fix_needed | planned | canonical | Repair the persisted auth-order owner path so newly started sessions receive the updated order while preserving existing pinned-session behavior. |
| cluster:issue-openclaw-openclaw-114989 | build_fix_artifact | planned |  | Create one narrow fix PR from clawsweeper/issue-openclaw-openclaw-114989. |
| cluster:issue-openclaw-openclaw-114989 | open_fix_pr | planned |  | No viable open implementation PR is present in the hydrated cluster. |

## Needs Human

- none
