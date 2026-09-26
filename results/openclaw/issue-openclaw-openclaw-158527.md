---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158527"
mode: "plan"
run_id: "36212331186"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36212331186"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-26T02:42:41.537Z"
canonical: "https://github.com/openclaw/openclaw/issues/158527"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158527"
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

# issue-openclaw-openclaw-158527

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36212331186](https://github.com/openclaw/clawsweeper/actions/runs/36212331186)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/158527

## Summary

The preflight identifies an open data-loss report, and the current main checkout at 76e32e92441321b2e564263bc385cc7f4cc8ecd7 still contains the recursive QMD workspace removal. This is a plan-only run: no files or GitHub state were changed, and no validation was run.

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
| https://github.com/openclaw/openclaw/issues/158527 | fix_needed | planned | canonical | Plan a narrow Memory Core Doctor fix that retains QMD content without proven OpenClaw ownership and reports the retained state without refusing the upgrade. |
| https://github.com/openclaw/openclaw/pull/120936 | keep_closed | skipped | related | Historical context only; it is already closed. |

## Needs Human

- none
