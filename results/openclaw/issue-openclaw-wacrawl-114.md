---
repo: "openclaw/wacrawl"
cluster_id: "issue-openclaw-wacrawl-114"
mode: "autonomous"
run_id: "36711352986"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36711352986"
head_sha: "d7fd40ed0f8e8283c0c91c3b7c94f3c485bb608a"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-30T11:57:11.677Z"
canonical: "https://github.com/openclaw/wacrawl/issues/114"
canonical_issue: "https://github.com/openclaw/wacrawl/issues/114"
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

# issue-openclaw-wacrawl-114

Repo: openclaw/wacrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36711352986](https://github.com/openclaw/clawsweeper/actions/runs/36711352986)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/wacrawl/issues/114

## Summary

Current main still contains the repeated full-archive scan reported in #114. The fix is narrow, but this checkout is read-only, so no regression test or code change could be written. A focused Go test also stopped before running because Go could not create its module cache.

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
| #114 | fix_needed | planned | canonical | Replace the repeated legacy lookup without changing adoption or identity rules. |
| cluster:issue-openclaw-wacrawl-114 | build_fix_artifact | blocked |  | Implementation and validation require a writable checkout and Go module cache. |

## Needs Human

- none
