---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158781"
mode: "autonomous"
run_id: "36232821025"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36232821025"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T10:01:24.640Z"
canonical: "https://github.com/openclaw/openclaw/issues/158781"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158781"
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

# issue-openclaw-openclaw-158781

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36232821025](https://github.com/openclaw/clawsweeper/actions/runs/36232821025)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/158781

## Summary

The Doctor archive receipt bug has a narrow fix path, but this worker could not implement or validate it. The checkout is read-only and its HEAD is older than the preflight main SHA, so the required failing regression on latest main could not be run. No code or GitHub state was changed.

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
| #158781 | keep_canonical | planned | canonical | This is the open canonical report. |
| #153254 | keep_closed | skipped | related | Historical context only. |
| cluster:issue-openclaw-openclaw-158781 | fix_needed | planned |  | A persisted-receipt comparison that ignores only dev appears appropriate, subject to reproduction on the preflight main revision. |
| cluster:issue-openclaw-openclaw-158781 | build_fix_artifact | blocked |  | Implementation requires a writable checkout at the preflight main revision. |

## Needs Human

- none
