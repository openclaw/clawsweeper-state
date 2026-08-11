---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-121050"
mode: "autonomous"
run_id: "31523949498"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31523949498"
head_sha: "5439582beebe57b7e79dc4e3d7bb44acd9f7d65c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-11T18:47:15.570Z"
canonical: "#121050"
canonical_issue: "#55372"
canonical_pr: "#121050"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-121050

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31523949498](https://github.com/openclaw/clawsweeper/actions/runs/31523949498)

Workflow conclusion: success

Worker result: planned

Canonical: #121050

## Summary

Keep PR #121050 as the canonical repair path. Rebase its writable same-repo branch onto current main, port the Control UI producer change through the runtime-config module split, retain the existing stale-route regressions, then rerun exact-head review and validation. #55372 remains open until the repaired PR is validated and landed.

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
| #55372 | keep_related | planned | related | The issue remains the user-report context while PR #121050 owns the concrete repair and validation. |
| #121050 | fix_needed | planned | canonical | The PR is the correct owner-boundary fix but needs a current-main rebase and post-rebase validation before it can be reconsidered for merge. |

## Needs Human

- none
