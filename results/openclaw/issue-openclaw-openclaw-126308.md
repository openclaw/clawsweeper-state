---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126308"
mode: "autonomous"
run_id: "32257653213"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32257653213"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-19T13:42:56.539Z"
canonical: "#126308"
canonical_issue: "#126308"
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

# issue-openclaw-openclaw-126308

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32257653213](https://github.com/openclaw/clawsweeper/actions/runs/32257653213)

Workflow conclusion: success

Worker result: blocked

Canonical: #126308

## Summary

Confirmed #126308 is a current-main schema gap: Doctor strips the runtime-supported flag because strict ModelCompatSchema omits it. No code or GitHub changes were possible in this read-only, dependency-less sandbox.

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
| #126308 | fix_needed | planned | canonical | Add the existing optional boolean to the schema and an owner-boundary Doctor regression; no closure or merge is authorized. |
| #126308 | build_fix_artifact | planned | canonical | A writable worker must implement and validate the narrow patch before opening the permitted PR. |
| #126308 | open_fix_pr | blocked | canonical | Cannot create the required branch or establish failing/passing test proof here. |

## Needs Human

- none
