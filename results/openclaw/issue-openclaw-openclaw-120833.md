---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120833"
mode: "plan"
run_id: "31296363938"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31296363938"
head_sha: "06bc47a5bde8ab7982bcd915d953b44d3f3f885b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-09T05:23:47.126Z"
canonical: "https://github.com/openclaw/openclaw/issues/120833"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120833"
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

# issue-openclaw-openclaw-120833

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31296363938](https://github.com/openclaw/clawsweeper/actions/runs/31296363938)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120833

## Summary

Current main still releases the durable recovery owner only after the reply operation clears, leaving the reported recovery-progress race reproducible. Plan a narrow canonical fix PR for #120833; no merge or closure actions.

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
| #120833 | fix_needed | planned | canonical | The issue is a narrow existing-behavior regression with a defined durable-owner lifecycle fix; preflight reports no security-sensitive signal and no open candidate PR. |
| cluster:issue-openclaw-openclaw-120833 | build_fix_artifact | planned | canonical | Create one narrow branch-backed repair plan for the canonical issue. |
| cluster:issue-openclaw-openclaw-120833 | open_fix_pr | planned | canonical | A fix PR is allowed and required for the canonical issue; it must not merge or close #120833 in this lane. |

## Needs Human

- none
