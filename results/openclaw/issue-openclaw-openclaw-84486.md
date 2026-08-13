---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-84486"
mode: "autonomous"
run_id: "31686518002"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31686518002"
head_sha: "4d41d3df4baf191dca9c385c82689425a135a5c4"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-13T09:33:34.030Z"
canonical: "https://github.com/openclaw/openclaw/issues/84486"
canonical_issue: "https://github.com/openclaw/openclaw/issues/84486"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-84486

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31686518002](https://github.com/openclaw/clawsweeper/actions/runs/31686518002)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/84486

## Summary

Confirmed current-main Feishu streaming-card data loss. A normal final overwrites accumulated pre-tool prose at reply-dispatcher.ts:1415. Plan a narrow, credited fix PR; local validation is blocked because the checkout lacks the tsx dependency and this worker is read-only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #84486 | fix_needed | planned | canonical | A tool-boundary fact should commit preceding assistant prose, while normal preview drafts without that boundary remain replaceable. |
| #77685 | keep_related | planned | related | Distinct broader streaming-card cluster. |
| #85439 | keep_related | planned | related | Product-policy follow-up, not this content-preservation bug. |
| #91956 | keep_closed | skipped | related | No mutation permitted for closed context. |
| #117489 | keep_related | planned | related | Separate output-contract decision. |
| cluster:issue-openclaw-openclaw-84486 | build_fix_artifact | planned |  | Create the narrow repair branch, add the regression, then run the configured changed gate. |
| cluster:issue-openclaw-openclaw-84486 | open_fix_pr | planned | canonical | Job authorizes one new fix PR and prohibits merge/close. |

## Needs Human

- none
