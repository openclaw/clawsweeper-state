---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118560"
mode: "autonomous"
run_id: "30900045613"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30900045613"
head_sha: "3d4b45a19e50dbe373c138c7c198029d15173ce7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-04T10:31:01.904Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30900045613](https://github.com/openclaw/clawsweeper/actions/runs/30900045613)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/118560

## Summary

Issue #118560 remains reproducible on pinned main 121c6c10423827ce8a65118600f3498e20b8f6e0: transcript-search activation passes only sessionKey, discarding the required sessionId/messageId anchor despite Gateway support for anchored reset-archive reads. The supplied checkout is clean but read-only, so this worker could not apply the repair or complete final validation.

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
| #118560 | fix_needed | blocked | canonical | Concrete implementation is blocked only by the read-only checkout; no maintainer product decision is needed. |
| cluster:issue-openclaw-openclaw-118560 | build_fix_artifact | planned | canonical | A narrow, non-security repair is ready for a writable executor. |

## Needs Human

- none
