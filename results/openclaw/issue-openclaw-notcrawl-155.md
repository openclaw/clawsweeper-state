---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-155"
mode: "autonomous"
run_id: "36527582682"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36527582682"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-29T05:48:54.247Z"
canonical: "https://github.com/openclaw/notcrawl/issues/155"
canonical_issue: "https://github.com/openclaw/notcrawl/issues/155"
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

# issue-openclaw-notcrawl-155

Repo: openclaw/notcrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36527582682](https://github.com/openclaw/clawsweeper/actions/runs/36527582682)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/notcrawl/issues/155

## Summary

Issue #155 remains reproducible on main at 204af2f8be192709ee3f0acaef120d583465ab3c. A narrow export and search fix is defined, but this read-only checkout prevented implementation and validation.

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
| #155 | fix_needed | planned | canonical | The open canonical issue describes a bounded defect with no hydrated implementation PR. |
| #101 | keep_related | planned | related | The simple-table omission in #155 can be fixed without deciding #101's rich-block output policy. |
| cluster:issue-openclaw-notcrawl-155 | build_fix_artifact | blocked |  | Implementation and local validation are blocked by the read-only filesystem; the fix plan is ready for a writable executor. |

## Needs Human

- none
