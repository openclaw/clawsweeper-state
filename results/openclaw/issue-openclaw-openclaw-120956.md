---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120956"
mode: "autonomous"
run_id: "31299486130"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31299486130"
head_sha: "6971afb72029ac8c845bb29c337134f2534b1dbc"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-09T07:15:08.916Z"
canonical: "https://github.com/openclaw/openclaw/issues/120956"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120956"
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

# issue-openclaw-openclaw-120956

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31299486130](https://github.com/openclaw/clawsweeper/actions/runs/31299486130)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120956

## Summary

Current main dba99b355b4e75cc97fddaf78bbf9c5a3058ca34 still has the legacy SQLite notification defect. A narrow, plugin-local Doctor repair PR is planned; this read-only worker cannot create or validate its branch.

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
| #120956 | fix_needed | planned | canonical | Source reproduction is conclusive; no existing implementation PR is hydrated. |
| cluster:issue-openclaw-openclaw-120956 | build_fix_artifact | planned | canonical | Produce one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-120956. |
| cluster:issue-openclaw-openclaw-120956 | open_fix_pr | planned | canonical | The issue is open and canonical; fix PR creation is allowed, while merge and closure are not. |

## Needs Human

- none
