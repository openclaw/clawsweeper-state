---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119360"
mode: "autonomous"
run_id: "30958726347"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30958726347"
head_sha: "2a61adcc1f062561ba3c9deb62cc0df97cdc81d2"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-05T00:05:47.565Z"
canonical: "https://github.com/openclaw/openclaw/issues/119360"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119360"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-119360

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30958726347](https://github.com/openclaw/clawsweeper/actions/runs/30958726347)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119360

## Summary

#119360 is a real deferred-restart baseline bug on current main. A restart-required edit is accepted as the reload baseline before its deferred SIGUSR1 emits; reverting to the physical runtime config is then planned as another restart-required A→B diff. Build a narrow credited fix PR; #98436 remains related product-policy work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #119360 | fix_needed | planned | canonical | Create a narrow repair that compares the pending restart target with the still-running restart baseline, so an exact pre-emission revert retires restart debt instead of scheduling a replacement restart. |
| #98436 | keep_related | planned | related | Keep open independently; this repair must not introduce or decide the broader restart-batching product policy. |
| cluster:issue-openclaw-openclaw-119360 | build_fix_artifact | planned | canonical | Prepare the narrow new-fix-PR artifact below. |
| cluster:issue-openclaw-openclaw-119360 | open_fix_pr | planned | canonical | Job permits one new ClawSweeper implementation PR and forbids merge/close actions. |

## Needs Human

- none
