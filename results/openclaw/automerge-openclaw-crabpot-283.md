---
repo: "openclaw/crabpot"
cluster_id: "automerge-openclaw-crabpot-283"
mode: "autonomous"
run_id: "31058919521"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31058919521"
head_sha: "480d56953f381b127bdc0b5a7029efeeaa717595"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-06T00:17:50.784Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31058919521](https://github.com/openclaw/clawsweeper/actions/runs/31058919521)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/crabpot/pull/283

## Summary

#283 is the canonical non-security PR. Its CI is passing, but its v0.3.21 source pin leaves both checked-in workspace-plan reports at the prior inspector ref, so it needs a narrow contributor-branch repair before review can pass.

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
| https://github.com/openclaw/crabpot/pull/283 | fix_needed | planned | canonical | Repair the opted-in contributor branch; no close or merge action is authorized. |
| https://github.com/openclaw/crabpot/pull/283 | build_fix_artifact | planned | canonical | Use the existing writable same-repository contributor branch and preserve Patrick-Erichsen's commits and attribution. |

## Needs Human

- none
