---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122911"
mode: "autonomous"
run_id: "31659780600"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31659780600"
head_sha: "56cb78d60734ddc62b5f1e49981bbb4556dcb58d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-13T02:16:37.422Z"
canonical: "https://github.com/openclaw/openclaw/issues/122911"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122911"
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

# issue-openclaw-openclaw-122911

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31659780600](https://github.com/openclaw/clawsweeper/actions/runs/31659780600)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122911

## Summary

Verified on main 326501fce3348c4895157b8905221dc7ccbbfbdf: generic terminal transitions and claim release preserve a dispatch-created running execution/attempt, which can starve the owner lane. A narrow fix PR is appropriate, but this worker has a read-only checkout and missing test dependency (`tsx`), so it could not edit, reproduce with a new regression, or validate a branch.

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
| #122911 | fix_needed | blocked | canonical | Implementation is blocked only by this worker's read-only filesystem and unavailable dependencies; the verified narrow repair is specified in the fix artifact. |
| cluster:issue-openclaw-openclaw-122911 | build_fix_artifact | planned | canonical |  |

## Needs Human

- none
