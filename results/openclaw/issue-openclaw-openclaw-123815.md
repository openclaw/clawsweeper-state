---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123815"
mode: "autonomous"
run_id: "32335168239"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32335168239"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T05:28:21.386Z"
canonical: "https://github.com/openclaw/openclaw/issues/123815"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123815"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-123815

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32335168239](https://github.com/openclaw/clawsweeper/actions/runs/32335168239)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123815

## Summary

Current main still passes a gateway-local staged pathname to native signal-cli, so the reported separate-UID failure remains. Implementation is blocked: the required direct upstream signal-cli attachment contract and isolated two-user native-daemon proof are unavailable in this environment.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #123815 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #123815 | needs_human | blocked | needs_human | A maintainer or environment with direct supported signal-cli contract evidence and an isolated external-native daemon is required before selecting a non-speculative fix path. |
| #124105 | keep_closed | skipped | superseded | Already closed; its proposed data-URI path cannot be adopted until the same upstream contract and live-proof gates are met. |

## Needs Human

- Obtain direct supported signal-cli JSON-RPC attachment-contract proof (data-URI syntax, filename semantics, and request-size behavior) and an isolated two-user native-daemon delivery result before authorizing an implementation artifact.
