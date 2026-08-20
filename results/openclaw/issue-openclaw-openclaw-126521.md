---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126521"
mode: "autonomous"
run_id: "32329620848"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32329620848"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-20T04:03:03.424Z"
canonical: "https://github.com/openclaw/openclaw/issues/126521"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126521"
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

# issue-openclaw-openclaw-126521

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32329620848](https://github.com/openclaw/clawsweeper/actions/runs/32329620848)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/126521

## Summary

#126521 is a valid canonical host-exec bug on main: zsh receives only `-f -c`, leaving its `EQUALS` and `NOMATCH` behaviors active for model-generated POSIX-style commands. Plan a narrow new fix PR.

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
| #126521 | fix_needed | planned | canonical | Repair the shell-selection owner rather than compensating in command consumers. |
| cluster:issue-openclaw-openclaw-126521 | build_fix_artifact | planned | canonical | Open a single narrow credited PR from the prescribed ClawSweeper branch. |

## Needs Human

- none
