---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119484"
mode: "plan"
run_id: "36570683792"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36570683792"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-29T12:54:09.062Z"
canonical: "#119484"
canonical_issue: "#119484"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36570683792](https://github.com/openclaw/clawsweeper/actions/runs/36570683792)

Workflow conclusion: success

Worker result: planned

Canonical: #119484

## Summary

Current main still writes LF-only .cmd/.bat content through the agent write, edit, and apply-patch paths. The job’s restart-helper.ts no longer exists; the current Windows scheduled-task restart path already uses CRLF and the launcher encoder. Plan one focused agent-file fix and retain the prior contributor’s credit. No code, branch, or GitHub state was changed.

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
| #119484 | build_fix_artifact | planned | canonical | Reproduce the byte-level defect through the registered agent tools, then normalize batch-file output at their existing mutation boundaries. Keep other file types’ behavior. |
| #119540 | keep_closed | skipped | superseded | Historical source work only. Preserve attribution in the new fix PR. |

## Needs Human

- none
