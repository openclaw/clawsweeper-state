---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125776"
mode: "autonomous"
run_id: "32619389864"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32619389864"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-23T05:11:12.593Z"
canonical: "https://github.com/openclaw/openclaw/issues/125776"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125776"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-125776

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32619389864](https://github.com/openclaw/clawsweeper/actions/runs/32619389864)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125776

## Summary

#125776 is a reproducible canonical bug: Codex emits dynamic-tool result progress without its call identity, while Telegram appends id-less text instead of updating the existing tool:<callId> row. Implementation is blocked in this worker because the mandatory ../codex contract checkout is absent, cloning fails on the read-only filesystem, and test dependencies cannot be installed.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #125776 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #125776 | fix_needed | blocked | canonical | Direct Codex protocol inspection is a repository hard gate for this Codex-dependent repair; this worker cannot restore the required sibling checkout or dependencies. |
| #116512 | keep_related | planned | related | The reports share Telegram progress rendering but not root cause or safe repair scope. |
| cluster:issue-openclaw-openclaw-125776 | build_fix_artifact | blocked | canonical | The repair path is narrow and ready for a writable, dependency-complete worker once it has directly inspected the required Codex source. |

## Needs Human

- Provide a writable worker with ../codex restored (or otherwise make the exact Codex source available) so the dynamic-tool call-id contract can be inspected before implementation. The current worker cannot clone it because the filesystem is read-only.
