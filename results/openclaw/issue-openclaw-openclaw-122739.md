---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122739"
mode: "autonomous"
run_id: "31628859894"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31628859894"
head_sha: "e0dc54438e5e346f573af5e6d2cb07c6c1620a8f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-12T19:25:02.162Z"
canonical: "https://github.com/openclaw/openclaw/issues/122739"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122739"
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

# issue-openclaw-openclaw-122739

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31628859894](https://github.com/openclaw/clawsweeper/actions/runs/31628859894)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/122739

## Summary

#122739 remains the canonical reproducible Matrix admission bug on current main a1615cdf. Startup normalization drops server-less `!` room IDs before ingress admission. A narrow credited fix PR is planned; this read-only worker could not write or validate the branch because Corepack cannot create its cache and the checkout lacks tsx.

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
| #122739 | fix_needed | planned | canonical | Repair the startup owner and its matching onboarding fast path; retain alias and display-name fail-closed behavior. |
| cluster:issue-openclaw-openclaw-122739 | build_fix_artifact | planned | canonical | Open or update the single permitted ClawSweeper fix PR for #122739. |

## Needs Human

- none
