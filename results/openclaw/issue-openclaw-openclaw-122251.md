---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122251"
mode: "autonomous"
run_id: "31539316747"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31539316747"
head_sha: "4b79888c3f2ad4b9e0c2ee3345984adc995ea81d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-11T21:50:16.359Z"
canonical: "https://github.com/openclaw/openclaw/issues/122251"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122251"
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

# issue-openclaw-openclaw-122251

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31539316747](https://github.com/openclaw/clawsweeper/actions/runs/31539316747)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/122251

## Summary

Current main `edb7a169` still flattens user/restart cancellations into runner failures. A narrow, test-first fix PR plan is ready; this worker remains plan-only.

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
| #122251 | fix_needed | planned | canonical | The open canonical issue is a source-reproducible, non-security regression with a narrow internal fix path. |
| #118488 | keep_closed | skipped | related | Already merged and closed; retain only as predecessor evidence. |
| cluster:issue-openclaw-openclaw-122251 | build_fix_artifact | planned | canonical | Create one narrow PR from `clawsweeper/issue-openclaw-openclaw-122251` after adding the failing regressions. |

## Needs Human

- none
