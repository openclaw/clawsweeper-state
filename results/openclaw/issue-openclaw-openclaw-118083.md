---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118083"
mode: "autonomous"
run_id: "30759463449"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30759463449"
head_sha: "5f8543d985cc58431f107b3d0ecd1a7fb834d73e"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-02T18:03:00.385Z"
canonical: "https://github.com/openclaw/openclaw/issues/118083"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118083"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-118083

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30759463449](https://github.com/openclaw/clawsweeper/actions/runs/30759463449)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118083

## Summary

Verified against current main `1704ea591820f3eee6e655fef302987e1ba5eac6`: Cron's bounded retry path uses `resolveCronExecutionRetryHint`, whose network matcher misses `ENOTFOUND`, interrupted-stream, premature-close, and generic connection-error wording. A narrow two-file PR should extend that matcher and add regression coverage. `network` must not be added to `CronFailoverReasonSchema`: it is a Cron retry category, while the protocol schema is deliberately constrained to the shared `FailoverReason` union, which has no `network` member.

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
| #118083 | keep_canonical | planned | canonical | The reported interrupted-transport gap is real and has a focused owner-boundary repair. |
| #118083 | fix_needed | planned | canonical | Create the allowed narrow implementation PR; do not widen the gateway protocol for a Cron-only regex classification. |
| cluster:issue-openclaw-openclaw-118083 | build_fix_artifact | planned | canonical | A new, narrow implementation PR is safe and permitted by the job. |
| cluster:issue-openclaw-openclaw-118083 | open_fix_pr | planned | canonical | The job explicitly permits raising one implementation PR for this issue. |

## Needs Human

- none
