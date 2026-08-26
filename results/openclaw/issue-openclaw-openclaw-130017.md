---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-130017"
mode: "autonomous"
run_id: "32949039387"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32949039387"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-26T08:54:10.943Z"
canonical: "https://github.com/openclaw/openclaw/issues/130017"
canonical_issue: "https://github.com/openclaw/openclaw/issues/130017"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-130017

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32949039387](https://github.com/openclaw/clawsweeper/actions/runs/32949039387)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/130017

## Summary

#130017 is a real, narrow importer-bound migration defect on main, but implementation is blocked pending the required maintainer acceptance for its material persistent-state semantics and its unresolved terminal-timestamp contract.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #130017 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #130017 | fix_needed | blocked | canonical | Blocked pending accepted maintainer decision for the terminal timestamp and durable migration semantics; the hydrated issue has no maintainer acceptance. The required sibling ../codex source is also absent and this read-only, network-restricted worker cannot clone it for the mandatory direct inspection gate. |
| #103168 | keep_closed | skipped | related | Closed historical context only; no close or mutation is applicable. |
| cluster:issue-openclaw-openclaw-130017 | build_fix_artifact | blocked | canonical | A bounded fix plan is available, but it cannot be executed until the material-store checkpoint records the accepted terminal/timestamp contract. |

## Needs Human

- Record maintainer acceptance for the material task_runs migration: only legacy cron rows with status `reconciling` should become a terminal, non-deliverable canonical record on import and in already-imported state; explicitly choose the ended_at/last_event_at rule and rollback/validation plan.
