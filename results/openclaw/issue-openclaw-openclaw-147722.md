---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-147722"
mode: "autonomous"
run_id: "34798827701"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34798827701"
head_sha: "60e9eac3f1cce2d8a4f886c9ebc5f4a9092429dc"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-14T02:35:53.831Z"
canonical: "https://github.com/openclaw/openclaw/issues/147722"
canonical_issue: "https://github.com/openclaw/openclaw/issues/147722"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-147722

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34798827701](https://github.com/openclaw/clawsweeper/actions/runs/34798827701)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/147722

## Summary

Source confirms the defect on preflight main. A narrow fix artifact is ready, but implementation, rendered reproduction, tests, and screenshot delivery are blocked by the read-only host and missing dependencies. No files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #147722 | fix_needed | planned | canonical | Keep the issue open and repair the existing Labs patch owner. |
| cluster:issue-openclaw-openclaw-147722 | build_fix_artifact | planned |  | The source-supported fix is narrow enough for one new fix PR, conditional on reproducing the failure before editing. |
| cluster:issue-openclaw-openclaw-147722 | open_fix_pr | blocked |  | Implementation and PR readiness require a writable executor with dependencies and screenshot delivery support. Recheck linked fixes before publication. |

## Needs Human

- none
