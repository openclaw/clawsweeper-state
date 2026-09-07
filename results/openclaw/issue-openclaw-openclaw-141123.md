---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-141123"
mode: "autonomous"
run_id: "34110051178"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34110051178"
head_sha: "e8779e8b672dfb8d51b3af5aba44815cfb9a7295"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-07T10:19:51.431Z"
canonical: "https://github.com/openclaw/openclaw/issues/141123"
canonical_issue: "https://github.com/openclaw/openclaw/issues/141123"
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

# issue-openclaw-openclaw-141123

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34110051178](https://github.com/openclaw/clawsweeper/actions/runs/34110051178)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/141123

## Summary

Confirmed the startup coverage gap on preflight main. Narrow repair artifact prepared; implementation and regression validation are blocked by the read-only checkout and missing dependencies. No files or GitHub state changed.

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
| #141123 | fix_needed | planned | canonical | Source confirms a narrow startup defect covered by existing error policy. Runtime reproduction remains a prerequisite to implementation. |
| cluster:issue-openclaw-openclaw-141123 | build_fix_artifact | planned |  | A bounded executor plan is supported by current source without changing configuration, dependencies, retry policy, or security boundaries. |
| cluster:issue-openclaw-openclaw-141123 | open_fix_pr | blocked |  | PR preparation is blocked on writable execution and the required reproduction and validation gates; no maintainer product decision is needed. |

## Needs Human

- none
