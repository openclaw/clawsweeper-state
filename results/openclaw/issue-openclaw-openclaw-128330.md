---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128330"
mode: "autonomous"
run_id: "32658956988"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32658956988"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T18:53:30.888Z"
canonical: "https://github.com/openclaw/openclaw/issues/128330"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128330"
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

# issue-openclaw-openclaw-128330

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32658956988](https://github.com/openclaw/clawsweeper/actions/runs/32658956988)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/128330

## Summary

Confirmed on main d9162726: CLI metadata loading provides an empty runtime, while Diffs full registration dereferences runtime.state. A Diffs-owned no-op cli-metadata entry is the narrow repair. No files or GitHub state were changed because this checkout is read-only, dependencies cannot install, and the required sibling Codex checkout is unavailable.

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
| #128330 | fix_needed | planned | canonical | Open canonical bug with a source-proven, Diffs-owned repair; no viable implementation PR is hydrated. |
| cluster:issue-openclaw-openclaw-128330 | build_fix_artifact | planned | canonical | Narrow new-fix-PR plan ready for an editable checkout. |
| cluster:issue-openclaw-openclaw-128330 | open_fix_pr | blocked | canonical | Implementation and PR creation require an editable checkout with dependencies and the required Codex sibling source. |

## Needs Human

- none
