---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-57148"
mode: "autonomous"
run_id: "31008823339"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31008823339"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-05T13:55:18.944Z"
canonical: "https://github.com/openclaw/openclaw/issues/57148"
canonical_issue: "https://github.com/openclaw/openclaw/issues/57148"
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

# issue-openclaw-openclaw-57148

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31008823339](https://github.com/openclaw/clawsweeper/actions/runs/31008823339)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/57148

## Summary

#57148 remains a reproducible canonical bug on bf7840f5391a6f329a6be568c5f3f1a94c8dadbe: ordinary subagent completion text is unbounded in protected/native, ACP/plain/transcript, and durable correlated parent delivery. A narrow no-config fix PR is needed; no branch diff exists yet. Closed #73320 is quarantined security context and is not a fix source.

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
| #57148 | fix_needed | planned | canonical | The cap belongs in a separate parent-prompt projection, preserving raw completion state and direct external-message fallback behavior. |
| #73320 | route_security | planned | security_sensitive | Quarantine this exact closed reference with central OpenClaw security handling while continuing the unrelated non-security repair. |
| cluster:issue-openclaw-openclaw-57148 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-57148 after implementing and validating the artifact. |

## Needs Human

- none
