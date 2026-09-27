---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159538"
mode: "autonomous"
run_id: "36306495655"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36306495655"
head_sha: "e9ef8c0b2c0acbe5908b2e9d1a7e870cdddc6e12"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-27T09:17:55.819Z"
canonical: "https://github.com/openclaw/openclaw/issues/159538"
canonical_issue: "https://github.com/openclaw/openclaw/issues/159538"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-159538

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36306495655](https://github.com/openclaw/clawsweeper/actions/runs/36306495655)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/159538

## Summary

At preflight main SHA 8620e9097726a817be6bd8f9385a14a54e24f89d, the sessions tool still forwards model="default" as a literal string. A narrow adapter fix can send the Gateway's existing model:null reset for single and batch patches. No code was changed or tests run in the read-only checkout.

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
| #159538 | fix_needed | planned | canonical | The open issue describes a current, bounded adapter defect with no viable open implementation PR in the hydrated inventory. |
| #118705 | keep_related | planned | related | Different model-provenance behavior remains open. |
| #141795 | keep_related | planned | related | Its acknowledgement-policy decision is outside this fix. |
| cluster:issue-openclaw-openclaw-159538 | build_fix_artifact | planned |  | Create or update the one issue implementation PR from clawsweeper/issue-openclaw-openclaw-159538. |

## Needs Human

- none
