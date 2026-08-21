---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127131"
mode: "autonomous"
run_id: "32501115163"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32501115163"
head_sha: "eb8e2caabeb2ceabb5ef8145ebbb72ad6e6d3cff"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-21T16:17:06.962Z"
canonical: "#127131"
canonical_issue: "#127131"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-127131

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32501115163](https://github.com/openclaw/clawsweeper/actions/runs/32501115163)

Workflow conclusion: success

Worker result: blocked

Canonical: #127131

## Summary

#127131 remains the canonical open bug. Source inspection shows cached plugin descriptor tools expose only execute, so lifecycle hooks cannot retain factory-owned prepared state. A narrow repair plan is ready, but this read-only worker cannot create the required branch/test regression or satisfy the mandatory direct ../codex source inspection because that sibling checkout is absent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #127131 | fix_needed | blocked | canonical | The repair requires a writable branch plus direct Codex-source inspection and local validation before a PR can be opened. |

## Needs Human

- Provide a writable repair environment with dependencies and a sibling ../codex checkout so the executor can implement, inspect the required Codex runtime contract, run the regression pre-fix/post-fix, and open the allowed PR.
