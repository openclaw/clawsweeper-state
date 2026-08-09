---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120956"
mode: "autonomous"
run_id: "31306216177"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31306216177"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-09T09:41:32.820Z"
canonical: "https://github.com/openclaw/openclaw/issues/120956"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120956"
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

# issue-openclaw-openclaw-120956

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31306216177](https://github.com/openclaw/clawsweeper/actions/runs/31306216177)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120956

## Summary

#120956 remains a source-proven, non-security Workboard persistence bug on current main d0e812e18f46f64ba8ba8c3cee302c62fa34bf9a. Plan a narrow plugin-local Doctor-only repair and regression; no GitHub or repository mutation was performed in this planning pass.

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
| #120956 | fix_needed | planned | canonical | Legacy SQLite rows can violate the existing notification contract and abort dispatch before a ready card records its dispatch state. |
| cluster:issue-openclaw-openclaw-120956 | build_fix_artifact | planned |  | The fix is narrow, plugin-owned, idempotent, and has a focused persistence/dispatch regression path. |

## Needs Human

- none
