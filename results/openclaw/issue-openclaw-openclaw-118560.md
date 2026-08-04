---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118560"
mode: "autonomous"
run_id: "30931936912"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30931936912"
head_sha: "2a61adcc1f062561ba3c9deb62cc0df97cdc81d2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-04T17:12:36.420Z"
canonical: "#118560"
canonical_issue: "#118560"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30931936912](https://github.com/openclaw/clawsweeper/actions/runs/30931936912)

Workflow conclusion: success

Worker result: planned

Canonical: #118560

## Summary

#118560 is a reproducible non-security Control UI defect on current main. A selected transcript-search hit carries sessionId/messageId, but the navigation callback forwards only sessionKey; no hydrated PR owns the repair. Plan a narrow credited fix PR.

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
| #118560 | fix_needed | planned | canonical | Current main drops the archive provenance before the initial chat-history request. |
| cluster:issue-openclaw-openclaw-118560 | build_fix_artifact | planned |  | No viable PR is hydrated; a narrow new fix PR is appropriate. |

## Needs Human

- none
