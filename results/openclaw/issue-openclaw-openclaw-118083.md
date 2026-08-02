---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118083"
mode: "plan"
run_id: "30760583146"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30760583146"
head_sha: "5f8543d985cc58431f107b3d0ecd1a7fb834d73e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-02T18:43:29.654Z"
canonical: "https://github.com/openclaw/openclaw/issues/118083"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118083"
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

# issue-openclaw-openclaw-118083

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30760583146](https://github.com/openclaw/clawsweeper/actions/runs/30760583146)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118083

## Summary

Plan a narrow shared-classifier repair on current main 0335317679572b3654fbacbe58da069a47e941cd. Add the two missing interrupted-transport phrases to the canonical timeout matcher, prove direct classification and Cron's existing bounded retry consumption, and keep the persisted failover/protocol contract unchanged.

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
| #118083 | fix_needed | planned | canonical | The reported stream interruption and premature-close forms are a source-proven transport-classification gap. Repairing the shared producer avoids downstream Cron-only duplicate policy. |
| cluster:issue-openclaw-openclaw-118083 | build_fix_artifact | planned | canonical | A four-file, test-led repair is narrow, non-security-sensitive, and suitable for the allowed fix/raise-PR lane. |

## Needs Human

- none
