---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125745"
mode: "autonomous"
run_id: "32123372146"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32123372146"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T09:55:12.611Z"
canonical: "https://github.com/openclaw/openclaw/issues/125745"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125745"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-125745

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32123372146](https://github.com/openclaw/clawsweeper/actions/runs/32123372146)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125745

## Summary

Current main has the reported ownership mismatch: the probe creates an isolated auth profile, then ordinary prepared-runtime binding replaces its agent directory with the configured Gateway owner. A narrow isolated-read-only repair is ready, but this environment is read-only, ../codex is unavailable for the mandatory direct inspection, and pnpm cannot create its Corepack cache.

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
| Needs human | 1 |

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
| #125745 | fix_needed | blocked | canonical | Implementation and regression validation require a writable checkout and mandatory Codex-source inspection. |
| cluster:issue-openclaw-openclaw-125745 | build_fix_artifact | planned | canonical | Narrow new-fix-PR path. |

## Needs Human

- Provide a writable checkout with ../codex available so the executor can create the failing configured-owner regression, implement the isolated-read-only invocation, and validate it.
