---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123073"
mode: "autonomous"
run_id: "31682657204"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31682657204"
head_sha: "96b8703e4c0b4782dfcc488b46777559149326bb"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-13T08:43:37.635Z"
canonical: "https://github.com/openclaw/openclaw/issues/123073"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123073"
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

# issue-openclaw-openclaw-123073

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31682657204](https://github.com/openclaw/clawsweeper/actions/runs/31682657204)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123073

## Summary

Current main source proves the open canonical bug: a stored dev channel does not select the git flow for a package-detected launcher. A narrow new-PR repair is ready, but this worker cannot write the read-only checkout or run tests because node_modules is absent.

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
| #123073 | fix_needed | blocked | canonical | Implementation is blocked only by this worker's read-only checkout and missing local dependencies; the fix artifact is ready for the deterministic executor. |
| cluster:issue-openclaw-openclaw-123073 | build_fix_artifact | planned | canonical | Narrow owner-boundary repair for the canonical issue. |

## Needs Human

- none
