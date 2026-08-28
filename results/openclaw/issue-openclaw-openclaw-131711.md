---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-131711"
mode: "autonomous"
run_id: "33162803032"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33162803032"
head_sha: "d56daf07f0c32a58f28283936dc4568cf5069828"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-28T11:44:36.533Z"
canonical: "https://github.com/openclaw/openclaw/issues/131711"
canonical_issue: "https://github.com/openclaw/openclaw/issues/131711"
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

# issue-openclaw-openclaw-131711

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33162803032](https://github.com/openclaw/clawsweeper/actions/runs/33162803032)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/131711

## Summary

#131711 remains an open canonical bug. Plan a narrow new fix PR that makes a finished embedded queue handle explicitly non-abortable during deferred terminal settlement, preventing chat.abort from persisting the completed reply again as an aborted partial. #110922 is closed, related historical context only.

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
| #131711 | fix_needed | planned | canonical | The finishing lifecycle owns cancellation eligibility; a transcript-content deduplication workaround would mask the upstream state error. |
| #110922 | keep_closed | skipped | related | Closed historical context; no mutation is valid or needed. |
| cluster:issue-openclaw-openclaw-131711 | build_fix_artifact | planned | canonical | No viable open contributor PR exists, and the repair is a focused lifecycle-owner change. |

## Needs Human

- none
