---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122251"
mode: "autonomous"
run_id: "31536379915"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31536379915"
head_sha: "4b79888c3f2ad4b9e0c2ee3345984adc995ea81d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-11T21:20:07.991Z"
canonical: "https://github.com/openclaw/openclaw/issues/122251"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122251"
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

# issue-openclaw-openclaw-122251

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31536379915](https://github.com/openclaw/clawsweeper/actions/runs/31536379915)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122251

## Summary

Current main reproduces the cancellation-to-failure flattening. A narrow fix plan is ready, but this checkout is read-only and cannot run Vitest because `tsx` is absent.

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
| #122251 | fix_needed | blocked | canonical | Implementation is bounded and ready for a new fix PR, but this worker cannot edit the read-only checkout or install the missing test dependency. |
| #118488 | keep_closed | skipped | related | Already merged and closed; it is historical evidence, not a mutation target. |
| cluster:issue-openclaw-openclaw-122251 | build_fix_artifact | planned | canonical | A narrow new fix PR is appropriate once applied in a writable checkout. |

## Needs Human

- none
