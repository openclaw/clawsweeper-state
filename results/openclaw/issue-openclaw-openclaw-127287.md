---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32554431731"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32554431731"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-22T06:43:10.042Z"
canonical: "https://github.com/openclaw/openclaw/issues/127287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127287"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-127287

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32554431731](https://github.com/openclaw/clawsweeper/actions/runs/32554431731)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127287

## Summary

#127287 remains the open canonical bug on main 500bb603. The provider resolves an allowlisted GHE domain but hard-codes copilot-developer-cli for prepared inference, catalog discovery, embeddings, and stream defaults. Implementation is blocked in this read-only checkout: ../codex is absent (the repository's mandatory direct Codex-source gate cannot be met with restricted network), and the focused test command cannot start because tsx is missing; pnpm install is not permitted in this sandbox.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| issue_implementation_status_comment | updated | #127287 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #127287 | fix_needed | blocked | canonical | The source evidence supports a narrow provider-local repair, but direct ../codex inspection and writable dependency installation are mandatory blockers in this sandbox. |
| cluster:issue-openclaw-openclaw-127287 | build_fix_artifact | blocked |  | A new branch/PR is appropriate after the two environment gates are satisfied. |

## Needs Human

- none
