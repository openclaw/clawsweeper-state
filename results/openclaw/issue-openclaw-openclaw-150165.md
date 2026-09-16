---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-150165"
mode: "autonomous"
run_id: "35123290217"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35123290217"
head_sha: "f48f1cee58c5ac867114cc77fb088b172aa4e9a9"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-16T17:18:43.959Z"
canonical: "https://github.com/openclaw/openclaw/issues/150165"
canonical_issue: "https://github.com/openclaw/openclaw/issues/150165"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-150165

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35123290217](https://github.com/openclaw/clawsweeper/actions/runs/35123290217)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/150165

## Summary

Reproduced missing child attribution through getMessageFeishu. Narrow fix artifact prepared; implementation and after-fix validation are blocked by the read-only host and absent dependencies. No files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #150165 | fix_needed | planned | canonical | The existing formatter emits only child bodies. Restore attribution at that owner without changing routing, permissions, configuration or mention resolution. |
| #39001 | keep_closed | skipped | related | Historical partial overlap; no reopening, closure or branch replacement is requested. |
| #148184 | keep_closed | skipped | related | Preserve the existing decoded-item contract; this merged refactor is not an attribution fix. |
| cluster:issue-openclaw-openclaw-150165 | build_fix_artifact | planned |  | Artifact preparation is complete. Implementation requires a writable executor that refreshes main, reproduces the regression, applies the narrow fix and validates before publication. |

## Needs Human

- none
