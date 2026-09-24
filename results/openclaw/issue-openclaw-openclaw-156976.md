---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-156976"
mode: "autonomous"
run_id: "35954073378"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35954073378"
head_sha: "5ae902bf0a0f31d7c36618352b48621f39b40786"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-24T04:37:44.454Z"
canonical: "https://github.com/openclaw/openclaw/issues/156976"
canonical_issue: "https://github.com/openclaw/openclaw/issues/156976"
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

# issue-openclaw-openclaw-156976

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35954073378](https://github.com/openclaw/clawsweeper/actions/runs/35954073378)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/156976

## Summary

Current main (86c2919) still has the reported source-level gap, but this read-only Linux checkout cannot reproduce the removed Homebrew executable through the macOS Gateway health boundary or prepare a validated PR. The fix path is scoped below; implementation must begin with that reproduction.

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
| #156976 | fix_needed | planned | canonical | The reported failure remains plausible on current source; runtime reproduction is required before editing. |
| #52184 | keep_related | planned | related | It does not cover a running Gateway retaining a removed Homebrew executable. |
| #143609 | route_security | planned | security_sensitive | Route this separate credential-related report to central OpenClaw security handling without changing it in this cluster. |
| #146268 | keep_independent | planned | independent | Its launcher error is unrelated to a running macOS Gateway retaining an old Homebrew Node path. |
| cluster:issue-openclaw-openclaw-156976 | build_fix_artifact | blocked |  | The job requires reproduction before implementation. Run it on an authorized writable checkout with an isolated Homebrew-shaped Gateway fixture before opening the PR. |

## Needs Human

- none
