---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-144911"
mode: "autonomous"
run_id: "34598605765"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34598605765"
head_sha: "e74b07a40a6ecb1c9743e17201ecca0d6114bce5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-11T13:08:19.236Z"
canonical: "https://github.com/openclaw/openclaw/issues/144911"
canonical_issue: "https://github.com/openclaw/openclaw/issues/144911"
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

# issue-openclaw-openclaw-144911

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34598605765](https://github.com/openclaw/clawsweeper/actions/runs/34598605765)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/144911

## Summary

Prepared a narrow fix artifact. Implementation is blocked because this host is read-only and the MCP SDK is not installed, preventing the required failing real-SDK regression. No files or GitHub state changed.

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
| #144911 | fix_needed | blocked | canonical | Required reproduction and implementation need writable authorized isolation with installed dependencies. This is an environment blocker, not evidence that the defect fails to reproduce. |
| #144336 | keep_related | planned | related | Retain the separate restart investigation and its existing maintainer-review requirements. |
| cluster:issue-openclaw-openclaw-144911 | build_fix_artifact | planned | canonical | The executor can prepare one focused bug fix without changing process ownership, cleanup receipts, dependencies, or product policy. |

## Needs Human

- none
