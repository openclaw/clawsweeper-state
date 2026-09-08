---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-142452"
mode: "autonomous"
run_id: "34267591357"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34267591357"
head_sha: "e4c2d57ad229dc8cef15dd5ef3d613386ced664b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-08T19:21:50.390Z"
canonical: "https://github.com/openclaw/openclaw/issues/142452"
canonical_issue: "https://github.com/openclaw/openclaw/issues/142452"
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

# issue-openclaw-openclaw-142452

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34267591357](https://github.com/openclaw/clawsweeper/actions/runs/34267591357)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/142452

## Summary

Reproduced the premature failure using the unchanged restart block with synthetic dependencies on preflight main. A narrow fix is planned; implementation and full validation are blocked by the read-only filesystem and absent dependencies. No files or GitHub state changed.

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
| #142452 | fix_needed | planned | canonical | The report remains valid and has a narrow existing-owner repair path. |
| #86518 | keep_closed | skipped | related | Historical context only. |
| #86533 | keep_closed | skipped | related | Historical contributor work; neither a replacement target nor a fix for this issue. |
| cluster:issue-openclaw-openclaw-142452 | build_fix_artifact | planned |  | Artifact is ready for the executor; local implementation and regression validation require a writable checkout with dependencies. |

## Needs Human

- none
