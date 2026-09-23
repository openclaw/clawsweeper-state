---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-111595"
mode: "autonomous"
run_id: "35906795193"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35906795193"
head_sha: "549143746fd2f0012b31121b8996c74ddee8afd9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-23T19:39:09.154Z"
canonical: "https://github.com/openclaw/openclaw/issues/111595"
canonical_issue: "https://github.com/openclaw/openclaw/issues/111595"
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

# issue-openclaw-openclaw-111595

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35906795193](https://github.com/openclaw/clawsweeper/actions/runs/35906795193)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/111595

## Summary

Plan an issue-scoped fix PR. The checkout matches the preflight main SHA. A read-only probe of the current grouping owner produced two groups for equivalent Windows paths and for an uppercase worktree marker. No code or GitHub state was changed; the failing regression, UI proof, and validation remain execution gates.

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
| #111595 | fix_needed | planned | canonical | Keep the issue open while the job-owned branch implements and validates the narrow repair. |
| #111596 | keep_closed | skipped | related | Use the prior work as a credited source during implementation. Its closed state requires no close action. |
| #137115 | keep_related | planned | related | This is distinct from comparing equivalent spellings of one Windows path. Keep its separate decision open. |
| #144427 | keep_closed | skipped | related | Historical work in the same UI area does not replace this issue's narrow repair. |

## Needs Human

- none
