---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-142718"
mode: "autonomous"
run_id: "34296166847"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34296166847"
head_sha: "43be03fd3617138b917a7942f690cb9c415e0fc2"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-09T01:45:15.515Z"
canonical: "https://github.com/openclaw/openclaw/issues/142718"
canonical_issue: "https://github.com/openclaw/openclaw/issues/142718"
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

# issue-openclaw-openclaw-142718

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34296166847](https://github.com/openclaw/clawsweeper/actions/runs/34296166847)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/142718

## Summary

Reproduced the exported SDK type defect on preflight main. Prepared a narrow fix plan. Local implementation and required validation remain blocked by the read-only workspace and missing repository dependencies; no files or GitHub state changed.

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
| #142718 | fix_needed | planned | canonical | The reported behavior is reproducible and has a narrow type-level repair. No viable open implementation PR is present in the supplied inventory. |
| #85785 | keep_closed | skipped | related | Preserve as runtime-contract context and contributor provenance. |
| cluster:issue-openclaw-openclaw-142718 | build_fix_artifact | planned | canonical | Hand off one narrow new-fix PR to the writable executor; no unresolved product or maintainer decision is needed. |

## Needs Human

- none
