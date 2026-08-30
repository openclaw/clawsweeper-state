---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-133306"
mode: "autonomous"
run_id: "33315132328"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33315132328"
head_sha: "c179a466606f782ae73404357a0c94e6bead5807"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-30T14:19:13.878Z"
canonical: "https://github.com/openclaw/openclaw/issues/133306"
canonical_issue: "https://github.com/openclaw/openclaw/issues/133306"
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

# issue-openclaw-openclaw-133306

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33315132328](https://github.com/openclaw/clawsweeper/actions/runs/33315132328)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/133306

## Summary

#133306 is a narrow canonical plugin-loader bug on main, but this read-only checkout lacks tsx and the required sibling ../codex source is unavailable, so no locally validated branch or PR can be produced. A bounded new-PR artifact is ready for a writable executor.

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
| #133306 | fix_needed | blocked | canonical | Implementation and validation are blocked only by the worker environment. The deterministic executor should apply the artifact on a writable checkout with dependencies and the required sibling Codex source. |
| cluster:issue-openclaw-openclaw-133306 | build_fix_artifact | planned |  | A writable executor can implement this as one narrow fix PR. |

## Needs Human

- none
