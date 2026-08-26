---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-129756"
mode: "autonomous"
run_id: "32927657640"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32927657640"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-26T03:54:40.044Z"
canonical: "#129756"
canonical_issue: "#129756"
canonical_pr: "#129770"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-129756

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32927657640](https://github.com/openclaw/clawsweeper/actions/runs/32927657640)

Workflow conclusion: success

Worker result: blocked

Canonical: #129756

## Summary

Current main reproduces #129756: the model selector permanently appends its loading row. A repair plan for writable PR #129770 is ready, but this read-only runner cannot satisfy the mandatory direct-Codex inspection gate or install the missing test dependency (`tsx`) to validate it.

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
| #129756 | fix_needed | planned | canonical | Broken existing TUI behavior remains on current main; do not close. |
| #129770 | fix_needed | planned | canonical | Repair the useful writable contributor branch; re-fetch its exact head before updating. |
| #129770 | label | planned | canonical | Apply labels after re-fetching the open PR. |
| #129770 | build_fix_artifact | planned | canonical | Concrete narrow repair artifact follows. |

## Needs Human

- none
