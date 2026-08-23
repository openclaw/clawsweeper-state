---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "32658257878"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32658257878"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T18:40:13.009Z"
canonical: "https://github.com/openclaw/openclaw/issues/125873"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125873"
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

# issue-openclaw-openclaw-125873

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32658257878](https://github.com/openclaw/clawsweeper/actions/runs/32658257878)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125873

## Summary

Confirmed current-main replay defect: Bedrock forwards persisted toolCall.arguments unchanged at extensions/amazon-bedrock/stream.runtime.ts:1011, despite the exported canonical coercion helper. A narrow two-file fix is planned, but this worker cannot write or validate it: the sandbox is read-only, dependencies are absent, and required sibling ../codex source is unavailable.

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
| #125873 | fix_needed | blocked | canonical | Implementation is warranted and narrow, but this read-only worker cannot modify the target branch or install the pinned package manager/dependencies. |
| cluster:issue-openclaw-openclaw-125873 | build_fix_artifact | planned | canonical | Executor can create one narrow fix PR once a writable checkout with dependencies and required Codex source inspection is available. |
| #21873 | keep_closed | skipped | related | Already closed; historical sibling only. |
| #126391 | keep_closed | skipped | related | Already merged historical context; preserve its producer-side validation. |

## Needs Human

- none
