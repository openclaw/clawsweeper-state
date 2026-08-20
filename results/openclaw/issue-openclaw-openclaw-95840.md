---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32353960122"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32353960122"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-20T09:37:10.083Z"
canonical: "https://github.com/openclaw/openclaw/issues/95840"
canonical_issue: "https://github.com/openclaw/openclaw/issues/95840"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-95840

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32353960122](https://github.com/openclaw/clawsweeper/actions/runs/32353960122)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

The defect is source-reproducible, but the existing eligibility hook receives only provider/model/API—not the resolved endpoint—so a `true` OpenAI hook would also cover configured OpenAI-compatible custom endpoints that the issue explicitly excludes. I am stopping without code rather than broaden the provider contract or silently change proxy behavior.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #95840 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #95610 | keep_related | planned | related | Related but independently actionable OpenAI cache behavior; retain its existing canonical path. |
| #95840 | needs_human | blocked | canonical | Maintainer decision required: either authorize a narrow provider-context expansion that carries resolved endpoint/transport provenance and its compatibility tests, or define that `provider: openai` is sufficient despite custom OpenAI-compatible endpoints. The requested direct-only repair cannot be safely expressed through the current hook. |

## Needs Human

- Decide the supported cache-TTL eligibility boundary for `provider: openai` when it uses a custom OpenAI-compatible base URL; the current hook contract cannot distinguish that route from direct api.openai.com.
