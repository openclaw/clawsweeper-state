---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118560"
mode: "plan"
run_id: "30903947381"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30903947381"
head_sha: "3d4b45a19e50dbe373c138c7c198029d15173ce7"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-04T11:21:06.724Z"
canonical: "https://github.com/openclaw/openclaw/issues/118560"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118560"
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

# issue-openclaw-openclaw-118560

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30903947381](https://github.com/openclaw/clawsweeper/actions/runs/30903947381)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118560

## Summary

#118560 is a reproducible, non-security Control UI bug on main b5d41f90053b414267bb203b64f1f8dde12b2bda. Transcript-search activation drops the hit’s sessionId/messageId, while the existing Gateway chat.history contract supports anchored reset-archive reads. Plan one narrow credited fix PR; no GitHub mutation or code edit was performed in plan mode.

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
| #118560 | fix_needed | planned | canonical | The canonical issue needs a narrow Control UI repair using the existing Gateway contract. |
| cluster:issue-openclaw-openclaw-118560 | build_fix_artifact | planned | canonical | A single new fix PR is the viable canonical path. |

## Needs Human

- none
