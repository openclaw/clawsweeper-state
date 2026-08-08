---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-97287"
mode: "autonomous"
run_id: "31255603709"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31255603709"
head_sha: "36179dceb26fbeca33d8a863746b4cf83e325e09"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-08T11:52:27.045Z"
canonical: "https://github.com/openclaw/openclaw/issues/97287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/97287"
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

# issue-openclaw-openclaw-97287

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31255603709](https://github.com/openclaw/clawsweeper/actions/runs/31255603709)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/97287

## Summary

#97287 is a confirmed plugin-local Feishu delivery bug on main 90acd2bc. The current checkout is read-only and has no installed @larksuiteoapi/node-sdk@1.71.1 source/types, so the required cache-owner contract cannot be verified and no safe implementation or validation can run here.

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
| issue_implementation_status_comment | updated | #97287 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #97287 | fix_needed | blocked | canonical | Blocked only on the required dependency-contract inspection and writable execution environment; the issue remains open and canonical. |
| cluster:issue-openclaw-openclaw-97287 | build_fix_artifact | blocked | canonical | Create the narrow PR only after an executor with dependency source access verifies the SDK cache contract and can write, test, and review the branch. |

## Needs Human

- none
