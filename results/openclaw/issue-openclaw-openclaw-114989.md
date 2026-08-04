---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-114989"
mode: "autonomous"
run_id: "30890392772"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30890392772"
head_sha: "3d4b45a19e50dbe373c138c7c198029d15173ce7"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-04T08:32:01.401Z"
canonical: "https://github.com/openclaw/openclaw/issues/114989"
canonical_issue: "https://github.com/openclaw/openclaw/issues/114989"
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

# issue-openclaw-openclaw-114989

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30890392772](https://github.com/openclaw/clawsweeper/actions/runs/30890392772)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/114989

## Summary

Latest main still persists auth-order mutations without refreshing Gateway auth status. Plan a narrow credited fix PR with regression coverage; no close or merge action is permitted.

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
| #114989 | fix_needed | planned | canonical | The reported persisted-auth-order refresh defect remains reproducible from current source and has no viable open fix PR. |
| cluster:issue-openclaw-openclaw-114989 | build_fix_artifact | planned |  | Create one new fix PR from clawsweeper/issue-openclaw-openclaw-114989; no contributor branch requires repair. |

## Needs Human

- none
