---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120956"
mode: "autonomous"
run_id: "31329698207"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31329698207"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-09T18:54:09.521Z"
canonical: "https://github.com/openclaw/openclaw/issues/120956"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120956"
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

# issue-openclaw-openclaw-120956

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31329698207](https://github.com/openclaw/clawsweeper/actions/runs/31329698207)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/120956

## Summary

Confirmed a narrow Workboard legacy SQLite persistence defect on main 40dbc7a65a8af246e7098e643a3bf2b15189fe3a. Fresh producers enforce the 240-UTF-16-unit invariant, but pre-existing rows replay unchanged. A plugin-owned doctor migration is the canonical repair. Implementation is blocked only because this worker checkout is read-only; no maintainer decision is needed.

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
| #120956 | keep_canonical | planned | canonical | The issue remains a real plugin-owned legacy-data repair; no viable PR is hydrated. |
| cluster:issue-openclaw-openclaw-120956 | fix_needed | blocked | canonical | The repair is clear and narrow, but branch implementation is blocked by the read-only checkout. |
| cluster:issue-openclaw-openclaw-120956 | build_fix_artifact | planned | canonical | Prepare one narrow new fix PR; do not add runtime fallback behavior, schema changes, config, or changelog edits. |

## Needs Human

- none
