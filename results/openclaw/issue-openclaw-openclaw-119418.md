---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119418"
mode: "autonomous"
run_id: "30971479946"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30971479946"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-05T03:37:17.542Z"
canonical: "https://github.com/openclaw/openclaw/issues/119418"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119418"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-119418

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30971479946](https://github.com/openclaw/clawsweeper/actions/runs/30971479946)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/119418

## Summary

Current main reproduces the generic Tool Search decoder defect. A narrow, provider-agnostic fix artifact is ready, but this worker's checkout is read-only and lacks dependencies, so it could not modify or validate the branch locally.

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
| #119418 | fix_needed | blocked | canonical | Implementation and focused validation are blocked only by the immutable, dependency-free checkout; the prepared artifact can be applied on clawsweeper/issue-openclaw-openclaw-119418. |
| cluster:issue-openclaw-openclaw-119418 | build_fix_artifact | planned | canonical | Apply the narrow generic decoder repair and tests on the designated ClawSweeper branch. |

## Needs Human

- none
