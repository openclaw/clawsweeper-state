---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-150142"
mode: "autonomous"
run_id: "35134503110"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35134503110"
head_sha: "f48f1cee58c5ac867114cc77fb088b172aa4e9a9"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-16T18:48:17.152Z"
canonical: "https://github.com/openclaw/openclaw/issues/150142"
canonical_issue: "https://github.com/openclaw/openclaw/issues/150142"
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

# issue-openclaw-openclaw-150142

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35134503110](https://github.com/openclaw/clawsweeper/actions/runs/35134503110)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/150142

## Summary

Reproduced caption contamination and non-prefix revision duplication on preflight main b2883dfac69a3252e871034af1e5bc129e23f5dc; prefix coalescing passed. Narrow fix artifact prepared. Implementation is blocked by the read-only host; validation dependencies and real Meet proof tooling are unavailable. No files or GitHub state changed.

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
| #150142 | fix_needed | planned | canonical | The bug remains reproducible through generated scripts. #150142 owns the repair; no hydrated PR implements this caption extraction and lifecycle fix. |
| #146076 | keep_related | planned | related | Preserve the contributor's separate serialization PR. It does not resolve caption classification or recognition revisions. |
| cluster:issue-openclaw-openclaw-150142 | build_fix_artifact | planned | canonical | Artifact preparation is complete; implementation must run in a writable executor with dependencies and the authorized real Meet proof environment. |

## Needs Human

- none
