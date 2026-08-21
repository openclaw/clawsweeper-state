---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32505701013"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32505701013"
head_sha: "eb8e2caabeb2ceabb5ef8145ebbb72ad6e6d3cff"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T17:10:31.746Z"
canonical: "https://github.com/openclaw/openclaw/issues/127287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127287"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-127287

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32505701013](https://github.com/openclaw/clawsweeper/actions/runs/32505701013)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127287

## Summary

Source evidence on main 781ded80d62499dc123a97e4eb534ce13791e034 matches the supplied reproduction: the plugin unconditionally selects copilot-developer-cli for prepared inference, catalog, and embeddings. Implementation is blocked in this worker because the checkout is read-only, dependencies are absent, pnpm cannot create its Corepack cache, and the mandatory sibling ../codex source is unavailable for the required direct Codex contract check.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #127287 | fix_needed | blocked | canonical | A narrow owner-plugin repair is planned, but this worker cannot edit, install dependencies, run regression tests, or satisfy the mandatory direct Codex-source inspection. |
| #13505 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #99221 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #102219 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #105584 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #114282 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| cluster:issue-openclaw-openclaw-127287 | build_fix_artifact | planned | canonical | Executable repair plan preserved for the deterministic executor. |

## Needs Human

- none
