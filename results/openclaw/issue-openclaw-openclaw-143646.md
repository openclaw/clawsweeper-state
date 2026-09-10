---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-143646"
mode: "autonomous"
run_id: "34433313165"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34433313165"
head_sha: "1d41377123e9d796222f3d8014059202ab00ce21"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-10T03:34:44.624Z"
canonical: "https://github.com/openclaw/openclaw/issues/143646"
canonical_issue: "https://github.com/openclaw/openclaw/issues/143646"
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

# issue-openclaw-openclaw-143646

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34433313165](https://github.com/openclaw/clawsweeper/actions/runs/34433313165)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/143646

## Summary

Confirmed the normalization defect on the preflight main SHA. A narrow fix artifact is ready, but implementation and browser validation are blocked by the read-only workspace and missing dependencies. No files or GitHub state were changed.

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
| #143646 | fix_needed | planned | canonical | The existing string-or-false setting is still rejected at the analyzer boundary. Implementation requires a writable executor with dependencies and failing full-form regression proof before edits. |
| #128275 | keep_closed | skipped | related | Historical supporting context; broader union and map work is outside this repair. |
| cluster:issue-openclaw-openclaw-143646 | build_fix_artifact | planned | canonical | Prepare one narrowly scoped PR through the executor; reproduce through analyzeConfigSchema and the actual form before changing production code. |

## Needs Human

- none
