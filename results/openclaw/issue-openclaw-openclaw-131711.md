---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-131711"
mode: "autonomous"
run_id: "33168194346"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33168194346"
head_sha: "d56daf07f0c32a58f28283936dc4568cf5069828"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-28T12:31:36.808Z"
canonical: "https://github.com/openclaw/openclaw/issues/131711"
canonical_issue: "https://github.com/openclaw/openclaw/issues/131711"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-131711

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33168194346](https://github.com/openclaw/clawsweeper/actions/runs/33168194346)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/131711

## Summary

Issue #131711 remains reproducible on main c85129f85507b5f2e6c3bd0ce4ede29e1420195a. The real embedded queue handle omits its abortability state, allowing a completed/finalizing reply to be treated as abortable; a later chat.abort then persists a duplicate abort transcript entry. A narrow new fix PR is appropriate, but this checkout is read-only: the mandatory direct ../codex source inspection and focused test execution cannot be completed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | Codex fix worker timed out after 1800000ms |
| issue_implementation_status_comment | updated | #131711 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #131711 | fix_needed | blocked | canonical | Implementation is blocked only by this immutable worker environment: ../codex is absent and cannot be cloned into the read-only parent directory, and pnpm install failed twice because Corepack cannot create its cache. The focused Vitest command consequently cannot find tsx. |
| #110922 | keep_closed | skipped | related | Closed historical reference; no mutation is valid or needed. |
| cluster:issue-openclaw-openclaw-131711 | build_fix_artifact | planned | canonical | A new focused PR is the canonical fix path; do not change the persisted schema or add a fallback. |

## Needs Human

- Provide a writable repair checkout (including writable Corepack cache) with ../codex available, or otherwise supply direct Codex runtime/protocol source access, so the mandatory Codex gate and focused regression validation can be completed before opening the PR.
