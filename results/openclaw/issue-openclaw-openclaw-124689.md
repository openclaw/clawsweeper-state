---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32589592509"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32589592509"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T18:14:10.502Z"
canonical: "https://github.com/openclaw/openclaw/issues/124689"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124689"
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

# issue-openclaw-openclaw-124689

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32589592509](https://github.com/openclaw/clawsweeper/actions/runs/32589592509)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124689

## Summary

The generic probe fallback defect is source-evident, but no repaired branch can be produced: the checkout is read-only and mandatory sibling ../codex source is absent; cloning fails with a read-only filesystem error.

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
| #124689 | keep_canonical | blocked | canonical | Keep the hydrated canonical issue open. Only local implementation is blocked; the issue remains a narrow bug-fix candidate. |
| cluster:issue-openclaw-openclaw-124689 | fix_needed | planned | canonical | Filter deprecated and disabled rows only in the implicit catalog fallback, then preserve existing provider normalization and Anthropic priority/order. |
| cluster:issue-openclaw-openclaw-124689 | build_fix_artifact | blocked | canonical | Ready for executor replay once checkout prerequisites are restored. |

## Needs Human

- none
