---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126227"
mode: "autonomous"
run_id: "32226102042"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32226102042"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T07:13:46.292Z"
canonical: "https://github.com/openclaw/openclaw/issues/126227"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126227"
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

# issue-openclaw-openclaw-126227

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32226102042](https://github.com/openclaw/clawsweeper/actions/runs/32226102042)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126227

## Summary

Confirmed on current main: both named conversion producers let a JSON-parsed own enumerable __proto__ replace a fresh Error prototype. A narrow fix artifact is ready, but this read-only checkout cannot install the missing test runtime, edit the branch, or satisfy the required ../codex inspection gate.

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
| #126227 | fix_needed | blocked | canonical | The bug is source-reproduced, but branch repair and required test validation are blocked by the read-only checkout and absent dependencies. |
| cluster:issue-openclaw-openclaw-126227 | build_fix_artifact | planned | canonical | A writable executor can apply this narrow two-owner repair on clawsweeper/issue-openclaw-openclaw-126227. |

## Needs Human

- none
