---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-101"
mode: "autonomous"
run_id: "37848178555"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37848178555"
head_sha: "c48313d78bce80ea5e60ef57c397341e349cd837"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-08T21:43:04.292Z"
canonical: "https://github.com/openclaw/notcrawl/issues/101"
canonical_issue: "https://github.com/openclaw/notcrawl/issues/101"
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

# issue-openclaw-notcrawl-101

Repo: openclaw/notcrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37848178555](https://github.com/openclaw/clawsweeper/actions/runs/37848178555)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/notcrawl/issues/101

## Summary

Rich-block URL context remains missing on recorded main. A narrow fix artifact is prepared, but the read-only filesystem prevents implementation and branch validation. No code or GitHub state changed.

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
| #101 | fix_needed | planned | canonical | A focused archived URL/caption rendering path remains viable. Implementation is blocked by this session's read-only filesystem, rather than a maintainer decision. |
| #155 | keep_closed | skipped | related | Historical evidence for a distinct, completed table-export defect. |
| #161 | keep_closed | skipped | related | Merged context only; no action on its branch or closure state. |
| cluster:issue-openclaw-notcrawl-101 | build_fix_artifact | planned |  | Return the concrete fix plan for a writable executor. Do not open a PR until implementation, review, and required validation complete. |

## Needs Human

- none
