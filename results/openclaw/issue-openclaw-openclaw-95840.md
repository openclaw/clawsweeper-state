---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32378588598"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32378588598"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T14:33:26.935Z"
canonical: "https://github.com/openclaw/openclaw/issues/95840"
canonical_issue: "https://github.com/openclaw/openclaw/issues/95840"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-95840

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32378588598](https://github.com/openclaw/clawsweeper/actions/runs/32378588598)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

#95840 remains a reproducible direct-OpenAI cache-TTL eligibility gap on main. A narrow provider-owner repair is planned, but this worker cannot modify the read-only checkout; focused tests also cannot start because the normal checkout lacks tsx. The required sibling ../codex source is unavailable for the mandatory direct contract inspection.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #95840 | fix_needed | blocked | canonical | Implementation is blocked only by this read-only checkout. The focused test command also fails before executing because tsx is missing; installing dependencies would write to the checkout. The mandatory direct ../codex inspection cannot be completed because that sibling source checkout is absent. |
| #95610 | keep_related | planned | related | Open and distinct root cause; leave it on its own canonical path. |
| #95859 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #96383 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #102440 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | planned | canonical | Narrow new-fix-PR plan prepared for a writable executor after the mandated Codex-source inspection. |

## Needs Human

- none
