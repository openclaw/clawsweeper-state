---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-114989"
mode: "autonomous"
run_id: "30887168310"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30887168310"
head_sha: "3d4b45a19e50dbe373c138c7c198029d15173ce7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-04T07:27:47.837Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30887168310](https://github.com/openclaw/clawsweeper/actions/runs/30887168310)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/114989

## Summary

#114989 remains a reproducible, narrow lifecycle bug on main 8393b377: successful auth-order set/clear writes SQLite but does not ask a running Gateway to discard its cached auth snapshot. A two-file fix artifact is ready; this worker could not apply or validate it because the supplied checkout is read-only.

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
| #114989 | fix_needed | planned | canonical | The persistent write owner is correct; the missing cross-process refresh belongs immediately after each successful CLI mutation. |
| cluster:issue-openclaw-openclaw-114989 | build_fix_artifact | planned | canonical | Create the narrow fix PR from the supplied artifact; do not alter resolver precedence, profiles, config, or docs. |
| cluster:issue-openclaw-openclaw-114989 | open_fix_pr | planned | canonical | Apply the artifact on clawsweeper/issue-openclaw-openclaw-114989, validate it, then open or update the single issue PR. |

## Needs Human

- none
