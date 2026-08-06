---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119551"
mode: "plan"
run_id: "31058921059"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31058921059"
head_sha: "480d56953f381b127bdc0b5a7029efeeaa717595"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-06T00:22:01.824Z"
canonical: "https://github.com/openclaw/openclaw/issues/119551"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119551"
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

# issue-openclaw-openclaw-119551

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31058921059](https://github.com/openclaw/clawsweeper/actions/runs/31058921059)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119551

## Summary

Current main a20746e3abf7378462448c456eaa7098b85aab48 still omits the configured owner-agent model at ACP binding initialization and does not recreate bindings when that explicit model changes. Plan one narrow new fix PR; no mutation or test execution occurred in plan mode.

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
| #119551 | fix_needed | planned | canonical | Open canonical issue; current main remains affected and the repair fits the stated bug-fix boundary. |
| #119599 | keep_closed | skipped | superseded | Closed historical contributor work; no closeout mutation is valid. |
| cluster:issue-openclaw-openclaw-119551 | build_fix_artifact | planned | canonical | Create one new, narrow credited fix PR from the job branch. |

## Needs Human

- none
