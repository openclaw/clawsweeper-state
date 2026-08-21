---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127238"
mode: "autonomous"
run_id: "32498977696"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32498977696"
head_sha: "eb8e2caabeb2ceabb5ef8145ebbb72ad6e6d3cff"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T15:57:15.874Z"
canonical: "https://github.com/openclaw/openclaw/issues/127238"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127238"
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

# issue-openclaw-openclaw-127238

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32498977696](https://github.com/openclaw/clawsweeper/actions/runs/32498977696)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127238

## Summary

#127238 remains the canonical non-security TUI lifecycle bug. Current main’s shared terminal path drops a mismatched run but does not apply the existing no-tracked-run stale-stream guard. A narrow two-file repair is planned; this worker could not edit or validate because the checkout is read-only, dependencies are absent, and the required sibling ../codex checkout is unavailable.

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
| #127238 | fix_needed | blocked | canonical | Implementation and proof are blocked only by this worker environment. The executor needs a writable checkout, dependencies, and the required ../codex source inspection before editing and validating. |
| cluster:issue-openclaw-openclaw-127238 | build_fix_artifact | planned | canonical | A deterministic executor can apply this narrow new-fix-PR plan after restoring the required local validation environment. |

## Needs Human

- none
