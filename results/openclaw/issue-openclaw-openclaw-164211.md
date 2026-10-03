---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-164211"
mode: "plan"
run_id: "37114657421"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37114657421"
head_sha: "15a53b4f065fd96d4ceeff86cc47384c9902e153"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-10-03T09:59:36.003Z"
canonical: "#164211"
canonical_issue: "https://github.com/openclaw/openclaw/issues/164211"
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

# issue-openclaw-openclaw-164211

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37114657421](https://github.com/openclaw/clawsweeper/actions/runs/37114657421)

Workflow conclusion: success

Worker result: planned

Canonical: #164211

## Summary

Plan a narrow fix for managed MCP bridge host-root resolution. Checkout HEAD matches preflight main a5ca247a6e744a57bb68e895e80b82fa1fc8bd2a and retains the reported path defect. No implementation, runtime reproduction, tests, or GitHub mutations were performed; this checkout is read-only and dependencies are absent.

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
| #164211 | fix_needed | planned | canonical | Repair existing bridge startup behavior through a supported host/package contract. Runtime reproduction, implementation, and validation remain required before opening the implementation PR. |
| #76639 | keep_closed | skipped | related | Closed historical context with a distinct root cause; no action is required. |
| #80431 | keep_closed | skipped | related | Retain as historical evidence for the dist-first/source-fallback contract. |

## Needs Human

- none
