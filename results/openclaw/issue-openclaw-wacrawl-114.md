---
repo: "openclaw/wacrawl"
cluster_id: "issue-openclaw-wacrawl-114"
mode: "plan"
run_id: "36693803594"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36693803594"
head_sha: "eeb0f44df224584ad785a13b795d5e28689a8a0d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-30T09:08:03.196Z"
canonical: "#114"
canonical_issue: "#114"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-wacrawl-114

Repo: openclaw/wacrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36693803594](https://github.com/openclaw/clawsweeper/actions/runs/36693803594)

Workflow conclusion: success

Worker result: planned

Canonical: #114

## Summary

Issue #114 remains open and actionable on main d25fce3. Legacy adoption still performs a full archived-message scan for each unmatched incoming row. Plan a narrow indexed lookup and scaled regression; no code or GitHub state was changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| https://github.com/openclaw/wacrawl/issues/114 | fix_needed | planned | canonical | Replace the repeated legacy scan while preserving matching order, ambiguity handling, storeEvents checks, archived event IDs, and source identity guards. |

## Needs Human

- none
