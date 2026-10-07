---
repo: "openclaw/openclaw"
cluster_id: "self-heal-openclaw-openclaw-119735"
mode: "autonomous"
run_id: "37615527003"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37615527003"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-07T11:43:45.742Z"
canonical: "https://github.com/openclaw/openclaw/pull/119735"
canonical_issue: "https://github.com/openclaw/openclaw/issues/114169"
canonical_pr: "https://github.com/openclaw/openclaw/pull/119735"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# self-heal-openclaw-openclaw-119735

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37615527003](https://github.com/openclaw/clawsweeper/actions/runs/37615527003)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/pull/119735

## Summary

The pinned PR qualifies for bounded branch self-heal, but execution is blocked: the required deterministic_rebase_only field is forbidden by the result schema, and omitting it selects the executor's broader repair path. No files or GitHub state were changed.

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
| #119735 | fix_needed | planned | canonical | Repair the existing branch only after the deterministic execution constraint can be represented safely; recheck OPEN state and the exact expected head before mutation. |
| #114169 | keep_related | planned | related | Keep the issue open; this job only prepares base sync for its existing WhatsApp PR. |
| cluster:self-heal-openclaw-openclaw-119735 | build_fix_artifact | blocked |  | The required boolean cannot be replaced safely with prose. Reconcile the harness schema and deterministic execution contract before applying this artifact. |

## Needs Human

- none
