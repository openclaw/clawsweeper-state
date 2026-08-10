---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-121414"
mode: "autonomous"
run_id: "31376872780"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31376872780"
head_sha: "463edfe33f39954bc2483a4d9b2ae382cd5ffa10"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-10T10:02:16.276Z"
canonical: "#121414"
canonical_issue: "#121408"
canonical_pr: "#121414"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# automerge-openclaw-openclaw-121414

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31376872780](https://github.com/openclaw/clawsweeper/actions/runs/31376872780)

Workflow conclusion: success

Worker result: needs_human

Canonical: #121414

## Summary

#121414 is the canonical repair candidate for #121408. It requires a current-main rebase and exact-head validation; final merge remains blocked on the existing maintainer decision about catalog-gated first-run defaults and the `clawsweeper:human-review` gate.

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
| Needs human | 1 |

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
| #113549 | keep_independent | planned | independent | Keep the broader tracker open independently. |
| #121408 | keep_related | planned | related | Keep the bug report open while the canonical PR completes validation. |
| #121414 | fix_needed | planned | canonical | Repair the writable same-repository contributor branch before any merge recommendation. |
| #121414 | build_fix_artifact | planned | canonical | Create a bounded repair plan preserving the existing contributor history and PR attribution. |

## Needs Human

- A maintainer must accept or revise the catalog-gated first-run default policy identified by the latest ClawSweeper `clawsweeper:human-review` result before automerge can resume.
