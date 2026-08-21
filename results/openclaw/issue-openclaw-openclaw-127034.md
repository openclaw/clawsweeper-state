---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127034"
mode: "autonomous"
run_id: "32455009581"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32455009581"
head_sha: "edfc57b12bfe507d5c7c974986efd02857f53305"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-21T06:42:44.801Z"
canonical: "#127034"
canonical_issue: "#127034"
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

# issue-openclaw-openclaw-127034

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32455009581](https://github.com/openclaw/clawsweeper/actions/runs/32455009581)

Workflow conclusion: success

Worker result: blocked

Canonical: #127034

## Summary

#127034 remains the canonical open bug. Current main still throws when proofId is supplied without proof at extensions/workboard/src/store-workflow.ts:271. A narrow owner-plugin fix is specified, but this read-only worker cannot create the branch or install dependencies: ../codex is absent (required direct-inspection gate), node_modules is absent, and pnpm cannot create its Corepack cache.

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
| #127034 | fix_needed | planned | canonical | Implement the documented proofId lifecycle at the Workboard owner boundary. |
| #127034 | build_fix_artifact | planned | canonical | A narrow replacement PR is appropriate once run in a writable, dependency-ready checkout. |
| #127034 | open_fix_pr | blocked | canonical | Provision a writable worker with the sibling Codex checkout and installed dependencies, then apply the attached artifact. |

## Needs Human

- none
