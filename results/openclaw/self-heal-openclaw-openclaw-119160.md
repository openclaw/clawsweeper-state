---
repo: "openclaw/openclaw"
cluster_id: "self-heal-openclaw-openclaw-119160"
mode: "autonomous"
run_id: "37615534294"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37615534294"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-10-07T11:44:36.589Z"
canonical: "https://github.com/openclaw/openclaw/pull/119155"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119148"
canonical_pr: "https://github.com/openclaw/openclaw/pull/119155"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# self-heal-openclaw-openclaw-119160

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37615534294](https://github.com/openclaw/clawsweeper/actions/runs/37615534294)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/119155

## Summary

Plan bounded rebase of the existing pinned branch. The preflight confirms the expected open head; current main contains the canonical output-cap fix. No edits, pushes, or validation runs occurred.

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
| #119148 | keep_closed | skipped | fixed_by_candidate | Closed context only; no mutation authorized. |
| #119155 | keep_closed | skipped | canonical | Merged canonical behavior; preserve gaoming-wu's contributor credit. |
| #119160 | fix_needed | planned | superseded | Authorized branch maintenance only. Executor must re-fetch open state and exact expected head before editing, stop if either changed, and preserve canonical behavior during rebase. Closing, merging, and labeling are prohibited. |
| cluster:self-heal-openclaw-openclaw-119160 | build_fix_artifact | planned |  | Provide executor preparation without mutating GitHub or the read-only checkout. |

## Needs Human

- none
