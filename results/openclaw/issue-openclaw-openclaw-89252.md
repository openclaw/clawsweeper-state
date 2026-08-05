---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-89252"
mode: "autonomous"
run_id: "31035456501"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31035456501"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-05T20:55:30.455Z"
canonical: "https://github.com/openclaw/openclaw/issues/89252"
canonical_issue: "https://github.com/openclaw/openclaw/issues/89252"
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

# issue-openclaw-openclaw-89252

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31035456501](https://github.com/openclaw/clawsweeper/actions/runs/31035456501)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/89252

## Summary

Current main still drops configured Telegram custom commands first when the generated menu exceeds Telegram’s count or text budget. Plan a narrow new PR that prioritizes configured commands and proves mixed-overflow behavior.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119717 | clawsweeper/issue-openclaw-openclaw-89252 |  |
| issue_implementation_status_comment | updated | #89252 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119717 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #89252 | fix_needed | planned | canonical | The defect is a narrow ordering error in the Telegram plugin. Existing process-local hash behavior correctly re-registers the already-truncated menu on restart; it is not the owner of this loss. |
| cluster:issue-openclaw-openclaw-89252 | build_fix_artifact | planned | canonical | No open viable PR exists; create one narrow current-main repair PR. |

## Needs Human

- none
