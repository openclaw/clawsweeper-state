---
repo: "openclaw/openclaw-windows-node"
cluster_id: "issue-openclaw-openclaw-windows-node-1443"
mode: "autonomous"
run_id: "36539550149"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36539550149"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-29T08:00:49.866Z"
canonical: "https://github.com/openclaw/openclaw-windows-node/issues/1443"
canonical_issue: "https://github.com/openclaw/openclaw-windows-node/issues/1443"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-windows-node-1443

Repo: openclaw/openclaw-windows-node

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36539550149](https://github.com/openclaw/clawsweeper/actions/runs/36539550149)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw-windows-node/issues/1443

## Summary

Issue #1443 has a plausible, narrow startup overwrite path on main. The checkout is read-only, so no change, PR branch, or validation run was possible.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #1443 | fix_needed | planned | canonical | Guard control initialization before it can save the XAML default over the persisted timeout. |
| cluster:issue-openclaw-openclaw-windows-node-1443 | build_fix_artifact | planned |  | A focused fix can be prepared from the inspected source. |
| cluster:issue-openclaw-openclaw-windows-node-1443 | open_fix_pr | blocked |  | A writable checkout and Windows validation host are required before creating the requested PR. |

## Needs Human

- none
