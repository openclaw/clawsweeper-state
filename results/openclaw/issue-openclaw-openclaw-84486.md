---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-84486"
mode: "autonomous"
run_id: "31682735547"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31682735547"
head_sha: "96b8703e4c0b4782dfcc488b46777559149326bb"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-13T08:47:45.743Z"
canonical: "https://github.com/openclaw/openclaw/issues/84486"
canonical_issue: "https://github.com/openclaw/openclaw/issues/84486"
canonical_pr: null
actions_total: 6
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31682735547](https://github.com/openclaw/clawsweeper/actions/runs/31682735547)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/84486

## Summary

Current main e3b27fec6478aa1b6facc8de50a0658575fff56c still drops pre-tool partial prose: the normal-final path replaces streamText at extensions/feishu/src/reply-dispatcher.ts:1415. A narrow owner-boundary repair and regression are defined below, but this read-only checkout cannot be changed and focused validation is blocked because the required tsx dependency is absent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| issue_implementation_status_comment | updated | #84486 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84486 | fix_needed | blocked | canonical | Implementation is blocked only by this checkout's read-only filesystem and missing dependencies; the source-level reproduction is clear. |
| #77685 | keep_related | planned | related | Related Feishu streaming-card family; retain its broader investigation. |
| #85439 | keep_related | planned | related | Separate product-policy decision; this repair preserves the established transient-status contract. |
| #117489 | keep_related | planned | related | Adjacent message-composition issue with distinct upstream contract. |
| #91956 | keep_closed | skipped | related | Closed context reference. |
| cluster:issue-openclaw-openclaw-84486 | build_fix_artifact | blocked | canonical | Executor must apply and validate the narrow patch in a writable checkout with dependencies installed. |

## Needs Human

- none
