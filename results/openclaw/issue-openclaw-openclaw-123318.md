---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123318"
mode: "autonomous"
run_id: "32402153287"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32402153287"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T18:39:07.913Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32402153287](https://github.com/openclaw/clawsweeper/actions/runs/32402153287)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123318

## Summary

#123318 remains a real, narrow release-channel updater defect on main 2006049629fb042d708b3af36ed28134e4fb03e6: stable/beta updates run `git fetch --all --prune --tags` without `--force`, so a recreated local tag aborts before channel-tag resolution. A writable checkout is required to reproduce, patch, and validate; this worker's filesystem is read-only, dependencies are absent, and the required sibling ../codex checkout is unavailable for the mandatory direct Codex inspection.

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
| #123318 | fix_needed | planned | canonical | Implement a force-refresh for changed release tags, without changing the dev `--no-tags` path, status persistence, or fast-status policy. |
| #86218 | keep_closed | skipped | related | Historical adjacent updater evidence only; already closed and not a closure target. |
| #119098 | keep_closed | skipped | independent | Independent historical issue; already closed and outside this repair. |
| cluster:issue-openclaw-openclaw-123318 | build_fix_artifact | blocked |  | Implementation is blocked only by the execution environment; the narrow repair plan is ready for a writable executor. |

## Needs Human

- none
