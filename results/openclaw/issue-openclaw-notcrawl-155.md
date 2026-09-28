---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-155"
mode: "autonomous"
run_id: "36475103193"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36475103193"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T20:04:04.343Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36475103193](https://github.com/openclaw/clawsweeper/actions/runs/36475103193)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/notcrawl/issues/155

## Summary

Issue #155 remains reproducible on main 204af2f8. The fix is narrow, but the read-only filesystem prevented creating the regression test, implementing the patch, and running Go validation.

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
| #155 | fix_needed | planned | canonical | Implement a focused table export and search fix. |
| #101 | keep_related | planned | related | Keep the broader backlog issue open. |
| cluster:issue-openclaw-notcrawl-155 | build_fix_artifact | blocked |  | Implementation requires a writable checkout and Go module cache. |

## Needs Human

- none
