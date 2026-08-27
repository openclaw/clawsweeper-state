---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-130742"
mode: "autonomous"
run_id: "33080938248"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33080938248"
head_sha: "0bd84d42bc0487c32af2285006884d4f9b2f7763"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-27T14:43:03.303Z"
canonical: "#130742"
canonical_issue: "#130742"
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

# issue-openclaw-openclaw-130742

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33080938248](https://github.com/openclaw/clawsweeper/actions/runs/33080938248)

Workflow conclusion: success

Worker result: blocked

Canonical: #130742

## Summary

#130742 remains an open canonical bug. Current main scans missing and orphan legacy transcripts only for the resolved default agent. A narrow repair can enumerate only configured, SQLite-deduplicated targets; however this worker cannot edit or run validation because the workspace is read-only (the focused pnpm test stops when Corepack tries to create its cache).

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
| #130742 | fix_needed | planned | canonical | Configured non-default session stores cannot reach either transcript integrity path. |
| #130742 | build_fix_artifact | planned | canonical | A configured-only transcript scan and boundary-level multi-agent regression are well-scoped; no config, schema, or security change is needed. |
| #130742 | open_fix_pr | planned | canonical | Job authorizes one new ClawSweeper fix PR for the hydrated canonical issue and forbids merge/close. |

## Needs Human

- none
