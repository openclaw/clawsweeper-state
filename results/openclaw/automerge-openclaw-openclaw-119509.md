---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-119509"
mode: "autonomous"
run_id: "30984421359"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30984421359"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-05T07:25:12.581Z"
canonical: "#119509"
canonical_issue: "#119483"
canonical_pr: "#119509"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-119509

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30984421359](https://github.com/openclaw/clawsweeper/actions/runs/30984421359)

Workflow conclusion: success

Worker result: planned

Canonical: #119509

## Summary

Keep #119509 open and repair its single actionable compatibility regression before rebase, exact-head review, and validation. The linked issue remains open until the repaired PR is ready to own its fix path.

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
| #119483 | keep_related | planned | related | The issue has a viable canonical repair PR, but that PR needs its reported compatibility repair and fresh validation first. |
| #119509 | fix_needed | planned | canonical | Repair the contributor branch: retain the canonical Windows codepage decoder while explicitly preserving the existing session exec BOM behavior, then rebase and re-review the exact head. |

## Needs Human

- none
