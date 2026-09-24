---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-156976"
mode: "autonomous"
run_id: "35957775583"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35957775583"
head_sha: "7443df924f1b1209b9c325985170de3a36ed4e4e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-24T04:59:33.227Z"
canonical: "#156976"
canonical_issue: "#156976"
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

# issue-openclaw-openclaw-156976

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35957775583](https://github.com/openclaw/clawsweeper/actions/runs/35957775583)

Workflow conclusion: success

Worker result: planned

Canonical: #156976

## Summary

Plan a narrow fix for #156976. The reported failure and current source identify the health gap, but the required failing regression on current main has not been run. Do not open the fix PR until that reproduction succeeds.

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
| #156976 | build_fix_artifact | planned | canonical | The running Gateway must report when its retained child-runtime executable is unavailable, and deep status must show an actionable restart warning. |
| #52184 | keep_related | planned | related | Both concern stable Node paths, but their requested behavior and decision owners differ. |
| #143609 | route_security | planned | security_sensitive | Route this item alone to central security handling; it is outside the Homebrew runtime health fix. |
| #146268 | keep_independent | planned | independent | Different launch path and user-visible failure. |

## Needs Human

- none
