---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122244"
mode: "autonomous"
run_id: "31541178357"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31541178357"
head_sha: "4b79888c3f2ad4b9e0c2ee3345984adc995ea81d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-11T22:19:15.256Z"
canonical: "#122244"
canonical_issue: "#122244"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-122244

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31541178357](https://github.com/openclaw/clawsweeper/actions/runs/31541178357)

Workflow conclusion: success

Worker result: planned

Canonical: #122244

## Summary

#122244 is the canonical reproducible bug. Current main parses HTTP 502 but leaves `Bad Gateway` before the HTML body, so the shared classifier rejects the complete page and the UI returns raw markup. A narrow shared-helper repair and regression suite are specified for a new fix PR; this read-only checkout could not create the branch or run pnpm because dependencies are absent and Corepack cannot write its cache.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #122244 | fix_needed | planned | canonical | Implement the source-proven shared parsing repair and create the allowed narrow fix PR; do not close or merge the issue. |

## Needs Human

- none
