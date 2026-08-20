---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123318"
mode: "autonomous"
run_id: "32351322205"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32351322205"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T09:08:02.186Z"
canonical: "https://github.com/openclaw/openclaw/issues/123318"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123318"
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

# issue-openclaw-openclaw-123318

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32351322205](https://github.com/openclaw/clawsweeper/actions/runs/32351322205)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123318

## Summary

No working-tree changes were possible. The required sibling ../codex checkout is absent, and this worker is read-only with no writable temporary directory or pnpm cache; therefore it cannot satisfy the repository’s Codex gate or run the required real-Git regression. A narrow, executable repair artifact is ready for a capable runner.

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
| #123318 | fix_needed | planned | canonical | A narrow updater-owned repair is appropriate, but local implementation and validation are blocked by the read-only sandbox and missing required ../codex source. |
| cluster:issue-openclaw-openclaw-123318 | build_fix_artifact | planned | canonical | Replay this artifact in a writable trusted checkout with ../codex available; do not open the PR until the real-Git fixture and required gates pass. |
| #86218 | keep_closed | skipped | related | Closed historical context; no mutation. |
| #119098 | keep_closed | skipped | independent | Closed independent context; no mutation. |

## Needs Human

- none
