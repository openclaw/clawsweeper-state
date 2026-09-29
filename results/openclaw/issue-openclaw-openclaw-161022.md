---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-161022"
mode: "plan"
run_id: "36538254961"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36538254961"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-29T07:46:57.221Z"
canonical: "https://github.com/openclaw/openclaw/issues/161022"
canonical_issue: "https://github.com/openclaw/openclaw/issues/161022"
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

# issue-openclaw-openclaw-161022

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36538254961](https://github.com/openclaw/clawsweeper/actions/runs/36538254961)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/161022

## Summary

Plan a narrow fix for the direct-only Tool Search recovery error. Reproduce the defect on the preflight main commit before implementation; this checkout does not contain that commit.

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
| https://github.com/openclaw/openclaw/issues/161022 | fix_needed | planned | canonical | Give exact matches in the current run's effective direct-tool set direct-call guidance while retaining catalog exclusion and ordinary direct-call authorization. The attached fix artifact describes the authorized implementation. |
| https://github.com/openclaw/openclaw/issues/141743 | keep_related | planned | related | Loop termination and direct-only tool guidance have different remaining work. |
| https://github.com/openclaw/openclaw/issues/157327 | keep_closed | skipped | related | Historical context only; no closure action is valid. |

## Needs Human

- none
