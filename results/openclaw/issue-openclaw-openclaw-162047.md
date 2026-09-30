---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-162047"
mode: "plan"
run_id: "36776351805"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36776351805"
head_sha: "ad9ac7f287fdf88e9de0de0ef7913d0c7b0c5e7a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-30T21:03:21.571Z"
canonical: "#162047"
canonical_issue: "#162047"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-162047

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36776351805](https://github.com/openclaw/clawsweeper/actions/runs/36776351805)

Workflow conclusion: success

Worker result: planned

Canonical: #162047

## Summary

Keep the Windows Doctor performance issue open. Current main still repeats companion validation, but the overlapping PR is security-routed and has failing checks. A fix remains blocked pending a failing current-main regression and central review. This was a read-only plan; no tests or Windows upgrade proof ran.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #162047 | fix_needed | blocked | canonical | Keep the issue open. Implementation is blocked until the required current-main regression is established and central handling resolves the overlapping security-routed PR. |
| #162095 | route_security | planned | security_sensitive | Route this PR alone to central OpenClaw security handling. Do not repair, close, or merge it through this worker. |
| #153401 | keep_independent | planned | independent | The native companion-validation cost does not resolve the tracker’s distinct recovery failures. |
| #155859 | keep_related | planned | related | It shares a plugin performance area but has a broader startup failure and distinct cost producers. |
| #157989 | keep_related | planned | related | Repeated capture writes are separate from repeated hardlink companion validation in Doctor. |
| #160959 | keep_related | planned | related | It concerns a different operation and user-visible failure from candidate Doctor’s hardlink validation. |
| #158414 | keep_closed | skipped |  | Historical context only. |
| #158910 | keep_closed | skipped |  | Historical context for the reported upgrade path. |
| #160075 | keep_closed | skipped |  | Historical Windows context with a different defect. |

## Needs Human

- none
