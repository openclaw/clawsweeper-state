---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-149569"
mode: "autonomous"
run_id: "35044854890"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35044854890"
head_sha: "9d984f1259333dcc67c3689f467e04a254c30cff"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-16T01:44:07.310Z"
canonical: "https://github.com/openclaw/openclaw/issues/149569"
canonical_issue: "https://github.com/openclaw/openclaw/issues/149569"
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

# issue-openclaw-openclaw-149569

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35044854890](https://github.com/openclaw/clawsweeper/actions/runs/35044854890)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/149569

## Summary

Source confirms the defect on preflight main. A narrow fix artifact is ready; implementation and command reproduction are blocked by the read-only host and missing dependencies/build output. No files or GitHub state changed.

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
| #149569 | fix_needed | blocked | canonical | The source-supported bug remains actionable. Only local implementation and runtime proof are blocked; the executor must establish the failing reproduction before changing production code. |
| cluster:issue-openclaw-openclaw-149569 | build_fix_artifact | planned |  | A two-file repair can restore documented behavior without adding configuration, changing security policy, or redesigning terminal lifecycle. |

## Needs Human

- none
