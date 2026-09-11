---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-145070"
mode: "autonomous"
run_id: "34623450073"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34623450073"
head_sha: "e74b07a40a6ecb1c9743e17201ecca0d6114bce5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-11T17:31:38.464Z"
canonical: "https://github.com/openclaw/openclaw/issues/145070"
canonical_issue: "https://github.com/openclaw/openclaw/issues/145070"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-145070

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34623450073](https://github.com/openclaw/clawsweeper/actions/runs/34623450073)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/145070

## Summary

Confirmed the reported inspection mismatch on preflight main 170b4827c8a8c5f34192b7785eb751e30612b995. Narrow fix artifact prepared; implementation and runtime reproduction are blocked by the read-only checkout and missing dependencies. No files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #145070 | fix_needed | planned | canonical | Doctor completion uses a runtime inspection that cannot satisfy the existing Linux identity contract. |
| #137377 | keep_closed | skipped | related | Historical Windows evidence does not establish resolution of the Linux defect. |
| #138934 | keep_related | planned | related | Different platform and failure sequence; the Linux Doctor caller repair does not cover this report. |
| #140908 | keep_related | planned | related | Distinct reproduction and unresolved cause; retain as a separate investigation. |
| cluster:issue-openclaw-openclaw-145070 | build_fix_artifact | planned |  | Prepare a narrow caller repair, with reproduction and unloaded-unit authority checks required before publication. |
| cluster:issue-openclaw-openclaw-145070 | open_fix_pr | blocked |  | The executor needs a writable isolated checkout with dependencies and an isolated Linux user-systemd environment before implementing, validating, and opening the PR. |

## Needs Human

- none
