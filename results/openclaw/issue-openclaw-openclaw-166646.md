---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-166646"
mode: "autonomous"
run_id: "37647482900"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37647482900"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-10-07T16:48:30.303Z"
canonical: "https://github.com/openclaw/openclaw/issues/166646"
canonical_issue: "https://github.com/openclaw/openclaw/issues/166646"
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

# issue-openclaw-openclaw-166646

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37647482900](https://github.com/openclaw/clawsweeper/actions/runs/37647482900)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/166646

## Summary

Verified the selection defect on preflight main f98d079cb9d30f2bc5965197d22da2e9af64b3be. Prepared a narrow executor fix plan. This read-only worker made no changes; Vitest, patch validation, and real managed-Chrome proof remain required.

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
| #166646 | fix_needed | planned | canonical | The existing opening-time cap selects a recently used sibling tab ahead of idle candidates. A narrow repair remains warranted; implementation requires a writable executor. |
| #138591 | keep_related | planned | related | Configuration policy is separate from the eviction-order bug and remains outside this implementation job. |
| #29724 | keep_closed | skipped | related | Historical implementation context only; no repair, closure, or merge action targets this landed PR. |
| cluster:issue-openclaw-openclaw-166646 | build_fix_artifact | planned |  | A focused existing-behavior repair can proceed through the executor without GitHub mutations from this worker. |

## Needs Human

- none
