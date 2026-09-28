---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-160672"
mode: "autonomous"
run_id: "36475432283"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36475432283"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-28T20:54:03.771Z"
canonical: "https://github.com/openclaw/openclaw/issues/160672"
canonical_issue: "https://github.com/openclaw/openclaw/issues/160672"
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

# issue-openclaw-openclaw-160672

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36475432283](https://github.com/openclaw/clawsweeper/actions/runs/36475432283)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/160672

## Summary

Current main still gives each Active Memory recall a unique session key, which reaches the Claude CLI system prompt. A narrow fix should keep unique storage identities while giving repeated recalls a stable, truthful prompt identity. The executor must prove the outgoing prompt bytes before and after the change.

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
| #160672 | fix_needed | planned | canonical | The merged Claude CLI cache work does not remove this Active Memory generated prompt difference. |
| #143017 | keep_related | planned | related | The reports share a cache symptom but have distinct owners and remaining work. |
| #124300 | keep_closed | skipped | related | Historical context only; the PR does not cover Active Memory's generated recall key. |
| cluster:issue-openclaw-openclaw-160672 | build_fix_artifact | planned |  | The executor should establish the failing prompt comparison, implement the narrow fix, and validate it before opening or updating the issue branch. |

## Needs Human

- none
