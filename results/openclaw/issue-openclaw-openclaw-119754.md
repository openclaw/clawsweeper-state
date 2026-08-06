---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119754"
mode: "autonomous"
run_id: "31056385027"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31056385027"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-06T00:06:59.214Z"
canonical: "https://github.com/openclaw/openclaw/issues/119754"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119754"
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

# issue-openclaw-openclaw-119754

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31056385027](https://github.com/openclaw/clawsweeper/actions/runs/31056385027)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/119754

## Summary

#119754 is a reproducible current-main bug. Expected-leaf chat admission maps a dirty SQLite transcript projection to raw INVALID_REQUEST instead of the established retryable UNAVAILABLE response. A narrow two-file fix artifact is ready; implementation is blocked only because this worker checkout is read-only and missing dependencies.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119778 | clawsweeper/issue-openclaw-openclaw-119754 |  |
| issue_implementation_status_comment | updated | #119754 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119778 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119754 | fix_needed | blocked | canonical | The bug is confirmed, but this worker cannot write the new fix branch or install missing dependencies in the read-only checkout. |
| cluster:issue-openclaw-openclaw-119754 | build_fix_artifact | planned | canonical | Create the narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-119754 after applying and validating this artifact. |

## Needs Human

- none
