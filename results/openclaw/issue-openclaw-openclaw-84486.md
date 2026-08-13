---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-84486"
mode: "autonomous"
run_id: "31690409936"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31690409936"
head_sha: "4d41d3df4baf191dca9c385c82689425a135a5c4"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-13T10:23:59.620Z"
canonical: "#84486"
canonical_issue: "#84486"
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

# issue-openclaw-openclaw-84486

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31690409936](https://github.com/openclaw/clawsweeper/actions/runs/31690409936)

Workflow conclusion: success

Worker result: blocked

Canonical: #84486

## Summary

Confirmed the current-main Feishu dispatcher drops pre-tool partial prose when a new assistant-message boundary precedes an independent normal final. A narrow two-file repair is specified, but this worker sandbox blocks filesystem writes and the focused test cannot start because `tsx` is absent.

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
| #84486 | fix_needed | blocked | canonical | The canonical issue remains a narrow reproducible bug. Implementation and regression validation require a writable checkout with dependencies available. |
| #77685 | keep_related | planned | related | Related Feishu streaming-card family, but not the same complete root cause. |
| #85439 | keep_related | planned | related | A product-policy question adjacent to, but not fixed by, preserving assistant prose. |
| #91956 | keep_closed | skipped | superseded | Already closed. |
| #117489 | keep_independent | planned | independent | Different runtime and unresolved product contract. |

## Needs Human

- none
