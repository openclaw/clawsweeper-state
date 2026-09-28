---
repo: "openclaw/openclaw-windows-node"
cluster_id: "issue-openclaw-openclaw-windows-node-1365"
mode: "autonomous"
run_id: "36378480386"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36378480386"
head_sha: "8d659e7cb903370596e26acea5b81399f291c174"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T04:41:33.878Z"
canonical: "https://github.com/openclaw/openclaw-windows-node/issues/1365"
canonical_issue: "https://github.com/openclaw/openclaw-windows-node/issues/1365"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-windows-node-1365

Repo: openclaw/openclaw-windows-node

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36378480386](https://github.com/openclaw/clawsweeper/actions/runs/36378480386)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw-windows-node/issues/1365

## Summary

Issue #1365 remains a plausible native chat bug, but the current checkout cannot establish whether text is lost during rendering or clipped by layout. No code or PR was created: this workspace is read-only, and current-head Windows UI proof is needed to choose a safe, narrow fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #1365 | fix_needed | planned | canonical | The report needs current-head native proof to distinguish missing text from clipping and to locate the table-cell width failure. |
| cluster:issue-openclaw-openclaw-windows-node-1365 | build_fix_artifact | blocked |  | Implementation is blocked until a writable Windows checkout can reproduce both symptoms and validate the final narrow edit. |

## Needs Human

- none
