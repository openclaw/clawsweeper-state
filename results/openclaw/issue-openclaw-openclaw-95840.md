---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32330794565"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32330794565"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T04:19:54.648Z"
canonical: "https://github.com/openclaw/openclaw/issues/95840"
canonical_issue: "https://github.com/openclaw/openclaw/issues/95840"
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

# issue-openclaw-openclaw-95840

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32330794565](https://github.com/openclaw/clawsweeper/actions/runs/32330794565)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

Current main reproduces the direct-OpenAI cache-TTL omission, but this checkout is read-only with no dependencies, so no branch, regression run, or PR can be produced here. A narrow provider-owned fix artifact is ready for execution.

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
| #95610 | keep_related | planned | related | Keep open as an adjacent, independent OpenAI cache-efficiency report. |
| #95840 | fix_needed | planned | canonical | Provider-owned direct OpenAI eligibility is missing; no config or core provider exception is needed. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | planned | canonical | Executor should implement and validate the narrow branch from current main. |

## Needs Human

- none
