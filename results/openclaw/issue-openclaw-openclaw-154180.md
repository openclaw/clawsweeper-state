---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-154180"
mode: "plan"
run_id: "35550044058"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35550044058"
head_sha: "a09e6cefb31adcd12bba10e1658cae5fced08c80"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-21T01:15:03.651Z"
canonical: "#154180"
canonical_issue: "https://github.com/openclaw/openclaw/issues/154180"
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

# issue-openclaw-openclaw-154180

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35550044058](https://github.com/openclaw/clawsweeper/actions/runs/35550044058)

Workflow conclusion: success

Worker result: planned

Canonical: #154180

## Summary

Plan one narrow Telegram worker-startup fix. The checkout matches preflight main 7d14778dc23424b7763f4e47e87aca2b63d6b363 and retains the reported hard-coded .js worker path. Runtime reproduction, implementation, and validation remain pending in this read-only checkout without test dependencies. No GitHub mutations are proposed beyond the authorized implementation workflow.

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
| #154180 | fix_needed | planned | canonical | A bounded startup repair is justified. Require an actual failing capture-layout regression before editing, then validate source and packaged startup before publication. |
| #81791 | keep_closed | skipped | related | Already closed; preserve as historical packaging evidence. |
| #81797 | keep_closed | skipped | related | Already closed; retain the packaged-startup contract without treating it as resolution of the source-capture defect. |

## Needs Human

- none
