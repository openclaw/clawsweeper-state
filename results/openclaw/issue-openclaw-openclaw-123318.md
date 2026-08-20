---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123318"
mode: "autonomous"
run_id: "32355932515"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32355932515"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T10:02:14.389Z"
canonical: "https://github.com/openclaw/openclaw/issues/123318"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123318"
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

# issue-openclaw-openclaw-123318

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32355932515](https://github.com/openclaw/clawsweeper/actions/runs/32355932515)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123318

## Summary

#123318 remains a real, narrow stable/beta git-updater bug on main 6d70d051: its tag fetch can reject a recreated upstream tag before tag resolution. A credited new-fix PR is planned, but this read-only checkout could not write the branch or run the required fixture/validation.

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
| #86218 | keep_closed | skipped | related | Historical related context only. |
| #119098 | keep_closed | skipped | independent | Independent closed context. |
| #123318 | fix_needed | blocked | canonical | Implementation is blocked only by this worker's read-only sandbox. The fix path is otherwise narrow and does not change configuration, policy, or the dev updater path. |
| cluster:issue-openclaw-openclaw-123318 | build_fix_artifact | planned |  | Prepare a single new fix PR for the canonical issue. |

## Needs Human

- none
