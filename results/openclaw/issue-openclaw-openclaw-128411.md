---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128411"
mode: "autonomous"
run_id: "32675591955"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32675591955"
head_sha: "d5b0aa42ff03edf2752d0f8b960c3a60bb70a246"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-24T00:15:33.068Z"
canonical: "https://github.com/openclaw/openclaw/issues/128411"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128411"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-128411

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32675591955](https://github.com/openclaw/clawsweeper/actions/runs/32675591955)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/128411

## Summary

The canonical lifecycle-cleanup bug remains reproducible on current main, but implementation is blocked until the required direct ../codex hook-contract inspection is available. A narrow, non-executable fix artifact records the exact intended surface and validation path.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #128411 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #128411 | fix_needed | blocked | canonical | Blocked fix-first: direct Codex source inspection is required before a repair verdict, regression design, or executable PR path. |
| cluster:issue-openclaw-openclaw-128411 | build_fix_artifact | blocked | canonical | Artifact is intentionally non-executable until the Codex contract and resulting regression assertions are directly verified. |
| #128409 | keep_related | planned | related | Keep open as related follow-up work; it has a distinct owner-boundary defect and is not covered by this repair. |

## Needs Human

- Provide a writable execution environment with ../codex available (or allow its clone), then rerun the narrow fix path after direct inspection of the exact native-hook contract.
