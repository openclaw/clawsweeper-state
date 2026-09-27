---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159872"
mode: "plan"
run_id: "36351968771"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36351968771"
head_sha: "3a18b3d1a20770d6b719c377f2a9be24f214a082"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-27T21:35:15.187Z"
canonical: "#159872"
canonical_issue: "#159872"
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

# issue-openclaw-openclaw-159872

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36351968771](https://github.com/openclaw/clawsweeper/actions/runs/36351968771)

Workflow conclusion: success

Worker result: planned

Canonical: #159872

## Summary

Latest main still excludes an explicitly requested sessions source when both session gates are off. A focused diagnostic fix is appropriate. This plan makes no code or GitHub changes; regression tests and CLI validation remain to be run.

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
| #159872 | fix_needed | planned | canonical | Doctor and memory status should name the requested source that was excluded and give an enablement hint. |

## Needs Human

- none
