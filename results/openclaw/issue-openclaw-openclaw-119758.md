---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119758"
mode: "autonomous"
run_id: "31060551205"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31060551205"
head_sha: "480d56953f381b127bdc0b5a7029efeeaa717595"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-06T02:09:23.345Z"
canonical: "https://github.com/openclaw/openclaw/issues/119758"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119758"
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

# issue-openclaw-openclaw-119758

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31060551205](https://github.com/openclaw/clawsweeper/actions/runs/31060551205)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/119758

## Summary

#119758 remains a reproducible canonical bug on main a1064adb6861cdd242c6814562120c0420ea494b. Targeted updates drop the inferred official channel, while --all preserves it. A narrow new-PR plan is ready, but this read-only checkout has no node_modules and pnpm cannot initialize its Corepack cache (EROFS), so no patch or validation could be performed here.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119799 | clawsweeper/issue-openclaw-openclaw-119758 |  |
| issue_implementation_status_comment | updated | #119758 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119799 | merge_canonical | blocked | fix_pr | checks are not clean: preflight: QUEUED, Scan changed paths (precise): QUEUED |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119758 | fix_needed | planned | canonical | Implement the existing official-channel contract for targeted trusted official installs without enabling catalog sync or changing pin policy. |
| cluster:issue-openclaw-openclaw-119758 | build_fix_artifact | planned | canonical | Executor should implement and validate this narrow repair on clawsweeper/issue-openclaw-openclaw-119758. |

## Needs Human

- none
