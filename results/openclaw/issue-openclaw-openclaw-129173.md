---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-129173"
mode: "autonomous"
run_id: "33260251989"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33260251989"
head_sha: "db14db010bf3044be85f25fe40a587a5ca77523a"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-29T15:41:46.462Z"
canonical: "https://github.com/openclaw/openclaw/issues/129173"
canonical_issue: "https://github.com/openclaw/openclaw/issues/129173"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-129173

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33260251989](https://github.com/openclaw/clawsweeper/actions/runs/33260251989)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/129173

## Summary

Current main retains the run-scoped approval-wait global subscription. Plan a narrow new fix PR; this worker’s read-only checkout lacks node_modules and required sibling ../codex, so the executor must complete the direct Codex preflight and local validation before opening it.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #112698 | keep_related | planned | related | Keep open as a distinct, related performance investigation. |
| #129173 | fix_needed | planned | canonical | Replace the global listener with the existing run-indexed subscription while retaining the lifecycle, run-ID, session-ID, and disposal guards. |
| #129174 | keep_closed | skipped | related | Historical partial repair; already closed and not a mutation target. |
| cluster:issue-openclaw-openclaw-129173 | build_fix_artifact | planned | canonical | Create the narrow implementation artifact for the canonical issue. |
| cluster:issue-openclaw-openclaw-129173 | open_fix_pr | planned | canonical | Open one credited PR only after the required direct Codex preflight and validation complete. |

## Needs Human

- none
