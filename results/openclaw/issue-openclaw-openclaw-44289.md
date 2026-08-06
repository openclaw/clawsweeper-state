---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-44289"
mode: "autonomous"
run_id: "31067510031"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31067510031"
head_sha: "480d56953f381b127bdc0b5a7029efeeaa717595"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-06T04:22:54.605Z"
canonical: "https://github.com/openclaw/openclaw/issues/44289"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44289"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-44289

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31067510031](https://github.com/openclaw/clawsweeper/actions/runs/31067510031)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/44289

## Summary

#44289 remains a reproducible non-security documentation-drift bug on main de27d8306e4c5cc5951045c3b643356e8a9549b2. The current target checkout is read-only, so this worker cannot make or validate the required branch edits; a narrow credited fix PR remains appropriate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #44289 | fix_needed | planned | canonical | Canonical issue requires a new narrow fix PR; closed contributor PRs are historical source evidence only. |
| cluster:issue-openclaw-openclaw-44289 | build_fix_artifact | blocked |  | Needs a writable executor to implement and validate the prepared narrow repair. |
| #85969 | keep_closed | skipped | superseded | Historical evidence only. |
| #89142 | keep_closed | skipped | superseded | Historical evidence only. |
| #91612 | keep_closed | skipped | superseded | Historical evidence only. |

## Needs Human

- none
