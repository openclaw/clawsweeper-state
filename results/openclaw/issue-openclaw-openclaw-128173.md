---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128173"
mode: "autonomous"
run_id: "32632239858"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32632239858"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T10:03:09.601Z"
canonical: "https://github.com/openclaw/openclaw/issues/128173"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128173"
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

# issue-openclaw-openclaw-128173

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32632239858](https://github.com/openclaw/clawsweeper/actions/runs/32632239858)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/128173

## Summary

#128173 is a valid narrow macOS layout bug on current main (9dbc72a544a89412adc3c63d0be14a1369a89513). The source shows a 320-point chat minimum in a detail hierarchy with no pane-level vertical scroll. A new credited fix PR is appropriate, but this worker cannot edit or validate it: the filesystem is read-only, Swift and pnpm cannot create required caches, and the mandated sibling ../codex checkout is absent and cannot be cloned here.

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
| #128173 | fix_needed | planned | canonical | The issue is source-reproducible and non-security-sensitive. No competing PR was hydrated; build a single narrow fix PR. |
| cluster:issue-openclaw-openclaw-128173 | build_fix_artifact | planned |  | Produce the executable narrow repair plan for the deterministic executor; implementation and validation are blocked only by this worker environment. |

## Needs Human

- none
