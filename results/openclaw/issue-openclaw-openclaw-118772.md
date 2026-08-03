---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118772"
mode: "autonomous"
run_id: "30835070832"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30835070832"
head_sha: "4f67ca516da0fc29fed5ae2b8e17fce14d49354d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-03T17:42:56.071Z"
canonical: "https://github.com/openclaw/openclaw/issues/118772"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118772"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-118772

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30835070832](https://github.com/openclaw/clawsweeper/actions/runs/30835070832)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118772

## Summary

Issue #118772 remains a valid, narrow non-security repair on current main (94f431417b251470546e9555cdde02695a0afcd2). The reply accounting owner marks any configured CLI-provider run's aggregate usage as a fresh context snapshot even when that run supplies no usable final-call snapshot; session persistence then records the aggregate prompt total as fresh, and CLI compaction trusts it. Restrict fresh-context attribution to an actual final-call usage snapshot or explicit prompt snapshot, preserving aggregate usage only for billing/cost accounting.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/118796 | clawsweeper/issue-openclaw-openclaw-118772 |  |
| issue_implementation_status_comment | updated | #118772 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118796 | merge_canonical | blocked | fix_pr | checks are not clean: security-fast: FAILURE, openclaw/ci-gate: FAILURE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117314 | keep_closed | skipped | related | Do not mutate an already-closed historical issue. |
| #117511 | keep_closed | skipped | related | Do not mutate an already-closed historical issue. |
| #118772 | fix_needed | planned | canonical | A narrow owner-boundary repair is available: do not infer context-snapshot freshness from provider classification alone. |
| cluster:issue-openclaw-openclaw-118772 | build_fix_artifact | planned | canonical | Create one narrow credited implementation PR from clawsweeper/issue-openclaw-openclaw-118772. |

## Needs Human

- none
