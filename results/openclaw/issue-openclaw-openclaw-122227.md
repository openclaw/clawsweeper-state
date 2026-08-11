---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122227"
mode: "autonomous"
run_id: "31530702397"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31530702397"
head_sha: "27d0dca681584cb46bc566afd38be71fdf58c949"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-11T20:12:37.559Z"
canonical: "https://github.com/openclaw/openclaw/issues/122227"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122227"
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

# issue-openclaw-openclaw-122227

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31530702397](https://github.com/openclaw/clawsweeper/actions/runs/31530702397)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122227

## Summary

Confirmed #122227 on main a1846dbe: stale reply-only work with no handle and queueDepth 0 is retained solely by the shared queue-depth guard, despite stale progress. No code was changed because this checkout is read-only and the required dependencies cannot be installed; a narrow, executable fix artifact is prepared.

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
| #122227 | fix_needed | blocked | canonical | Implementation is blocked only by the read-only checkout and unavailable dependencies, not by product or technical ambiguity. |
| cluster:issue-openclaw-openclaw-122227 | build_fix_artifact | planned | canonical | Create the implementation PR from clawsweeper/issue-openclaw-openclaw-122227 in a writable executor checkout. |

## Needs Human

- none
