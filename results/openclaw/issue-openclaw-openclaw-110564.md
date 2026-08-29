---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-110564"
mode: "autonomous"
run_id: "33277076374"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33277076374"
head_sha: "8d11c21558ba90ac6812b80b95efd0dd9b0aa936"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-29T22:13:24.740Z"
canonical: "https://github.com/openclaw/openclaw/issues/110564"
canonical_issue: "https://github.com/openclaw/openclaw/issues/110564"
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

# issue-openclaw-openclaw-110564

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33277076374](https://github.com/openclaw/clawsweeper/actions/runs/33277076374)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/110564

## Summary

#110564 remains a source-reproducible canonical compaction bug on main b33e6aa5e09a63df8bd2b9f255d8fe4993f05c13. A narrow fix plan is ready, but this read-only worker cannot satisfy the repository’s mandatory direct ../codex source check or install the missing tsx dependency to run the regression suite.

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
| #110564 | fix_needed | blocked | canonical | Provision a writable worker with ../codex available and dependencies installed, then implement and validate the prepared new-fix-PR plan. |
| cluster:issue-openclaw-openclaw-110564 | build_fix_artifact | planned | canonical | Artifact is ready for a writable executor after the environmental gates are restored. |
| cluster:issue-openclaw-openclaw-110564 | open_fix_pr | blocked | canonical | Do not open the PR until the direct Codex source gate and focused validation are completed on a writable branch. |

## Needs Human

- none
