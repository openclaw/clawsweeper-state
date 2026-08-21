---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127272"
mode: "autonomous"
run_id: "32502765487"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32502765487"
head_sha: "eb8e2caabeb2ceabb5ef8145ebbb72ad6e6d3cff"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T16:36:04.921Z"
canonical: "https://github.com/openclaw/openclaw/issues/127272"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127272"
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

# issue-openclaw-openclaw-127272

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32502765487](https://github.com/openclaw/clawsweeper/actions/runs/32502765487)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127272

## Summary

#127272 remains a reproducible canonical bug on main d993742d: Bedrock emits `Bedrock stream ended before messageStop`, but shared classification/retry evidence recognizes only `message_stop`, so same-model retry and fallback are skipped. Implementation is blocked in this worker because the mandatory sibling `../codex` source checkout is absent and this read-only sandbox cannot clone it or write a repair branch; pnpm also cannot create its Corepack cache.

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
| #127272 | fix_needed | planned | canonical | A narrow shared-classifier repair is warranted; no provider fallback or partial-output policy change is needed. |
| cluster:issue-openclaw-openclaw-127272 | build_fix_artifact | blocked | canonical | The executable repair requires a writable runner with the mandatory sibling Codex checkout and installed dependencies. |

## Needs Human

- none
