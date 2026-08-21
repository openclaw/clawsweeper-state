---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126813"
mode: "autonomous"
run_id: "32526709062"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32526709062"
head_sha: "eb8e2caabeb2ceabb5ef8145ebbb72ad6e6d3cff"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T21:18:04.481Z"
canonical: "https://github.com/openclaw/openclaw/issues/126813"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126813"
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

# issue-openclaw-openclaw-126813

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32526709062](https://github.com/openclaw/clawsweeper/actions/runs/32526709062)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126813

## Summary

#126813 is a confirmed narrow queue-admission bug on main 5b67b619. An executor-ready new-PR artifact is provided; this worker could not edit or validate because the checkout is read-only, dependencies lack tsx, and required ../codex source is absent.

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
| #126813 | fix_needed | blocked | canonical | Implementation is blocked only by this worker environment. The defect and narrow owner-boundary fix path are established. |
| #69208 | keep_related | planned | related | #126813 is a focused queued message-tool delivery-awareness defect, not a duplicate closure candidate for the umbrella. |
| cluster:issue-openclaw-openclaw-126813 | build_fix_artifact | planned | canonical | Create one narrow credited PR from clawsweeper/issue-openclaw-openclaw-126813 after restoring write access, dependencies, and the Codex-source gate. |

## Needs Human

- none
