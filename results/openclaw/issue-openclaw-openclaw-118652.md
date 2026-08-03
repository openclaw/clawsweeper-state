---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118652"
mode: "autonomous"
run_id: "30812698303"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30812698303"
head_sha: "4f67ca516da0fc29fed5ae2b8e17fce14d49354d"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-03T13:13:54.804Z"
canonical: "https://github.com/openclaw/openclaw/issues/118652"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118652"
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

# issue-openclaw-openclaw-118652

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30812698303](https://github.com/openclaw/clawsweeper/actions/runs/30812698303)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118652

## Summary

Issue #118652 is valid on current main dfb13780435f807f6004be5167384bbe6f2fdaf0. The process-wide supervisor retains active and starting subprocesses only in memory, while gateway shutdown drains sessions, plugins, cron, and sockets without terminating that supervisor. A narrow gateway-owned shutdown path can cancel and await all supervised process trees without changing config, persistence, or the security boundary.

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
| #118652 | fix_needed | planned | canonical | Current main lacks a lifecycle owner that terminates all process-supervisor runs during gateway shutdown or restart. |
| cluster:issue-openclaw-openclaw-118652 | build_fix_artifact | planned | canonical | A focused new fix PR is appropriate; no contributor PR exists to repair or replace. |

## Needs Human

- none
