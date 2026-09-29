---
repo: "openclaw/openclaw-windows-node"
cluster_id: "issue-openclaw-openclaw-windows-node-1546"
mode: "autonomous"
run_id: "36629056422"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36629056422"
head_sha: "7829cdce71310b549c119c670e7bd69e04f7e242"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-29T22:14:17.304Z"
canonical: "https://github.com/openclaw/openclaw-windows-node/issues/1546"
canonical_issue: "https://github.com/openclaw/openclaw-windows-node/issues/1546"
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

# issue-openclaw-openclaw-windows-node-1546

Repo: openclaw/openclaw-windows-node

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36629056422](https://github.com/openclaw/clawsweeper/actions/runs/36629056422)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw-windows-node/issues/1546

## Summary

Issue #1546 remains reproducible from the supplied screenshots and consistent with main at 24263d3. A narrow Setup window fix is planned, but this Linux checkout is read-only. No code was changed, validation was run, or PR was opened.

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
| #1546 | fix_needed | planned | canonical | The Setup window defect has a narrow owner and no active implementation PR in the preflight inventory. |
| #1145 | keep_independent | planned | independent | It needs separate chat reproduction and repair. |
| #1292 | keep_related | planned | related | The reports share a display-layout theme but require different fixes. |
| cluster:issue-openclaw-openclaw-windows-node-1546 | build_fix_artifact | blocked |  | Implementation requires a writable checkout and a Windows validation host. |

## Needs Human

- none
