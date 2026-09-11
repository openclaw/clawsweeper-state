---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-144796"
mode: "autonomous"
run_id: "34580713099"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34580713099"
head_sha: "e74b07a40a6ecb1c9743e17201ecca0d6114bce5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-11T09:35:03.655Z"
canonical: "https://github.com/openclaw/openclaw/issues/144796"
canonical_issue: "https://github.com/openclaw/openclaw/issues/144796"
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

# issue-openclaw-openclaw-144796

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34580713099](https://github.com/openclaw/clawsweeper/actions/runs/34580713099)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/144796

## Summary

Confirmed the reported logging gap in preflight main: the advertiser filters console.log but not console.warn. Implementation and failing-regression proof are blocked by the read-only checkout and missing dependencies. A narrow executor fix artifact is prepared; no files or GitHub state changed.

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
| #144796 | fix_needed | planned | canonical | A focused advertiser logging repair is supported by current source and the hydrated report. Implementation must first establish the failing entry-point regression on an authorized writable host. |
| #107710 | keep_closed | skipped | related | Historical lifecycle evidence only; preserve its design and leave the merged PR closed. |
| cluster:issue-openclaw-openclaw-144796 | build_fix_artifact | planned |  | Artifact preparation is complete. Local implementation and validation remain blocked by host restrictions, without an unresolved product or maintainer decision. |

## Needs Human

- none
