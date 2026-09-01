---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-134687"
mode: "autonomous"
run_id: "33464856864"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33464856864"
head_sha: "ae37f02a3f5ba45b2bc52fc1d88f5b36b198874d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-01T03:22:56.976Z"
canonical: "https://github.com/openclaw/openclaw/issues/134687"
canonical_issue: "https://github.com/openclaw/openclaw/issues/134687"
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

# issue-openclaw-openclaw-134687

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33464856864](https://github.com/openclaw/clawsweeper/actions/runs/33464856864)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/134687

## Summary

Current main (a0868f477a8ec13269e59c0ea821c3814f03d3f6) has the owner-propagation defect: the resolved Dreaming workspace owner reaches applyShortTermPromotions but is dropped before consolidation. This worker could not create or locally validate the repair because the required sibling ../codex source checkout is absent and dependencies (tsx/node_modules) are unavailable in this read-only checkout. A narrow, executable fix artifact is prepared for a new credited ClawSweeper PR.

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
| #134687 | fix_needed | planned | canonical | The bug is isolated to Memory Core’s promotion-to-consolidation owner boundary. Implementation is blocked only in this worker environment: ../codex is absent despite the repository’s mandatory direct-Codex-source gate, and the focused Vitest command cannot resolve tsx because node_modules is absent. |
| cluster:issue-openclaw-openclaw-134687 | build_fix_artifact | planned | canonical | Create one narrow PR after the executor satisfies the mandatory Codex-source and dependency prerequisites. |
| #101603 | keep_related | planned | related | Same Memory Core Dreaming area, but distinct behavior and a separate maintainer product decision. |
| #65653 | keep_closed | skipped | related | Already closed; no mutation is permitted or needed. |
| #69811 | keep_closed | skipped | related | Already closed; no mutation is permitted or needed. |

## Needs Human

- none
