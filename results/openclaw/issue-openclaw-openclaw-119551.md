---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119551"
mode: "autonomous"
run_id: "31056911953"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31056911953"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-05T23:47:39.179Z"
canonical: "https://github.com/openclaw/openclaw/issues/119551"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119551"
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

# issue-openclaw-openclaw-119551

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31056911953](https://github.com/openclaw/clawsweeper/actions/runs/31056911953)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119551

## Summary

Confirmed on main d3d25737cf31547bd70ef9f0e1fcf2e3e7115f64: configured ACP bindings omit the owner agent’s explicit model and do not recreate a session when it changes. A narrow new fix PR is planned; this read-only worker did not modify or validate a branch.

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
| #119551 | fix_needed | planned | canonical | Implement the owner-boundary repair on clawsweeper/issue-openclaw-openclaw-119551 and open one labeled fix PR. |
| #119599 | keep_closed | skipped | superseded | Historical evidence only; do not mutate an already closed PR. |
| cluster:issue-openclaw-openclaw-119551 | build_fix_artifact | planned | canonical | Create the narrow credited implementation artifact. |
| cluster:issue-openclaw-openclaw-119551 | open_fix_pr | planned | canonical | No viable open canonical PR exists; issue #119551 is the surviving canonical path. |

## Needs Human

- none
