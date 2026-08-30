---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-133117"
mode: "autonomous"
run_id: "33297489009"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33297489009"
head_sha: "fa535d54a032862b022147a7cba4eaa3bdeb4a7b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-30T06:55:36.242Z"
canonical: "https://github.com/openclaw/openclaw/issues/133117"
canonical_issue: "https://github.com/openclaw/openclaw/issues/133117"
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

# issue-openclaw-openclaw-133117

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33297489009](https://github.com/openclaw/clawsweeper/actions/runs/33297489009)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/133117

## Summary

#133117 remains the canonical, reproducible browser microphone-lifecycle bug. Implementation is blocked in this worker because the checkout is read-only and the required direct sibling ../codex source checkout is absent; a narrow, fix-first PR artifact is supplied for a writable rerun.

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
| #133117 | fix_needed | blocked | canonical | A writable worker with the required sibling Codex source checkout must perform the narrow repair and regression proof before opening the PR. |
| cluster:issue-openclaw-openclaw-133117 | build_fix_artifact | planned | canonical | Prepared for a writable autonomous executor; no GitHub mutation is performed by this worker. |

## Needs Human

- none
