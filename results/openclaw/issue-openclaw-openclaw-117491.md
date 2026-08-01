---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117491"
mode: "autonomous"
run_id: "30707741888"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30707741888"
head_sha: "f43618fd2caeb1cac767b7c05145767d9a3a9453"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-01T16:39:52.083Z"
canonical: "https://github.com/openclaw/openclaw/issues/117491"
canonical_issue: "https://github.com/openclaw/openclaw/issues/117491"
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

# issue-openclaw-openclaw-117491

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30707741888](https://github.com/openclaw/clawsweeper/actions/runs/30707741888)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/117491

## Summary

Verified the reported routing bug on current main `4cbbccd0a0d20c11e123c2356db682dc51c4dde8`. When a due commitment exists, `prepareHeartbeatRunStage` deliberately changes the delivery target to the commitment route but also clears the explicit heartbeat `accountId`; the resolver then falls back to the commitment/session account. A narrow source-and-regression-test PR is appropriate.

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
| #117491 | fix_needed | planned | canonical | The issue is a confirmed canonical runtime defect with a small owner-boundary repair: preserve the operator-configured heartbeat account while continuing to route due commitments to their original channel and recipient. |
| cluster:issue-openclaw-openclaw-117491 | build_fix_artifact | planned | canonical | Create one narrow PR from `clawsweeper/issue-openclaw-openclaw-117491`; no existing contributor PR needs repair or replacement. |

## Needs Human

- none
