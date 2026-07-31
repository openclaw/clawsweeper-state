---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-90786"
mode: "autonomous"
run_id: "30649397155"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30649397155"
head_sha: "197d807562e5a5808a8986e161520eccf76ae8af"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-31T17:17:57.182Z"
canonical: "#90786"
canonical_issue: "#90786"
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

# issue-openclaw-openclaw-90786

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30649397155](https://github.com/openclaw/clawsweeper/actions/runs/30649397155)

Workflow conclusion: success

Worker result: planned

Canonical: #90786

## Summary

Current main reproduces the source-level regression: the Google plugin registers the memory adapter as `gemini` with `authProviderId: "google"`, but the shared resolver only attempts exact ids and configured API ids, so memory initialization reaches the existing `Unknown memory embedding provider: google` diagnostic. Prepare one narrow fix PR; no close or merge action is permitted. Focused tests could not run in this read-only checkout because `node_modules` is absent (`p-map` missing).

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
| #90786 | build_fix_artifact | planned | canonical | Narrow bug-only repair is appropriate. Resolve an unambiguous adapter by its declared auth provider owner only after preserving existing exact adapter-id precedence; keep unknown ids on the existing undefined/diagnostic path. |
| #90787 | keep_related | planned | related | Related Google memory-provider report, but it is a separate compatibility/defaults decision and must remain independently tracked. |
| #90801 | keep_related | planned | related | Related memory regression family, but it has distinct behavior and likely product/operational follow-up. |

## Needs Human

- none
