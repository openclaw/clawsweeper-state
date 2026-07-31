---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-114611"
mode: "autonomous"
run_id: "30636927582"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30636927582"
head_sha: "60ad8788f54555eed573d42b38f25f26b8feb62e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-31T14:21:59.343Z"
canonical: "#114611"
canonical_issue: null
canonical_pr: "#114611"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-114611

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30636927582](https://github.com/openclaw/clawsweeper/actions/runs/30636927582)

Workflow conclusion: success

Worker result: planned

Canonical: #114611

## Summary

PR #114611 is the open canonical contributor PR and needs a narrow repair before any merge decision. The hydrated artifact shows no security-sensitive signal, but the current docs diff is full-file churn, drops the documented wildcard exception, and fails `check-docs` plus the dependent CI gate.

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
| #114611 | build_fix_artifact | planned | canonical | Repair the writable contributor branch rather than replace it: restore the page from the pinned base to remove line-ending/full-file churn, then apply the one intended configuration example migration. |

## Needs Human

- none
