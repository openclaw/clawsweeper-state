---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "32656644394"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32656644394"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-23T18:11:40.724Z"
canonical: "#125873"
canonical_issue: "#125873"
canonical_pr: null
actions_total: 1
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32656644394](https://github.com/openclaw/clawsweeper/actions/runs/32656644394)

Workflow conclusion: success

Worker result: blocked

Canonical: #125873

## Summary

#125873 remains the canonical open Bedrock replay bug. Current main forwards persisted tool-call arguments unchanged at the Bedrock payload boundary; a narrow two-file repair artifact is ready, but this worker cannot write or validate a branch because the required sibling Codex source and local test dependency are unavailable in the read-only environment.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #125873 | build_fix_artifact | planned | canonical | Narrow non-security repair is appropriate, but branch edits and proof are blocked by the read-only environment, missing node_modules/tsx, and unavailable required ../codex source. |

## Needs Human

- none
