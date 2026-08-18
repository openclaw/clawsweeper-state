---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122352"
mode: "autonomous"
run_id: "32150079381"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32150079381"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T14:54:46.273Z"
canonical: "https://github.com/openclaw/openclaw/issues/122352"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122352"
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

# issue-openclaw-openclaw-122352

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32150079381](https://github.com/openclaw/clawsweeper/actions/runs/32150079381)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122352

## Summary

Confirmed on main c7022eb1172795029e2c297c731ff476bc9f9930: terminal expiry removes the only observation, so late terminal redelivery recreates the Android row. A narrow ChatController-owned repair is ready to implement, but this sandbox is read-only and cannot create the branch, edit files, or run Gradle.

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
| #122089 | keep_closed | skipped | related | Closed historical context; no mutation is valid. |
| #122198 | keep_closed | skipped | related | Closed historical context; no mutation is valid. |
| #122472 | keep_closed | skipped | superseded | Closed source context only; the new fix plan preserves scenario attribution without reopening or mutating the PR. |
| #122352 | fix_needed | blocked | canonical | Implementation and local validation are blocked only by the read-only checkout, not by ambiguity or product scope. |
| cluster:issue-openclaw-openclaw-122352 | build_fix_artifact | planned | canonical | Narrow new-fix-PR plan for the confirmed owner-boundary defect. |

## Needs Human

- none
