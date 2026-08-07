---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120207"
mode: "plan"
run_id: "31176805747"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31176805747"
head_sha: "f6f6bfca7d65aa54eec9daa82ab84cda9ad6e0e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-07T12:12:26.565Z"
canonical: "#120207"
canonical_issue: "#120207"
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

# issue-openclaw-openclaw-120207

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31176805747](https://github.com/openclaw/clawsweeper/actions/runs/31176805747)

Workflow conclusion: success

Worker result: planned

Canonical: #120207

## Summary

#120207 remains a reproducible non-security CLI live-session bug on current main. Plan a new narrow fix PR; quarantine #120218 because its hydrated PR is security-sensitive and includes unrelated OAuth work.

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
| #120207 | keep_canonical | planned | canonical | Canonical issue for the buffered Claude CLI live-session output loss. |
| #108315 | keep_related | planned | related | Related timeout-origin investigation; it is not a duplicate of the terminal-output-loss bug. |
| #120218 | route_security | planned | security_sensitive | Quarantine this exact PR for central OpenClaw security handling; do not merge, repair, or use it as the canonical fix. |
| cluster:issue-openclaw-openclaw-120207 | fix_needed | planned | canonical | A new narrow, non-security fix path is needed. |
| cluster:issue-openclaw-openclaw-120207 | build_fix_artifact | planned | canonical | Create a replacement fix artifact for the canonical non-security bug. |

## Needs Human

- none
