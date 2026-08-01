---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117491"
mode: "autonomous"
run_id: "30710889861"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30710889861"
head_sha: "dccfa528f0387431807818ba43823310b5e08f51"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-01T17:52:05.772Z"
canonical: "#117491"
canonical_issue: "#117491"
canonical_pr: "#117521"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-117491

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30710889861](https://github.com/openclaw/clawsweeper/actions/runs/30710889861)

Workflow conclusion: success

Worker result: planned

Canonical: #117491

## Summary

Current main reproduces the routing defect at the heartbeat delivery owner: a due commitment forces target routing to its channel/recipient/thread while unconditionally clearing the configured heartbeat account. The existing implementation PR #117521 is the single canonical repair path, but its hydrated CI is failing and its head is unavailable in this read-only checkout; update that branch with the narrow source-owner fix and focused regression proof before CI is refreshed.

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
| #117491 | keep_canonical | planned | canonical | #117491 remains the authoritative issue for the accountless due-commitment routing regression; it must stay open until the implementation PR has clean required CI. |
| #117521 | fix_needed | planned | canonical | Reuse the existing same-repository ClawSweeper branch as the sole implementation path; repair is narrow but requires exact-head focused validation and a refreshed CI result. |

## Needs Human

- none
