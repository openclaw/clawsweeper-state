---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-121252"
mode: "autonomous"
run_id: "32420651882"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32420651882"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-20T21:50:50.298Z"
canonical: "https://github.com/openclaw/openclaw/issues/121252"
canonical_issue: "https://github.com/openclaw/openclaw/issues/121252"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-121252

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32420651882](https://github.com/openclaw/clawsweeper/actions/runs/32420651882)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/121252

## Summary

#121252 remains the open canonical report. Current main still lets session-maintenance inspect loaded channel plugin hooks before recognizing that a group/channel session is already protected; reordering that existing structural check yields a narrow, net-neutral containment fix. The original Buzz parser trigger is already fixed in closed #121143.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 |
| issue_implementation_status_comment | updated | #121252 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #121252 | fix_needed | planned | canonical | Implement the maintenance-owner repair: recognize durable external group/channel session keys before any plugin-specific thread parsing, so an unrelated plugin resolver cannot abort shared maintenance. |
| #121143 | keep_closed | skipped | related | Already closed historical trigger; it is related evidence, not a target for mutation. |
| cluster:issue-openclaw-openclaw-121252 | build_fix_artifact | planned | canonical | A narrow new fix PR is appropriate; no configuration, schema, migration, or Buzz-plugin change is required. |

## Needs Human

- none
