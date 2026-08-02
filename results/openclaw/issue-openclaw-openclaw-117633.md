---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117633"
mode: "autonomous"
run_id: "30721376353"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30721376353"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-08-02T00:03:33.113Z"
canonical: "https://github.com/openclaw/openclaw/issues/117633"
canonical_issue: "https://github.com/openclaw/openclaw/issues/117633"
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

# issue-openclaw-openclaw-117633

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30721376353](https://github.com/openclaw/clawsweeper/actions/runs/30721376353)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/117633

## Summary

#117633 remains an open canonical, non-security bug with a narrow owner-identity propagation repair. No candidate PR is hydrated; plan one attributed fix PR and preserve bare-slug callers.

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
| #117633 | fix_needed | planned | canonical | Implement the ownerHandle propagation regression fix on the designated ClawSweeper branch. The job forbids merge and issue closure. |
| cluster:issue-openclaw-openclaw-117633 | build_fix_artifact | planned |  | No viable candidate PR is hydrated. Create one narrow new fix PR that credits the issue reporter and includes generated protocol artifacts when required by the repository generator. |

## Needs Human

- none
