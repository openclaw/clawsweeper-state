---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-156749"
mode: "autonomous"
run_id: "35920510975"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35920510975"
head_sha: "c0680bf79ab759f5fbb64dc983e52f5329e36857"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-23T21:37:45.892Z"
canonical: "https://github.com/openclaw/openclaw/issues/156749"
canonical_issue: "https://github.com/openclaw/openclaw/issues/156749"
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

# issue-openclaw-openclaw-156749

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35920510975](https://github.com/openclaw/clawsweeper/actions/runs/35920510975)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/156749

## Summary

The bug reproduces at the extension inventory boundary on main faa6aa6243e6f4e68a5e1b7c5be823aa7f757c6b: a Chrome Web Store tab is admitted alongside an ordinary tab in both access modes. The checkout is read-only, so no regression test, patch, validation run, or PR was created.

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
| #156749 | fix_needed | planned | canonical | A narrow fix belongs in the extension tab-access owner. The current read-only checkout prevents implementation. |
| cluster:issue-openclaw-openclaw-156749 | build_fix_artifact | blocked |  | The executor needs a writable checkout to add a failing regression, make the owner-boundary fix, validate it, and open or update the single issue PR. |

## Needs Human

- none
