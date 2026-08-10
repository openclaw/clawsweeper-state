---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-97067"
mode: "autonomous"
run_id: "31363357673"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31363357673"
head_sha: "e699e83d2707b9fc33d7ec6265f577c5bfcad1c8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-10T07:01:08.966Z"
canonical: "https://github.com/openclaw/openclaw/issues/97067"
canonical_issue: "https://github.com/openclaw/openclaw/issues/97067"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-97067

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31363357673](https://github.com/openclaw/clawsweeper/actions/runs/31363357673)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/97067

## Summary

#97067 is a current, narrow prompt-assembly bug. Plan a new credited fix PR: suppress user-role inbound context only for synthetic heartbeat runs while retaining their delivery-route facts. No code was changed in this read-only checkout; focused baseline validation is blocked because tsx is absent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #97067 | fix_needed | planned | canonical | Open canonical issue; no viable open implementation PR exists. |
| #97072 | keep_closed | skipped | superseded | Already closed; no close or mutation is valid. |
| #97076 | keep_closed | skipped | superseded | Already closed; no close or mutation is valid. |
| cluster:issue-openclaw-openclaw-97067 | build_fix_artifact | planned | canonical | A narrow new PR is appropriate; implementation must be performed by the write-capable executor. |
| cluster:issue-openclaw-openclaw-97067 | open_fix_pr | planned | canonical | Job authorizes one new fix PR and forbids merge or issue closure. |

## Needs Human

- none
