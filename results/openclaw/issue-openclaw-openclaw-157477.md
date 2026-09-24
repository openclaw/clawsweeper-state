---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157477"
mode: "plan"
run_id: "36051546784"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36051546784"
head_sha: "0dc9e1c0870cec9e277d745fb67270bbc4c6c4ea"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-24T20:01:59.574Z"
canonical: "#157477"
canonical_issue: "#157477"
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

# issue-openclaw-openclaw-157477

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36051546784](https://github.com/openclaw/clawsweeper/actions/runs/36051546784)

Workflow conclusion: success

Worker result: planned

Canonical: #157477

## Summary

The reported schema mismatch remains present at the preflight main SHA. Plan a narrow fix after demonstrating the failure through the registered Automations tool and Gateway read result. No code or GitHub state was changed; tests were not run in plan mode.

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
| #157477 | fix_needed | planned | canonical | The scheduler can return scheduleErrorCount, while the canonical closed read schema omits it. A focused read-schema repair is warranted. |

## Needs Human

- none
