---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-111595"
mode: "autonomous"
run_id: "35897609287"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35897609287"
head_sha: "5d82d01893d4ffe8a8e44f244f8793286bb3d85a"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-23T18:05:17.535Z"
canonical: "https://github.com/openclaw/openclaw/issues/111595"
canonical_issue: "https://github.com/openclaw/openclaw/issues/111595"
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

# issue-openclaw-openclaw-111595

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35897609287](https://github.com/openclaw/clawsweeper/actions/runs/35897609287)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/111595

## Summary

The catalog grouping defect reproduces in the grouping owner at main caa1422d. This host is read-only and has no installed dependencies, so the required failing regression, implementation, validation, and PR could not be completed.

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
| #111595 | fix_needed | planned | canonical | A narrow replacement fix is needed; the current worker cannot edit or run the required regression in this read-only checkout. |
| #111596 | keep_closed | skipped | superseded | Historical contributor work; no close action is valid. |
| #137115 | keep_related | planned | related | Keep open as a separate grouping question. |
| #144427 | keep_closed | skipped | related | Historical related work outside this fix. |
| cluster:issue-openclaw-openclaw-111595 | build_fix_artifact | blocked |  | Implementation, failing-regression proof, browser screenshots, measured test costs, and validation require a writable prepared executor checkout. |

## Needs Human

- none
