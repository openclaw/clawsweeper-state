---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-156975"
mode: "autonomous"
run_id: "35952266330"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35952266330"
head_sha: "5ae902bf0a0f31d7c36618352b48621f39b40786"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-24T04:13:54.572Z"
canonical: "https://github.com/openclaw/openclaw/issues/156975"
canonical_issue: "https://github.com/openclaw/openclaw/issues/156975"
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

# issue-openclaw-openclaw-156975

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35952266330](https://github.com/openclaw/clawsweeper/actions/runs/35952266330)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/156975

## Summary

The checkout shows a narrow failover-classification defect, but implementation is blocked. It is read-only, has no dependencies, and does not contain the preflight main SHA, so the required failing regression on latest main could not be established. No code or GitHub state was changed.

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
| #156975 | fix_needed | planned | canonical | The existing failover owner needs a narrow classification fix after a failing runWithModelFallback regression is established on latest main. |
| #126224 | route_security | planned | security_sensitive | Route this exact PR to central OpenClaw security handling; do not mutate it through this job. |
| #152275 | keep_related | planned | related | Keep its separate lifecycle investigation open. |
| cluster:issue-openclaw-openclaw-156975 | build_fix_artifact | planned |  | The artifact specifies the narrow implementation and its prerequisite proof. |
| cluster:issue-openclaw-openclaw-156975 | open_fix_pr | blocked |  | Do not open a PR until the real boundary regression fails on latest main, the narrow fix passes validation, and the required review is complete. |

## Needs Human

- none
