---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-116937"
mode: "autonomous"
run_id: "30653134299"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30653134299"
head_sha: "3637a9424ec20396a3903cd79cffb2e4e360bc28"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-31T20:06:19.977Z"
canonical: "#116937"
canonical_issue: "#116937"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-116937

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30653134299](https://github.com/openclaw/clawsweeper/actions/runs/30653134299)

Workflow conclusion: success

Worker result: planned

Canonical: #116937

## Summary

#116937 is a current, open, non-security canonical bug. Latest main still labels `qmd-index-missing` as non-fixable but unconditionally recommends `openclaw memory status --fix`. A narrow two-file fix artifact is ready: show the existing per-agent `memory index` recovery command for that diagnosis while retaining the generic `status --fix` hint for genuinely fixable audit findings. No tree changes were possible in this read-only worker sandbox; the prescribed focused test was attempted but could not start because the checkout lacks `p-map` and dependency installation is disallowed here.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #116937 | build_fix_artifact | planned | canonical | The issue has a single, source-proven command-hint defect with an existing command owner and an isolated regression-test seam. |

## Needs Human

- none
