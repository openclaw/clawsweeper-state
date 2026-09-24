---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157376"
mode: "autonomous"
run_id: "36024015198"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36024015198"
head_sha: "f4322a8542135175b2a96f6a63fde8685ef14cf5"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-24T16:35:17.021Z"
canonical: "https://github.com/openclaw/openclaw/issues/157376"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157376"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-157376

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36024015198](https://github.com/openclaw/clawsweeper/actions/runs/36024015198)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/157376

## Summary

Issue #157376 remains a narrow CLI formatting bug. Plan one fix PR that preserves brackets around dotted path segments. The linked issue and PR concern a different refusal message and remain open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #157376 | fix_needed | planned | canonical | An unmatched --replace-path containing a literal dotted key is reported as a different path. |
| #156763 | keep_related | planned | related | The failures occur at different refusal sites. |
| #156769 | keep_related | planned | related | The contributor PR addresses the linked issue's distinct CLI guidance bug. |
| cluster:issue-openclaw-openclaw-157376 | build_fix_artifact | planned |  | Create or reuse the issue's ClawSweeper branch for a one-site formatting fix and CLI-boundary regression. |

## Needs Human

- none
