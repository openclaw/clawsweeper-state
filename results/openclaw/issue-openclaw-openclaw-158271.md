---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158271"
mode: "plan"
run_id: "36186977827"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36186977827"
head_sha: "9fb3a5d5887891c08e0310cafc54b09ab3023c2a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-25T20:43:01.422Z"
canonical: "#158271"
canonical_issue: "#158271"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-158271

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36186977827](https://github.com/openclaw/clawsweeper/actions/runs/36186977827)

Workflow conclusion: success

Worker result: planned

Canonical: #158271

## Summary

Plan a narrow fix for the still-open agent-turn policy-hash regression. The checkout matches preflight main b36641d7625de2a533be288fb0b809b73d559601. No code was changed and no tests were run in plan mode; the required failing regression and validation must precede a fix PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #158271 | fix_needed | planned | canonical | The merged heartbeat repair does not cover plain agent-command turns. |
| #120006 | keep_related | planned | related | Those remaining concerns are distinct from the plain agent-turn hash flip. |
| #121485 | keep_closed | skipped | related | Historical context only. |
| #121509 | keep_closed | skipped | related | Useful prior fix, but it does not resolve the reported plain agent-command path. |

## Needs Human

- none
