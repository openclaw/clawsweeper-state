---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124952"
mode: "autonomous"
run_id: "32341160056"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32341160056"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T06:59:09.001Z"
canonical: "https://github.com/openclaw/openclaw/issues/124952"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124952"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-124952

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32341160056](https://github.com/openclaw/clawsweeper/actions/runs/32341160056)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124952

## Summary

#124952 is the open canonical bug. Current main’s Doctor runtime-ref normalizer migrates `model` and `models`, but not `modelPolicy.allow`; the allowlist therefore retains legacy runtime-qualified refs while model selection enforces canonical keys. A narrow repair plan is prepared, but implementation is blocked in this read-only worker because the mandatory sibling `../codex` source checkout is absent and cannot be cloned/inspected here.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 |
| issue_implementation_status_comment | updated | #124952 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #124952 | fix_needed | blocked | canonical | The repair is narrowly defined but cannot be implemented by this worker until the repository-required direct Codex source gate is satisfied. |
| #80408 | keep_closed | skipped | superseded | Already closed historical context; no mutation is permitted or needed. |
| #80413 | keep_closed | skipped | superseded | Already closed historical context; no mutation is permitted or needed. |
| cluster:issue-openclaw-openclaw-124952 | build_fix_artifact | planned | canonical | Prepared a narrow new-PR plan; executor must first satisfy the direct Codex source gate. |

## Needs Human

- none
