---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-121604"
mode: "autonomous"
run_id: "31395334753"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31395334753"
head_sha: "0559e03857fa9a9a6de28c984ed495287ec3b9cc"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-10T14:05:44.465Z"
canonical: "https://github.com/openclaw/openclaw/issues/121604"
canonical_issue: "https://github.com/openclaw/openclaw/issues/121604"
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

# issue-openclaw-openclaw-121604

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31395334753](https://github.com/openclaw/clawsweeper/actions/runs/31395334753)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/121604

## Summary

Current main still routes direct dist/index.js root-version calls into runCli before the existing fast path, creating TTY startup progress before synchronous version exit. A narrow two-file repair is ready, but this worker cannot edit, build, or validate because the checkout filesystem is read-only and dependencies are absent.

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
| #121604 | fix_needed | planned | canonical | A root-only --version/-V/-v invocation should use the existing fast path before startup progress; container-targeted requests must continue through runCli. |
| cluster:issue-openclaw-openclaw-121604 | build_fix_artifact | planned | canonical | Use the existing fast path at the legacy entry boundary; do not alter progress behavior globally. |
| cluster:issue-openclaw-openclaw-121604 | open_fix_pr | blocked | canonical | The worker checkout is read-only and has no dependency install or dist artifacts. An executor with a writable checkout must implement and validate the artifact before opening the PR. |

## Needs Human

- none
