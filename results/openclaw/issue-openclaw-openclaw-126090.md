---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126090"
mode: "autonomous"
run_id: "32207350383"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32207350383"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T02:23:52.501Z"
canonical: "https://github.com/openclaw/openclaw/issues/126090"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126090"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-126090

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32207350383](https://github.com/openclaw/clawsweeper/actions/runs/32207350383)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126090

## Summary

Narrow fix is source-proven, but this read-only checkout lacks tsx and the required sibling ../codex source checkout, so implementation and validation cannot proceed here.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #126090 | fix_needed | blocked | canonical | Only environment constraints block implementation; the executor should create the regression and repair on the designated branch. |
| #8221 | keep_closed | skipped | related | Already closed. |
| #44467 | keep_closed | skipped | related | Already closed. |
| #65493 | keep_closed | skipped | related | Already closed. |
| #66953 | keep_closed | skipped | independent | Already closed and independent. |
| #94930 | keep_closed | skipped | related | Already closed historical context. |
| #95069 | route_security | planned | security_sensitive | Route only this reference to central OpenClaw security triage. |
| cluster:issue-openclaw-openclaw-126090 | build_fix_artifact | planned | canonical | Executable narrow repair plan. |

## Needs Human

- none
