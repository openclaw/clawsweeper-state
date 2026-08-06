---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-44289"
mode: "autonomous"
run_id: "31086029736"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31086029736"
head_sha: "480d56953f381b127bdc0b5a7029efeeaa717595"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-06T10:00:23.534Z"
canonical: "https://github.com/openclaw/openclaw/issues/44289"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44289"
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

# issue-openclaw-openclaw-44289

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31086029736](https://github.com/openclaw/clawsweeper/actions/runs/31086029736)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/44289

## Summary

#44289 remains a reproducible canonical documentation-generation regression on main f99b6a48f7749eb47aa85dfe37df94290c0ef000. A narrow new fix PR is appropriate, but this worker checkout is read-only, so implementation and local validation cannot be performed here.

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
| #44289 | fix_needed | planned | canonical | Create one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-44289. |
| cluster:issue-openclaw-openclaw-44289 | build_fix_artifact | blocked | canonical | A writable trusted checkout is required to implement and validate the planned repair. |

## Needs Human

- none
