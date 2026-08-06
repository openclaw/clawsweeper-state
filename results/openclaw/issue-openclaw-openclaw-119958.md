---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119958"
mode: "autonomous"
run_id: "31107016960"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31107016960"
head_sha: "daf339e6d1d35d6246ffd2bfd3aae5f61342ad32"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-06T14:58:30.072Z"
canonical: "https://github.com/openclaw/openclaw/issues/119958"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119958"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-119958

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31107016960](https://github.com/openclaw/clawsweeper/actions/runs/31107016960)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119958

## Summary

Current main (913b53ad808772be8c3a8497f7320d93e928b4db) still has the reproducible unmanaged SIGUSR1 false-failure path. Plan one narrow new PR: a renewable gateway-loop startup-progress lease, consumed by the unmanaged listener waiter after its normal 60-second window.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119975 | clawsweeper/issue-openclaw-openclaw-119958 |  |
| issue_implementation_status_comment | updated | #119958 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119975 | merge_canonical | blocked | fix_pr | checks are not clean: checks-node-compact-large-6: IN_PROGRESS |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119958 | fix_needed | planned | canonical | #119958 is the open canonical report. #105544 is a closed migration-only predecessor; its managed restart-health lease does not cover the unmanaged listener path. |
| cluster:issue-openclaw-openclaw-119958 | build_fix_artifact | planned | canonical | Create or update clawsweeper/issue-openclaw-openclaw-119958 with the narrow fix artifact below; no merge or issue close is authorized. |

## Needs Human

- none
