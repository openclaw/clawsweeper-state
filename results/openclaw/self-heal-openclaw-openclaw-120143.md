---
repo: "openclaw/openclaw"
cluster_id: "self-heal-openclaw-openclaw-120143"
mode: "autonomous"
run_id: "37602294300"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37602294300"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-10-07T09:46:30.318Z"
canonical: "https://github.com/openclaw/openclaw/pull/120143"
canonical_issue: "https://github.com/openclaw/openclaw/issues/89254"
canonical_pr: "https://github.com/openclaw/openclaw/pull/120143"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# self-heal-openclaw-openclaw-120143

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37602294300](https://github.com/openclaw/clawsweeper/actions/runs/37602294300)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/120143

## Summary

Plan bounded rebase/conflict repair of the existing writable branch. Preflight confirms the expected open PR and head SHA. Existing review findings remain unresolved; fresh exact-head review is required after any push. No mutations performed.

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
| #120143 | fix_needed | planned | canonical | Repair the existing branch only for base synchronization and directly required conflict resolution. Re-fetch the open state and exact expected head before changing anything; stop if either differs. Do not merge, close, or add labels. |
| #89254 | keep_related | planned | related | Keep the source report open while its existing diagnostic PR is repaired and reviewed. Issue closeout is outside this job. |
| cluster:self-heal-openclaw-openclaw-120143 | build_fix_artifact | planned |  | Provide an auditable existing-branch repair plan for the deterministic executor. This read-only worker does not edit or push. |

## Needs Human

- none
