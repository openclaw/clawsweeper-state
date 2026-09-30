---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-161863"
mode: "autonomous"
run_id: "36715000559"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36715000559"
head_sha: "d7fd40ed0f8e8283c0c91c3b7c94f3c485bb608a"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-30T13:21:35.650Z"
canonical: "https://github.com/openclaw/openclaw/issues/161863"
canonical_issue: "https://github.com/openclaw/openclaw/issues/161863"
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

# issue-openclaw-openclaw-161863

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36715000559](https://github.com/openclaw/clawsweeper/actions/runs/36715000559)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/161863

## Summary

Current main still has two completion paths that can append different reports under the same update-run-finished key. A focused fix PR is warranted. The collision does not prove that no completion notice was persisted.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #161863 | fix_needed | planned | canonical | One completion notice needs stable run-scoped custody and reconciliation. |
| #127378 | keep_related | planned | related | The shared idempotency-conflict symptom does not make the catalog-import defect part of this update-notice fix. |
| cluster:issue-openclaw-openclaw-161863 | build_fix_artifact | planned |  | The checkout is available for a narrow, non-security implementation PR. |

## Needs Human

- none
