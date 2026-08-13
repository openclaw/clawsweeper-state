---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-107814"
mode: "plan"
run_id: "31659850670"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31659850670"
head_sha: "56cb78d60734ddc62b5f1e49981bbb4556dcb58d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-13T02:12:41.677Z"
canonical: "https://github.com/openclaw/openclaw/issues/107814"
canonical_issue: "https://github.com/openclaw/openclaw/issues/107814"
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

# issue-openclaw-openclaw-107814

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31659850670](https://github.com/openclaw/clawsweeper/actions/runs/31659850670)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/107814

## Summary

Plan a narrow shared Responses parser fix: prevent terminal "{}" snapshots from replacing valid streamed tool arguments, while retaining "{}" for no-delta parameterless calls. No GitHub mutation is proposed in this mode.

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
| #107814 | fix_needed | planned | canonical | The issue is a real shared-parser regression with a narrow owner-boundary repair; no Spark-specific behavior, configuration, fallback, or changelog change is needed. |
| cluster:issue-openclaw-openclaw-107814 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR after the executor completes dependency and Codex-source inspection. |

## Needs Human

- none
