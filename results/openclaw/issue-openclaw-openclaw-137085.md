---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-137085"
mode: "autonomous"
run_id: "33830387073"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33830387073"
head_sha: "c6dee040ad401c7df83076960dfeb52c7a59836f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-04T02:57:08.707Z"
canonical: "#137085"
canonical_issue: "#137085"
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

# issue-openclaw-openclaw-137085

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33830387073](https://github.com/openclaw/clawsweeper/actions/runs/33830387073)

Workflow conclusion: success

Worker result: blocked

Canonical: #137085

## Summary

#137085 remains the open canonical bug. Current main returns an existing SQLite identity before reconciling a lone `.native-importing` claim; this read-only Linux worker cannot add the required Swift regression, run the disposable macOS proof, or create the fix PR. The mandatory sibling ../codex source is also unavailable.

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
| #137085 | fix_needed | planned | canonical | Implement the narrow claim-aware resume path in the native identity lifecycle; do not touch ordinary downgrade-recreated legacy JSON. |

## Needs Human

- Provide a writable disposable macOS CI context with sibling ../codex source available. It must add and demonstrate the pre-fix-failing Swift regression, run the native test harness, capture a sanitized upgrade-state native Gateway connection trace, and create/update the allowed PR branch.
