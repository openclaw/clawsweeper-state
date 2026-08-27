---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-20837"
mode: "autonomous"
run_id: "33042714207"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33042714207"
head_sha: "ff813ac2fa76d853d8a9129e6763d09624cafe72"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-27T10:24:55.520Z"
canonical: "https://github.com/openclaw/openclaw/issues/20837"
canonical_issue: "https://github.com/openclaw/openclaw/issues/20837"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-20837

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33042714207](https://github.com/openclaw/clawsweeper/actions/runs/33042714207)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/20837

## Summary

Current main still drops runtime metadata when reconstructing command prompts. A narrow credited fix plan is ready, but implementation is blocked because this sandbox is read-only and the mandatory sibling ../codex checkout is absent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): validation command runtime budget exhausted |
| issue_implementation_status_comment | updated | #20837 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #20837 | fix_needed | blocked | canonical | The bug is source-reproducible, but a writable policy-compliant checkout is required to implement and validate it. |
| #21271 | keep_closed | skipped | superseded | Closed context only; preserve attribution in the replacement PR. |
| cluster:issue-openclaw-openclaw-20837 | build_fix_artifact | planned | canonical | Open one new narrow credited fix PR from a writable checkout. |

## Needs Human

- none
