---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124952"
mode: "autonomous"
run_id: "32411773029"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32411773029"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T21:11:01.400Z"
canonical: "https://github.com/openclaw/openclaw/issues/124952"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124952"
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

# issue-openclaw-openclaw-124952

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32411773029](https://github.com/openclaw/clawsweeper/actions/runs/32411773029)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124952

## Summary

Latest main has the Doctor migration gap by source inspection, but this read-only environment cannot create the required branch or run pnpm validation. The mandatory sibling Codex checkout is also absent.

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
| #124952 | fix_needed | planned | canonical | A narrow Doctor-owned repair is required. |
| cluster:issue-openclaw-openclaw-124952 | build_fix_artifact | planned | canonical | Create a new narrow fix PR from a writable checkout after the Codex gate is satisfied. |
| #80408 | keep_closed | skipped | related | Already closed; historical context only. |
| #80413 | keep_closed | skipped | related | Already closed; historical context only. |

## Needs Human

- none
