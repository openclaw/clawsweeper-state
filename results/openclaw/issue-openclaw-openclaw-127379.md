---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127379"
mode: "autonomous"
run_id: "32515189924"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32515189924"
head_sha: "eb8e2caabeb2ceabb5ef8145ebbb72ad6e6d3cff"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T19:02:55.338Z"
canonical: "https://github.com/openclaw/openclaw/issues/127379"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127379"
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

# issue-openclaw-openclaw-127379

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32515189924](https://github.com/openclaw/clawsweeper/actions/runs/32515189924)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127379

## Summary

#127379 remains a real, narrow /models browse-path bug on main 9a0e11df066dea98b20e96a3f43a8d3342c89ca7. The existing visibility-policy API already supports the repair; no new dependency, config, or API is needed. Local implementation is blocked because this checkout is read-only and focused validation cannot start: tsx is missing, while the required pnpm install retry would write the checkout.

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
| #127379 | fix_needed | blocked | canonical | Implementation requires a writable executor checkout with dependencies installed; no maintainer product decision is needed. |
| cluster:issue-openclaw-openclaw-127379 | build_fix_artifact | planned | canonical | A new narrow fix PR is the canonical path; opening it awaits a writable repair executor. |

## Needs Human

- none
