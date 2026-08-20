---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126631"
mode: "autonomous"
run_id: "32357492701"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32357492701"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-20T10:18:25.173Z"
canonical: "https://github.com/openclaw/openclaw/issues/126631"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126631"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-126631

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32357492701](https://github.com/openclaw/clawsweeper/actions/runs/32357492701)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/126631

## Summary

Current main mounts materialized skills at `/workspace/.openclaw/sandbox-skills/skills` but rw provisioning creates only the workspace root. Plan one narrow PR that creates the complete mount destination as the Gateway user before Docker/Podman creates the container.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #126631 | fix_needed | planned | canonical | The issue is a bounded sandbox provisioning defect on current main; no viable implementation PR is hydrated. |
| #113166 | route_security | planned | security_sensitive | Route only this separate trust-boundary report to central OpenClaw security triage; it does not block the non-security fix for #126631. |
| cluster:issue-openclaw-openclaw-126631 | build_fix_artifact | planned | canonical | Create one credited ClawSweeper implementation PR from clawsweeper/issue-openclaw-openclaw-126631. |

## Needs Human

- none
