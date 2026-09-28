---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-160441"
mode: "autonomous"
run_id: "36422107042"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36422107042"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T13:27:06.725Z"
canonical: "https://github.com/openclaw/openclaw/issues/160441"
canonical_issue: "https://github.com/openclaw/openclaw/issues/160441"
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

# issue-openclaw-openclaw-160441

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36422107042](https://github.com/openclaw/clawsweeper/actions/runs/36422107042)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/160441

## Summary

The missing OpenCode Go image routing header remains present on the pinned main commit. A narrow fix path is identified, but this read-only checkout has no installed dependencies, so this worker could not add the required failing regression, change code, or validate a PR branch.

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
| #160441 | fix_needed | planned | canonical | Add a failing image-request boundary regression, then reuse the existing routing-header helper. |
| #147728 | keep_independent | planned | independent | Keep this open for its own cluster. |
| cluster:issue-openclaw-openclaw-160441 | build_fix_artifact | blocked |  | Implementation requires a writable checkout with dependencies before a fix PR can be prepared. |

## Needs Human

- none
