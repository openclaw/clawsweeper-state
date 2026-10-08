---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-167345"
mode: "autonomous"
run_id: "37815002669"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37815002669"
head_sha: "3db5c867c82e47c1fe31299625d34c184b9a4d8b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-08T17:57:21.638Z"
canonical: "https://github.com/openclaw/openclaw/issues/167345"
canonical_issue: "https://github.com/openclaw/openclaw/issues/167345"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-167345

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37815002669](https://github.com/openclaw/clawsweeper/actions/runs/37815002669)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/167345

## Summary

Source inspection confirms the premature code-1000 close classification defect on preflight main 3be885108e5e7c846ee6c97cb3d0a8d206b47ba0. A narrow fix artifact is prepared; implementation, failing regression, Gateway proof, and validation are blocked by the read-only host and absent dependencies.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #167345 | fix_needed | planned | canonical | Correct the transport producer without changing shared terminal, authority, replay, fallback, or recovery-budget policy. |
| #151572 | keep_related | planned | related | Distinct capability request outside this bug-only implementation scope; leave open. |
| #130720 | keep_closed | skipped | related | Historical context only. |
| #130721 | keep_closed | skipped | related | Existing recovery owner; not an open candidate. |
| #133292 | keep_closed | skipped | related | Historical context only. |
| #138959 | keep_closed | skipped | related | Historical context only. |
| #138985 | keep_closed | skipped | related | Preserve its guard; repair the code-1000 producer classification separately. |
| #167063 | keep_closed | skipped | related | Complementary landed repair; does not cover the reported close code. |
| cluster:issue-openclaw-openclaw-167345 | build_fix_artifact | planned | canonical | The artifact is ready for the authorized executor. Implementation remains blocked on a writable environment with dependencies and isolated Gateway proof support. |

## Needs Human

- none
