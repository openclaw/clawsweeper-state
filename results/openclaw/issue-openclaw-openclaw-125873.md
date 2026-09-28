---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "32662967826"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32662967826"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-23T20:06:55.027Z"
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
needs_human_count: 1
---

# issue-openclaw-openclaw-125873

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32662967826](https://github.com/openclaw/clawsweeper/actions/runs/32662967826)

Workflow conclusion: success

Worker result: blocked

Canonical: #125873

## Summary

Blocked before code changes: the mandatory sibling Codex-source gate cannot be satisfied because ../codex is absent, while this worker has read-only filesystem access and restricted network access. Current main still has the reported replay boundary.

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
| #125873 | needs_human | blocked | needs_human | A human must provide the mandatory sibling ../codex checkout or rerun in a writable, network-enabled worker before this repair can be implemented or validated. |

## Needs Human

- Provide the mandatory sibling ../codex source checkout, or rerun this repair in an environment that can create it; the repository instruction forbids any code change without that direct inspection.
