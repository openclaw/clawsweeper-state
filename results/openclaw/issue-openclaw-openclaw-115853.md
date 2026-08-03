---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-115853"
mode: "autonomous"
run_id: "30798173365"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30798173365"
head_sha: "e55de43cfc039ea45931eb4e947364399afc280c"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-03T09:14:16.885Z"
canonical: "https://github.com/openclaw/openclaw/issues/115853"
canonical_issue: "https://github.com/openclaw/openclaw/issues/115853"
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

# issue-openclaw-openclaw-115853

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30798173365](https://github.com/openclaw/clawsweeper/actions/runs/30798173365)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/115853

## Summary

#115853 remains a narrow, non-security xAI failover bug on current main 0cad02313a9cbc6d1e60dfcb1d44b1bde523e3fb. The xAI provider matcher omits both reported billing phrases, while the current structured failover path preserves a provider-hook classification ahead of ambiguous HTTP 403 auth handling. A new same-repo fix PR is appropriate, but this worker cannot write the required branch delta or run the requested tests because the target checkout is filesystem read-only.

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
| #115853 | keep_canonical | planned | canonical | The issue remains the canonical open report and the only correct implementation target. |
| #115871 | keep_closed | skipped | superseded | Already closed; do not reopen, close, or merge it from this cluster. |
| #115881 | keep_closed | skipped | superseded | Already closed; preserve its investigation context without treating it as a viable fix. |
| #117341 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| cluster:issue-openclaw-openclaw-115853 | fix_needed | planned | canonical | Create or update the designated same-repo branch with the narrow artifact below; no config, default, shared matcher, dependency, or changelog change is justified. |
| cluster:issue-openclaw-openclaw-115853 | build_fix_artifact | planned | canonical | The deterministic executor can implement and validate this small, explicit repair on clawsweeper/issue-openclaw-openclaw-115853. |

## Needs Human

- none
