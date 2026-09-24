---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157377"
mode: "autonomous"
run_id: "36024037054"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36024037054"
head_sha: "f4322a8542135175b2a96f6a63fde8685ef14cf5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-24T16:41:18.682Z"
canonical: "https://github.com/openclaw/openclaw/issues/157377"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157377"
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

# issue-openclaw-openclaw-157377

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36024037054](https://github.com/openclaw/clawsweeper/actions/runs/36024037054)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/157377

## Summary

The local checkout shows the reported model-selection bug, but implementation is blocked: the workspace is read-only, dependencies are absent, and the checkout does not contain the preflight artifact’s latest main SHA. No regression, patch, validation, branch update, or PR was created.

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
| #157377 | fix_needed | planned | canonical | Reproduce on the preflight main revision before changing code, as the job requires. |
| #149796 | keep_related | planned | related | The trigger and remaining reproduction work differ. |
| #71069 | keep_closed | skipped | related | Historical context only. |
| cluster:issue-openclaw-openclaw-157377 | build_fix_artifact | blocked |  | The executor needs a writable checkout at the preflight main revision, then a failing regression and validated patch before opening the issue PR. |

## Needs Human

- none
