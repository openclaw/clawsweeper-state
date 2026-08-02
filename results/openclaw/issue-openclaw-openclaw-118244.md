---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118244"
mode: "autonomous"
run_id: "30771077260"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30771077260"
head_sha: "de31c9959070dd22ec785fdbcc924fc8e6de1e06"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-02T23:19:39.790Z"
canonical: "https://github.com/openclaw/openclaw/issues/118244"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118244"
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

# issue-openclaw-openclaw-118244

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30771077260](https://github.com/openclaw/clawsweeper/actions/runs/30771077260)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118244

## Summary

The regression remains on current main: after a global package swap, the failed-update branch calls the generic in-process service restart, which retains the old binary’s future-config guard. Build a narrow PR that selects the existing updated-install restart mechanism only after a verified successful package swap and a subsequent doctor failure.

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
| #118244 | fix_needed | planned | canonical | A narrow repair is viable and preserves the existing older-binary destructive-action guard for all ordinary/early failures. |
| cluster:issue-openclaw-openclaw-118244 | build_fix_artifact | planned | canonical | Create one focused fix PR from clawsweeper/issue-openclaw-openclaw-118244. |

## Needs Human

- none
