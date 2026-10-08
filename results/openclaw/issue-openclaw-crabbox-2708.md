---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2708"
mode: "autonomous"
run_id: "37832232273"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37832232273"
head_sha: "ef72f4b940b4dce28c5ccd6a9634e97360f172bc"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-08T19:34:29.769Z"
canonical: "https://github.com/openclaw/crabbox/issues/2708"
canonical_issue: "https://github.com/openclaw/crabbox/issues/2708"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-crabbox-2708

Repo: openclaw/crabbox

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37832232273](https://github.com/openclaw/clawsweeper/actions/runs/37832232273)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2708

## Summary

Repository implementation is blocked on a supported Blacksmith pre-worker dispatch binding. Current main matches the recorded triage direction: native queued status without a run association cannot distinguish slow allocation from failed dispatch. No code changes or PR are appropriate until the provider supplies that capability.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| issue_implementation_status_comment | updated | #2708 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #2708 | keep_related | blocked | related | Blocked on Blacksmith exposing a durable, authoritative Testbox-to-workflow-run binding before worker startup that survives cancellation and admission failure. Revisit the provider adapter once that supported capability exists; timeout changes or guessed run associations do not satisfy the issue. |
| #2669 | keep_closed | skipped | related | Historical context only. |
| #2670 | keep_closed | skipped | related | Historical merged repair with a distinct scope. |
| #2682 | keep_closed | skipped | related | Historical context only. |
| #2683 | keep_closed | skipped | related | Historical merged repair; it does not resolve this dispatch lifecycle gap. |

## Needs Human

- none
