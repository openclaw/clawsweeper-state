---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123318"
mode: "autonomous"
run_id: "32340108043"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32340108043"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T06:46:40.042Z"
canonical: "https://github.com/openclaw/openclaw/issues/123318"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123318"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-123318

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32340108043](https://github.com/openclaw/clawsweeper/actions/runs/32340108043)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123318

## Summary

#123318 remains the open canonical bug. Current main uses `git fetch --all --prune --tags` for stable/beta updates at `src/infra/update-runner-git.ts:373`; Git’s local help documents `--prune-tags` as the tag-safe option that clobbers changed tags. Implementation could not start because this worker’s checkout is read-only: Corepack failed creating its cache during `pnpm docs:list`, and no sibling `../codex` checkout exists for the repository-required direct Codex-source gate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #123318 | fix_needed | planned | canonical | The source defect is narrow and reproducible by force-moving a previously fetched release tag. No candidate PR is hydrated. |
| cluster:issue-openclaw-openclaw-123318 | build_fix_artifact | blocked | canonical | Only implementation is blocked by the worker environment; the canonical classification and narrow repair plan are complete. |

## Needs Human

- none
