---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-155"
mode: "autonomous"
run_id: "36521848555"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36521848555"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-29T04:32:39.027Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36521848555](https://github.com/openclaw/clawsweeper/actions/runs/36521848555)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/notcrawl/issues/155

## Summary

The defect remains on main at 204af2f8be192709ee3f0acaef120d583465ab3c. A narrow fix is defined, but the read-only checkout prevented implementation, a failing regression test, local validation, and PR creation.

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
| #155 | fix_needed | planned | canonical | API table rows are archived but absent from Markdown and page search. |
| #101 | keep_related | planned | related | The table fix does not resolve the rich-block output policy in #101. |
| cluster:issue-openclaw-notcrawl-155 | build_fix_artifact | blocked |  | Implementation and local validation require a writable checkout. |

## Needs Human

- none
