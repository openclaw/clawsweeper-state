---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-150865"
mode: "autonomous"
run_id: "35219925289"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35219925289"
head_sha: "971582747fe2d14b96aea8f4ffdf2f559f7e55c4"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-17T12:49:52.339Z"
canonical: "https://github.com/openclaw/openclaw/issues/150865"
canonical_issue: "https://github.com/openclaw/openclaw/issues/150865"
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

# issue-openclaw-openclaw-150865

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35219925289](https://github.com/openclaw/clawsweeper/actions/runs/35219925289)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/150865

## Summary

Confirmed the runtime failure-message shape and source-level recovery gap on preflight main. Implementation and regression validation are blocked by the read-only host and missing dependencies. Narrow executor fix artifact prepared; no files or GitHub state changed.

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
| #150865 | fix_needed | planned | canonical | A narrow existing-behavior repair is supported by source evidence. Establish the failing regression in a writable executor before changing production code; model tags and provider registration are outside this repair. |
| cluster:issue-openclaw-openclaw-150865 | build_fix_artifact | planned |  | Prepared a bounded new-fix-PR plan for the executor. No maintainer product decision is unresolved; runtime reproduction, implementation, and fresh review remain required. |

## Needs Human

- none
