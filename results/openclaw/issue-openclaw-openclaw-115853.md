---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-115853"
mode: "autonomous"
run_id: "30802206879"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30802206879"
head_sha: "7b66515e746f8082ea6861ed7369c6913345423d"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-03T09:46:18.351Z"
canonical: "https://github.com/openclaw/openclaw/issues/115853"
canonical_issue: "https://github.com/openclaw/openclaw/issues/115853"
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

# issue-openclaw-openclaw-115853

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30802206879](https://github.com/openclaw/clawsweeper/actions/runs/30802206879)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/115853

## Summary

Current main at 0fbddda540e171d2390d257006303a45919ed5bc still omits both reported xAI billing phrases from the provider-local matcher. The issue is a narrow, non-security provider-failover correctness bug. A new focused fix PR should extend the xAI matcher and add registered-hook plus structured-403 precedence coverage; the three closed contributor PRs remain historical evidence only.

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
| #115853 | fix_needed | planned | canonical | The source issue remains reproducible from current source, no viable open PR exists, and the patch can stay within the xAI owner boundary plus focused regression tests. |
| #115871 | keep_closed | skipped | superseded | Already closed; retain only as credited historical evidence. |
| #115881 | keep_closed | skipped | superseded | Already closed; the new fix explicitly addresses its stated review blocker. |
| #117341 | keep_closed | skipped | superseded | Already closed; retain contributor context without a closure mutation. |
| cluster:issue-openclaw-openclaw-115853 | build_fix_artifact | planned | canonical | Create one new, narrow repair PR from the designated ClawSweeper branch; no open contributor branch is viable for repair. |

## Needs Human

- none
