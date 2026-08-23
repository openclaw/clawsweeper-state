---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "32645881747"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32645881747"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-23T15:40:14.847Z"
canonical: "https://github.com/openclaw/openclaw/issues/125873"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125873"
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

# issue-openclaw-openclaw-125873

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32645881747](https://github.com/openclaw/clawsweeper/actions/runs/32645881747)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/125873

## Summary

Plan a narrow new PR for the open canonical issue: normalize non-object persisted Bedrock tool-call input at the Bedrock replay boundary, with a payload-level regression test. No GitHub mutation was performed.

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
| #125873 | fix_needed | planned | canonical | #125873 remains open and reports the unhandled persisted-history replay path. |
| #21873 | keep_closed | skipped | related | Historical related evidence only. |
| #126391 | keep_closed | skipped | related | Merged partial-overlap repair; it does not cover malformed values already stored in history. |
| cluster:issue-openclaw-openclaw-125873 | build_fix_artifact | planned | canonical | No open implementation PR exists. |
| cluster:issue-openclaw-openclaw-125873 | open_fix_pr | planned | canonical | The job authorizes a new fix PR but not merge or close actions. |

## Needs Human

- none
