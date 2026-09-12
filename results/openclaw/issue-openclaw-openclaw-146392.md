---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-146392"
mode: "autonomous"
run_id: "34716653527"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34716653527"
head_sha: "4d43f8f5a62215e41ba180930e2ee72f21bf5ace"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-12T21:11:23.150Z"
canonical: "https://github.com/openclaw/openclaw/issues/146392"
canonical_issue: "https://github.com/openclaw/openclaw/issues/146392"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-146392

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34716653527](https://github.com/openclaw/clawsweeper/actions/runs/34716653527)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/146392

## Summary

Confirmed the PDF catalog omission on preflight main a0cd0b81391c73885079799ea80f4351c85552b8. Prepared a narrow fix plan. Local implementation is blocked by the read-only host; focused tests and changed-scope inspection failed before running because dependencies are missing. No files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #146392 | fix_needed | planned | canonical | The source supports a narrow metadata repair. Executor must establish the failing regression on current main before implementation; local runtime reproduction and Doctor availability comparison remain unverified. |
| #42726 | keep_closed | skipped | related | Historical context only. |
| #43091 | keep_closed | skipped | related | Not an open repair candidate. |
| #45269 | keep_closed | skipped | related | Provider and runtime selection are outside this PDF metadata repair. |
| #57664 | keep_closed | skipped | related | Historical context only; preserve profile suppression behavior. |
| #77801 | keep_closed | skipped | related | Historical context only; preserve declared-plugin diagnostics. |
| cluster:issue-openclaw-openclaw-146392 | build_fix_artifact | planned |  | Artifact preparation is complete; editing, dependency installation, runtime reproduction, and repaired-branch validation require the writable executor. |

## Needs Human

- none
