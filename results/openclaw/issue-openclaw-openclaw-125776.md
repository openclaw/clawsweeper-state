---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125776"
mode: "autonomous"
run_id: "32539314465"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32539314465"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T00:17:16.449Z"
canonical: "https://github.com/openclaw/openclaw/issues/125776"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125776"
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

# issue-openclaw-openclaw-125776

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32539314465](https://github.com/openclaw/clawsweeper/actions/runs/32539314465)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125776

## Summary

#125776 remains a reproducible narrow bug: Codex emits a result payload without the known item identity, and Telegram renders that payload as an unkeyed progress line. A focused new-PR repair is specified, but this read-only worker cannot create the regression, inspect the mandatory sibling Codex source checkout, or run tests: ../codex is absent, node_modules is absent, and pnpm fails while attempting a read-only Corepack cache write.

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
| #116512 | keep_related | planned | related | Keep open independently; it is not a duplicate of the dynamic-tool result identity defect. |
| #125776 | fix_needed | planned | canonical | Create a narrow credited replacement PR after direct Codex contract inspection and a failing owner-boundary regression are available. |
| #125779 | keep_closed | skipped | superseded | Closed context only; retain as credited prior work, with no mutation. |
| cluster:issue-openclaw-openclaw-125776 | build_fix_artifact | planned | canonical | Artifact is ready for an executor with a writable checkout, dependencies, and the required sibling Codex source. |

## Needs Human

- none
