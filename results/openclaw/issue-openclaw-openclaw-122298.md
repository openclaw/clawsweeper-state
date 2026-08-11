---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122298"
mode: "autonomous"
run_id: "31540632591"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31540632591"
head_sha: "4b79888c3f2ad4b9e0c2ee3345984adc995ea81d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-11T22:10:38.653Z"
canonical: "https://github.com/openclaw/openclaw/issues/122298"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122298"
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

# issue-openclaw-openclaw-122298

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31540632591](https://github.com/openclaw/clawsweeper/actions/runs/31540632591)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122298

## Summary

#122298 is a narrow canonical source-install bug. The supplied current-main SHA is absent from this read-only checkout, so no branch delta or write-backed validation can be safely performed; a bounded new-PR artifact is provided.

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
| #122298 | fix_needed | blocked | canonical | Implementation is blocked until the executor uses a writable checkout at the preflight main SHA or refreshes the cluster state. |
| #44783 | keep_closed | skipped | related | Already closed context ref; no action. |
| cluster:issue-openclaw-openclaw-122298 | build_fix_artifact | planned | canonical | Executor should apply this artifact on the designated writable branch after refreshing main. |

## Needs Human

- none
