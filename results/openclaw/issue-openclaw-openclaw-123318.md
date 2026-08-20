---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123318"
mode: "autonomous"
run_id: "32343564025"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32343564025"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T08:11:49.639Z"
canonical: "https://github.com/openclaw/openclaw/issues/123318"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123318"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-123318

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32343564025](https://github.com/openclaw/clawsweeper/actions/runs/32343564025)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123318

## Summary

#123318 remains a reproducible stable/beta git-updater bug on main 2a79f747019c2b64888e4cfce477ff5790fc5b41. A narrow credited fix PR is planned, but this checkout is read-only: fixture creation, edits, pnpm/Corepack, and the required Codex sibling inspection are unavailable.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #86218 | keep_closed | skipped | related | Already closed; no closure or mutation is valid. |
| #119098 | keep_closed | skipped | independent | Already closed and outside this tag-refresh repair. |
| #123318 | fix_needed | planned | canonical | The source fix is narrow and bug-only; implementation and validation require a writable executor. |
| cluster:issue-openclaw-openclaw-123318 | build_fix_artifact | planned | canonical | Create the narrow branch and run the fixture plus required changed gate in a writable executor. |

## Needs Human

- none
