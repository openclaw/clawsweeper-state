---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32555594373"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32555594373"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-22T06:05:54.983Z"
canonical: "https://github.com/openclaw/openclaw/issues/124689"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124689"
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

# issue-openclaw-openclaw-124689

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32555594373](https://github.com/openclaw/clawsweeper/actions/runs/32555594373)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/124689

## Summary

A narrow fix PR is warranted: the auth-probe catalog fallback ignores deprecated/disabled status and can select deprecated ollama-cloud/kimi-k2.5. No files changed because this checkout is read-only and lacks dependencies; planned validation is blocked before execution by Corepack EROFS.

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
| #124689 | fix_needed | planned | canonical | Current main reproduces the selection defect by source: non-Anthropic catalog rows share priority 50, so the deprecated first row is selected. Explicit configured candidates already return before the fallback. |
| cluster:issue-openclaw-openclaw-124689 | build_fix_artifact | planned |  | Create the one narrow credited implementation PR on clawsweeper/issue-openclaw-openclaw-124689 after dependency installation and the required Codex sibling-source audit. |

## Needs Human

- none
