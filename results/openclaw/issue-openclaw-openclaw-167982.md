---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-167982"
mode: "plan"
run_id: "38057413815"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/38057413815"
head_sha: "43288b03d404df57edc9886bfd3bf3e94b956c47"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-10-10T13:56:04.408Z"
canonical: "#167982"
canonical_issue: "#167982"
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

# issue-openclaw-openclaw-167982

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/38057413815](https://github.com/openclaw/clawsweeper/actions/runs/38057413815)

Workflow conclusion: success

Worker result: planned

Canonical: #167982

## Summary

Plan one narrow producer repair for the canonical command-dispatch bug. Checkout matches preflight main 62e4695c93f773fe1b612bb0ff5e53e350f0d39e. Source inspection supports the reported workspace mismatch; runtime reproduction, implementation, tests, build, review, and Telegram proof remain pending. No mutations performed.

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
| #167982 | fix_needed | planned | canonical | A focused bug-only repair is supported. Establish a failing production-startup-to-scoped-dispatch regression before editing; stop if it does not reproduce on the executor's latest main. |
| #142336 | keep_related | planned | related | Related Telegram behavior with a distinct failure mechanism; context only for this repair. |
| #159001 | keep_related | planned | related | Shared comparison area does not establish identical scope or remaining work. Preserve as separate related work. |
| #142340 | keep_closed | skipped | duplicate | Historical collision context; already closed. |
| #161267 | keep_closed | skipped | related | Historical ownership and lifecycle evidence, not an open repair candidate or proof this issue is fixed. |

## Needs Human

- none
