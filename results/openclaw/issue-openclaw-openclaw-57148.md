---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-57148"
mode: "autonomous"
run_id: "31039505132"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31039505132"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-05T20:30:47.515Z"
canonical: "https://github.com/openclaw/openclaw/issues/57148"
canonical_issue: "https://github.com/openclaw/openclaw/issues/57148"
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

# issue-openclaw-openclaw-57148

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31039505132](https://github.com/openclaw/clawsweeper/actions/runs/31039505132)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/57148

## Summary

Verified on main e69c3df2361b38285917c29b0c90867c75b8ebe9: ordinary subagent completion text is assigned unbounded in src/agents/subagent-announce.ts and rendered through the shared protected/plain task-completion formatter in src/agents/internal-events.ts. A narrow 6,000-UTF-16-unit capped formatter with a visible truncation marker is appropriate; no config surface or persistence change is needed. Implementation is blocked because this checkout is read-only and has no dependencies: writing fails with EROFS and the focused Vitest runner fails before tests load because p-map is absent.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119731 | clawsweeper/issue-openclaw-openclaw-57148 |  |
| issue_implementation_status_comment | updated | #57148 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119731 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #57148 | fix_needed | blocked | canonical | The bug is reproducible by source inspection and has a narrow owner-boundary repair, but this worker cannot edit or validate the branch in the read-only checkout. |
| cluster:issue-openclaw-openclaw-57148 | build_fix_artifact | planned | canonical | A new narrow ClawSweeper fix PR is the viable canonical path. |
| #73320 | route_security | planned | security_sensitive | Quarantined independently; it does not block the ordinary non-security repair for #57148. |

## Needs Human

- none
