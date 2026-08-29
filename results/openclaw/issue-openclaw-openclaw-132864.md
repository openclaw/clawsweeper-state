---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-132864"
mode: "autonomous"
run_id: "33277687430"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33277687430"
head_sha: "8d11c21558ba90ac6812b80b95efd0dd9b0aa936"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-29T22:26:25.301Z"
canonical: "https://github.com/openclaw/openclaw/issues/132864"
canonical_issue: "https://github.com/openclaw/openclaw/issues/132864"
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

# issue-openclaw-openclaw-132864

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33277687430](https://github.com/openclaw/clawsweeper/actions/runs/33277687430)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/132864

## Summary

#132864 remains a source-reproducible canonical bug: build identity is treated as mismatched before restart-health has observed a reachable Gateway. A narrow fix/PR plan is ready, but implementation is blocked in this worker because the checkout is read-only, dependencies are absent, and the mandatory sibling Codex source checkout cannot be created or inspected.

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
| #132864 | fix_needed | planned | canonical | No viable open PR exists; the hydrated issue is open and canonical. |
| cluster:issue-openclaw-openclaw-132864 | build_fix_artifact | planned |  | Artifact is ready for an executor with a writable checkout, installed dependencies, and the mandatory sibling Codex source checkout. |
| cluster:issue-openclaw-openclaw-132864 | open_fix_pr | blocked |  | Blocked only on writable execution prerequisites; no maintainer product decision is needed. |

## Needs Human

- none
