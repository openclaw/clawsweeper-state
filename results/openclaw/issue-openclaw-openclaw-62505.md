---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-62505"
mode: "autonomous"
run_id: "32244705693"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32244705693"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T11:03:37.936Z"
canonical: "https://github.com/openclaw/openclaw/issues/62505"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62505"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-62505

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32244705693](https://github.com/openclaw/clawsweeper/actions/runs/32244705693)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/62505

## Summary

#62505 remains a confirmed canonical bug: current main rejects targeted `exec-event` wakes with `intent: "immediate"` when `heartbeat.every` is `0m`, both in scheduler dispatch and execution-stage gating. A narrow shared-policy repair is ready, but this worker cannot implement or validate it: the checkout is read-only with no node_modules, Corepack cannot create its cache, and required sibling ../codex source is unavailable for the repository’s Codex hard gate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #62505 | fix_needed | blocked | canonical | Implementation and pre-fix/fixed regression validation require a writable checkout with dependencies and the required direct ../codex inspection. |
| cluster:issue-openclaw-openclaw-62505 | build_fix_artifact | planned | canonical | Narrow fix path prepared for a writable executor. |
| #67913 | keep_closed | skipped | superseded | Already closed historical evidence; no closure action is valid. |
| #76877 | keep_closed | skipped | independent | Closed adjacent report, not part of the disabled-cadence exec-completion repair. |
| #79869 | route_security | planned | security_sensitive | Quarantine this exact item for central OpenClaw security triage; it does not block #62505's non-security fix artifact. |
| #109738 | keep_independent | planned | independent | Keep open under its own maintainer/security review path. |

## Needs Human

- none
