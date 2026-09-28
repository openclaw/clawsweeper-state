---
repo: "openclaw/wacli"
cluster_id: "issue-openclaw-wacli-444"
mode: "autonomous"
run_id: "36374347982"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36374347982"
head_sha: "8d659e7cb903370596e26acea5b81399f291c174"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-28T03:39:20.249Z"
canonical: "https://github.com/openclaw/wacli/issues/444"
canonical_issue: "https://github.com/openclaw/wacli/issues/444"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-wacli-444

Repo: openclaw/wacli

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36374347982](https://github.com/openclaw/clawsweeper/actions/runs/36374347982)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/wacli/issues/444

## Summary

Issue #444 remains reproducible from the routing logic on main b87e617: mapped 1:1 backfill requests always use the LID, including the retry after a timeout. A narrow fix PR can add a bounded phone-JID fallback.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #373 | keep_closed | skipped | related | Closed historical context. |
| #427 | keep_closed | skipped | related | Closed historical context, not a candidate fix for #444. |
| #444 | fix_needed | planned | canonical | The current routing still permits the reported regression; no open implementation PR is present in preflight. |
| cluster:issue-openclaw-wacli-444 | build_fix_artifact | planned |  | Implement and validate the bounded identity fallback before opening the fix PR. |
| cluster:issue-openclaw-wacli-444 | open_fix_pr | planned |  | The job allows a fix PR and prohibits merge and issue closure. |

## Needs Human

- none
