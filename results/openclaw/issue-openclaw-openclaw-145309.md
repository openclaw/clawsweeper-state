---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-145309"
mode: "plan"
run_id: "34654105570"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34654105570"
head_sha: "e74b07a40a6ecb1c9743e17201ecca0d6114bce5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-11T22:34:20.595Z"
canonical: "https://github.com/openclaw/openclaw/issues/145309"
canonical_issue: "https://github.com/openclaw/openclaw/issues/145309"
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

# issue-openclaw-openclaw-145309

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34654105570](https://github.com/openclaw/clawsweeper/actions/runs/34654105570)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/145309

## Summary

Verified the transcript-root mismatch in the clean checkout at preflight main 304261a77818f4fd02c77b07c20e3d1bed38fc7f. Prepared a narrow fix plan for #145309 and separately quarantined linked credential-boundary discussions. No files or GitHub state changed; regression tests and live resume proof remain pending.

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
| https://github.com/openclaw/openclaw/issues/145309 | build_fix_artifact | planned | canonical | Repair existing documented alternate-directory behavior without changing credential selection, reseeding, authorization, or live-session generation safeguards. |
| https://github.com/openclaw/openclaw/issues/105763 | route_security | planned | security_sensitive | Leave this distinct credential-related request to central OpenClaw security handling; it does not block the transcript-directory fix. |
| https://github.com/openclaw/openclaw/issues/85177 | route_security | planned | security_sensitive | The requested recovery behavior involves a documented account boundary and belongs with central OpenClaw security handling. |
| https://github.com/openclaw/openclaw/issues/132758 | route_security | planned | security_sensitive | Quarantine this item's credential-boundary discussion for central security handling. Its stateless-history and phantom-resume scopes are not duplicates of #145309. |

## Needs Human

- none
