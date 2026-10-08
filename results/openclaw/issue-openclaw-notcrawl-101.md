---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-101"
mode: "autonomous"
run_id: "37856898919"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37856898919"
head_sha: "ef343c0d9cd8084fabc459aa6ad831ce6c70e0f2"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-10-08T23:03:51.186Z"
canonical: "https://github.com/openclaw/notcrawl/issues/101"
canonical_issue: "https://github.com/openclaw/notcrawl/issues/101"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-notcrawl-101

Repo: openclaw/notcrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37856898919](https://github.com/openclaw/clawsweeper/actions/runs/37856898919)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/notcrawl/issues/101

## Summary

Rich-block URL omission remains on current main, but a URL/caption-only change would not establish that the separate transclusion request is satisfied. No implementation or PR is recommended until that scope is resolved.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #101 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #101 | needs_human | blocked | canonical | A focused URL renderer is plausible, but the job requires an implementation satisfying #101 and a closing reference. Whether that partial scope satisfies the issue remains unresolved; the separate transclusion behavior lacks a concrete archive and source-mode reproduction. |
| #155 | keep_closed | skipped | related | Historical evidence; simple-table support does not satisfy #101. |
| #161 | keep_closed | skipped | related | Merged historical context with no remaining action in this cluster. |

## Needs Human

- #101: Decide whether a URL/caption-only implementation may satisfy the issue, with transclusion deduplication tracked separately. If both are required, provide a concrete archive and source-mode reproduction for duplication before planning the combined implementation.
