---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119360"
mode: "plan"
run_id: "30968232504"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30968232504"
head_sha: "6976512bc0fe3528f2f0a91699e4e291d0ce2850"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-05T02:29:21.047Z"
canonical: "#119360"
canonical_issue: "#119360"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30968232504](https://github.com/openclaw/clawsweeper/actions/runs/30968232504)

Workflow conclusion: success

Worker result: planned

Canonical: #119360

## Summary

Current main still restarts after deferred restart-class A is reverted to the active initial configuration B. Plan a narrow managed-owner fix that cancels only wholly config-owned exact-runtime reverts, preserving plugin-index and forced/conservative restart paths.

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
| #119360 | fix_needed | planned | canonical | The source reproduction remains valid and is a narrow bug-only repair. |
| #98436 | keep_related | planned | related | Related gateway-restart work with distinct product scope; do not close or fold it into this bug fix. |
| cluster:issue-openclaw-openclaw-119360 | build_fix_artifact | planned | canonical | A focused implementation can preserve existing restart semantics while repairing the lifecycle owner. |

## Needs Human

- none
