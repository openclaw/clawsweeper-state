---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-145201"
mode: "plan"
run_id: "34644757407"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34644757407"
head_sha: "e74b07a40a6ecb1c9743e17201ecca0d6114bce5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-11T20:43:59.250Z"
canonical: "#145201"
canonical_issue: "https://github.com/openclaw/openclaw/issues/145201"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-145201

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34644757407](https://github.com/openclaw/clawsweeper/actions/runs/34644757407)

Workflow conclusion: success

Worker result: planned

Canonical: #145201

## Summary

Plan a narrow repair for #145201 in the existing rich-to-plain classifier. The clean checkout matches preflight main 0f0ddbc12ca036908b87339c8329a3980873fae5 and still lacks the reported rejection wording. Runtime reproduction, implementation, tests, and Telegram proof remain pending. No files or GitHub state were changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #145201 | fix_needed | planned | canonical | A specific rejection bypasses existing plain recovery. Reproduce on the execution-time main before implementing; stop if the regression does not reproduce. |
| #103458 | keep_related | planned | related | Client rollout and default-on policy are distinct from recovery after a definite API rejection. |
| #126246 | keep_related | planned | related | Immediate plain fallback does not resolve general ambiguous-send recovery or pipeline stalls. |
| #88810 | keep_closed | skipped | related | Already merged; no closeout or branch repair is needed. |
| #92413 | keep_closed | skipped | related | Historical transport work; not an open implementation candidate. |
| #92946 | keep_closed | skipped | related | Retain as historical context; the proposed repair recognizes one rejection rather than reviving broad transport fallback. |

## Needs Human

- none
