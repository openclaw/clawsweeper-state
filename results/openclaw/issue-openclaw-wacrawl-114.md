---
repo: "openclaw/wacrawl"
cluster_id: "issue-openclaw-wacrawl-114"
mode: "autonomous"
run_id: "36718667053"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36718667053"
head_sha: "c73bf3840ef24af16b578f6fe3cfc927b5e81c3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-30T13:06:40.858Z"
canonical: "https://github.com/openclaw/wacrawl/issues/114"
canonical_issue: "https://github.com/openclaw/wacrawl/issues/114"
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

# issue-openclaw-wacrawl-114

Repo: openclaw/wacrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36718667053](https://github.com/openclaw/clawsweeper/actions/runs/36718667053)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/wacrawl/issues/114

## Summary

The performance bug remains on the provided main SHA. The checkout is read-only, so no regression test, fix, validation, or PR could be completed.

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
| #114 | fix_needed | planned | canonical | A large legacy archive can make adoption quadratic. |
| cluster:issue-openclaw-wacrawl-114 | build_fix_artifact | planned |  | The fix is confined to legacy candidate lookup and its regression coverage. |
| cluster:issue-openclaw-wacrawl-114 | open_fix_pr | blocked |  | Implementation, timing validation, and PR creation require a writable checkout and Go module cache. |

## Needs Human

- none
