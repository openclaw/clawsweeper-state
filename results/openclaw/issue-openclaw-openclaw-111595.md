---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-111595"
mode: "plan"
run_id: "35911049896"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35911049896"
head_sha: "549143746fd2f0012b31121b8996c74ddee8afd9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-23T19:48:54.948Z"
canonical: "#111595"
canonical_issue: "#111595"
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

# issue-openclaw-openclaw-111595

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35911049896](https://github.com/openclaw/clawsweeper/actions/runs/35911049896)

Workflow conclusion: success

Worker result: planned

Canonical: #111595

## Summary

At the preflight main SHA, catalog grouping still uses the folded cwd spelling as its key. Plan a narrow Windows identity fix, preserve the prior contributor’s credit, and validate the preference lifecycle before opening one fix PR. No code or GitHub mutation was performed.

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
| #111595 | fix_needed | planned | canonical | The reported bug remains in the current grouping path; no open candidate PR is hydrated. |
| #111596 | keep_closed | skipped | related | Use this contributor work as implementation and credit context; no closure action is valid. |
| #137115 | keep_related | planned | related | The Windows spelling fix does not decide whether distinct projectless directories should share a group. |
| #144427 | keep_closed | skipped | related | This broader historical PR does not own the narrow Windows spelling repair. |
| clawsweeper/issue-openclaw-openclaw-111595 | build_fix_artifact | planned |  | First recheck active PR ownership and coordinate with assignee vincentkoc; then implement and validate the fix. |
| clawsweeper/issue-openclaw-openclaw-111595 | open_fix_pr | planned |  | Open or update one PR only after the regression fails before the fix, the repaired branch passes required checks and review, and sanitized before/after screenshots are ready. |

## Needs Human

- none
