---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119484"
mode: "plan"
run_id: "36579333441"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36579333441"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-29T16:04:47.868Z"
canonical: "https://github.com/openclaw/openclaw/issues/119484"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119484"
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

# issue-openclaw-openclaw-119484

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36579333441](https://github.com/openclaw/clawsweeper/actions/runs/36579333441)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119484

## Summary

Plan a focused CRLF fix for agent-created and edited .cmd/.bat files. Current main still passes batch content through the write, edit, and patch paths without batch-specific normalization. The named update restart helper is absent; the active Windows task restart writer already uses CRLF and the launcher encoder. No code or GitHub state was changed, and validation remains to be run.

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
| https://github.com/openclaw/openclaw/issues/119484 | fix_needed | planned | canonical | Keep the issue open while the replacement implementation is reproduced, validated, and reviewed. |
| https://github.com/openclaw/openclaw/pull/119540 | keep_closed | skipped | related | Use the closed PR as source work and preserve contributor credit in the new fix PR. |

## Needs Human

- none
