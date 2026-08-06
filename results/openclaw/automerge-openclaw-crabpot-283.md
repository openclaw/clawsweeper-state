---
repo: "openclaw/crabpot"
cluster_id: "automerge-openclaw-crabpot-283"
mode: "autonomous"
run_id: "31064601722"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31064601722"
head_sha: "480d56953f381b127bdc0b5a7029efeeaa717595"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-06T02:15:33.669Z"
canonical: "https://github.com/openclaw/crabpot/pull/283"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/crabpot/pull/283"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-crabpot-283

Repo: openclaw/crabpot

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31064601722](https://github.com/openclaw/clawsweeper/actions/runs/31064601722)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/crabpot/pull/283

## Summary

#283 remains the canonical, non-security contributor PR. Its exact current head has one actionable review blocker: both checked-in workspace-plan artifacts still embed the previous plugin-inspector source ref. Repair the existing writable branch, preserve Patrick-Erichsen's commits, and re-review the new exact head before any merge decision.

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
| https://github.com/openclaw/crabpot/pull/283 | fix_needed | planned | canonical | The job authorizes a bounded repair, not merge or closure. |
| https://github.com/openclaw/crabpot/pull/283 | build_fix_artifact | planned | canonical | Use repair_contributor_branch because the same-repository branch is writable and the contributor's useful commits should remain the canonical history. |

## Needs Human

- none
