---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-77717"
mode: "autonomous"
run_id: "36006737971"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36006737971"
head_sha: "f4322a8542135175b2a96f6a63fde8685ef14cf5"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-24T14:07:18.085Z"
canonical: "https://github.com/openclaw/openclaw/issues/77717"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77717"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-77717

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36006737971](https://github.com/openclaw/clawsweeper/actions/runs/36006737971)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/77717

## Summary

Current main has the reported Feishu identity state race. A narrow fix is identified, but this read-only checkout has no installed dependencies, so the required failing regression and validation could not be completed. No PR was created.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): changed-gate validation has an unsafe existing artifacts directory |
| issue_implementation_status_comment | updated | #77717 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #77717 | fix_needed | planned | canonical | An old probe can overwrite identity stored by a replacement monitor. |
| cluster:issue-openclaw-openclaw-77717 | build_fix_artifact | blocked |  | Implementation must run in a writable checkout. First demonstrate the failure through startAccount, then patch and validate before opening a PR. |

## Needs Human

- none
