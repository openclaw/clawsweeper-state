---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-150298"
mode: "autonomous"
run_id: "35150903792"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35150903792"
head_sha: "f48f1cee58c5ac867114cc77fb088b172aa4e9a9"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-16T21:15:34.921Z"
canonical: "https://github.com/openclaw/openclaw/issues/150298"
canonical_issue: "https://github.com/openclaw/openclaw/issues/150298"
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

# issue-openclaw-openclaw-150298

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35150903792](https://github.com/openclaw/clawsweeper/actions/runs/35150903792)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/150298

## Summary

Source confirms the Space-key defect on preflight main. Narrow fix artifact prepared; implementation, executable regression proof, and screenshots are blocked locally by the read-only host and missing dependencies. No files or GitHub state changed.

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
| #150298 | fix_needed | planned | canonical | A narrow existing-behavior repair is supported by source. The executor must demonstrate the failing registered-route regression before editing production code. |
| #103986 | keep_closed | skipped | related | Historical context only; no closure or broader feature work is proposed. |
| #130208 | keep_closed | skipped | related | Historical keyboard-contract context, not an open duplicate target. |
| cluster:issue-openclaw-openclaw-150298 | build_fix_artifact | planned | canonical | Prepare one executor-owned fix PR after reproduction, focused validation, fresh review, and required screenshot delivery. No merge or issue closure is authorized. |

## Needs Human

- none
