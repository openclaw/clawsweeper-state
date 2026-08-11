---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-121765"
mode: "autonomous"
run_id: "31451365116"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31451365116"
head_sha: "5a964dadc8131e6e6dc33e9be3536b8141d1d107"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-11T02:15:13.491Z"
canonical: "#121765"
canonical_issue: "#121765"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-121765

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31451365116](https://github.com/openclaw/clawsweeper/actions/runs/31451365116)

Workflow conclusion: success

Worker result: blocked

Canonical: #121765

## Summary

Current main reproduces the source-level defect, but this worker has a read-only checkout and lacks the installed `tsx` dependency required for focused tests. No files, branch, PR, labels, or issue state were changed. A narrow replacement-fix artifact is ready for the deterministic executor.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #77582 | keep_closed | skipped | related | Historical context only; closure mutations are prohibited for already-closed refs. |
| #85233 | keep_closed | skipped | related | Historical context only; closure mutations are prohibited for already-closed refs. |
| #88032 | keep_related | planned | related | Keep its independent acceptance scope open; do not fold it into the narrow bug-fix PR. |
| #91043 | keep_related | planned | related | Different root cause and product scope. |
| #121765 | build_fix_artifact | planned | canonical | A narrow owner-boundary repair is source-proven, but this worker cannot write the regression, install dependencies, or create the required branch/PR. |

## Needs Human

- none
