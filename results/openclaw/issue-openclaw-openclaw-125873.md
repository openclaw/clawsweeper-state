---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125873"
mode: "autonomous"
run_id: "32661416013"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32661416013"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T19:46:15.949Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32661416013](https://github.com/openclaw/clawsweeper/actions/runs/32661416013)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125873

## Summary

#125873 is a confirmed narrow Bedrock replay-boundary bug on current main. The planned repair reuses the existing public coercion helper and adds one captured-Converse-payload regression. Implementation and validation are blocked only because this worker sandbox is read-only, has no installed dependencies, and lacks the required sibling ../codex checkout for the repository's Codex gate.

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
| #125873 | fix_needed | blocked | canonical | A writable executor with dependencies and the required ../codex checkout must apply and validate the narrow repair. |
| cluster:issue-openclaw-openclaw-125873 | build_fix_artifact | planned | canonical | The fix is a one-line replay-boundary normalization plus a focused behavioral regression. |
| #21873 | keep_closed | skipped | related | Already closed; no closure or mutation is permitted. |
| #126391 | keep_closed | skipped | related | Already merged and complementary, not a fix for the replay defect. |

## Needs Human

- none
