---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118621"
mode: "autonomous"
run_id: "30805813579"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30805813579"
head_sha: "4f67ca516da0fc29fed5ae2b8e17fce14d49354d"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-03T10:54:31.687Z"
canonical: "https://github.com/openclaw/openclaw/issues/118621"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118621"
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

# issue-openclaw-openclaw-118621

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30805813579](https://github.com/openclaw/clawsweeper/actions/runs/30805813579)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118621

## Summary

Verified on current main `db7c48478f80c7c492e351c939883ac058173562`: canonical `MediaFact` records preserve optional `fileName`, but the Control UI history projection discards it and attachment cards derive their label from the UUID-suffixed managed path. The open issue is the canonical report and has a narrow, non-security fix path; no GitHub mutations were made.

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
| #118621 | keep_canonical | planned | canonical | This is a current-main Control UI projection regression with a clear owner boundary and no viable candidate PR in the hydrated cluster. |
| #118621 | fix_needed | planned | canonical | A small fix PR is appropriate and permitted; no config, migration, dependency, security-boundary, or documentation change is needed. |
| cluster:issue-openclaw-openclaw-118621 | build_fix_artifact | planned | canonical | Create or reuse the required `clawsweeper/issue-openclaw-openclaw-118621` implementation PR with the narrow projection-and-label repair. |

## Needs Human

- none
