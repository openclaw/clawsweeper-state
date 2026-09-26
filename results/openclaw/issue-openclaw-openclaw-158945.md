---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158945"
mode: "autonomous"
run_id: "36250360533"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36250360533"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T15:39:53.422Z"
canonical: "https://github.com/openclaw/openclaw/issues/158945"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158945"
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

# issue-openclaw-openclaw-158945

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36250360533](https://github.com/openclaw/clawsweeper/actions/runs/36250360533)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/158945

## Summary

Current main (785fdcaa54574186236343ccf3f98680083bf459) contains the reported target mismatch: Claude CLI passes currentChannelId, while native and ACP thread binding derive the requester conversation from agentTo. Implementation and a failing composition test are blocked because this checkout is read only and has no installed dependencies.

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
| #158945 | fix_needed | planned | canonical | The source path supports a narrow bug fix, pending the required failing composition regression on a writable executor. |
| cluster:issue-openclaw-openclaw-158945 | build_fix_artifact | blocked |  | A writable checkout with dependencies is required before the executor can reproduce, patch, and validate the real flow. |

## Needs Human

- none
