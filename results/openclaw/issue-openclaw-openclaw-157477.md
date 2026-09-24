---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157477"
mode: "plan"
run_id: "36048599765"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36048599765"
head_sha: "0dc9e1c0870cec9e277d745fb67270bbc4c6c4ea"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-24T19:34:32.885Z"
canonical: "https://github.com/openclaw/openclaw/issues/157477"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157477"
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

# issue-openclaw-openclaw-157477

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36048599765](https://github.com/openclaw/clawsweeper/actions/runs/36048599765)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/157477

## Summary

The reported mismatch is present at the preflight main SHA. The scheduler writes state.scheduleErrorCount, the Gateway returns it, and the registered Automations tool validates get against a closed job-state schema that omits it. This is a plan only; runtime reproduction and validation remain required before a fix PR.

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
| #157477 | fix_needed | planned | canonical | A narrow read-schema repair is warranted. The branch must first demonstrate the original failure through the registered tool with a Gateway read result. |
| clawsweeper/issue-openclaw-openclaw-157477 | build_fix_artifact | planned |  | Add scheduleErrorCount to the read-only state schema, preserve the closed object and writable-patch boundary, then validate the registered tool and full-job siblings before opening or updating the one authorized PR. |

## Needs Human

- none
