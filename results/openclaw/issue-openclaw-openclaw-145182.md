---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-145182"
mode: "plan"
run_id: "34641480294"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34641480294"
head_sha: "e74b07a40a6ecb1c9743e17201ecca0d6114bce5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-11T20:06:34.154Z"
canonical: "https://github.com/openclaw/openclaw/issues/145182"
canonical_issue: "https://github.com/openclaw/openclaw/issues/145182"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-145182

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34641480294](https://github.com/openclaw/clawsweeper/actions/runs/34641480294)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/145182

## Summary

Plan one narrow Teams SSO repair. The checkout matches preflight main 3111f4a1eb164f5da6cecd5834dc5ddcd19a3035 and retains the reported App-level handler lookup. No changes or tests were run. Runtime reproduction requires the absent pinned SDK dependencies.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| https://github.com/openclaw/openclaw/issues/145182 | fix_needed | planned | canonical | A bounded SDK integration defect has a clear repair path. The supplied evidence describes failed sign-in, without a boundary-bypass or credential-exposure claim. Establish a failing regression against the actual pinned SDK before implementation. |

## Needs Human

- none
