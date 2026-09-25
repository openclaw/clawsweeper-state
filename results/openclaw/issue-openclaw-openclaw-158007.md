---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158007"
mode: "autonomous"
run_id: "36112855042"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36112855042"
head_sha: "3d8d89c12d45e24c0922d95e4a11f410869dc12e"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-25T08:44:53.545Z"
canonical: "https://github.com/openclaw/openclaw/issues/158007"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158007"
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

# issue-openclaw-openclaw-158007

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36112855042](https://github.com/openclaw/clawsweeper/actions/runs/36112855042)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/158007

## Summary

Current main has a source-visible help exit gap, but the required process reproduction could not run: this checkout is read-only and has neither installed dependencies nor build output. No code or GitHub state was changed.

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
| #158007 | fix_needed | planned | canonical | A narrow CLI exit repair appears warranted, subject to reproducing the hang on current main. |
| #114067 | keep_related | planned | related |  |
| #147932 | keep_related | planned | related |  |
| #157884 | keep_related | planned | related |  |
| cluster:issue-openclaw-openclaw-158007 | build_fix_artifact | blocked |  | Implementation is blocked until a writable checkout with dependencies can reproduce the failure through the real openclaw --help entrypoint. |

## Needs Human

- none
