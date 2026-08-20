---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32342363081"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32342363081"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T07:14:20.311Z"
canonical: "https://github.com/openclaw/openclaw/issues/95840"
canonical_issue: "https://github.com/openclaw/openclaw/issues/95840"
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

# issue-openclaw-openclaw-95840

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32342363081](https://github.com/openclaw/clawsweeper/actions/runs/32342363081)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

Confirmed on main 689ab6ec: direct OpenAI has no provider cache-TTL hook, so core falls through to false and skips both pruning setup and the post-attempt marker. The narrow provider-owned repair is planned, but this workspace is read-only and lacks the mandatory sibling ../codex source checkout; focused tests also cannot initialize Corepack on the read-only filesystem.

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
| #95840 | fix_needed | planned | canonical | A small provider-owned hook fixes the established cache-TTL behavior without changing OpenRouter or core fallback policy. |
| #95610 | keep_related | planned | related | Related OpenAI cache-efficiency report with a different root cause and fix surface. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | blocked |  | Artifact is ready for a writable executor with the required Codex checkout; no code or GitHub mutations were made. |

## Needs Human

- none
