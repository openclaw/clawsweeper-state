---
repo: "openclaw/wacli"
cluster_id: "issue-openclaw-wacli-449"
mode: "autonomous"
run_id: "36374371546"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36374371546"
head_sha: "8d659e7cb903370596e26acea5b81399f291c174"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-28T03:39:56.637Z"
canonical: "https://github.com/openclaw/wacli/issues/449"
canonical_issue: "https://github.com/openclaw/wacli/issues/449"
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

# issue-openclaw-wacli-449

Repo: openclaw/wacli

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36374371546](https://github.com/openclaw/clawsweeper/actions/runs/36374371546)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/wacli/issues/449

## Summary

Issue #449 is confirmed on the provided main SHA. The account test helper leaves USERPROFILE unchanged, so Windows tests can use the developer's real account configuration. A one-file fix and regression test are planned; this read-only worker did not edit code or run tests.

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
| #449 | fix_needed | planned | canonical | The reported Windows test isolation defect remains present on the provided main SHA. |
| cluster:issue-openclaw-wacli-449 | build_fix_artifact | planned |  | A narrow, test-only helper repair is ready for a writable executor. |

## Needs Human

- none
