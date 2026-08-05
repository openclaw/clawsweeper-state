---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119360"
mode: "autonomous"
run_id: "30989751964"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30989751964"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-05T08:45:15.500Z"
canonical: "https://github.com/openclaw/openclaw/issues/119360"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119360"
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

# issue-openclaw-openclaw-119360

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30989751964](https://github.com/openclaw/clawsweeper/actions/runs/30989751964)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119360

## Summary

Current main reproduces the lifecycle defect by inspection: a deferred restart candidate advances the reload comparison baseline before the runtime restarts, so an exact revert is misclassified as another restart. Create one narrow fix PR with an A→B→A active-work regression.

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
| #119360 | fix_needed | planned | canonical | The restart baseline must remain the authoritative applied A until the deferred B restart actually emits; this is a narrow existing-behavior repair. |
| #98436 | keep_related | planned | related | Keep open independently; no duplicate or closure action is appropriate. |
| cluster:issue-openclaw-openclaw-119360 | build_fix_artifact | planned | canonical | No viable contributor PR exists; the configured ClawSweeper branch should carry one narrow fix PR. |

## Needs Human

- none
