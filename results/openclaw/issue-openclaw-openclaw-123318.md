---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123318"
mode: "autonomous"
run_id: "32347769267"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32347769267"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T08:28:03.074Z"
canonical: "https://github.com/openclaw/openclaw/issues/123318"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123318"
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

# issue-openclaw-openclaw-123318

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32347769267](https://github.com/openclaw/clawsweeper/actions/runs/32347769267)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123318

## Summary

#123318 remains a narrow stable/beta git-updater defect on current main. The required implementation and real-Git proof are blocked by this read-only checkout and absent sibling Codex checkout; a ready-to-execute narrow fix artifact is provided.

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
| #123318 | keep_canonical | planned | canonical | Open canonical issue with no hydrated candidate PR. |
| cluster:issue-openclaw-openclaw-123318 | fix_needed | blocked | canonical | Implementation and validation require a writable checkout with the mandated sibling Codex source available. |
| cluster:issue-openclaw-openclaw-123318 | build_fix_artifact | planned | canonical | Narrow, writable-executor implementation plan prepared. |

## Needs Human

- none
