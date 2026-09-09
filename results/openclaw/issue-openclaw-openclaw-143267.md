---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-143267"
mode: "autonomous"
run_id: "34378627501"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34378627501"
head_sha: "ea172802675ac6c67013f54f40a56675d41648a0"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-09T17:17:57.481Z"
canonical: "https://github.com/openclaw/openclaw/issues/143267"
canonical_issue: "https://github.com/openclaw/openclaw/issues/143267"
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

# issue-openclaw-openclaw-143267

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34378627501](https://github.com/openclaw/clawsweeper/actions/runs/34378627501)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/143267

## Summary

Confirmed the duplicate-hook defect in current-main pure functions and prepared a narrow fix artifact. Local implementation and isolated CLI validation are blocked by the read-only workspace. No files or GitHub items were changed.

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
| #143267 | fix_needed | planned | canonical | A narrow existing-behavior repair is supported. Full isolated CLI reproduction and regression tests remain required before implementation. |
| #136241 | keep_closed | skipped | related | Preserve the landed literal-path contracts while repairing the distinct portable-hook defect. |
| cluster:issue-openclaw-openclaw-143267 | build_fix_artifact | planned | canonical | Deliver the supported fix plan to a writable executor; do not treat the source-level reproduction as completed branch validation. |

## Needs Human

- none
