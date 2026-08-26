---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-130177"
mode: "autonomous"
run_id: "32982976016"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32982976016"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-26T17:06:17.017Z"
canonical: "https://github.com/openclaw/openclaw/issues/130177"
canonical_issue: "https://github.com/openclaw/openclaw/issues/130177"
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

# issue-openclaw-openclaw-130177

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32982976016](https://github.com/openclaw/clawsweeper/actions/runs/32982976016)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/130177

## Summary

#130177 is a narrow, source-proven Control UI regression on current main f07ac003. The active-pane handoff invokes selectApplicationSession without ownership; its helper only derives an owner from explicit agentId or an encoded key, so legacy bare main leaves the prior header agent selected. Implementation and required validation are blocked solely by this read-only checkout: pnpm cannot initialize Corepack and node_modules/tsx are absent.

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
| #15893 | keep_closed | skipped | related | Already closed; retained only as historical context. |
| #39392 | keep_closed | skipped | related | Already closed; related UI-state history only. |
| #130177 | fix_needed | blocked | canonical | The repair is bounded and ready for an executor, but this worker cannot add the required failing regression, edit the branch, or run validation in the read-only sandbox. |
| cluster:issue-openclaw-openclaw-130177 | build_fix_artifact | planned | canonical | One narrow replacement PR is appropriate; no contributor PR exists to repair. |

## Needs Human

- none
