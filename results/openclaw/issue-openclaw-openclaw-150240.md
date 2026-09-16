---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-150240"
mode: "autonomous"
run_id: "35141054777"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35141054777"
head_sha: "f48f1cee58c5ac867114cc77fb088b172aa4e9a9"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-16T19:39:36.605Z"
canonical: "https://github.com/openclaw/openclaw/issues/150240"
canonical_issue: "https://github.com/openclaw/openclaw/issues/150240"
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

# issue-openclaw-openclaw-150240

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35141054777](https://github.com/openclaw/clawsweeper/actions/runs/35141054777)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/150240

## Summary

Confirmed the Matrix account schema omission on preflight main. Prepared a narrow fix artifact; implementation, runtime reproduction, validation, and screenshots remain blocked by the read-only host and missing dependencies. No files or GitHub state changed.

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
| #150240 | fix_needed | planned | canonical | The source supports a narrow existing-behavior repair. Runtime reproduction must precede implementation in the writable executor. |
| cluster:issue-openclaw-openclaw-150240 | build_fix_artifact | planned |  | Artifact preparation is complete. Implementation is blocked locally and requires a writable executor with dependencies; no unresolved product decision requires human judgment. |

## Needs Human

- none
