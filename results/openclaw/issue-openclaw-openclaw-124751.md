---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124751"
mode: "autonomous"
run_id: "32517674627"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32517674627"
head_sha: "eb8e2caabeb2ceabb5ef8145ebbb72ad6e6d3cff"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T19:28:48.208Z"
canonical: "https://github.com/openclaw/openclaw/issues/124751"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124751"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-124751

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32517674627](https://github.com/openclaw/clawsweeper/actions/runs/32517674627)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124751

## Summary

#124751 is a confirmed remaining Apple-chat reconciliation bug. Current main preserves Gateway envelope runId in `session.message`, but the Apple payload codec drops it; a partial live final therefore cannot adopt a fuller durable assistant row. A narrow credited fix PR is specified, but this read-only sandbox cannot write the branch or run SwiftPM (it returns `permissionDenied`).

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #124751 | fix_needed | planned | canonical | Implement the envelope-owned runId flow without changing Gateway persistence or the existing keyboard-scroll behavior. |
| cluster:issue-openclaw-openclaw-124751 | build_fix_artifact | planned | canonical | The implementation is narrow and ready for a writable executor; this worker could not create or validate a branch. |
| #123792 | keep_independent | planned | independent | Independent root cause; leave open. |
| #98116 | keep_closed | skipped | related | Already closed; no mutation. |
| #98117 | keep_closed | skipped | related | Already merged and closed; no mutation. |
| #108692 | keep_closed | skipped | related | Already closed; keyboard-scroll behavior remains out of this repair. |

## Needs Human

- none
