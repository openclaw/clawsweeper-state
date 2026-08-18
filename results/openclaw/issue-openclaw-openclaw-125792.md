---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125792"
mode: "autonomous"
run_id: "32151163969"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32151163969"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T15:06:35.548Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32151163969](https://github.com/openclaw/clawsweeper/actions/runs/32151163969)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125792

## Summary

#125792 is a reproducible canonical bug on main bdbb0444: the managed preset omits ctx-size for embeddings. A narrow credited fix plan is ready, but this read-only checkout has no tsx/node_modules, so no branch, failing-test edit, or local validation can be completed here.

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
| #125792 | fix_needed | blocked | canonical | Implementation is blocked only by the read-only, dependency-incomplete checkout. The executor should install dependencies, prove the new assertions fail on base, apply the artifact, and run the specified gates. |
| cluster:issue-openclaw-openclaw-125792 | build_fix_artifact | planned | canonical | Narrow new-fix-PR artifact for the canonical issue; no GitHub mutation was performed. |

## Needs Human

- none
