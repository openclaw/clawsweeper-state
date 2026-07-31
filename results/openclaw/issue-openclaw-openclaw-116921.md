---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-116921"
mode: "autonomous"
run_id: "30645123043"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30645123043"
head_sha: "60ad8788f54555eed573d42b38f25f26b8feb62e"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-07-31T16:34:40.871Z"
canonical: "https://github.com/openclaw/openclaw/issues/116921"
canonical_issue: "https://github.com/openclaw/openclaw/issues/116921"
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

# issue-openclaw-openclaw-116921

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30645123043](https://github.com/openclaw/clawsweeper/actions/runs/30645123043)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/116921

## Summary

Confirmed on current main (87d5cb9f674259280a725bf33419d1082f40a7d4): a positive session-rail open request unconditionally calls expand(), changing the persisted explicit "off" preference to "card" and emitting visible=true. The repair is narrow and ready to implement, but this checkout is read-only and lacks installed dependencies, so no branch, regression edit, or validated PR can be produced in this worker environment.

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
| #116921 | fix_needed | blocked | canonical | Implementation is blocked only by the worker filesystem/dependency environment. The issue remains an open, reproducible canonical bug and should receive the narrow fix artifact below. |
| cluster:issue-openclaw-openclaw-116921 | build_fix_artifact | planned | canonical | Create one narrow new-fix PR from clawsweeper/issue-openclaw-openclaw-116921 after restoring a writable checkout with dependencies. |

## Needs Human

- none
