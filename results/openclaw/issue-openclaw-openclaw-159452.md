---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159452"
mode: "plan"
run_id: "36301187338"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36301187338"
head_sha: "f5b521426512c17d5036a6589004a2509bc9f937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-27T06:51:42.106Z"
canonical: "#159452"
canonical_issue: "#159452"
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

# issue-openclaw-openclaw-159452

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36301187338](https://github.com/openclaw/clawsweeper/actions/runs/36301187338)

Workflow conclusion: success

Worker result: planned

Canonical: #159452

## Summary

At the preflight main SHA, implicit daily and idle rollover rebuilds the session entry without its workspace binding, while worker placement requires that binding. This is a narrow fix candidate. No regression test, code change, or validation was run in plan mode; the failing regression is the first implementation gate.

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
| #159452 | fix_needed | planned | canonical | Reproduce through session initialization and worker placement before editing. Preserve workspace bindings only across implicit rollover, and retain worker ownership checks and explicit plain New Chat detachment. |
| #159304 | route_security | planned | security_sensitive | Keep this separate from the automatic rollover defect and route it to central security handling. |

## Needs Human

- none
