---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-132766"
mode: "autonomous"
run_id: "33315837568"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33315837568"
head_sha: "c179a466606f782ae73404357a0c94e6bead5807"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-30T14:43:14.608Z"
canonical: "https://github.com/openclaw/openclaw/issues/132766"
canonical_issue: "https://github.com/openclaw/openclaw/issues/132766"
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

# issue-openclaw-openclaw-132766

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33315837568](https://github.com/openclaw/clawsweeper/actions/runs/33315837568)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/132766

## Summary

#132766 remains the canonical open bug. Static inspection on main 0a6c013be5f50981b12d021b387b4fd1ea7e491e confirms four durable writers can copy an ambient session A fence into destination session B. Implementation is blocked in this read-only checkout: tests cannot start because Corepack cannot create its cache, and the mandatory sibling ../codex source checkout is absent.

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
| #132766 | fix_needed | blocked | canonical | A writable executor with the required sibling Codex checkout must apply and validate the narrow repair. |
| cluster:issue-openclaw-openclaw-132766 | build_fix_artifact | planned | canonical | Prepared narrow new-PR plan; execution is blocked only by this read-only worker environment. |

## Needs Human

- none
