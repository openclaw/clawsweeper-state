---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-150974"
mode: "autonomous"
run_id: "35243270419"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35243270419"
head_sha: "971582747fe2d14b96aea8f4ffdf2f559f7e55c4"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-17T16:25:36.662Z"
canonical: "https://github.com/openclaw/openclaw/issues/150974"
canonical_issue: "https://github.com/openclaw/openclaw/issues/150974"
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

# issue-openclaw-openclaw-150974

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35243270419](https://github.com/openclaw/clawsweeper/actions/runs/35243270419)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/150974

## Summary

Confirmed the reported encoding path on preflight main. Prepared a narrow fix plan; implementation and required native Windows reproduction are blocked by this read-only Linux host and missing dependencies. No files or GitHub state changed.

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
| #150974 | fix_needed | planned | canonical | The source-supported defect remains on the supplied current main. Keep the issue open while the executor establishes the required regression and implements one bounded fix. |
| cluster:issue-openclaw-openclaw-150974 | build_fix_artifact | planned |  | Artifact preparation is complete. Applying and validating it requires a writable executor with dependencies and native Windows access; publication remains gated on reproduction and preservation of startup behavior. |

## Needs Human

- none
