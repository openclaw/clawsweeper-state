---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159080"
mode: "plan"
run_id: "36267692534"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36267692534"
head_sha: "5f73370171673b318108ffb1a5d59761c9624846"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-26T19:58:31.272Z"
canonical: "#159080"
canonical_issue: "#159080"
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

# issue-openclaw-openclaw-159080

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36267692534](https://github.com/openclaw/clawsweeper/actions/runs/36267692534)

Workflow conclusion: success

Worker result: planned

Canonical: #159080

## Summary

Plan a narrow LINE routing fix. The checkout matches preflight main at 0830a3fa459ab358e59ce7a5084f3bb5fcad971a: LINE selects an ordinary agent before inspecting the runtime conversation binding, matching the reported failure. The regression has not been run in plan mode; it must fail on main before implementation proceeds.

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
| #123159 | route_security | planned | security_sensitive | Quarantine this historical linked PR only; it requires no close or merge action. |
| #159080 | fix_needed | planned | canonical | Add and run the two-agent regression on current main first. If it fails as reported, select the inspected bound owner before ordinary routing, then validate configured and unbound fallbacks and reply authority. Keep the issue open. |

## Needs Human

- none
