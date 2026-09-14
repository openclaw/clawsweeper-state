---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-147824"
mode: "autonomous"
run_id: "34804137686"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34804137686"
head_sha: "60e9eac3f1cce2d8a4f886c9ebc5f4a9092429dc"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-14T04:22:28.020Z"
canonical: "https://github.com/openclaw/openclaw/issues/147824"
canonical_issue: "https://github.com/openclaw/openclaw/issues/147824"
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

# issue-openclaw-openclaw-147824

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34804137686](https://github.com/openclaw/clawsweeper/actions/runs/34804137686)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/147824

## Summary

Source inspection supports a narrow UI fix. Implementation is blocked by the read-only checkout, missing dependencies, and unavailable preflight main commit. No code or GitHub mutations were made; reproduction, validation, and screenshot delivery remain outstanding.

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
| #147824 | fix_needed | planned | canonical | The existing owner and renderer explain the reported mismatch. Keep the issue open and reproduce on refreshed main before implementing. |
| cluster:issue-openclaw-openclaw-147824 | build_fix_artifact | planned |  | A narrow fix remains justified by source evidence; the executor must satisfy the outstanding execution and delivery gates. |

## Needs Human

- none
