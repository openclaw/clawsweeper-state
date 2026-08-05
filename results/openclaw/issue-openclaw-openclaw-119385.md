---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119385"
mode: "autonomous"
run_id: "30978484256"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30978484256"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-08-05T06:23:08.468Z"
canonical: "https://github.com/openclaw/openclaw/issues/119385"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119385"
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

# issue-openclaw-openclaw-119385

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30978484256](https://github.com/openclaw/clawsweeper/actions/runs/30978484256)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119385

## Summary

Current main still loses both child-stream diagnostics on `qa_cli_timeout`. A narrow new PR is warranted; it retains bounded stdout/stderr tails without changing the 60-second limit, process-group termination, or Active Memory migration behavior.

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
| #119385 | fix_needed | planned | canonical | The issue is a reproducible central QA timeout-reporting defect, not yet a proven Active Memory migration defect. |
| cluster:issue-openclaw-openclaw-119385 | build_fix_artifact | planned | canonical | Implementation is explicitly delegated to the deterministic PR executor; this read-only checkout cannot create the branch or install missing dependencies. |
| cluster:issue-openclaw-openclaw-119385 | open_fix_pr | planned | canonical | No existing implementation PR was hydrated; the job authorizes one narrow fix PR. |

## Needs Human

- none
