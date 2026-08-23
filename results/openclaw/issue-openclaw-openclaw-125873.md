---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "32655083679"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32655083679"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-23T17:41:29.518Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32655083679](https://github.com/openclaw/clawsweeper/actions/runs/32655083679)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/125873

## Summary

#125873 is a live, canonical Bedrock replay bug. Plan one narrow PR that reuses the existing structured tool-argument coercion at the Bedrock replay egress boundary and proves the outbound Converse request no longer forwards malformed persisted arguments.

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
| #125873 | fix_needed | planned | canonical | Current main has the persisted-replay egress gap; merged #126391 validates streamed producer output but does not change this replay projection. |
| #21873 | keep_closed | skipped | related | Historical evidence only; no closeout action is valid for an already closed PR. |
| #126391 | keep_closed | skipped | related | Historical partial-overlap evidence only; no action is valid for an already merged PR. |
| cluster:issue-openclaw-openclaw-125873 | build_fix_artifact | planned | canonical | Narrow new-fix-PR path is appropriate; no viable open implementation PR exists. |
| cluster:issue-openclaw-openclaw-125873 | open_fix_pr | planned | canonical | Job authorizes a new implementation PR but not merge or issue closure. |

## Needs Human

- none
