---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-119778"
mode: "autonomous"
run_id: "31232330458"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31232330458"
head_sha: "d3810a047fa607b4db34b7935b560103289619c7"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-08T01:25:14.941Z"
canonical: "#119778"
canonical_issue: "#119754"
canonical_pr: "#119778"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-119778

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31232330458](https://github.com/openclaw/clawsweeper/actions/runs/31232330458)

Workflow conclusion: success

Worker result: planned

Canonical: #119778

## Summary

#119778 remains the canonical fix but is blocked by a merge conflict. Current main still converts the typed transcript-projection rebuild condition to INVALID_REQUEST; repair the writable contributor branch, preserve #119754 credit, validate the exact repaired head, then re-review. Merge remains disabled.

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
| #119754 | keep_related | planned | related | Keep the issue open and related until the repaired canonical PR is validated and lands. |
| #119778 | fix_needed | planned | canonical | Rebase and repair the existing writable PR rather than replacing it. |
| #119778 | build_fix_artifact | planned | canonical | A narrow contributor-branch repair is available; no replacement PR, close action, or merge action is authorized. |

## Needs Human

- none
