---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-96660"
mode: "autonomous"
run_id: "37861414837"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37861414837"
head_sha: "e4c173aeed287b177b9c2152cb50d055da5d7223"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-09T00:25:19.653Z"
canonical: "https://github.com/openclaw/openclaw/issues/96660"
canonical_issue: "https://github.com/openclaw/openclaw/issues/96660"
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

# issue-openclaw-openclaw-96660

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37861414837](https://github.com/openclaw/clawsweeper/actions/runs/37861414837)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/96660

## Summary

Confirmed the directory-to-Missing source path on preflight main 9284c76dea58496d0c02c925fa72f7aafad78ad0. Narrow fix artifact prepared; implementation and runtime reproduction are blocked by the read-only host and absent dependencies. No files or GitHub state changed.

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
| #96660 | fix_needed | planned | canonical | A narrow ordinary bug fix remains warranted. Establish the failing sessions.files.list regression on current main before implementation; stop if it does not reproduce. |
| #97251 | route_security | planned | security_sensitive | Quarantine this exact historical item for central OpenClaw security handling without public mutation; continue the independent directory bug plan. |
| #98646 | keep_closed | skipped | related | Already closed; retain historical layout evidence without further action. |
| #105015 | keep_closed | skipped | related | Already closed; preserve path-containment behavior and leave CHANGELOG.md unchanged. |
| cluster:issue-openclaw-openclaw-96660 | build_fix_artifact | planned |  | Deliver the narrow executable repair plan to a writable executor; do not publish until reproduction, validation, and review succeed. |

## Needs Human

- none
