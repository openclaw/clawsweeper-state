---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-155"
mode: "autonomous"
run_id: "36514991696"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36514991696"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-29T03:01:41.969Z"
canonical: "https://github.com/openclaw/notcrawl/issues/155"
canonical_issue: "https://github.com/openclaw/notcrawl/issues/155"
canonical_pr: null
actions_total: 4
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36514991696](https://github.com/openclaw/clawsweeper/actions/runs/36514991696)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/notcrawl/issues/155

## Summary

Issue #155 remains reproducible in the source at main 204af2f8. A narrow fix path is defined, but this checkout is read-only: no regression test, patch, validation, branch, or PR could be created.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #155 | fix_needed | planned | canonical | The archived table payload supports a focused Markdown and search projection fix. |
| #101 | keep_related | planned | related | The table defect has a narrower, defined output path. |
| cluster:issue-openclaw-notcrawl-155 | build_fix_artifact | planned |  | Prepare one focused PR from clawsweeper/issue-openclaw-notcrawl-155. |
| cluster:issue-openclaw-notcrawl-155 | open_fix_pr | blocked |  | Implementation, local validation, and PR creation require a writable checkout and Go cache. |

## Needs Human

- none
