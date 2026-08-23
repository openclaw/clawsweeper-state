---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "32661965496"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32661965496"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T19:52:23.359Z"
canonical: "https://github.com/openclaw/openclaw/issues/125873"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125873"
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

# issue-openclaw-openclaw-125873

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32661965496](https://github.com/openclaw/clawsweeper/actions/runs/32661965496)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125873

## Summary

Confirmed the historic Bedrock replay bug on main b3b33d24: the converter forwards non-record tool arguments through a cast. A narrow two-file repair is prepared, but this read-only checkout lacks dependencies and cannot create ../codex for the mandatory direct Codex-source inspection, so no branch or PR can be produced here.

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
| #125873 | fix_needed | blocked | canonical | The source reproduction remains valid, but implementation and mandatory direct Codex-source inspection cannot run in this read-only environment. |
| cluster:issue-openclaw-openclaw-125873 | build_fix_artifact | planned | canonical | A narrow new PR can repair the canonical replay boundary once run in a writable checkout with dependencies and the required ../codex inspection. |
| #21873 | keep_closed | skipped | related | Already closed; no mutation permitted or needed. |
| #126391 | keep_closed | skipped | related | Already merged and only partial-overlap context. |

## Needs Human

- none
