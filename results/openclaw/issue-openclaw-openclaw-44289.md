---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-44289"
mode: "autonomous"
run_id: "31049582966"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31049582966"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-05T21:48:24.286Z"
canonical: "https://github.com/openclaw/openclaw/issues/44289"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44289"
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

# issue-openclaw-openclaw-44289

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31049582966](https://github.com/openclaw/clawsweeper/actions/runs/31049582966)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/44289

## Summary

#44289 remains reproducible on main: the registry-derived artifacts are parity-checked but have no generator or preflight check command. A narrow new fix PR is appropriate, but this worker cannot write or validate it because the sandbox is read-only and local dependencies/Corepack are unavailable.

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
| #44289 | fix_needed | blocked | canonical | Implementation is blocked only by this read-only worker environment. pnpm docs:list cannot initialize Corepack because its cache path is EROFS; focused Vitest cannot start because p-map is absent. The executor should implement and validate the planned branch in a writable dependency-ready checkout. |
| cluster:issue-openclaw-openclaw-44289 | build_fix_artifact | planned | canonical | Create one narrow PR from clawsweeper/issue-openclaw-openclaw-44289; do not revive the closed historical branches. |
| #85969 | keep_closed | skipped | related | Closed historical context. |
| #89142 | keep_closed | skipped | related | Closed historical context. |
| #91612 | keep_closed | skipped | related | Closed historical context. |

## Needs Human

- none
