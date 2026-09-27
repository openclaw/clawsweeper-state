---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159184"
mode: "autonomous"
run_id: "36317715357"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36317715357"
head_sha: "756c1c45f08cca536117d064dac226d8c536e4bb"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-27T12:08:20.704Z"
canonical: "#159184"
canonical_issue: "#159184"
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

# issue-openclaw-openclaw-159184

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36317715357](https://github.com/openclaw/clawsweeper/actions/runs/36317715357)

Workflow conclusion: success

Worker result: planned

Canonical: #159184

## Summary

The merged PR stopped repeated HTTP 400 requests, but the remaining prompt-size rejection still reaches generic rate-limit copy on main. Plan a narrow user-copy fix after demonstrating a failing regression. No code was changed or tests run in this plan phase.

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
| #141260 | keep_related | planned | related | Keep its separate reset-hint work open. |
| #159184 | fix_needed | planned | canonical | First demonstrate the failing user-copy regression, then add bounded guidance to shorten the request without echoing arbitrary provider text or changing ordinary rate-limit copy. |
| #159221 | keep_closed | skipped | related | Historical fix for the retry portion; no action on the closed PR. |

## Needs Human

- none
