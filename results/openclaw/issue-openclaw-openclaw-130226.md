---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-130226"
mode: "autonomous"
run_id: "33002638795"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33002638795"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-26T20:22:16.663Z"
canonical: "https://github.com/openclaw/openclaw/issues/130226"
canonical_issue: "https://github.com/openclaw/openclaw/issues/130226"
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

# issue-openclaw-openclaw-130226

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33002638795](https://github.com/openclaw/clawsweeper/actions/runs/33002638795)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/130226

## Summary

Current main confirms the defect: mid-turn preflight stores `promptBudgetBeforeReserve`, but recovery always supplies raw `contextTokenBudget` to forced budget compaction. No files changed: this sandbox is read-only, `../codex` is absent, and Corepack cannot initialize its cache here.

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
| #130226 | fix_needed | planned | canonical | Narrow bug repair required; local implementation is blocked by sandbox constraints. |
| cluster:issue-openclaw-openclaw-130226 | build_fix_artifact | blocked | canonical | Delegate to a writable executor after refreshing main and completing the required direct sibling Codex inspection. |
| #119117 | keep_independent | planned | independent | Independent root cause. |
| #86023 | keep_closed | skipped | related | Historical evidence only. |

## Needs Human

- none
