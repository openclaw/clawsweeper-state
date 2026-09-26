---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158945"
mode: "plan"
run_id: "36253573907"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36253573907"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-26T15:57:25.550Z"
canonical: "#158945"
canonical_issue: "#158945"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-158945

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36253573907](https://github.com/openclaw/clawsweeper/actions/runs/36253573907)

Workflow conclusion: success

Worker result: planned

Canonical: #158945

## Summary

Plan a narrow fix for the open issue. Current main shows that CLI tool calls can carry currentChannelId while native spawn builds its binding origin from agentTo alone. A real tool-to-spawn failing regression is required before implementation.

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
| #158945 | fix_needed | planned | canonical | Keep the issue open and prove the reported failure through the real composition before changing code. |

## Needs Human

- none
