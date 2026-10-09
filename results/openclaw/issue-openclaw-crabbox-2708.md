---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2708"
mode: "autonomous"
run_id: "38001655697"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/38001655697"
head_sha: "d1358b0e673c7ea0dfb43f8e2714d00692dc8779"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-09T22:57:44.432Z"
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
needs_human_count: 1
---

# issue-openclaw-crabbox-2708

Repo: openclaw/crabbox

Run: [https://github.com/openclaw/clawsweeper/actions/runs/38001655697](https://github.com/openclaw/clawsweeper/actions/runs/38001655697)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2708

## Summary

No safe implementation PR is supported by the available evidence. On supplied current main, failed pre-worker dispatch and slow allocation remain indistinguishable without an authoritative Blacksmith request-to-run binding. Keep the issue open pending that provider capability. No files or GitHub state were changed; no tests were run.

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
| Needs human | 1 |

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
| #2708 | keep_canonical | planned | canonical | This remains a distinct provider lifecycle problem; the merged related repairs do not supply the missing pre-worker association. |
| cluster:issue-openclaw-crabbox-2708 | needs_human | blocked | needs_human | A safe fix artifact cannot be derived from the supplied evidence. Provider confirmation of a supported pre-worker request-to-run binding is required before implementation can resume; this action authorizes no mutation. |
| #2669 | keep_closed | skipped | related | Historical evidence only; no closure action. |
| #2670 | keep_closed | skipped | related | Preserve the landed recovery guarantees. |
| #2682 | keep_closed | skipped | related | Historical evidence only; no closure action. |
| #2683 | keep_closed | skipped | related | Its read-only status capability does not resolve the dispatch observation gap. |
| #2719 | keep_closed | skipped | related | Historical related optimization; no action. |

## Needs Human

- For https://github.com/openclaw/crabbox/issues/2708, obtain authoritative Blacksmith confirmation of a supported, durable Testbox request-to-workflow-run binding available before worker registration and retained through cancellation or admission failure. The October 6 triage comment reports no such capability in CLI 0.4.65, and the supplied artifacts provide no newer supported contract. Implementation remains blocked pending that evidence.
