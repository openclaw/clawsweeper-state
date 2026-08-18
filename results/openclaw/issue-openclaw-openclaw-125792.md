---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125792"
mode: "autonomous"
run_id: "32153165569"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32153165569"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-18T15:24:37.854Z"
canonical: "https://github.com/openclaw/openclaw/issues/125792"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125792"
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

# issue-openclaw-openclaw-125792

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32153165569](https://github.com/openclaw/clawsweeper/actions/runs/32153165569)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/125792

## Summary

#125792 is a reproducible plugin-owned bug: current main emits no `ctx-size` in the embedding preset. A narrow credited fix PR is planned, but this read-only checkout cannot create the branch, add the regression test, install dependencies, or satisfy the required direct ../codex inspection gate.

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
| #125792 | fix_needed | planned | canonical | The source issue is open, current, non-security-sensitive, and is the canonical implementation target. |
| cluster:issue-openclaw-openclaw-125792 | build_fix_artifact | planned | canonical | A narrow new fix PR is appropriate; the executor must use a writable checkout, inspect ../codex directly as required by repository policy, and run the listed proof. |

## Needs Human

- none
