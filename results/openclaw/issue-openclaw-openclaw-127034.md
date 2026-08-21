---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127034"
mode: "autonomous"
run_id: "32450976274"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32450976274"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T05:42:50.552Z"
canonical: "https://github.com/openclaw/openclaw/issues/127034"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127034"
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

# issue-openclaw-openclaw-127034

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32450976274](https://github.com/openclaw/clawsweeper/actions/runs/32450976274)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127034

## Summary

A narrow Workboard repair path is prepared for #127034. Current main (9a64770ea6aded88b8babee84d4deb6ca6a6e686) rejects a documented terminal-proof ID-only completion flow. Implementation remains blocked in this worker because the mandatory readable sibling ../codex checkout is absent and cannot be cloned in the read-only workspace.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #127034 | fix_needed | planned | canonical | Repair the Workboard owner rather than tool or gateway callers: terminal stored proofs must resolve by proofId alone; pending unknown proofs still require proof.status. |
| cluster:issue-openclaw-openclaw-127034 | build_fix_artifact | planned | canonical | Create one credited implementation PR after its writable executor restores the mandatory Codex-source preflight and runs the listed regression and changed-surface checks. |

## Needs Human

- Provide a readable sibling ../codex checkout, or run the implementation artifact in an environment where it can be cloned. The root AGENTS.md Codex gate forbids a final implementation verdict without that direct inspection.
