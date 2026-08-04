---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-111346"
mode: "autonomous"
run_id: "30928796070"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30928796070"
head_sha: "2a61adcc1f062561ba3c9deb62cc0df97cdc81d2"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-04T16:52:57.326Z"
canonical: "https://github.com/openclaw/openclaw/issues/111346"
canonical_issue: "https://github.com/openclaw/openclaw/issues/111346"
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

# issue-openclaw-openclaw-111346

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30928796070](https://github.com/openclaw/clawsweeper/actions/runs/30928796070)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/111346

## Summary

#111346 remains a valid, narrow status-projection bug on main. A new focused fix PR is appropriate; no GitHub mutation was made.

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
| #111346 | fix_needed | planned | canonical | Recorded runtime liveness is incorrectly overwritten by config-disabled projection; preserve the config diagnostic while retaining running:true. |
| cluster:issue-openclaw-openclaw-111346 | build_fix_artifact | planned | canonical | Create one narrow PR from clawsweeper/issue-openclaw-openclaw-111346. |

## Needs Human

- none
