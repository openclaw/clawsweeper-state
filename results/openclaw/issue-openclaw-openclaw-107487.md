---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-107487"
mode: "autonomous"
run_id: "33326936691"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33326936691"
head_sha: "74b0f8552fde46842a933ca360ed272f0212193e"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-30T18:20:16.768Z"
canonical: "#107487"
canonical_issue: "#107487"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-107487

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33326936691](https://github.com/openclaw/clawsweeper/actions/runs/33326936691)

Workflow conclusion: success

Worker result: blocked

Canonical: #107487

## Summary

#107487 remains a confirmed canonical bug: `/acp close` clears manager metadata but does not request persistent-state discard, and ACPX fresh-session recovery is process-memory-only. A narrow fix PR is appropriate, but this read-only checkout cannot inspect pinned `acpx@0.13.1`, run the required regressions, or create the branch/PR.

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
| #107487 | build_fix_artifact | blocked | canonical | The implementation shape is clear, but direct upstream-contract inspection and pre-/post-fix executable proof are mandatory and unavailable in this sandbox. |
| #109270 | keep_closed | skipped | related | Historical context only; no closure or mutation is permitted for an already-closed item. |
| #111628 | keep_closed | skipped | superseded | Already closed; do not mutate or close again. |

## Needs Human

- Provide a writable, dependency-hydrated repair environment containing pinned `acpx@0.13.1` and sibling `../codex` source, then replay this artifact to inspect the upstream record contract, run the required restart harness, and open the authorized PR.
