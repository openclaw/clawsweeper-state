---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-115354"
mode: "autonomous"
run_id: "33285196965"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33285196965"
head_sha: "fa535d54a032862b022147a7cba4eaa3bdeb4a7b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-30T01:33:56.650Z"
canonical: "#115354"
canonical_issue: "#115354"
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

# issue-openclaw-openclaw-115354

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33285196965](https://github.com/openclaw/clawsweeper/actions/runs/33285196965)

Workflow conclusion: success

Worker result: blocked

Canonical: #115354

## Summary

#115354 remains the canonical reproducible lifecycle bug. Direct plugin-SDK deletion commits SQLite removal without unbinding conversation bindings; Gateway deletion already unbinds. A narrow SDK-owner repair is defined, but this worker cannot modify or validate it: the sandbox is read-only, `tsx` is absent, and mandatory sibling `../codex` source is unavailable for the repository’s Codex gate.

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
| #115354 | fix_needed | planned | canonical | Repair at the public SDK deletion owner after a successful commit; do not add a route-time liveness check or alter the raw SQLite primitive. |
| #115354 | build_fix_artifact | planned | canonical | A new fix PR is allowed, but this read-only worker cannot create the required branch changes or install the missing dependency. |

## Needs Human

- none
