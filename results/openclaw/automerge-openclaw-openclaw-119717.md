---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-119717"
mode: "autonomous"
run_id: "31247675426"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31247675426"
head_sha: "36179dceb26fbeca33d8a863746b4cf83e325e09"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-08T08:11:47.080Z"
canonical: "#119717"
canonical_issue: "#89252"
canonical_pr: "#119717"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-119717

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31247675426](https://github.com/openclaw/clawsweeper/actions/runs/31247675426)

Workflow conclusion: success

Worker result: planned

Canonical: #119717

## Summary

Repair #119717 on its writable same-repository branch. Preserve its capped-menu reorder and credit for #68833, while restoring the unrelated empty-menu lifecycle changes identified by the ClawSweeper review. Keep #89252 open as the tracking issue.

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
| #68833 | keep_closed | skipped | superseded | Historical source PR; no closure action is valid. |
| #89252 | keep_canonical | planned | canonical | Keep the issue open until its repaired candidate has exact-head review and green validation. |
| #119717 | fix_needed | planned | canonical | Rebase onto current main and narrow the delta to configured-command ordering plus focused regression coverage; request exact-head re-review after repair. |

## Needs Human

- none
