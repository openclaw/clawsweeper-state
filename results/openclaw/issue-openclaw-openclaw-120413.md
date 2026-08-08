---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120413"
mode: "autonomous"
run_id: "31235536037"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31235536037"
head_sha: "5d279ea784c682b9d4ac7411d111eb352a90f5a6"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-08T03:21:12.326Z"
canonical: "https://github.com/openclaw/openclaw/issues/120413"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120413"
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

# issue-openclaw-openclaw-120413

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31235536037](https://github.com/openclaw/clawsweeper/actions/runs/31235536037)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/120413

## Summary

Confirmed on current main 2c5214f9: config set/patch enter Doctor state migration before their normal validation/write path, allowing legacy cron repair to mutate unrelated state. A narrow CLI-routing repair is ready, but this worker checkout is read-only and lacks dependencies, so no branch or local validation could be produced here.

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
| #120413 | keep_canonical | planned | canonical | Open canonical bug; no candidate PR was hydrated. |
| cluster:issue-openclaw-openclaw-120413 | fix_needed | planned | canonical | Narrow non-security bug fix; no new config surface, migration, SQLite schema, or changelog edit. |
| cluster:issue-openclaw-openclaw-120413 | build_fix_artifact | planned | canonical | Artifact is ready for the deterministic executor; this worker cannot write the branch or install dependencies. |
| cluster:issue-openclaw-openclaw-120413 | open_fix_pr | blocked | canonical | Implementation and validation must run in a writable checkout with a ready dependency install or Testbox. |

## Needs Human

- none
