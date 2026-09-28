---
repo: "openclaw/wacli"
cluster_id: "issue-openclaw-wacli-444"
mode: "plan"
run_id: "36382611301"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36382611301"
head_sha: "8d659e7cb903370596e26acea5b81399f291c174"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-28T05:39:05.325Z"
canonical: "#444"
canonical_issue: "#444"
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

# issue-openclaw-wacli-444

Repo: openclaw/wacli

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36382611301](https://github.com/openclaw/clawsweeper/actions/runs/36382611301)

Workflow conclusion: success

Worker result: planned

Canonical: #444

## Summary

Issue #444 remains open and viable on main b87e6178. Mapped 1:1 backfill requests use LID on both anchor attempts, matching the reported timeout. Plan a narrow PN fallback, regression tests, documentation, and an implementation PR. No code or GitHub state was changed.

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
| #373 | keep_closed | skipped | related | Historical context; no action on the closed PR. |
| #427 | keep_closed | skipped | related | Historical cause and credit context; no action on the closed PR. |
| #444 | build_fix_artifact | planned | canonical | A bounded fallback can address the reported regression within backfill routing. |

## Needs Human

- none
