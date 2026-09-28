---
repo: "openclaw/peekaboo"
cluster_id: "issue-openclaw-peekaboo-861"
mode: "autonomous"
run_id: "36407377321"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36407377321"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-28T10:07:44.015Z"
canonical: "https://github.com/openclaw/Peekaboo/issues/861"
canonical_issue: "https://github.com/openclaw/Peekaboo/issues/861"
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

# issue-openclaw-peekaboo-861

Repo: openclaw/peekaboo

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36407377321](https://github.com/openclaw/clawsweeper/actions/runs/36407377321)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/Peekaboo/issues/861

## Summary

Issue #861 is actionable on main f0d5b751. The Dock manager applies .regular before loading the saved menu-bar-only preference. Plan a narrow Mac app fix and regression test; no code or GitHub state was changed.

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
| #861 | fix_needed | planned | canonical | A saved false preference can encounter the reported premature .regular activation-policy call on launch. |
| cluster:issue-openclaw-peekaboo-861 | build_fix_artifact | planned |  | Prepare the narrow fix for the executor. |

## Needs Human

- none
