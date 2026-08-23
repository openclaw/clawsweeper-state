---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-121778"
mode: "autonomous"
run_id: "32663076234"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32663076234"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-23T20:12:16.508Z"
canonical: "https://github.com/openclaw/openclaw/issues/121778"
canonical_issue: "https://github.com/openclaw/openclaw/issues/121778"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-121778

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32663076234](https://github.com/openclaw/clawsweeper/actions/runs/32663076234)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/121778

## Summary

No safe implementation PR is planned. The reported string drop exists in current main, but the requested coercion would choose between conflicting public contracts, and the required sibling Codex runtime source is unavailable for protocol verification.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #121778 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #121778 | needs_human | planned | needs_human | Maintainer direction is required on the public contract: either make Discord-native `components` a supported, schema-described message-tool input (with aligned docs and validation), or retain the portable `presentation` contract and correct/remove the contradictory Discord guidance. The prerequisite direct Codex protocol inspection is also unavailable. |
| #121991 | keep_closed | skipped | superseded | Already closed; no mutation is permitted or needed. |
| #122943 | keep_closed | skipped | superseded | Already closed; no mutation is permitted or needed. |

## Needs Human

- Decide the supported public interface for Discord-rich agent messages: portable `presentation` only, or a schema-described Discord-native `components` extension. Then provide a checkout with `../codex` available for direct MCP protocol/runtime verification before implementation.
