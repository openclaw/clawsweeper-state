---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "32660654969"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32660654969"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T19:26:53.253Z"
canonical: "https://github.com/openclaw/openclaw/issues/125873"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125873"
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

# issue-openclaw-openclaw-125873

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32660654969](https://github.com/openclaw/clawsweeper/actions/runs/32660654969)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125873

## Summary

Confirmed narrow replay defect, but implementation is blocked: required ../codex source is absent, the checkout is read-only, and dependencies are unavailable. A new-fix-PR artifact is prepared.

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
| #125873 | fix_needed | blocked | canonical | The repair is narrow and supported by current-main source, but this worker cannot satisfy the mandatory direct Codex-source gate, edit files, install dependencies, or run validation. |
| #126391 | keep_closed | skipped | related | Closed historical context only; no mutation is valid. |
| #21873 | keep_closed | skipped | related | Closed historical sibling only; no mutation is valid. |
| cluster:issue-openclaw-openclaw-125873 | build_fix_artifact | planned | canonical | Narrow implementation plan prepared for the deterministic executor. |

## Needs Human

- none
