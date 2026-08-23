---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "32657907711"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32657907711"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T18:34:31.650Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32657907711](https://github.com/openclaw/clawsweeper/actions/runs/32657907711)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125873

## Summary

#125873 has a narrow replay-boundary fix: Bedrock forwards persisted tool-call arguments unchanged. Implementation and executable validation are blocked because this read-only checkout has no dependencies and the required ../codex inspection checkout is absent.

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
| #125873 | fix_needed | planned | canonical | No viable open PR exists; the canonical issue needs a new narrow fix PR. |
| #21873 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #126391 | keep_closed | skipped | related | Already merged; preserve its validation unchanged. |
| cluster:issue-openclaw-openclaw-125873 | build_fix_artifact | blocked |  | The repair plan is deterministic, but this worker cannot produce or validate a branch delta in the supplied environment. |

## Needs Human

- none
