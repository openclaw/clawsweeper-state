---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-121034"
mode: "autonomous"
run_id: "31319310879"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31319310879"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-09T15:10:34.148Z"
canonical: "https://github.com/openclaw/openclaw/issues/121034"
canonical_issue: "https://github.com/openclaw/openclaw/issues/121034"
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

# issue-openclaw-openclaw-121034

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31319310879](https://github.com/openclaw/clawsweeper/actions/runs/31319310879)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/121034

## Summary

The issue remains reproducible on main. Claude ACP strips only `anthropic/`, so `amazon-bedrock/<native-id>` leaks into both startup and runtime model updates. A narrow ACPX-only fix is planned; implementation is blocked by the read-only checkout and absent dependencies.

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
| #121034 | fix_needed | planned | canonical | Open canonical issue with no hydrated PR; the plugin-local conversion gap has a narrow fix path. |
| cluster:issue-openclaw-openclaw-121034 | build_fix_artifact | blocked | canonical | Executor should implement and validate this artifact on `clawsweeper/issue-openclaw-openclaw-121034`. |

## Needs Human

- none
