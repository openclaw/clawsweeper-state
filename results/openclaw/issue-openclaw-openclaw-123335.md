---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123335"
mode: "autonomous"
run_id: "33300407825"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33300407825"
head_sha: "fa535d54a032862b022147a7cba4eaa3bdeb4a7b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-30T09:11:15.219Z"
canonical: "https://github.com/openclaw/openclaw/issues/123335"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123335"
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

# issue-openclaw-openclaw-123335

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33300407825](https://github.com/openclaw/clawsweeper/actions/runs/33300407825)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123335

## Summary

#123335 remains the open canonical bug. Current main has no exact startup-policy entries for `plugins init`, `plugins build`, or `plugins validate`; each inherits `configGuard: "run"`, which invokes config readiness before the authoring action. A narrow two-file repair is ready, but this worker cannot modify or validate the branch: the checkout is read-only, dependencies are absent and both required `pnpm install` attempts fail creating the Corepack cache, and the required sibling `../codex` source cannot be cloned on the read-only filesystem.

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
| #123335 | fix_needed | blocked | canonical | Implementation is blocked only by this read-only worker environment. The deterministic executor should apply the narrow artifact in a writable checkout, first demonstrate the new policy test fails on this base, then validate it. |
| #98484 | keep_closed | skipped | independent | Already closed; no mutation. |
| #98583 | keep_closed | skipped | independent | Already closed; no mutation. |
| #107021 | keep_closed | skipped | independent | Already closed; no mutation. |
| #114482 | keep_closed | skipped | independent | Already closed; no mutation. |
| cluster:issue-openclaw-openclaw-123335 | build_fix_artifact | planned | canonical | Narrow new-fix-PR plan for the canonical issue. |

## Needs Human

- none
