---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-116601"
mode: "autonomous"
run_id: "30772177165"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30772177165"
head_sha: "de31c9959070dd22ec785fdbcc924fc8e6de1e06"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-02T23:57:00.427Z"
canonical: "https://github.com/openclaw/openclaw/issues/116601"
canonical_issue: "https://github.com/openclaw/openclaw/issues/116601"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-116601

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30772177165](https://github.com/openclaw/clawsweeper/actions/runs/30772177165)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/116601

## Summary

#116601 remains a reproducible MiniMax catalog regression on current main 6c6e8fe1b08b47afa64b74cf4a8b2af80084b92a. The MiniMax plugin’s Anthropic-compatible static catalog advertises MiniMax-M3 as image-capable, so the existing image-tool fallback does not reach plugin-owned MiniMax-VL-01. Plan one narrow credited fix PR; no GitHub mutation or local patch was possible in this read-only checkout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/118303 | clawsweeper/issue-openclaw-openclaw-116601 |  |
| issue_implementation_status_comment | updated | #116601 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118303 | merge_canonical | blocked | fix_pr | checks are not clean: checks-node-changed: FAILURE, openclaw/ci-gate: FAILURE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #116601 | fix_needed | planned | canonical | Current main still contains the M3 image-capability metadata that bypasses the existing MiniMax-VL-01 fallback. The repair is limited to the owning MiniMax catalog and regressions. |
| cluster:issue-openclaw-openclaw-116601 | build_fix_artifact | planned | canonical | Create or update the single `clawsweeper/issue-openclaw-openclaw-116601` implementation PR after applying the narrow plugin-owned metadata repair and focused tests. |
| #64244 | keep_closed | skipped | related | Already closed related regression; retain as context for the MiniMax-VL routing invariant. |

## Needs Human

- none
