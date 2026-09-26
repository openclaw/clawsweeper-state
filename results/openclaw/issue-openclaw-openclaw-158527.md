---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158527"
mode: "autonomous"
run_id: "36208640176"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36208640176"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T02:10:55.672Z"
canonical: "https://github.com/openclaw/openclaw/issues/158527"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158527"
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

# issue-openclaw-openclaw-158527

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36208640176](https://github.com/openclaw/clawsweeper/actions/runs/36208640176)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/158527

## Summary

Current main still contains the reported destructive Doctor migration. Source inspection confirms the deletion path, but the read-only checkout prevented adding the required failing regression, changing code, or validating a fix. No GitHub action was taken.

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
| #158527 | fix_needed | planned | canonical | The issue has a source-proven data-loss path and no hydrated open implementation PR. |
| cluster:issue-openclaw-openclaw-158527 | build_fix_artifact | blocked |  | Implementation requires a writable checkout and the required pre-fix failing regression before a PR can be prepared. |

## Needs Human

- none
