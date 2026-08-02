---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118083"
mode: "autonomous"
run_id: "30761125878"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30761125878"
head_sha: "5f8543d985cc58431f107b3d0ecd1a7fb834d73e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-02T18:57:00.429Z"
canonical: "https://github.com/openclaw/openclaw/issues/118083"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118083"
canonical_pr: null
actions_total: 3
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30761125878](https://github.com/openclaw/clawsweeper/actions/runs/30761125878)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118083

## Summary

Verified against current main d02101d7ceb6a8e9d34c5674479c1abaa467f7ed: the shared canonical timeout matcher still omits `stream disconnected` and `premature close`, while Cron already consumes the existing `timeout` reason for bounded retries. A narrow four-file fix PR remains appropriate; no persisted `network` reason or protocol change is needed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/118130 | clawsweeper/issue-openclaw-openclaw-118083 |  |
| issue_implementation_status_comment | updated | #118083 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118130 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118083 | fix_needed | planned | canonical | This is a source-proven shared transport-classification bug; repairing the shared producer is narrower and safer than adding downstream Cron-only policy. |
| cluster:issue-openclaw-openclaw-118083 | build_fix_artifact | planned | canonical | A small, test-led fix is permitted by the job and requires no product, configuration, dependency, persistence, or security-boundary decision. |
| cluster:issue-openclaw-openclaw-118083 | open_fix_pr | planned | canonical | The job permits one implementation PR and no viable contributor PR exists in the hydrated item matrix. |

## Needs Human

- none
