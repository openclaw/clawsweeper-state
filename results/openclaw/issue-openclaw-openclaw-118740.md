---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118740"
mode: "autonomous"
run_id: "30831669076"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30831669076"
head_sha: "4f67ca516da0fc29fed5ae2b8e17fce14d49354d"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-03T16:34:48.527Z"
canonical: "https://github.com/openclaw/openclaw/issues/118740"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118740"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-118740

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30831669076](https://github.com/openclaw/clawsweeper/actions/runs/30831669076)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118740

## Summary

#118740 remains a current-main, non-security macOS signing bug. The canonical fix is a narrow new PR that resolves hash-form identities only for automatic timestamp eligibility while preserving the exact supplied hash for every codesign invocation.

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
| #118740 | fix_needed | planned | canonical | The issue is source-reproducible on the supplied current main SHA and has a bounded owner-local repair. |
| cluster:issue-openclaw-openclaw-118740 | build_fix_artifact | planned | canonical | A new focused fix PR is appropriate and permitted; no contributor PR exists to repair or replace. |

## Needs Human

- none
