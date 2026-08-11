---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122170"
mode: "autonomous"
run_id: "31521469673"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31521469673"
head_sha: "5439582beebe57b7e79dc4e3d7bb44acd9f7d65c"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-11T18:22:08.556Z"
canonical: "https://github.com/openclaw/openclaw/issues/122170"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122170"
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

# issue-openclaw-openclaw-122170

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31521469673](https://github.com/openclaw/clawsweeper/actions/runs/31521469673)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122170

## Summary

Current main reproduces the source-level defect: setup proves Gateway readiness, then discards it before the hatch handoff, which unconditionally launches lock-taking embedded TUI mode. A narrow new-PR artifact is ready; this worker cannot edit or validate because the checkout is read-only and lacks `tsx`.

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
| #110331 | keep_closed | skipped | related | Closed context ref; no mutation is allowed or needed. |
| #122170 | fix_needed | planned | canonical | A fresh setup with a reachable Gateway must hand off through Gateway TUI mode, while no-ready paths must retain embedded local mode. |
| cluster:issue-openclaw-openclaw-122170 | build_fix_artifact | planned | canonical | Create or update clawsweeper/issue-openclaw-openclaw-122170 as a narrow fix PR. |

## Needs Human

- none
