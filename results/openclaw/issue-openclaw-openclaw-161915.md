---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-161915"
mode: "plan"
run_id: "36733958749"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36733958749"
head_sha: "c73bf3840ef24af16b578f6fe3cfc927b5e81c3b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-30T15:09:23.445Z"
canonical: "#161915"
canonical_issue: "#161915"
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

# issue-openclaw-openclaw-161915

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36733958749](https://github.com/openclaw/clawsweeper/actions/runs/36733958749)

Workflow conclusion: success

Worker result: planned

Canonical: #161915

## Summary

Plan a narrow fix for the completions transport. No code or GitHub state was changed. The first implementation step is a failing regression on the current main head; the reported provider stream remains unverified.

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
| #128720 | keep_related | planned | related | The proposed transport fix does not resolve the separate retry request. |
| #152535 | keep_related | planned | related | It concerns dropped keepalives, while #161915 concerns parsed content-free chunks resetting the watchdog. |
| #161915 | fix_needed | planned | canonical | First prove the failure on the current main head. Then move activity notification to the transport's actual-progress boundary and verify the idle error reaches normal recovery. |

## Needs Human

- none
