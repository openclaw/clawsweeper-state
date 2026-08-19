---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126396"
mode: "autonomous"
run_id: "32287862692"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32287862692"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-19T18:41:47.422Z"
canonical: "https://github.com/openclaw/openclaw/issues/126396"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126396"
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

# issue-openclaw-openclaw-126396

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32287862692](https://github.com/openclaw/clawsweeper/actions/runs/32287862692)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/126396

## Summary

Current main reproduces the TaskFlow guidance mismatch: both bundled skills invoke the removed `api.runtime.tasks.flow` member, while the runtime exposes only `tasks.flows` (read-only DTOs) and `tasks.managedFlows` (managed-flow mutations). A narrow two-skill documentation fix is ready for an executor PR.

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
| #126396 | fix_needed | planned | canonical | This is an existing bundled-guidance regression with a documented current replacement; it needs no Plugin SDK contract change. |
| cluster:issue-openclaw-openclaw-126396 | build_fix_artifact | planned | canonical | Executor should apply the two-file documentation alignment, validate it, then open one labeled ClawSweeper PR. |
| cluster:issue-openclaw-openclaw-126396 | open_fix_pr | planned | canonical | The job authorizes one narrow fix PR and prohibits merge or issue closure. |

## Needs Human

- none
