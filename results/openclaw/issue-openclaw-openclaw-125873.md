---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "32660918633"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32660918633"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T19:33:09.008Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32660918633](https://github.com/openclaw/clawsweeper/actions/runs/32660918633)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125873

## Summary

#125873 remains a real, narrow Bedrock replay bug: persisted tool-call arguments reach Converse `toolUse.input` unchanged. A two-file fix is planned, but this read-only checkout has no dependencies and the mandatory sibling `../codex` source is absent, so no branch, regression test, validation, or PR can be safely produced here.

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
| #125873 | fix_needed | planned | canonical | Historical or otherwise malformed persisted arguments bypass the producer-side validation and poison subsequent Bedrock requests. |
| cluster:issue-openclaw-openclaw-125873 | build_fix_artifact | planned | canonical | The repair is a narrow owner-boundary reuse with one captured Converse payload regression. |
| cluster:issue-openclaw-openclaw-125873 | open_fix_pr | blocked | canonical | Implementation requires a writable checkout with dependencies and the required sibling Codex source inspection before a PR can be opened. |

## Needs Human

- none
