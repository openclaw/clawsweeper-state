---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122121"
mode: "autonomous"
run_id: "31510272266"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31510272266"
head_sha: "5439582beebe57b7e79dc4e3d7bb44acd9f7d65c"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-11T16:26:06.833Z"
canonical: "https://github.com/openclaw/openclaw/issues/122121"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122121"
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

# issue-openclaw-openclaw-122121

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31510272266](https://github.com/openclaw/clawsweeper/actions/runs/31510272266)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122121

## Summary

Confirmed on main 903af8bef557d66a47ec2ba24a084c3b228debce: disconnect clears an existing tab attachment, but snapshot reconciliation only auto-attaches newly inserted tab IDs. A same-ID reconnect therefore leaves Target.getTargets empty. The narrow repair is planned; this read-only checkout lacks tsx, so no branch or validated PR could be produced here.

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
| #122121 | fix_needed | planned | canonical | The bridge is the authoritative snapshot-reconciliation owner; no browser-tool retry, config, or compatibility path is needed. |
| #33093 | keep_closed | skipped | related | Already closed; no closure action is permitted. |
| #43842 | keep_closed | skipped | related | Already closed; no closure action is permitted. |
| #120806 | keep_closed | skipped | related | Already merged and not a candidate fix for this issue. |
| cluster:issue-openclaw-openclaw-122121 | build_fix_artifact | planned | canonical | A two-file owner-boundary repair and focused regression are well-defined. |
| cluster:issue-openclaw-openclaw-122121 | open_fix_pr | blocked | canonical | Blocked only on the executor's writable dependency-ready environment; open or update clawsweeper/issue-openclaw-openclaw-122121 after the artifact validations pass. |

## Needs Human

- none
