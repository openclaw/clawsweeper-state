---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-111595"
mode: "autonomous"
run_id: "35890826955"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35890826955"
head_sha: "74df933aeed3f01eddcf027150f1484fdcb57904"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-23T17:45:15.628Z"
canonical: "https://github.com/openclaw/openclaw/issues/111595"
canonical_issue: "https://github.com/openclaw/openclaw/issues/111595"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-111595

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35890826955](https://github.com/openclaw/clawsweeper/actions/runs/35890826955)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/111595

## Summary

Reproduced both Windows grouping defects against preflight main. Prepared a narrow credited fix plan. Local implementation is blocked by the read-only host; no files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #111595 | fix_needed | planned | canonical | The defect remains reproducible and can be repaired within existing grouping and preference owners. |
| #111596 | keep_closed | skipped | related | Preserve as credited historical work; no reopening, closure, or merge is proposed. |
| #137115 | keep_related | planned | related | Leave open outside this repair. Path-equivalence normalization must not classify projectless sessions. |
| #144427 | keep_closed | skipped | related | Broader historical work is outside the Windows path-equivalence repair. |
| cluster:issue-openclaw-openclaw-111595 | build_fix_artifact | planned | canonical | One issue-specific implementation PR remains appropriate; no product or security-boundary change is needed. |
| cluster:issue-openclaw-openclaw-111595 | open_fix_pr | blocked | canonical | Implementation and publication require a writable executor that completes ownership coordination, regression-first repair, validation, fresh review, and screenshot delivery. |

## Needs Human

- none
