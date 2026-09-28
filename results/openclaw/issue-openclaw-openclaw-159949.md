---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159949"
mode: "plan"
run_id: "36367576750"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36367576750"
head_sha: "8d659e7cb903370596e26acea5b81399f291c174"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-28T01:54:35.033Z"
canonical: "#159949"
canonical_issue: "#159949"
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

# issue-openclaw-openclaw-159949

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36367576750](https://github.com/openclaw/clawsweeper/actions/runs/36367576750)

Workflow conclusion: success

Worker result: blocked

Canonical: #159949

## Summary

No fix PR is planned. The issue is closed, and its maintainer reported that the checked provider routes send both tools with strict:false, so the reported strict-provider failure was not reproduced. The job requires reproduction on current main before implementation. A provider request trace and returned tool arguments are needed to establish the failing route.

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
| #159949 | keep_closed | skipped | canonical | The reported strict-provider failure is unproven, and the issue is already closed. |
| #137287 | keep_closed | skipped | related | Historical contributor work; no action on an already-closed PR. |

## Needs Human

- none
