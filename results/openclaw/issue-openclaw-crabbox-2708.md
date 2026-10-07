---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2708"
mode: "autonomous"
run_id: "37591155824"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37591155824"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-07T08:05:53.408Z"
canonical: "https://github.com/openclaw/crabbox/issues/2708"
canonical_issue: "https://github.com/openclaw/crabbox/issues/2708"
canonical_pr: null
actions_total: 6
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37591155824](https://github.com/openclaw/clawsweeper/actions/runs/37591155824)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2708

## Summary

Implementation is blocked on a supported Blacksmith pre-worker dispatch binding. The supplied main revision still cannot distinguish slow allocation from failed admission or cancellation when native status is queued without a run URL. The hydrated triage comment explicitly rejects inferred run matching. No code changed; no PR or GitHub mutation is recommended.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #2708 | keep_canonical | planned | canonical | Retain the distinct provider lifecycle report pending the supported capability described in its recorded triage direction. |
| #2669 | keep_closed | skipped | related | Historical context only. |
| #2670 | keep_closed | skipped | related | Preserve the landed ownership contract as historical evidence. |
| #2682 | keep_closed | skipped | related | Historical context only. |
| #2683 | keep_closed | skipped | related | Historical context only; this repair does not resolve the canonical issue. |
| cluster:issue-openclaw-crabbox-2708 | fix_needed | blocked |  | Resume only after Blacksmith provides a supported exact Testbox-to-workflow binding available before worker startup and retained through cancellation or admission failure. No safe narrow implementation PR is currently established. |

## Needs Human

- none
