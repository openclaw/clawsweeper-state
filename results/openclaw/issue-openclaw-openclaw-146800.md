---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-146800"
mode: "plan"
run_id: "34745369591"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34745369591"
head_sha: "d75f027faca8704bcc220f7ae5127cc93bedaa67"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-13T07:35:04.500Z"
canonical: "#146800"
canonical_issue: "#146800"
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

# issue-openclaw-openclaw-146800

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34745369591](https://github.com/openclaw/clawsweeper/actions/runs/34745369591)

Workflow conclusion: success

Worker result: planned

Canonical: #146800

## Summary

Plan a narrow shared-policy fix for #146800. Source inspection at preflight main confirms the busy early return bypasses reconnect grace. Preserve the historical hung-run fallback; keep #124162 as distinct related work. Implementation and runtime validation remain pending.

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
| #146800 | fix_needed | planned | canonical | The job defines a bounded bug fix that preserves both reconnect grace and historical hung-run recovery. No additional product decision is needed for this plan. |
| #124162 | keep_related | planned | related | Useful contributor work with a different recovery responsibility. Preserve it independently of this shared-policy repair. |

## Needs Human

- none
