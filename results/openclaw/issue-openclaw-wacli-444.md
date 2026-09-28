---
repo: "openclaw/wacli"
cluster_id: "issue-openclaw-wacli-444"
mode: "autonomous"
run_id: "36380715515"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36380715515"
head_sha: "8d659e7cb903370596e26acea5b81399f291c174"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T05:14:01.305Z"
canonical: "https://github.com/openclaw/wacli/issues/444"
canonical_issue: "https://github.com/openclaw/wacli/issues/444"
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

# issue-openclaw-wacli-444

Repo: openclaw/wacli

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36380715515](https://github.com/openclaw/clawsweeper/actions/runs/36380715515)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/wacli/issues/444

## Summary

Issue #444 remains reproducible from the routing on main b87e6178: mapped 1:1 backfill requests use the LID, and the timeout retry changes only the anchor. A narrow fix is planned, but this worker’s checkout is read-only, so no regression test, patch, PR branch, or validation was completed.

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
| #444 | fix_needed | planned | canonical | Add a bounded phone-JID fallback for mapped 1:1 requests while preserving the existing anchor retry. |
| cluster:issue-openclaw-wacli-444 | build_fix_artifact | blocked |  | Implementation and validation require a writable executor checkout. |

## Needs Human

- none
