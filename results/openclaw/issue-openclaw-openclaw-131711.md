---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-131711"
mode: "autonomous"
run_id: "33170852106"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33170852106"
head_sha: "a4592a03e194228fc66b57bc4ad64deb11fb444b"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-28T13:53:29.917Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33170852106](https://github.com/openclaw/clawsweeper/actions/runs/33170852106)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/131711

## Summary

#131711 remains a real, narrow agent-run abortability bug on main. The embedded queue handle defaults to abortable after the reply operation has frozen cancellation, allowing chat.abort to persist a completed reply as an aborted partial. Plan one new focused PR; no merge or closure is authorized.

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
| #131711 | fix_needed | planned | canonical | Use the existing reply-operation abort-signal predicate at the embedded handle factory; no new state, config, schema, or public API is needed. |
| #110922 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| cluster:issue-openclaw-openclaw-131711 | build_fix_artifact | planned | canonical | Create one narrow credited ClawSweeper implementation PR from clawsweeper/issue-openclaw-openclaw-131711. |

## Needs Human

- none
