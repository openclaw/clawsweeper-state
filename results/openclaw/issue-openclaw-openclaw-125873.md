---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "32658500378"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32658500378"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-23T18:46:33.763Z"
canonical: "#125873"
canonical_issue: "#125873"
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

# issue-openclaw-openclaw-125873

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32658500378](https://github.com/openclaw/clawsweeper/actions/runs/32658500378)

Workflow conclusion: success

Worker result: blocked

Canonical: #125873

## Summary

#125873 remains the canonical open bug. Current main forwards persisted Bedrock tool-call arguments unchanged on replay; the narrow shared-helper repair and regression are clear, but this read-only worker cannot edit, install dependencies, or satisfy the mandatory sibling ../codex inspection gate.

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
| #125873 | fix_needed | planned | canonical | A focused owner-boundary repair is appropriate; no security-sensitive signal is present. |
| #125873 | build_fix_artifact | planned | canonical | Hand off the exact narrow change to a writable worker with the required Codex checkout and dependencies. |

## Needs Human

- none
