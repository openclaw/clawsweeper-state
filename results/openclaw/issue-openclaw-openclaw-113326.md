---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32345281743"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32345281743"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T07:54:45.758Z"
canonical: "https://github.com/openclaw/openclaw/issues/113326"
canonical_issue: "https://github.com/openclaw/openclaw/issues/113326"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-113326

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32345281743](https://github.com/openclaw/clawsweeper/actions/runs/32345281743)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

#113326 remains a reproducible, narrow bug: the documented explicit OpenAI device-code command is rejected by the generic non-TTY guard before provider-method selection. A fix artifact is ready, but this worker cannot modify the read-only checkout or validate it: dependencies are absent (`tsx` cannot resolve), the preflight main SHA is not present locally, and the mandatory sibling `../codex` checkout is absent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #113326 | fix_needed | blocked | canonical | Implementation is blocked only by the read-only/incomplete executor checkout; the repair path itself is narrow and source-proven. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | planned | canonical | A writable, dependency-complete checkout can make this as one narrow credited fix PR. |
| #100067 | keep_independent | planned | independent | Different owner boundary and root cause; leave open independently. |
| #50452 | keep_closed | skipped | related | Already closed; historical context only. |
| #71864 | keep_closed | skipped | related | Already closed; historical context only. |
| #79021 | keep_closed | skipped | related | Already closed; historical context only. |

## Needs Human

- none
