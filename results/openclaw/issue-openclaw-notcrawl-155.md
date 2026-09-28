---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-155"
mode: "autonomous"
run_id: "36454717377"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36454717377"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T17:13:27.199Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36454717377](https://github.com/openclaw/clawsweeper/actions/runs/36454717377)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/notcrawl/issues/155

## Summary

Issue #155 remains reproducible on preflight main 204af2f8. A focused fix is warranted, but this checkout is read-only, so no regression test, patch, validation, branch, or PR could be produced.

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
| #155 | fix_needed | planned | canonical | The archived cells can supply Markdown visibility and search text without a schema change. |
| #101 | keep_related | planned | related | The simple-table repair does not resolve the broader rich-block request. |
| cluster:issue-openclaw-notcrawl-155 | build_fix_artifact | blocked |  | Implementation and validation require a writable checkout and Go module cache. No PR-ready patch exists. |

## Needs Human

- none
