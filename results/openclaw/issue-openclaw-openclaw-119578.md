---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119578"
mode: "autonomous"
run_id: "30998579635"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30998579635"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-05T10:55:01.485Z"
canonical: "https://github.com/openclaw/openclaw/issues/119578"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119578"
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

# issue-openclaw-openclaw-119578

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30998579635](https://github.com/openclaw/clawsweeper/actions/runs/30998579635)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119578

## Summary

#119578 is a current-main SQLite chat-history allocation bug. The original UI polling premise is stale, but each normal history refresh still parses its candidate tail before enforcing bytes. Plan one narrow credited fix PR; no GitHub mutations performed.

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
| #119578 | fix_needed | planned | canonical | A narrow chat.history-specific metadata-first selection path can remove the repeated large JSON allocation without changing generic history/SSE semantics. |
| cluster:issue-openclaw-openclaw-119578 | build_fix_artifact | planned | canonical | Create the allowed new fix PR from clawsweeper/issue-openclaw-openclaw-119578 after implementing and validating the narrow owner-boundary repair. |

## Needs Human

- none
