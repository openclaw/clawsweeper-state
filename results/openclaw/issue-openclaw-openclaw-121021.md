---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-121021"
mode: "plan"
run_id: "31318751267"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31318751267"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-09T14:41:03.040Z"
canonical: "https://github.com/openclaw/openclaw/issues/121021"
canonical_issue: "https://github.com/openclaw/openclaw/issues/121021"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-121021

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31318751267](https://github.com/openclaw/clawsweeper/actions/runs/31318751267)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/121021

## Summary

Merge review is blocked because the supplied checkout is unfixed main, not the repair branch, and does not contain requested base 00194139.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #121021 | keep_canonical | planned | canonical | Keep the source issue open while the actual repair branch is restored for review. |
| cluster:issue-openclaw-openclaw-121021 | fix_needed | blocked | canonical | Restore or provide the repair-head checkout and a reachable requested base, then repeat the read-only exact-base review; do not merge this checkout. |

## Needs Human

- Provide a checkout containing the repair commit and reachable base 00194139bad357f31e71a81586a25cf67649f7d6.
