---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125745"
mode: "autonomous"
run_id: "32127534097"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32127534097"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T10:44:27.043Z"
canonical: "https://github.com/openclaw/openclaw/issues/125745"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125745"
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

# issue-openclaw-openclaw-125745

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32127534097](https://github.com/openclaw/clawsweeper/actions/runs/32127534097)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125745

## Summary

Confirmed a narrow source-level regression on main: models.probe creates isolated auth state, but the ordinary prepared-runtime path rebinds it to the active Gateway owner before auth selection. The existing isolated read-only mode is the canonical repair. Implementation is blocked because this checkout is read-only, dependencies are absent, and ../codex is unavailable for the repository-required direct inspection.

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
| #125745 | fix_needed | planned | canonical | The issue remains an open canonical bug with a narrow, existing-mechanism repair path. |
| cluster:issue-openclaw-openclaw-125745 | build_fix_artifact | blocked | canonical | A writable executor with dependencies and the required Codex source checkout can implement this artifact directly. |

## Needs Human

- none
