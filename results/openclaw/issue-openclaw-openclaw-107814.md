---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-107814"
mode: "autonomous"
run_id: "31656833550"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31656833550"
head_sha: "637c3339dbef38ca3f7444510c8f7e72b95903c6"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-13T01:18:25.186Z"
canonical: "https://github.com/openclaw/openclaw/issues/107814"
canonical_issue: "https://github.com/openclaw/openclaw/issues/107814"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-107814

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31656833550](https://github.com/openclaw/clawsweeper/actions/runs/31656833550)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/107814

## Summary

Current main already contains the shared terminal-authority guard requested by the issue, so the mandated regression cannot fail there and no narrow implementation PR is appropriate. Local test execution is additionally blocked because this read-only checkout has no installed dependencies.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| issue_implementation_status_comment | updated | #107814 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #107814 | keep_canonical | skipped | canonical | The job requires a regression that fails on current main before editing. Static verification shows the proposed repair already exists in the shared owner; creating a duplicate test-only PR without a failing pre-fix reproduction would violate the repair and test-audit gates. |

## Needs Human

- none
