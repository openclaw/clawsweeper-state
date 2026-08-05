---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-118303"
mode: "plan"
run_id: "31008298774"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31008298774"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-05T13:10:05.889Z"
canonical: "#118303"
canonical_issue: "#116601"
canonical_pr: "#118303"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-118303

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31008298774](https://github.com/openclaw/clawsweeper/actions/runs/31008298774)

Workflow conclusion: success

Worker result: planned

Canonical: #118303

## Summary

Keep #116601 open as the canonical report and repair #118303 on its contributor branch. Current main still advertises M3 image input; the candidate needs both alias-aware MiniMax Doctor migration and scoped Doctor-contract loading for manifest provider-auth aliases.

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
| #64244 | keep_closed | skipped | related | Already closed; no mutation. |
| #116601 | keep_canonical | planned | canonical | Canonical issue remains open until the repaired candidate is independently validated. |
| #118303 | fix_needed | planned | canonical | Repair the existing same-repository writable branch; do not merge in autofix mode. |

## Needs Human

- none
