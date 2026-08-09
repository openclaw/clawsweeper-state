---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120968"
mode: "autonomous"
run_id: "31304422793"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31304422793"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-09T09:17:40.351Z"
canonical: "https://github.com/openclaw/openclaw/issues/120968"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120968"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-120968

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31304422793](https://github.com/openclaw/clawsweeper/actions/runs/31304422793)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/120968

## Summary

#120968 is a current, narrow memory-core bug on main 00854a7002a77f47bd56c43b69c2e5ba7b09e8a6. Static Memory Recall guidance and both memory_search descriptors mandate retrieval by category even though Active Memory prepends relevant recall context before the main prompt. A writable, dependency-ready executor should apply the attached focused fix; this worker is read-only and focused Vitest cannot start because dependency p-map is absent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #29772 | keep_closed | skipped | related | Already closed; no mutation is permitted or needed. |
| #66686 | keep_closed | skipped | related | Already closed; #120968 is the live canonical repair path. |
| #72015 | keep_independent | planned | independent | Related plugin area but a different root cause and repair scope. |
| #120968 | fix_needed | planned | canonical | Replace category-based mandates with an evidence-need rule while retaining search and source-specific retrieval. |
| cluster:issue-openclaw-openclaw-120968 | build_fix_artifact | planned | canonical | A narrow fix is source-proven; implementation and validation require a writable checkout with dependencies installed. |
| cluster:issue-openclaw-openclaw-120968 | open_fix_pr | planned | canonical | The job permits one new fix PR but not merge or issue closure. |

## Needs Human

- none
