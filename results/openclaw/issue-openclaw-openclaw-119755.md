---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119755"
mode: "autonomous"
run_id: "31056403539"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31056403539"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-06T00:26:20.917Z"
canonical: "https://github.com/openclaw/openclaw/issues/119755"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119755"
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

# issue-openclaw-openclaw-119755

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31056403539](https://github.com/openclaw/clawsweeper/actions/runs/31056403539)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/119755

## Summary

Confirmed on main d3d25737: health reads through the legacy sessions.json locator but publishes that locator instead of its canonical SQLite database target. No branch or tests could be completed because this worker checkout is read-only and its dependency install lacks p-map; the focused test runner fails before test discovery.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119779 | clawsweeper/issue-openclaw-openclaw-119755 |  |
| issue_implementation_status_comment | updated | #119755 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119779 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119755 | fix_needed | planned | canonical | Narrow producer-boundary bug: preserve the legacy locator for SQLite session reads, but expose the resolved canonical SQLite target in health output. |
| cluster:issue-openclaw-openclaw-119755 | build_fix_artifact | planned | canonical | Create one narrow fix PR from clawsweeper/issue-openclaw-openclaw-119755 after dependency installation and focused validation. |

## Needs Human

- none
