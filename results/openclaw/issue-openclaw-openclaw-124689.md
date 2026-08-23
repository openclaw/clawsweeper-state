---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32613565332"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32613565332"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T02:54:01.981Z"
canonical: "https://github.com/openclaw/openclaw/issues/124689"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124689"
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

# issue-openclaw-openclaw-124689

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32613565332](https://github.com/openclaw/clawsweeper/actions/runs/32613565332)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124689

## Summary

#124689 has a narrow generic probe-fallback repair path, but this read-only checkout cannot implement or validate it: ../codex is absent (a mandatory root gate) and node_modules lacks tsx.

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
| #124689 | keep_canonical | planned | canonical | Keep the source issue open as the canonical repair target. |
| cluster:issue-openclaw-openclaw-124689 | fix_needed | planned | canonical | Filter deprecated and disabled rows only during automatic catalog fallback, before the existing Anthropic priority sort; return null when no eligible fallback remains. |
| cluster:issue-openclaw-openclaw-124689 | build_fix_artifact | planned | canonical | Create the scoped PR only from a writable checkout with installed dependencies and the required sibling Codex source. |

## Needs Human

- none
