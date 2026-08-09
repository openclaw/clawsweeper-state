---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-121046"
mode: "autonomous"
run_id: "31316715605"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31316715605"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-09T14:36:38.903Z"
canonical: "https://github.com/openclaw/openclaw/issues/121046"
canonical_issue: "https://github.com/openclaw/openclaw/issues/121046"
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

# issue-openclaw-openclaw-121046

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31316715605](https://github.com/openclaw/clawsweeper/actions/runs/31316715605)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/121046

## Summary

Confirmed on main 6a586cd0eadde0990f1c6bb3991dd190620e50d1: dated nested memory paths fail the shared date matcher, then are classified evergreen before mtime fallback. Plan a narrow new fix PR; no GitHub or filesystem mutations were made in this read-only worker environment.

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
| #121046 | fix_needed | planned | canonical | A narrow matcher expansion repairs the classifier at its owner without changing temporal-decay configuration or dreaming indexing policy. |
| cluster:issue-openclaw-openclaw-121046 | build_fix_artifact | planned | canonical | No viable PR is hydrated. The deterministic executor should implement this small new PR from the artifact. |
| #32745 | keep_closed | skipped | duplicate | Historical same-root-cause context only. |
| #67594 | keep_closed | skipped | duplicate | Historical same-root-cause context only. |
| #77831 | keep_related | planned | related | Leave the independent dreaming-indexing investigation open; this PR changes only the nested exact-date temporal-decay classification. |

## Needs Human

- none
