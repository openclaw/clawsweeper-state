---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122063"
mode: "autonomous"
run_id: "31503102540"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31503102540"
head_sha: "c07ff038c0059e57cfacd6bf6601e36988553900"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-11T14:49:05.799Z"
canonical: "https://github.com/openclaw/openclaw/issues/122063"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122063"
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

# issue-openclaw-openclaw-122063

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31503102540](https://github.com/openclaw/clawsweeper/actions/runs/31503102540)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/122063

## Summary

Current main has a source-proven macOS notification authorization mismatch: provisional status is presented as granted and accepted by pairing, but NotificationManager rejects it before enqueueing. Plan one narrow fix PR for the canonical open issue.

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
| #122063 | fix_needed | planned | canonical | A narrow owner-level predicate can repair the broken existing behavior without changing configuration, trust boundaries, or product policy. |
| cluster:issue-openclaw-openclaw-122063 | build_fix_artifact | planned | canonical | Build the repair branch, validate it against the pinned current main, and then open a PR carrying the issue reference and release-note context. |

## Needs Human

- none
