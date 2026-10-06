---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2708"
mode: "autonomous"
run_id: "37443577606"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37443577606"
head_sha: "7b767cc6bf7ed7176a94b1e8732b478ea49012d2"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-06T09:35:36.815Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37443577606](https://github.com/openclaw/clawsweeper/actions/runs/37443577606)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2708

## Summary

Implementation requires an authoritative Blacksmith dispatch-to-run binding before worker registration. Verified the current adapter on supplied main f9a122dd96e850207ed70a555c281fbc8475fa77; no safely bounded Crabbox fix is available. No code changes or GitHub mutations were made.

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
| #2708 | keep_related | blocked | related | Keep the issue open. Blacksmith must expose a supported Testbox-to-workflow binding that survives pre-worker cancellation and admission failure. Until then, slow allocation and terminal dispatch failure are indistinguishable to Crabbox. Guessing a run or accepting native completion as settlement would violate the existing ownership contract; no implementation PR or executable fix artifact is justified. |
| #2669 | keep_closed | skipped | related | Closed historical context; no action required. |
| #2670 | keep_closed | skipped | related | Merged historical context, distinct from the remaining provider capability gap. |
| #2682 | keep_closed | skipped | related | Closed historical context; its visibility request does not cover missing dispatch evidence. |
| #2683 | keep_closed | skipped | related | Merged historical context; exposing existing evidence cannot supply an absent provider binding. |

## Needs Human

- none
