---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128086"
mode: "autonomous"
run_id: "32616000951"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32616000951"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T03:50:55.386Z"
canonical: "https://github.com/openclaw/openclaw/issues/128086"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128086"
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

# issue-openclaw-openclaw-128086

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32616000951](https://github.com/openclaw/clawsweeper/actions/runs/32616000951)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/128086

## Summary

#128086 remains a reproducible canonical bug on main. The cold SQLite client reads an unexpired locator and dials it without checking PID liveness; registration-time pruning is not reached. A narrow no-cleanup fix is planned, but this worker cannot write or validate a branch in the read-only checkout, and the mandatory sibling ../codex source is absent and cannot be cloned here.

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
| #128086 | fix_needed | blocked | canonical | Implementation requires a writable executor that can inspect sibling ../codex before changing code, add the regression, and run validation. |
| cluster:issue-openclaw-openclaw-128086 | build_fix_artifact | planned | canonical | Create one narrow credited ClawSweeper PR after the executor clears the local write and direct-Codex-source blockers. |

## Needs Human

- none
