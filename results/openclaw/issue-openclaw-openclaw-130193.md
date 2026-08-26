---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-130193"
mode: "autonomous"
run_id: "32986200158"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32986200158"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-26T17:34:33.424Z"
canonical: "https://github.com/openclaw/openclaw/issues/130193"
canonical_issue: "https://github.com/openclaw/openclaw/issues/130193"
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

# issue-openclaw-openclaw-130193

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32986200158](https://github.com/openclaw/clawsweeper/actions/runs/32986200158)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/130193

## Summary

Confirmed on main 20eef858: the workspace-only read guard uses a partial mount list while the filesystem bridge uses buildSandboxFsMounts, so declared read-only Docker binds are omitted. No branch/test changes were possible: checkout is read-only, node_modules is absent, the focused Vitest command fails because tsx is missing, and pnpm cannot create its Corepack cache (EROFS).

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
| #130193 | fix_needed | planned | canonical | The issue is a narrow, source-reproducible existing-behavior bug. Implementation is blocked only by this worker's read-only, dependency-less checkout. |
| cluster:issue-openclaw-openclaw-130193 | build_fix_artifact | planned | canonical | A narrow new PR is appropriate once a writable checkout with dependencies is supplied. |

## Needs Human

- none
