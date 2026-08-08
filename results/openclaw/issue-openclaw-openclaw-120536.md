---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120536"
mode: "autonomous"
run_id: "31249008962"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31249008962"
head_sha: "36179dceb26fbeca33d8a863746b4cf83e325e09"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-08T09:26:25.901Z"
canonical: "https://github.com/openclaw/openclaw/issues/120536"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120536"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-120536

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31249008962](https://github.com/openclaw/clawsweeper/actions/runs/31249008962)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120536

## Summary

Latest main d9080cff retains two narrow provenance regressions. Plan one new fix PR; no GitHub mutations or local edits were made in the read-only checkout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/120550 | clawsweeper/issue-openclaw-openclaw-120536 |  |
| issue_implementation_status_comment | updated | #120536 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120550 | merge_canonical | blocked | fix_pr | checks are not clean: checks-node-compact-small-7: IN_PROGRESS |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120536 | fix_needed | planned | canonical | A focused repair is required; no open PR owns this issue. |
| #118523 | keep_independent | planned | independent | Keep open independently; do not conflate its finalization repair with the main-side provenance regression. |
| #120497 | keep_closed | skipped | related | Already merged and retained as context only. |
| cluster:issue-openclaw-openclaw-120536 | build_fix_artifact | planned | canonical | Executor should implement and validate the narrow repair on clawsweeper/issue-openclaw-openclaw-120536. |
| cluster:issue-openclaw-openclaw-120536 | open_fix_pr | planned | canonical | The job explicitly permits one narrow fix PR and forbids merge/close. |

## Needs Human

- none
