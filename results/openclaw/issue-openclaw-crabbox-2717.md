---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2717"
mode: "autonomous"
run_id: "37610820841"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37610820841"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-07T11:02:08.218Z"
canonical: "https://github.com/openclaw/crabbox/issues/2717"
canonical_issue: "https://github.com/openclaw/crabbox/issues/2717"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-crabbox-2717

Repo: openclaw/crabbox

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37610820841](https://github.com/openclaw/clawsweeper/actions/runs/37610820841)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2717

## Summary

Windows image selectors are already implemented on supplied main a67dd997f64483ae6dfc7d318f470a429eb542fd. The remaining Server 2025 default rollout is explicitly deferred pending live canaries, regional image rebaking, qualification, and rollback preparation. No code changes or PR proposed.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #2717 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #2717 | keep_canonical | planned | canonical | Independent selection is complete, but the remaining default rollout is still outstanding and must retain its canonical issue. |
| #2715 | keep_closed | skipped | related | Historical context only. |
| #2720 | keep_closed | skipped | related | Merged partial implementation, preserving the existing credit to @saftall. |
| cluster:issue-openclaw-crabbox-2717 | needs_human | blocked | needs_human | The supplied artifacts do not support a safe executable fix plan for the remaining operational rollout. Maintainer judgment on the default switch is deferred until the required live qualification and regional rollout evidence exists; resume narrow code planning after that decision. |

## Needs Human

- For https://github.com/openclaw/crabbox/issues/2717 only: obtain the required Server 2025 native and WSL2 canary results, promoted regional image inventory/rebaking/qualification and rollback evidence, then confirm the default rollout decision. The hydrated discussion explicitly defers this decision and contains no completed qualification evidence.
