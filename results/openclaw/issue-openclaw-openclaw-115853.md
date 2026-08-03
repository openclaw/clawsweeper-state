---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-115853"
mode: "autonomous"
run_id: "30797019677"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30797019677"
head_sha: "e55de43cfc039ea45931eb4e947364399afc280c"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-03T08:34:34.259Z"
canonical: "https://github.com/openclaw/openclaw/issues/115853"
canonical_issue: "https://github.com/openclaw/openclaw/issues/115853"
canonical_pr: null
actions_total: 3
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30797019677](https://github.com/openclaw/clawsweeper/actions/runs/30797019677)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/115853

## Summary

#115853 remains a reproducible, narrow xAI provider failover bug on current main 0cad02313a9cbc6d1e60dfcb1d44b1bde523e3fb. The xAI hook owns the vendor phrases, and the structured failover path already gives a provider hook precedence over ambiguous HTTP 403 authentication classification when provider/status facts are carried by the error. The two reported phrases are missing from the xAI matcher. This worker could not create the required branch delta or run focused validation because the target checkout is filesystem read-only; an executor should apply the narrow artifact below on clawsweeper/issue-openclaw-openclaw-115853.

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
| #115853 | keep_canonical | planned | canonical | The issue is still open, current, non-security-sensitive, and is the sole canonical implementation target. |
| cluster:issue-openclaw-openclaw-115853 | fix_needed | planned | canonical | A narrow plugin-local matcher change plus registered-hook regression coverage is required; no viable open contributor PR exists. |
| cluster:issue-openclaw-openclaw-115853 | build_fix_artifact | planned | canonical | Create one new fix PR from the designated same-repo branch after applying the artifact and validation. |

## Needs Human

- none
