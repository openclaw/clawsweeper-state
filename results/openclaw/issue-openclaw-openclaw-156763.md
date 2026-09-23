---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-156763"
mode: "plan"
run_id: "35930947718"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35930947718"
head_sha: "4233d61c38cd30e6c2fdfbd8ac140f7fba2bcc9e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-23T23:00:44.407Z"
canonical: "#156763"
canonical_issue: "#156763"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-156763

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35930947718](https://github.com/openclaw/clawsweeper/actions/runs/35930947718)

Workflow conclusion: success

Worker result: planned

Canonical: #156763

## Summary

Current main contains both reported refusal messages, and config patch registers --replace-path instead of --merge or --replace. The fix is ready to implement after an isolated CLI reproduction. No code was changed or tests run in plan mode.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #156763 | fix_needed | planned | canonical | Reproduce both refusals through the CLI, then make the guidance command-aware while retaining the destructive-write guard and config set wording. |

## Needs Human

- none
