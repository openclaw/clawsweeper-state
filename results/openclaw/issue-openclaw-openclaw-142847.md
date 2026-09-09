---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-142847"
mode: "autonomous"
run_id: "34314358536"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34314358536"
head_sha: "6c7e5199956c52ef143e22ad475359f00b8bb5c0"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-09T05:25:11.798Z"
canonical: "https://github.com/openclaw/openclaw/issues/142847"
canonical_issue: "https://github.com/openclaw/openclaw/issues/142847"
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

# issue-openclaw-openclaw-142847

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34314358536](https://github.com/openclaw/clawsweeper/actions/runs/34314358536)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/142847

## Summary

Confirmed the reported serialization gap on preflight main. Prepared a narrow fix plan; implementation and required native Windows reproduction are blocked by this read-only Linux environment. No files or GitHub items changed.

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
| #142847 | fix_needed | planned | canonical | The issue remains source-supported and needs a focused repair. Native reproduction must precede production edits. |
| #133185 | keep_closed | skipped | related | Historical related repair with a different serialization contract. |
| #65724 | keep_closed | skipped | related | Historical context only. |
| cluster:issue-openclaw-openclaw-142847 | build_fix_artifact | planned | canonical | Planning can proceed; implementation requires a writable executor and native Windows proof. Do not open a fix PR if the original defect cannot be reproduced on refreshed main. |

## Needs Human

- none
