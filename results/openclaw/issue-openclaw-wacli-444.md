---
repo: "openclaw/wacli"
cluster_id: "issue-openclaw-wacli-444"
mode: "autonomous"
run_id: "36399198396"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36399198396"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T08:51:43.241Z"
canonical: "https://github.com/openclaw/wacli/issues/444"
canonical_issue: "https://github.com/openclaw/wacli/issues/444"
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

# issue-openclaw-wacli-444

Repo: openclaw/wacli

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36399198396](https://github.com/openclaw/clawsweeper/actions/runs/36399198396)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/wacli/issues/444

## Summary

Issue #444 remains reproducible from the request path on the provided main SHA. A narrow PN fallback is viable, but the read-only checkout prevented the regression test, patch, validation, and PR.

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
| #444 | fix_needed | planned | canonical | The reported 1:1 regression has a narrow backfill-only fix path. |
| cluster:issue-openclaw-wacli-444 | build_fix_artifact | planned |  | Implementation and validation are blocked by the read-only filesystem; the fix plan is ready for a writable executor. |

## Needs Human

- none
