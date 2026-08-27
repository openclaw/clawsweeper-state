---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-130523"
mode: "autonomous"
run_id: "33027347065"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33027347065"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-27T00:47:44.427Z"
canonical: "https://github.com/openclaw/openclaw/issues/130523"
canonical_issue: "https://github.com/openclaw/openclaw/issues/130523"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-130523

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33027347065](https://github.com/openclaw/clawsweeper/actions/runs/33027347065)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/130523

## Summary

#130523 remains the canonical open bug. Current main statically confirms the missing doctor migration: strict binding validation rejects `peer.kind: "dm"`, while the doctor migration registry has no corresponding rewrite. A narrow two-file fix plan is ready, but this worker cannot apply or validate it because the checkout is read-only, dependencies are absent, and the mandatory sibling `../codex` source is unavailable.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #124460 | keep_closed | skipped | related | Historical context only; do not conflate it with the binding peer-kind migration. |
| #126899 | keep_closed | skipped | related | Historical context only; do not conflate it with the binding peer-kind migration. |
| #129337 | keep_closed | skipped | related | Historical context only; do not conflate it with the binding peer-kind migration. |
| #130523 | fix_needed | blocked | canonical | Implementation and validation require a writable checkout with dependencies and the mandatory sibling Codex source available. |
| cluster:issue-openclaw-openclaw-130523 | build_fix_artifact | planned | canonical | A writable executor can apply this bounded artifact as one new fix PR. |

## Needs Human

- none
