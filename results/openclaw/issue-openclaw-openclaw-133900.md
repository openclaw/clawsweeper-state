---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-133900"
mode: "autonomous"
run_id: "33370056780"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33370056780"
head_sha: "62241350beef738542b4802c172c28d7a8013db7"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-31T08:08:11.424Z"
canonical: "#133900"
canonical_issue: "#133900"
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

# issue-openclaw-openclaw-133900

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33370056780](https://github.com/openclaw/clawsweeper/actions/runs/33370056780)

Workflow conclusion: success

Worker result: planned

Canonical: #133900

## Summary

Current main contains the reported backup defect. A narrow fix PR is planned for #133900; #95582 is an independent interrupted-backup cleanup issue.

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
| #95582 | keep_independent | planned | independent | Different root cause and repair surface; retain both issues independently. |
| #133900 | open_fix_pr | planned | canonical | The issue is a current, non-security regression with a narrow owner-boundary repair and an archive-level regression test. |

## Needs Human

- none
