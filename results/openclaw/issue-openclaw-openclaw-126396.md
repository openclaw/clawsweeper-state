---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126396"
mode: "autonomous"
run_id: "32288461387"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32288461387"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T19:13:18.406Z"
canonical: "https://github.com/openclaw/openclaw/issues/126396"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126396"
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

# issue-openclaw-openclaw-126396

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32288461387](https://github.com/openclaw/clawsweeper/actions/runs/32288461387)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126396

## Summary

Confirmed documentation-only TaskFlow regression on main 5976e74d: both bundled skills use removed runtime.tasks.flow mutations. A narrow two-skill repair is specified, but this worker cannot edit, validate, or create its branch because the filesystem is read-only; the mandatory sibling ../codex checkout is also absent and cannot be cloned here.

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
| #126396 | fix_needed | planned | canonical | A narrow documentation repair is warranted; no SDK contract change or compatibility alias is needed. |
| cluster:issue-openclaw-openclaw-126396 | build_fix_artifact | blocked |  | Implementation is blocked only by the read-only worker environment and unavailable mandatory Codex sibling checkout. |

## Needs Human

- none
