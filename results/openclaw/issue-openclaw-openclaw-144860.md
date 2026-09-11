---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-144860"
mode: "plan"
run_id: "34596273667"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34596273667"
head_sha: "e74b07a40a6ecb1c9743e17201ecca0d6114bce5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-11T12:03:41.841Z"
canonical: "#144860"
canonical_issue: "https://github.com/openclaw/openclaw/issues/144860"
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

# issue-openclaw-openclaw-144860

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34596273667](https://github.com/openclaw/clawsweeper/actions/runs/34596273667)

Workflow conclusion: success

Worker result: planned

Canonical: #144860

## Summary

Plan a narrow DELETE-404 termination fix for #144860. The clean checkout matches preflight main 7764767a88b3a03850e4aee5f1ccea26b91c9886 and still rejects termination 404. No files or GitHub state changed; runtime reproduction and validation remain pending.

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
| #144860 | fix_needed | planned | canonical | The existing termination owner can accept 404 alongside successful responses and 405, then reuse its terminated-session guard. No new configuration, dependency, authorization behavior, or product decision is needed. |

## Needs Human

- none
