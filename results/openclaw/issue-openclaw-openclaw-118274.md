---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118274"
mode: "autonomous"
run_id: "30771241611"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30771241611"
head_sha: "de31c9959070dd22ec785fdbcc924fc8e6de1e06"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-02T23:05:59.369Z"
canonical: "https://github.com/openclaw/openclaw/issues/118274"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118274"
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

# issue-openclaw-openclaw-118274

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30771241611](https://github.com/openclaw/clawsweeper/actions/runs/30771241611)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118274

## Summary

#118274 is a valid open canonical bug. Current main records the failed tool at the embedded-run owner, but deliberately suppresses a recoverable non-exec tool-error warning when no user-facing reply exists; that leaves both channel delivery and isolated cron with no final payload. Plan one narrow shared payload-owner fix and regression update; no GitHub or checkout mutation was performed.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #79472 | keep_closed | skipped | related | Closed historical context; not a mutation target for this issue implementation lane. |
| #83093 | keep_closed | skipped | related | Closed historical context; not a mutation target for this issue implementation lane. |
| #118274 | keep_canonical | planned | canonical | The violated invariant is a visible or intentionally recorded terminal outcome for a failed tool turn. The existing shared payload policy suppresses the only terminal failure payload for recoverable non-exec errors despite there being no user-facing reply. |
| cluster:issue-openclaw-openclaw-118274 | fix_needed | planned | canonical | No viable PR exists. A one-condition shared-owner repair plus the existing focused regression is narrow and directly covers both reported delivery surfaces. |
| cluster:issue-openclaw-openclaw-118274 | build_fix_artifact | planned | canonical | Create or update the single branch clawsweeper/issue-openclaw-openclaw-118274, then open one narrow credited implementation PR linked to #118274. |

## Needs Human

- none
