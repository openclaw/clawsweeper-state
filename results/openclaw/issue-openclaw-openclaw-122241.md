---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122241"
mode: "autonomous"
run_id: "31535600176"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31535600176"
head_sha: "4b79888c3f2ad4b9e0c2ee3345984adc995ea81d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-11T21:07:26.489Z"
canonical: "https://github.com/openclaw/openclaw/issues/122241"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122241"
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

# issue-openclaw-openclaw-122241

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31535600176](https://github.com/openclaw/clawsweeper/actions/runs/31535600176)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122241

## Summary

Confirmed current-main Control UI aggregation defect. Profile-scoped provider outcomes are reduced by severity after profileId is discarded, so auth-rejected overrides a ready sibling. The checkout is read-only and focused Vitest cannot start because `tsx` is absent; emitted a narrow executable fix artifact.

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
| #122241 | fix_needed | blocked | canonical | Implementation is blocked only by this worker's read-only checkout and missing test dependency; no maintainer decision is required. |
| #121852 | keep_closed | skipped | related | Closed historical context only. |
| cluster:issue-openclaw-openclaw-122241 | build_fix_artifact | planned | canonical | Narrow new fix PR required. |

## Needs Human

- none
