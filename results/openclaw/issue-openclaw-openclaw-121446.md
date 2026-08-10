---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-121446"
mode: "autonomous"
run_id: "31363526692"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31363526692"
head_sha: "e699e83d2707b9fc33d7ec6265f577c5bfcad1c8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-10T06:56:50.370Z"
canonical: "https://github.com/openclaw/openclaw/issues/121446"
canonical_issue: "https://github.com/openclaw/openclaw/issues/121446"
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

# issue-openclaw-openclaw-121446

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31363526692](https://github.com/openclaw/clawsweeper/actions/runs/31363526692)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/121446

## Summary

#121446 is the open canonical Slack bug: Slack account listing retains an implicit root-backed default account, while SecretRef collection currently omits that owner when named accounts override the root credentials. Plan a narrow credited fix PR; keep the closed Feishu issue as historical context and quarantine the closed security-sensitive PR separately.

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
| #96929 | keep_closed | skipped | related | Already closed; no closure or mutation is valid for this context issue. |
| #96935 | route_security | planned | security_sensitive | Quarantined from ClawSweeper Repair; no code, comment, close, or merge action is planned for this item. |
| #121446 | fix_needed | planned | canonical | No viable open contributor PR exists; create one narrow Slack-local fix path. |
| cluster:issue-openclaw-openclaw-121446 | build_fix_artifact | planned | canonical | Build the approved narrow fix artifact for the canonical open issue. |

## Needs Human

- none
