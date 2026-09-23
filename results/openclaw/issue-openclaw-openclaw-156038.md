---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-156038"
mode: "plan"
run_id: "35812407000"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35812407000"
head_sha: "258a5b1fa2545fda1da64b64324afceeaff8f71d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-23T03:01:51.211Z"
canonical: "#156038"
canonical_issue: "#156038"
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

# issue-openclaw-openclaw-156038

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35812407000](https://github.com/openclaw/clawsweeper/actions/runs/35812407000)

Workflow conclusion: success

Worker result: planned

Canonical: #156038

## Summary

Source inspection confirms the CLI hook gap at preflight main 31e6c4514881c7cfc4cb1755a2e7eadc2928a2c5. Plan one narrow implementation PR. No files or GitHub state changed; runtime reproduction, tests, native proof, and review remain pending.

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
| #156038 | fix_needed | planned | canonical | Restore the existing hook contract through the shared CLI entry point. No hydrated PR provides a viable narrow fix. |
| #153856 | keep_related | planned | related | Related hook surface, but a distinct feature proposal. Do not adopt, replace, or require this PR for the CLI invocation repair. |
| #57941 | keep_closed | skipped | related | Historical contract evidence; it does not establish CLI hook invocation. |
| #62152 | keep_closed | skipped | related | Historical feature request; keyword-routing policy is outside this repair. |
| #62153 | keep_closed | skipped | related | Historical context only; do not revive its configuration or implementation. |

## Needs Human

- none
