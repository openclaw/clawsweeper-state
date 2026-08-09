---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120956"
mode: "autonomous"
run_id: "31304346512"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31304346512"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-09T09:13:40.106Z"
canonical: "https://github.com/openclaw/openclaw/issues/120956"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120956"
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

# issue-openclaw-openclaw-120956

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31304346512](https://github.com/openclaw/clawsweeper/actions/runs/31304346512)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120956

## Summary

#120956 is a current, plugin-local legacy-state bug on main 29c442d48389c834ebf4334e7246675e5f904ca7. Plan a narrow credited Workboard Doctor repair PR; no local patch or test was run because this worker's filesystem is read-only.

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
| #120956 | fix_needed | planned | canonical | A historical oversized workboard_card_notifications row can abort dispatch before ready cards are processed. The owning Workboard Doctor/SQLite boundary can repair it without a runtime fallback, schema change, config change, or core routing change. |
| cluster:issue-openclaw-openclaw-120956 | build_fix_artifact | planned | canonical | Create a narrow new fix PR from clawsweeper/issue-openclaw-openclaw-120956. |
| cluster:issue-openclaw-openclaw-120956 | open_fix_pr | planned | canonical | No contributor PR exists; the job authorizes one narrow generated fix PR. |

## Needs Human

- none
