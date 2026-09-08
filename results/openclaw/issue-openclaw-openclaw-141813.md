---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-141813"
mode: "plan"
run_id: "34187405996"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34187405996"
head_sha: "175d75537c5fd3e68cde68e2098157957265fb51"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-08T04:40:49.350Z"
canonical: "#141813"
canonical_issue: "#141813"
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

# issue-openclaw-openclaw-141813

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34187405996](https://github.com/openclaw/clawsweeper/actions/runs/34187405996)

Workflow conclusion: success

Worker result: planned

Canonical: #141813

## Summary

Plan one narrow Models picker repair. Source inspection at preflight main 74185a32498d7e8e752b120e9ac09559dda7582b confirms missing onOpen wiring. No files or GitHub state changed; runtime reproduction, implementation, tests, and screenshots remain pending.

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
| #141813 | fix_needed | planned | canonical | Repair the picker-open catalog lifecycle while preserving prepared choices, existing filtering, and saved selections. |
| #104545 | keep_related | planned | related | Distinct filtering-explanation work with existing contributor ownership; preserve it outside this repair. |
| #123150 | keep_closed | skipped | related | Historical related context, not an open implementation candidate or proof that #141813 is fixed. |

## Needs Human

- none
