---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157925"
mode: "autonomous"
run_id: "36104683351"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36104683351"
head_sha: "3d8d89c12d45e24c0922d95e4a11f410869dc12e"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-25T06:56:08.236Z"
canonical: "#157925"
canonical_issue: "#157925"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-157925

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36104683351](https://github.com/openclaw/clawsweeper/actions/runs/36104683351)

Workflow conclusion: success

Worker result: blocked

Canonical: #157925

## Summary

The checked-out code reproduces the DST bug, but implementation is blocked: this filesystem is read-only, and the preflight main commit is unavailable locally. No files or GitHub state were changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #157925 | fix_needed | blocked | canonical | Latest-main reproduction, a failing regression, patch validation, and PR preparation require a writable checkout containing the preflight main commit. |

## Needs Human

- none
