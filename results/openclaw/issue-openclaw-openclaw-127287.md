---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32565821015"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32565821015"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T09:57:40.915Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32565821015](https://github.com/openclaw/clawsweeper/actions/runs/32565821015)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127287

## Summary

#127287 remains a reproducible, plugin-owned regression on main 04d174584d1b20c8bb3802576e04e4925ff7b4a3: the resolved GHE domain reaches endpoint routing but not the static runtime integration identity. Implementation is blocked in this read-only checkout: required ../codex source is absent, dependencies are absent, and pnpm cannot create its Corepack cache.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #127287 | fix_needed | blocked | canonical | The narrow repair is identified, but this worker cannot create the required branch delta, inspect ../codex, or run the failing-first and after-fix tests in the read-only checkout. |
| cluster:issue-openclaw-openclaw-127287 | build_fix_artifact | planned | canonical | Prepare a new narrow PR after the executor supplies a writable checkout, directly inspects ../codex, establishes failing regressions, and obtains post-fix redacted tenant evidence. |

## Needs Human

- none
