---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2708"
mode: "autonomous"
run_id: "38096498855"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/38096498855"
head_sha: "3e3ac1fffea21e8f0b237313887ae81309b4d76c"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-10T23:55:15.763Z"
canonical: "https://github.com/openclaw/crabbox/issues/2708"
canonical_issue: "https://github.com/openclaw/crabbox/issues/2708"
canonical_pr: null
actions_total: 7
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/38096498855](https://github.com/openclaw/clawsweeper/actions/runs/38096498855)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2708

## Summary

Implementation requires a supported Blacksmith pre-worker Testbox-to-workflow binding and terminal-status contract. Current main preserves the reported observation gap; supplied triage explicitly rejects inferring run identity or settlement. No code changes or PR are appropriate with the available contract.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #2708 | keep_canonical | planned | canonical | Keep the provider capability request open. The merged historical repairs cover settlement, status, and ownership lookup rather than pre-worker dispatch identity. |
| cluster:issue-openclaw-crabbox-2708 | fix_needed | blocked |  | External provider capability blocker, not an unresolved maintainer judgment or security report. |
| #2669 | keep_closed | skipped | related | Historical context only. |
| #2670 | keep_closed | skipped | related | Historical context only. |
| #2682 | keep_closed | skipped | related | Historical context only. |
| #2683 | keep_closed | skipped | related | Historical context only. |
| #2719 | keep_closed | skipped | independent | Historical context only; distinct root cause. |

## Needs Human

- none
