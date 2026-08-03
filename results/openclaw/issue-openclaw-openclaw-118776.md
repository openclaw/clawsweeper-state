---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118776"
mode: "autonomous"
run_id: "30835115124"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30835115124"
head_sha: "4f67ca516da0fc29fed5ae2b8e17fce14d49354d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-03T17:15:22.730Z"
canonical: "https://github.com/openclaw/openclaw/issues/118776"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118776"
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

# issue-openclaw-openclaw-118776

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30835115124](https://github.com/openclaw/clawsweeper/actions/runs/30835115124)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/118776

## Summary

Current main (94f431417b251470546e9555cdde02695a0afcd2) still has the source-reproducible leaf-subagent defect. Leaf capability policy denies child-producing/control tools but leaves sessions_yield available; the subagent prompt unconditionally directs every child to yield for descendant completion. A narrow owner-boundary repair is ready for a writable executor, but this checkout is read-only and has no node_modules, so no branch edit or local validation could be performed.

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
| #118776 | keep_canonical | planned | canonical | #118776 is a narrow, still-open bug report with an explicit canonical repair path; it must remain open until the replacement fix PR is created and validated. |
| cluster:issue-openclaw-openclaw-118776 | fix_needed | blocked | canonical | Implementation is blocked only by this immutable checkout. A writable executor should apply the narrow fix artifact on clawsweeper/issue-openclaw-openclaw-118776, then run the listed validation. |
| cluster:issue-openclaw-openclaw-118776 | build_fix_artifact | planned | canonical | A narrow new fix PR is appropriate; no contributor PR exists to repair or replace. |

## Needs Human

- none
