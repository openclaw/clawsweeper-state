---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118793"
mode: "autonomous"
run_id: "30837366159"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30837366159"
head_sha: "4f67ca516da0fc29fed5ae2b8e17fce14d49354d"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-03T17:50:07.923Z"
canonical: "https://github.com/openclaw/openclaw/issues/118793"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118793"
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

# issue-openclaw-openclaw-118793

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30837366159](https://github.com/openclaw/clawsweeper/actions/runs/30837366159)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118793

## Summary

Verified on the checked-out newer main snapshot `830ab164ef861f82b63c32026c4594474f40830c`: the exact Claude CLI message `You've hit your session limit · resets 1:50pm` has no classifier match, while existing prompt failover policy already advances configured fallbacks for `rate_limit`. The narrow repair is a provider-gated Claude CLI classifier plus regression coverage; no security or product-policy change is needed. Local tests were not run because `node_modules` is absent and this worker has a read-only filesystem, so the executor must install/validate in its writable trusted checkout.

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
| #85103 | keep_closed | skipped | superseded | Already closed historical context; no close or follow-up action belongs in this cluster. |
| #98976 | keep_related | planned | related | Related fallback-classification area, but a distinct root cause and policy surface remains open in #98976. |
| #118793 | fix_needed | planned | canonical | A narrow, source-reproducible provider-specific classification gap remains on the checked-out current main. |
| cluster:issue-openclaw-openclaw-118793 | build_fix_artifact | planned | canonical | Implementation is narrow, non-security-sensitive, and ready for a credited ClawSweeper fix PR. |
| cluster:issue-openclaw-openclaw-118793 | open_fix_pr | planned | canonical | The job permits one new narrow implementation PR but disallows merge and issue closure. |

## Needs Human

- none
