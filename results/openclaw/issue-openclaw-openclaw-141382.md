---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-141382"
mode: "autonomous"
run_id: "34147575754"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34147575754"
head_sha: "f633c1e10228f0a337d8852c93a7af33c4c11aac"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-07T17:41:14.967Z"
canonical: "https://github.com/openclaw/openclaw/issues/141382"
canonical_issue: "https://github.com/openclaw/openclaw/issues/141382"
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

# issue-openclaw-openclaw-141382

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34147575754](https://github.com/openclaw/clawsweeper/actions/runs/34147575754)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/141382

## Summary

The reported launch defect remains source-supported on preflight main. A narrow repair artifact is ready, but implementation and required regression proof are blocked by this read-only checkout, missing dependencies, and unavailable native Windows execution. No files or GitHub state were changed.

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
| #141382 | fix_needed | planned | canonical | Existing Windows CLI behavior needs a launch-contract repair. No new configuration, plugin API, or authorization change is indicated. Keep the issue open. |
| cluster:issue-openclaw-openclaw-141382 | build_fix_artifact | planned |  | A writable executor can pursue this narrow artifact after refreshing main and checking for an existing fixing PR. It must first demonstrate the failing regression; stop if the defect no longer reproduces. |

## Needs Human

- none
