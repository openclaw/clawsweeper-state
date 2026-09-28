---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "36451124724"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36451124724"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T17:25:23.678Z"
canonical: "https://github.com/openclaw/openclaw/issues/125873"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125873"
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

# issue-openclaw-openclaw-125873

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36451124724](https://github.com/openclaw/clawsweeper/actions/runs/36451124724)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125873

## Summary

The defect remains in the inspected checkout at main d9569745764fa53d540dbfe3a0b536975bc69a7d: Bedrock forwards stored tool-call arguments to toolUse.input without runtime coercion. A narrow fix path is identified, but this read-only checkout has no installed dependencies, so I could not establish the required failing runtime regression, edit the branch, or validate a PR.

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
| #125873 | fix_needed | planned | canonical | The outbound Bedrock conversion still needs a provider-scoped repair. |
| cluster:issue-openclaw-openclaw-125873 | build_fix_artifact | planned |  | Establish a failing Bedrock outbound replay test before applying the shared coercion helper. |
| cluster:issue-openclaw-openclaw-125873 | open_fix_pr | blocked |  | The required failing regression, patch, local validation, and PR branch cannot be produced in this worker environment. |

## Needs Human

- none
