---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126400"
mode: "autonomous"
run_id: "32291306895"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32291306895"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-19T20:11:10.468Z"
canonical: "#126400"
canonical_issue: "#126400"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-126400

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32291306895](https://github.com/openclaw/clawsweeper/actions/runs/32291306895)

Workflow conclusion: success

Worker result: planned

Canonical: #126400

## Summary

#126400 remains a current, narrow non-security bug on main 84c2111b3090ce9473e1169d09448dce579040e7. Plan one repair PR after extending the existing boundary test to fail on the omitted runId/error detail, then applying the canonical redacting formatter at the failure owner.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #126400 | open_fix_pr | planned | canonical | Create one branch-backed PR only after the planned regression test and owner-boundary repair validate in a writable checkout. No merge or issue closure is authorized. |

## Needs Human

- none
