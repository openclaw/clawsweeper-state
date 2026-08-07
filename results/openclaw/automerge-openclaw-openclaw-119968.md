---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-119968"
mode: "autonomous"
run_id: "31132517825"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31132517825"
head_sha: "3f368a3e394d76c31584fce700cee9a62485cb66"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-07T00:01:27.388Z"
canonical: "#119968"
canonical_issue: "#119551"
canonical_pr: "#119968"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-119968

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31132517825](https://github.com/openclaw/clawsweeper/actions/runs/31132517825)

Workflow conclusion: success

Worker result: planned

Canonical: #119968

## Summary

#119968 remains the canonical repair lane. Its explicit-model provenance is lost after ACP session rehydration, so a rebase plus narrow owner-boundary repair is required; merge and closure remain disabled.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #119551 | keep_closed | skipped | fixed_by_candidate | Historical context only. |
| #119599 | keep_closed | skipped | superseded | Historical superseded PR; no mutation. |
| #119968 | fix_needed | planned | canonical | Repair the canonical same-repo branch; do not merge or close it. |
| #119968 | build_fix_artifact | planned | canonical | Create the bounded repair plan below. |
| #119994 | keep_independent | planned | independent | Related ACP area, but distinct feature work with no safe closure or repair action in this cluster. |

## Needs Human

- none
