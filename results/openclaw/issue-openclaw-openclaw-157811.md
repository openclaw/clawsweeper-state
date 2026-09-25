---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157811"
mode: "autonomous"
run_id: "36087384100"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36087384100"
head_sha: "f06c3bf687a4aee9bf03f2cd9e7646806382374a"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-25T03:21:52.932Z"
canonical: "https://github.com/openclaw/openclaw/issues/157811"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157811"
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

# issue-openclaw-openclaw-157811

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36087384100](https://github.com/openclaw/clawsweeper/actions/runs/36087384100)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/157811

## Summary

Issue #157811 has a narrow, non-security fix path. The public cron-job projection retains scheduler-only scheduleErrorCount, which the automations tool’s closed output schema rejects.

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
| #157811 | fix_needed | planned | canonical | Remove the scheduler-only field at the existing public projection and prove populated-state get/update results satisfy the tool contract. |
| cluster:issue-openclaw-openclaw-157811 | build_fix_artifact | planned |  | Create or reuse one narrow implementation PR after verifying the defect on current main. |

## Needs Human

- none
