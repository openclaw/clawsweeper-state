---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128411"
mode: "autonomous"
run_id: "32675274693"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32675274693"
head_sha: "d5b0aa42ff03edf2752d0f8b960c3a60bb70a246"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-24T00:08:23.384Z"
canonical: "https://github.com/openclaw/openclaw/issues/128411"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128411"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-128411

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32675274693](https://github.com/openclaw/clawsweeper/actions/runs/32675274693)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/128411

## Summary

Current main has the reported lifecycle-rotation cleanup gap, but repair is blocked before code changes: required sibling ../codex is unavailable for direct hook-contract inspection, and this read-only environment also prevents test execution.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #128411 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #128409 | keep_related | planned | related | Adjacent native-hook lifetime issue; no duplicate or closure action. |
| #128411 | fix_needed | blocked | canonical | Await direct inspection of the Codex hook contract in ../codex; then implement and validate the narrow rotation handler. |
| cluster:issue-openclaw-openclaw-128411 | build_fix_artifact | blocked | canonical | A narrow fix remains appropriate once the mandatory upstream contract and writable test environment are available. |

## Needs Human

- Provide or permit creation of sibling ../codex for direct inspection of the native-hook contract; then rerun this repair in a writable environment so the failing regression and focused tests can run.
