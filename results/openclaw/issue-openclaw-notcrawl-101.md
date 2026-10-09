---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-101"
mode: "autonomous"
run_id: "37891132564"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37891132564"
head_sha: "8347e80179015163c469491e47badb09f31b7157"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-10-09T06:02:17.384Z"
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
needs_human_count: 1
---

# issue-openclaw-notcrawl-101

Repo: openclaw/notcrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37891132564](https://github.com/openclaw/clawsweeper/actions/runs/37891132564)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/notcrawl/issues/101

## Summary

The rich-block limitation remains on current main, but #101 explicitly leaves its output contract undecided. No implementation PR is planned pending approval of a bounded URL/caption export scope and separate handling of transclusion.

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
| #101 | needs_human | blocked | needs_human | Approve whether archived URL/caption output alone satisfies the requested rich-block support, specify its Markdown representation, and decide whether transclusion remains a separate issue. A partial implementation cannot safely claim to close the full request without that decision. |
| #127 | route_security | planned | security_sensitive | Quarantine this historical credential-exposure context to central OpenClaw security handling without any GitHub mutation. It does not block unrelated rich-block classification. |
| #155 | keep_closed | skipped | fixed_by_candidate | Already resolved table defect; retain as historical evidence. |
| #161 | keep_closed | skipped | related | Merged related work does not fulfill #101. |

## Needs Human

- #101: Approve the rich-block Markdown output contract and whether URL/caption-only export satisfies the issue; keep unverified transclusion behavior separately scoped.
