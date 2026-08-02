---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118083"
mode: "autonomous"
run_id: "30760125757"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30760125757"
head_sha: "5f8543d985cc58431f107b3d0ecd1a7fb834d73e"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-02T18:26:25.773Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30760125757](https://github.com/openclaw/clawsweeper/actions/runs/30760125757)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118083

## Summary

Current main c28b524f38bbfe9ed671fe5fba7dc8eed8c80c7f still misses `stream disconnected` and `premature close` in the canonical shared timeout classifier. The narrow repair is to classify those raw transport failures as the existing `timeout` failover reason, then prove Cron consumes that reason for its existing bounded retry. No Cron-only persisted `network` reason or protocol-schema change is needed.

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
| #118083 | keep_canonical | planned | canonical | The issue is a real, narrowly scoped shared transport-classification bug. |
| #118083 | fix_needed | planned | canonical | Repair the shared producer instead of adding downstream Cron-only duplicate classification policy. |
| cluster:issue-openclaw-openclaw-118083 | build_fix_artifact | planned | canonical | A small new PR is permitted and can satisfy the issue without changing public config, protocol, or persistence. |
| cluster:issue-openclaw-openclaw-118083 | open_fix_pr | planned | canonical | The job permits one labelled implementation PR and explicitly selects this source-reproducible bug for automated repair. |

## Needs Human

- none
