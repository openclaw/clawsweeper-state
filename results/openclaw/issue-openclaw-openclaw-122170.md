---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122170"
mode: "autonomous"
run_id: "31523941364"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31523941364"
head_sha: "5439582beebe57b7e79dc4e3d7bb44acd9f7d65c"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-11T18:52:51.858Z"
canonical: "https://github.com/openclaw/openclaw/issues/122170"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122170"
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

# issue-openclaw-openclaw-122170

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31523941364](https://github.com/openclaw/clawsweeper/actions/runs/31523941364)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122170

## Summary

#122170 remains reproducible on current main. A narrow fix artifact is ready, but this read-only checkout cannot create the required branch/PR or install the missing test runner dependency to validate it.

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
| https://github.com/openclaw/openclaw/pull/110331 | keep_closed | skipped | related | Historical implementation context only; it is already closed and does not repair the current Gateway-lock regression. |
| https://github.com/openclaw/openclaw/issues/122170 | fix_needed | planned | canonical | Preserve the already-probed readiness fact across the setup result and hatch handoff so only a ready-Gateway hatch uses the normal Gateway TUI path; retain embedded local mode otherwise. |
| cluster:issue-openclaw-openclaw-122170 | build_fix_artifact | planned | canonical | Create one narrow fix PR from clawsweeper/issue-openclaw-openclaw-122170 when write access and dependencies are available. |

## Needs Human

- none
