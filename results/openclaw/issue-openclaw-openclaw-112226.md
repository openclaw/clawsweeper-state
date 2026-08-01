---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-112226"
mode: "autonomous"
run_id: "30683321937"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30683321937"
head_sha: "a80c24ebf2f19d74cd07645f8d377271c587586b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-01T04:15:43.719Z"
canonical: "https://github.com/openclaw/openclaw/issues/112226"
canonical_issue: "https://github.com/openclaw/openclaw/issues/112226"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-112226

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30683321937](https://github.com/openclaw/clawsweeper/actions/runs/30683321937)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/112226

## Summary

#112226 remains the open canonical issue. The preflight at current main 995a3e20a4d79aa2d45e9309d17205d9a6861f50 confirms the reported credentials-file ENOENT is still outside the auth matcher; existing embedded-result fallback logic already treats `auth` as fallback-worthy. The prior artifact was over-scoped, so this replacement limits the patch to one shared matcher and one focused regression file.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 |
| issue_implementation_status_comment | updated | #112226 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #112226 | keep_canonical | planned | canonical | The bug is a narrow shared-classifier gap, not a request to retry arbitrary unclassified failures. |
| cluster:issue-openclaw-openclaw-112226 | fix_needed | planned | canonical | Replace the prior broad artifact with a two-file repair that proves the exact reported raw error becomes `auth`. |
| cluster:issue-openclaw-openclaw-112226 | build_fix_artifact | planned | canonical | The repair is now intentionally limited to a production matcher and its direct unit regression. |
| cluster:issue-openclaw-openclaw-112226 | open_fix_pr | planned | canonical | Open only after the exact-main rebase, focused test, and changed gate pass. |

## Needs Human

- none
