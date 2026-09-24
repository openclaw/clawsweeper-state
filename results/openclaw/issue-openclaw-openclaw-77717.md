---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-77717"
mode: "autonomous"
run_id: "35998173961"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35998173961"
head_sha: "f4322a8542135175b2a96f6a63fde8685ef14cf5"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-24T12:51:49.774Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35998173961](https://github.com/openclaw/clawsweeper/actions/runs/35998173961)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/77717

## Summary

Current main still has the Feishu startup race. The checkout is read-only and has no installed dependencies, so I could not add the required failing regression, patch the branch, or validate a PR.

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
| #77717 | fix_needed | planned | canonical | A focused lifecycle regression and repair are needed through the Feishu account startup path. |
| cluster:issue-openclaw-openclaw-77717 | build_fix_artifact | blocked |  | Implementation and pre-fix regression proof require a writable checkout with dependencies. |

## Needs Human

- none
