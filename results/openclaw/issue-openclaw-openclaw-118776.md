---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118776"
mode: "autonomous"
run_id: "30845328482"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30845328482"
head_sha: "4f67ca516da0fc29fed5ae2b8e17fce14d49354d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-03T19:27:51.100Z"
canonical: "#118776"
canonical_issue: "#118776"
canonical_pr: "#118806"
actions_total: 2
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30845328482](https://github.com/openclaw/clawsweeper/actions/runs/30845328482)

Workflow conclusion: success

Worker result: planned

Canonical: #118776

## Summary

Verified against preflight main c12579ae57debb32c9ab5a2b7f0d0cce400f4bab: stored leaf sessions deny child-control tools but retain sessions_yield, while the shared leaf prompt still tells them to yield for descendant completion. The open canonical repair PR #118806 has the correct narrow four-file surface and required labels, but its hydrated head has failing security-fast and openclaw/ci-gate checks; repair and exact-head validation must complete before it can be treated as a fix candidate.

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
| #118776 | keep_canonical | planned | canonical | This is the authoritative report for the leaf capability/prompt invariant. It remains open because #118806 is not yet validation-clean. |
| #118806 | fix_needed | planned | canonical | Reuse the existing same-repository writable PR rather than creating a duplicate. First inspect the exact failed CI logs, repair only any concrete branch/base or validation issue, then rerun focused policy/prompt/yield proof and the changed gate. |

## Needs Human

- none
