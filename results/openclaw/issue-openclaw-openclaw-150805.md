---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-150805"
mode: "autonomous"
run_id: "35210315068"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35210315068"
head_sha: "971582747fe2d14b96aea8f4ffdf2f559f7e55c4"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-17T11:10:19.783Z"
canonical: "https://github.com/openclaw/openclaw/issues/150805"
canonical_issue: "https://github.com/openclaw/openclaw/issues/150805"
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

# issue-openclaw-openclaw-150805

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35210315068](https://github.com/openclaw/clawsweeper/actions/runs/35210315068)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/150805

## Summary

Source inspection confirms the missing CLI plan-event projection on preflight main. A narrow fix artifact is ready, but implementation and regression proof are blocked by the read-only checkout and missing dependencies. No files or GitHub state changed.

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
| #150805 | fix_needed | planned | canonical | The defect is supported by current source and documented behavior. Executable reproduction remains a mandatory prerequisite before implementation or PR publication. |
| cluster:issue-openclaw-openclaw-150805 | build_fix_artifact | planned |  | The artifact can be applied by the executor in a writable, dependency-ready checkout. Local implementation, failing-regression proof, review, and validation remain blocked. |

## Needs Human

- none
