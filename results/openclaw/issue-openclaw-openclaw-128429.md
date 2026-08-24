---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128429"
mode: "autonomous"
run_id: "32678356669"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32678356669"
head_sha: "d5b0aa42ff03edf2752d0f8b960c3a60bb70a246"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-24T01:29:50.111Z"
canonical: "https://github.com/openclaw/openclaw/issues/128429"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128429"
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

# issue-openclaw-openclaw-128429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32678356669](https://github.com/openclaw/clawsweeper/actions/runs/32678356669)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/128429

## Summary

#128429 remains a narrow, current-main Matrix message-loss bug. Plan one new fix PR that makes collision detection honor the same code/metadata exclusions as spoiler delimiter detection, with formatter and chunked-delivery regressions.

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
| #128429 | fix_needed | planned | canonical | The issue is source-proven on current main and has a narrow plugin-owned repair path; no active implementation PR is hydrated. |
| cluster:issue-openclaw-openclaw-128429 | build_fix_artifact | planned | canonical | Create or update clawsweeper/issue-openclaw-openclaw-128429 with the scoped repair and regression proof. |
| #26068 | keep_closed | skipped | related | Already closed; no mutation. |
| #113199 | keep_closed | skipped | related | Already merged; no mutation. |

## Needs Human

- none
