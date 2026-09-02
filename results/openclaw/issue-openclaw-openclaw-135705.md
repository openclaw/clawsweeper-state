---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-135705"
mode: "autonomous"
run_id: "33577163109"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33577163109"
head_sha: "311b985611cf2036bd23ca54420996f0ce5b81c5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-02T01:15:00.566Z"
canonical: "https://github.com/openclaw/openclaw/issues/135705"
canonical_issue: "https://github.com/openclaw/openclaw/issues/135705"
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

# issue-openclaw-openclaw-135705

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33577163109](https://github.com/openclaw/clawsweeper/actions/runs/33577163109)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/135705

## Summary

#135705 is a narrow, source-confirmed Control UI layout defect, but implementation and browser proof are blocked: this checkout is read-only, dependencies cannot be installed, and the preflight main SHA is unavailable locally. A new credited fix PR plan is ready for a writable, current-main executor.

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
| #128090 | keep_independent | planned | independent | Keep open as an independent product request. |
| #132797 | keep_closed | skipped | related | Already closed; no closure or mutation is valid. |
| #135705 | fix_needed | blocked | canonical | A writable executor must refresh main, establish the failing browser regression, apply the one-selector repair, and complete validation before opening the PR. |
| cluster:issue-openclaw-openclaw-135705 | build_fix_artifact | planned | canonical | Artifact is ready; implementation remains blocked only by the current worker environment. |
| cluster:issue-openclaw-openclaw-135705 | open_fix_pr | blocked | canonical | Open only after the artifact has been implemented and validated on a writable checkout at current main. |

## Needs Human

- none
