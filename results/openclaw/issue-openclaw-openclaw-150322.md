---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-150322"
mode: "autonomous"
run_id: "35164788920"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35164788920"
head_sha: "f48f1cee58c5ac867114cc77fb088b172aa4e9a9"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-17T00:33:48.659Z"
canonical: "https://github.com/openclaw/openclaw/issues/150322"
canonical_issue: "https://github.com/openclaw/openclaw/issues/150322"
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

# issue-openclaw-openclaw-150322

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35164788920](https://github.com/openclaw/clawsweeper/actions/runs/35164788920)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/150322

## Summary

Source inspection confirms the projection defect on preflight main. A narrow fix artifact is ready, but implementation, failing-regression proof, validation, and screenshots are blocked by the read-only checkout and missing dependencies. No files or GitHub state changed.

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
| #150322 | fix_needed | planned | canonical | A bounded existing-behavior repair is supported by current source. Runtime reproduction must precede implementation in a writable executor. |
| #100615 | keep_closed | skipped | related | Historical context only. |
| #108174 | keep_closed | skipped | related | Historical context only; older reopening comments do not override hydrated state. |
| #137761 | keep_closed | skipped | related | Historical context and preservation requirement. |
| cluster:issue-openclaw-openclaw-150322 | build_fix_artifact | planned | canonical | Hand off one narrow repair to the authorized writable executor; do not publish unless reproduction, validation, review, and screenshot gates complete. |

## Needs Human

- none
