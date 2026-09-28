---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-160356"
mode: "autonomous"
run_id: "36407431532"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36407431532"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-28T10:56:23.295Z"
canonical: "https://github.com/openclaw/openclaw/issues/160356"
canonical_issue: "https://github.com/openclaw/openclaw/issues/160356"
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

# issue-openclaw-openclaw-160356

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36407431532](https://github.com/openclaw/clawsweeper/actions/runs/36407431532)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/160356

## Summary

Issue #160356 has a narrow Control UI visibility fix. The preflight identifies main at 526f67dc6382bae28cb26231b0813ce755521d80, but the read-only checkout is older and lacks that commit. The executor must verify the proposed edit against that base before changing code.

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
| #160356 | fix_needed | planned | canonical | Unnamed isolated heartbeat rows can remain visible as empty conversations while Show system sessions is off. |
| #70483 | keep_closed | skipped | related | Historical context only. |
| #75203 | keep_closed | skipped | related | Historical context only. |
| #97447 | keep_closed | skipped | independent | Historical context only. |
| cluster:issue-openclaw-openclaw-160356 | build_fix_artifact | planned |  | A small visibility change can address the reported Control UI behavior. |

## Needs Human

- none
