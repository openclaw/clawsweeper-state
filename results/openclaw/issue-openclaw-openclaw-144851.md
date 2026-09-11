---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-144851"
mode: "autonomous"
run_id: "34590556095"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34590556095"
head_sha: "e74b07a40a6ecb1c9743e17201ecca0d6114bce5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-11T11:19:34.562Z"
canonical: "https://github.com/openclaw/openclaw/issues/144851"
canonical_issue: "https://github.com/openclaw/openclaw/issues/144851"
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

# issue-openclaw-openclaw-144851

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34590556095](https://github.com/openclaw/clawsweeper/actions/runs/34590556095)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/144851

## Summary

The reported defect remains in source at preflight main 56fcd66e484876f1eba1055fe6eb45f8b673006a. A narrow repair artifact is ready for the executor. Local implementation and regression validation are blocked by the read-only filesystem and missing dependencies. No files or GitHub state were changed.

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
| #144851 | fix_needed | planned | canonical | The QA Channel owner needs a local lifecycle repair. Runtime reproduction on this main SHA remains an executor prerequisite. |
| #118377 | keep_related | planned | related | Related streaming symptom, different lifecycle owner and repair scope. |
| #119378 | keep_closed | skipped | related | Historical evidence for distinct durable final behavior; not a fix for this issue. |
| cluster:issue-openclaw-openclaw-144851 | build_fix_artifact | planned | canonical | A narrow new fix PR is appropriate; neither related PR implements this local repair. |

## Needs Human

- none
