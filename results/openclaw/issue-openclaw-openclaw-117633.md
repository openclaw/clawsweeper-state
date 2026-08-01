---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117633"
mode: "plan"
run_id: "30719627631"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30719627631"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-01T22:29:26.461Z"
canonical: "#117633"
canonical_issue: "#117633"
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

# issue-openclaw-openclaw-117633

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30719627631](https://github.com/openclaw/clawsweeper/actions/runs/30719627631)

Workflow conclusion: success

Worker result: planned

Canonical: #117633

## Summary

Issue #117633 is an open, canonical, non-security correctness bug. Current source drops the selected ClawHub publisher identity before detail and install requests, while the existing registry and install-core contracts already accept ownerHandle. Plan one narrow replacement PR; no close or merge action is permitted.

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
| #117633 | fix_needed | planned | canonical | Build a focused fix that preserves ownerHandle from the selected result through Control UI detail/install, acknowledgement retry, Gateway schemas and handlers, install dedupe identity, and lifecycle facade parameters while preserving bare-slug callers. |
| cluster:issue-openclaw-openclaw-117633 | build_fix_artifact | planned |  | Create one new, attributed, narrow fix PR after implementation and validation; neither merge nor issue closure is allowed in this job. |

## Needs Human

- none
