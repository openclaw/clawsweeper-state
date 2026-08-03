---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118489"
mode: "autonomous"
run_id: "30786764955"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30786764955"
head_sha: "e55de43cfc039ea45931eb4e947364399afc280c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-03T05:25:35.423Z"
canonical: "https://github.com/openclaw/openclaw/issues/118489"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118489"
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

# issue-openclaw-openclaw-118489

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30786764955](https://github.com/openclaw/clawsweeper/actions/runs/30786764955)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118489

## Summary

#118489 remains a narrow, source-reproducible defect on hydrated main 05100271568b5df660a0453e895717321f19d1b5. The shared failed-terminal finalizer conflates exact persisted terminal-result evidence with aggregate lifecycle idleness, and it suppresses a later exact failed-terminal outcome when an earlier tool presentation exists. A focused new fix PR is appropriate; this read-only checkout cannot create the branch or install the missing test dependency required for local validation.

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
| #118489 | fix_needed | planned | canonical | No open implementation PR exists for this residual bug. The merged #118344 is historical evidence only and intentionally remains preserved as the source of the exact correlation invariant. |
| cluster:issue-openclaw-openclaw-118489 | build_fix_artifact | planned | canonical | Create one narrow credited PR from clawsweeper/issue-openclaw-openclaw-118489 after restoring dependencies and completing focused regression proof. |

## Needs Human

- none
