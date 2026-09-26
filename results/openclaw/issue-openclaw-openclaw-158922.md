---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158922"
mode: "plan"
run_id: "36250111826"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36250111826"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-26T14:58:49.248Z"
canonical: "https://github.com/openclaw/openclaw/issues/158922"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158922"
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

# issue-openclaw-openclaw-158922

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36250111826](https://github.com/openclaw/clawsweeper/actions/runs/36250111826)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/158922

## Summary

Plan a narrow prepared-catalog auth fix for the restart regression. Reproduction on current main and validation remain required before a fix PR is opened. The linked UI PR addresses a different refresh-failure trigger.

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
| https://github.com/openclaw/openclaw/issues/158922 | fix_needed | planned | canonical | The reported restart behavior has no hydrated candidate PR that fixes prepared catalog auth publication. |
| https://github.com/openclaw/openclaw/pull/146155 | keep_related | planned | related | Its UI refresh-failure behavior is related but does not repair the issue's restart-time provider availability. |
| https://github.com/openclaw/openclaw/pull/157459 | keep_closed | skipped | related | Historical context only; no action is available for the already-merged PR. |

## Needs Human

- none
