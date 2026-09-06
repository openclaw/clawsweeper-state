---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-140246"
mode: "plan"
run_id: "34045607004"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34045607004"
head_sha: "bb8bd3eb709b093a10ff1336227e89986dbcbb0c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-06T16:46:03.881Z"
canonical: "https://github.com/openclaw/openclaw/issues/140246"
canonical_issue: "https://github.com/openclaw/openclaw/issues/140246"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-140246

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34045607004](https://github.com/openclaw/clawsweeper/actions/runs/34045607004)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/140246

## Summary

Plan a narrow shared-prompt fix for #140246. The clean checkout matches preflight main 35656b0d47eb1bb49d758597057d363a943d0fc9 and retains the documented contradiction. Related detached-review work does not cover this defect. No files or GitHub state changed; regression tests and behavioral validation remain pending.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #140246 | fix_needed | planned | canonical | Implement the attached repair plan after establishing a failing regression at the composed system-prompt boundary. |
| #131791 | keep_related | planned | related | Distinct execution context and repair scope; preserve its existing owner path. |
| #131904 | keep_related | planned | related | Useful separate contributor work; neither replace it nor claim it fixes #140246. |
| #48591 | keep_closed | skipped | independent | Historical context only. |
| #104104 | keep_closed | skipped | related | Historical routing context; no action. |
| #125652 | keep_closed | skipped | related | Historical ownership context; preserve its established contract. |
| #125666 | keep_closed | skipped | related | Historical contributor work; not an open candidate. |
| #139842 | keep_closed | skipped | related | Historical collection-discovery work does not resolve shared-prompt routing. |

## Needs Human

- none
