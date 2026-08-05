---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118560"
mode: "autonomous"
run_id: "30968233652"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30968233652"
head_sha: "6976512bc0fe3528f2f0a91699e4e291d0ce2850"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-05T02:10:10.654Z"
canonical: "#118560"
canonical_issue: "#118560"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-118560

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30968233652](https://github.com/openclaw/clawsweeper/actions/runs/30968233652)

Workflow conclusion: success

Worker result: blocked

Canonical: #118560

## Summary

Confirmed UI-owned identity loss on current main, but the filesystem is read-only; the scoped patch was rejected before any file changed. A narrow new-fix-PR artifact is ready.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118560 | fix_needed | blocked | canonical | Implementation, validation of a modified tree, and PR creation require a writable execution environment. |

## Needs Human

- Run this fix artifact in a writable ClawSweeper worker.
