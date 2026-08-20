---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126451"
mode: "autonomous"
run_id: "32317477507"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32317477507"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T00:37:28.426Z"
canonical: "https://github.com/openclaw/openclaw/issues/126451"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126451"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-126451

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32317477507](https://github.com/openclaw/clawsweeper/actions/runs/32317477507)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126451

## Summary

No fix was planned. Current main packages the Codex plugin with generated optional OpenClaw peer metadata, so the reported missing-declaration premise is not yet reproduced. Required direct ../codex runtime inspection and writable test execution are unavailable.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #126451 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #83964 | keep_closed | skipped | related | Already closed. |
| #101881 | keep_closed | skipped | related | Already merged and closed. |
| #110490 | keep_related | planned | related | Same fail-closed migration family, different owner and remaining work. |
| #124396 | keep_independent | planned | independent | Maintainer product-design work is independent of this bug-only repair. |
| #126451 | needs_human | blocked | needs_human | Cannot make a Codex-dependent verdict or code change without the required direct ../codex inspection. The available current-main source also does not reproduce the proposed missing-package-declaration premise; a writable fixture is required to establish the actual installed layout and failure path. |

## Needs Human

- Provide a writable checkout with sibling ../codex available, then reproduce the packaged managed-install sidecar migration against current main before choosing a fix surface.
