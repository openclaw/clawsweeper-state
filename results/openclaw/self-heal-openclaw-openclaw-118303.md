---
repo: "openclaw/openclaw"
cluster_id: "self-heal-openclaw-openclaw-118303"
mode: "autonomous"
run_id: "37638531114"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37638531114"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-07T14:44:59.770Z"
canonical: "https://github.com/openclaw/openclaw/pull/118303"
canonical_issue: "https://github.com/openclaw/openclaw/issues/116601"
canonical_pr: "https://github.com/openclaw/openclaw/pull/118303"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# self-heal-openclaw-openclaw-118303

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37638531114](https://github.com/openclaw/clawsweeper/actions/runs/37638531114)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/pull/118303

## Summary

Bounded branch-rebase plan prepared. Execution is blocked because the required deterministic_rebase_only field is forbidden by the result schema, and omitting it selects the general repair path. No files or GitHub state were changed.

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
| #118303 | fix_needed | planned | canonical | Repair only the existing branch's base synchronization after rechecking the exact expected head. Substantive review repairs, merge, closure, and labels are outside this job. |
| #116601 | keep_related | planned | related | Keep the source report open. Branch synchronization does not establish that its reported behavior is fixed. |
| #64244 | keep_closed | skipped | related | Historical context only; no action is authorized or needed. |
| cluster:self-heal-openclaw-openclaw-118303 | build_fix_artifact | blocked |  | The required bounded-execution guard cannot be represented in the accepted schema. Do not dispatch this artifact through general repair; the workflow owner must reconcile the schema and execution contract first. |

## Needs Human

- none
