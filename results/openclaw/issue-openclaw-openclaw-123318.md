---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123318"
mode: "autonomous"
run_id: "32397743619"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32397743619"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T17:41:34.046Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32397743619](https://github.com/openclaw/clawsweeper/actions/runs/32397743619)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123318

## Summary

Current main aafa61be still aborts stable/beta Git updates on a recreated tag: the release fetch lacks force-refresh before channel-tag resolution. The narrow repair is to add `--force` only to that release fetch and add a regression fixture. Implementation is blocked in this worker because the checkout is read-only and required sibling `../codex` source is absent, so it cannot create or validate the branch locally.

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
| #86218 | keep_closed | skipped | related | Already closed; no mutation is allowed or needed. |
| #119098 | keep_closed | skipped | independent | Already closed and independent from this tag-fetch repair. |
| #123318 | fix_needed | blocked | canonical | The source evidence supports a narrow bug fix, but this worker cannot edit or validate the required branch in the read-only checkout. |
| cluster:issue-openclaw-openclaw-123318 | build_fix_artifact | planned | canonical | A narrow replacement PR can be built by the executor after restoring a writable checkout and completing the mandatory direct Codex inspection. |

## Needs Human

- none
