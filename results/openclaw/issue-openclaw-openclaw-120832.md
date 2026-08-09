---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120832"
mode: "autonomous"
run_id: "31291121700"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31291121700"
head_sha: "81c23bede7a805351bcbb1d5fde54ff278337535"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-09T03:28:37.728Z"
canonical: "https://github.com/openclaw/openclaw/issues/120832"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120832"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-120832

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31291121700](https://github.com/openclaw/clawsweeper/actions/runs/31291121700)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120832

## Summary

Current main c5bdad48 confirms the test-only timeout defect: six sequential 120s doctor CLI budgets sit inside a 240s Vitest deadline. A narrow credited fix PR is planned; local focused validation is blocked because this read-only checkout lacks dependencies (missing p-map).

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/120852 | clawsweeper/issue-openclaw-openclaw-120832 |  |
| issue_implementation_status_comment | updated | #120832 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120852 | merge_canonical | blocked | fix_pr | checks are not clean: checks-node-compact-large-7: FAILURE, checks-windows-node-test: IN_PROGRESS |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120832 | fix_needed | planned | canonical | The issue remains reproducible by source structure. The proposed repair is test-only and does not alter Doctor runtime behavior, SecretRef policy, configuration, shared harnesses, or SQLite. |
| cluster:issue-openclaw-openclaw-120832 | build_fix_artifact | planned | canonical | Build one narrow test-only PR for the canonical issue. |

## Needs Human

- none
