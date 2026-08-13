---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123112"
mode: "autonomous"
run_id: "31692425362"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31692425362"
head_sha: "4d41d3df4baf191dca9c385c82689425a135a5c4"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-13T10:50:44.661Z"
canonical: "#123112"
canonical_issue: "#123112"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-123112

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31692425362](https://github.com/openclaw/clawsweeper/actions/runs/31692425362)

Workflow conclusion: success

Worker result: blocked

Canonical: #123112

## Summary

Confirmed on main: named-account Telegram direct sessions have distinct keys but share the same display label because the label is derived only from the sender. A narrow owner-local fix is appropriate, but this worker cannot edit the read-only checkout or run Vitest because the required tsx dependency is absent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #123112 | fix_needed | planned | canonical | Repair the Telegram-owned label producer only; do not change routing, session keys, outbound transcript ownership, or configuration. |

## Needs Human

- none
