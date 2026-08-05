---
repo: "openclaw/crabpot"
cluster_id: "automerge-openclaw-crabpot-283"
mode: "autonomous"
run_id: "31032367410"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31032367410"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-05T18:05:03.998Z"
canonical: "#283"
canonical_issue: null
canonical_pr: "#283"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31032367410](https://github.com/openclaw/clawsweeper/actions/runs/31032367410)

Workflow conclusion: success

Worker result: planned

Canonical: #283

## Summary

PR #283 is the canonical adopted repair candidate. Its current head passed the hydrated GitHub checks, but ClawSweeper’s review found the generated workspace-plan reports still contain the pre-0.3.21 Inspector checkout. Repair the same writable contributor branch by rebasing and regenerating those two reports; do not merge or close.

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
| #283 | fix_needed | planned | canonical | The branch’s source and package pin update must be propagated to its tracked generated workspace-plan outputs before it can satisfy the review finding. |
| #283 | build_fix_artifact | planned | canonical | A narrow contributor-branch repair preserves Patrick-Erichsen’s commits and directly resolves the only actionable review finding. |

## Needs Human

- none
