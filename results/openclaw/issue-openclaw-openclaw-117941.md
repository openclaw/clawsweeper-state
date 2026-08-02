---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117941"
mode: "autonomous"
run_id: "30742939447"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30742939447"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-02T10:43:24.004Z"
canonical: "https://github.com/openclaw/openclaw/issues/117941"
canonical_issue: "https://github.com/openclaw/openclaw/issues/117941"
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

# issue-openclaw-openclaw-117941

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30742939447](https://github.com/openclaw/clawsweeper/actions/runs/30742939447)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/117941

## Summary

Confirmed on current main 0bc32f0f5cf5b2202ae0918a26b0a252c1b59495: WhatsApp ingress unconditionally adds a same-phone DM sender to the allowlist, even when the resolved explicit self-chat setting is false. This admits an untracked fromMe self-DM before access control can reject it. The narrow owner-boundary repair is to make that allowlist augmentation conditional on policy.isSelfChat, with access-control and monitor regression coverage. The supplied checkout is read-only and has no installed dependencies; Corepack cannot create its cache, so no branch, patch, or local test result can be produced in this worker.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/117954 | clawsweeper/issue-openclaw-openclaw-117941 |  |
| issue_implementation_status_comment | updated | #117941 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117954 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117941 | fix_needed | planned | canonical | Narrow, source-proven regression in the WhatsApp inbound admission owner. No product-policy, configuration, security-boundary, or schema change is required. |
| cluster:issue-openclaw-openclaw-117941 | build_fix_artifact | blocked | canonical | Implementation is blocked only by this worker's read-only filesystem and missing dependency install. The repair plan is executable in the requested writable branch. |

## Needs Human

- none
