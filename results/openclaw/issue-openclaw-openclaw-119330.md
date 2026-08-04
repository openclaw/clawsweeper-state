---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119330"
mode: "autonomous"
run_id: "30946618225"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30946618225"
head_sha: "2a61adcc1f062561ba3c9deb62cc0df97cdc81d2"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-04T20:20:26.047Z"
canonical: "https://github.com/openclaw/openclaw/issues/119330"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119330"
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

# issue-openclaw-openclaw-119330

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30946618225](https://github.com/openclaw/clawsweeper/actions/runs/30946618225)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119330

## Summary

Current main reproduces the sessions_spawn ACP rejection: a restrictive requester allowlist is an effective OpenClaw tool snapshot, yet ACP requires absent host aliases such as apply_patch. The reported /acp spawn path does not traverse this gate on current main. Plan one narrow core fix PR; retain ACP deny and sandbox protections.

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
| #119330 | fix_needed | planned | canonical | Real, narrow ACP-only defect with no open implementation PR in the hydrated cluster. |
| cluster:issue-openclaw-openclaw-119330 | build_fix_artifact | planned | canonical | Build a new narrow PR from the configured ClawSweeper branch. |
| cluster:issue-openclaw-openclaw-119330 | open_fix_pr | planned | canonical | Job permits one implementation PR and forbids merge/close actions. |

## Needs Human

- none
