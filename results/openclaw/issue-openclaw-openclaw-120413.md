---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120413"
mode: "autonomous"
run_id: "31238109134"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31238109134"
head_sha: "985651bf6642e630964b8aab69f0f00e23700f33"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-08T03:57:08.824Z"
canonical: "https://github.com/openclaw/openclaw/issues/120413"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120413"
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

# issue-openclaw-openclaw-120413

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31238109134](https://github.com/openclaw/clawsweeper/actions/runs/31238109134)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120413

## Summary

Issue #120413 remains a reproducible, non-security CLI routing defect. Current checked-out main still sends targeted config set and patch through Doctor preflight; a narrow new fix PR is planned. The supplied preflight confirms the issue is open and has no actionable human or third-party review-bot blockers.

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
| #120413 | fix_needed | planned | canonical | Targeted config mutations should validate and write only their requested change; explicit doctor --fix remains the migration owner. |
| cluster:issue-openclaw-openclaw-120413 | build_fix_artifact | planned |  | A narrow, credited new fix PR is appropriate; no viable implementation PR is hydrated. |

## Needs Human

- none
