---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119648"
mode: "autonomous"
run_id: "31019199321"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31019199321"
head_sha: "14bd27bc8fa1232dd866aba9a9b525496fba200e"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-05T15:58:02.684Z"
canonical: "https://github.com/openclaw/openclaw/issues/119648"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119648"
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

# issue-openclaw-openclaw-119648

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31019199321](https://github.com/openclaw/clawsweeper/actions/runs/31019199321)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/119648

## Summary

Verified on main 9546d2af: a missing profile-specific unit can adopt the first unrelated marker-owned system unit. A narrow fix PR remains appropriate, but this checkout is read-only and lacks node_modules, so no branch or validated patch could be produced here.

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
| #119648 | keep_canonical | planned | canonical | This is a reproducible existing-behavior bug with one clear canonical issue and no active implementation PR. |
| cluster:issue-openclaw-openclaw-119648 | fix_needed | blocked | canonical | Implementation is blocked only by this worker environment. The executor should apply the attached narrow artifact on clawsweeper/issue-openclaw-openclaw-119648. |
| cluster:issue-openclaw-openclaw-119648 | build_fix_artifact | planned | canonical | A two-file owner-boundary repair removes the unrelated-unit adoption without adding legacy name compatibility. |

## Needs Human

- none
