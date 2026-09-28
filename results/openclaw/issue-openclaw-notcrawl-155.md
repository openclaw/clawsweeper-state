---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-155"
mode: "plan"
run_id: "36459163051"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36459163051"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-28T17:42:49.851Z"
canonical: "#155"
canonical_issue: "#155"
canonical_pr: null
actions_total: 2
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36459163051](https://github.com/openclaw/clawsweeper/actions/runs/36459163051)

Workflow conclusion: success

Worker result: planned

Canonical: #155

## Summary

Current main still drops API simple tables from Markdown and omits archived table-cell text from search. A focused fix is viable; no code was changed or validation run in plan mode.

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
| #155 | fix_needed | planned | canonical | Add a failing table fixture first, then make the table visible in Markdown and derive searchable cell text from preserved row properties so rebuilding the index also repairs existing archives. |
| #101 | keep_related | planned | related | The table defect has a narrower implementation and does not resolve the rich-block backlog. |

## Needs Human

- none
