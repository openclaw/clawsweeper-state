---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-94597"
mode: "autonomous"
run_id: "33602051322"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33602051322"
head_sha: "904579a319c4393f18c8d42c25e840b74dbab2c0"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-02T07:58:01.549Z"
canonical: "https://github.com/openclaw/openclaw/issues/94597"
canonical_issue: "https://github.com/openclaw/openclaw/issues/94597"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# issue-openclaw-openclaw-94597

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33602051322](https://github.com/openclaw/clawsweeper/actions/runs/33602051322)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/94597

## Summary

#94597 remains the open canonical issue. Implementation is blocked: the required ../codex source is absent, tests cannot start in this read-only runner, and current routing shows that a sink-only change cannot deliver through an actions-only plugin.

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
| Needs human | 2 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #94597 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #94597 | fix_needed | blocked | canonical | Blocked pending a writable runner with the required ../codex checkout and test cache, plus maintainer direction on whether the stated sink-only boundary may expand to channel selection. |
| cluster:issue-openclaw-openclaw-94597 | build_fix_artifact | blocked | canonical | A fix artifact is retained for the canonical issue, but opening a PR is blocked until the required owner-boundary decision and deterministic validation environment are available. |

## Needs Human

- Confirm whether #94597 may change channel selection so a configured actions.handleAction-only plugin can be selected for send; current main makes the requested sink-only change insufficient.
- Provide a writable implementation environment with ../codex available for the mandatory direct-source check and with a writable Corepack cache so the requested regression can be demonstrated.
