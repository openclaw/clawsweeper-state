---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120735"
mode: "autonomous"
run_id: "31291175045"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31291175045"
head_sha: "81c23bede7a805351bcbb1d5fde54ff278337535"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-09T03:20:17.340Z"
canonical: "https://github.com/openclaw/openclaw/issues/120735"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120735"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-120735

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31291175045](https://github.com/openclaw/clawsweeper/actions/runs/31291175045)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/120735

## Summary

Current main c5bdad48 reproduces #120735 at source level: animated TGS and video WebM stickers are intentionally not fetched, retain a typed sticker fact, but produce no agent-visible unavailable-media outcome. A narrow repair is ready, but this worker checkout is read-only and has no node_modules, so it cannot create or validate the required branch locally.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #120735 | fix_needed | blocked | canonical | Implementation is blocked only by the read-only worker environment; the executor can apply the narrow fix artifact on clawsweeper/issue-openclaw-openclaw-120735. |
| #83748 | keep_closed | skipped | related | Already closed historical context; no mutation. |
| #93130 | keep_closed | skipped | related | Already closed historical context; no mutation. |
| cluster:issue-openclaw-openclaw-120735 | build_fix_artifact | planned | canonical | Executor should create the one narrow issue-fix PR from the named ClawSweeper branch. |

## Needs Human

- none
