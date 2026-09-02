---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-136576"
mode: "autonomous"
run_id: "33680826222"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33680826222"
head_sha: "ff071968ca4e3fa62c364f9642e10a03c2fda025"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-02T21:10:29.805Z"
canonical: "https://github.com/openclaw/openclaw/issues/136576"
canonical_issue: "https://github.com/openclaw/openclaw/issues/136576"
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

# issue-openclaw-openclaw-136576

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33680826222](https://github.com/openclaw/clawsweeper/actions/runs/33680826222)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/136576

## Summary

#136576 remains the open canonical report. Current main contains the reported hard-coded macOS dashboard suffix, while the documented Control UI contract is origin root or the configured base path. Implementation is blocked in this worker because the repository-required direct ../codex source gate and macOS native-validation environment are unavailable.

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
| issue_implementation_status_comment | updated | #136576 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #136576 | keep_canonical | planned | canonical | The issue is a focused, non-security macOS behavior report with no competing candidate. |
| #136576 | fix_needed | blocked | canonical | A narrow owner-boundary repair is indicated, but the mandatory direct Codex-source and macOS native-validation gates are unavailable in this worker. |
| cluster:issue-openclaw-openclaw-136576 | build_fix_artifact | blocked | canonical | Blocked before implementation and validation by the repository's mandatory Codex source gate and unavailable macOS native-test environment. |

## Needs Human

- Provide a readable sibling ../codex checkout (or a worker environment permitted to obtain it) and a disposable macOS GitHub Actions-capable runner. Then create or update clawsweeper/issue-openclaw-openclaw-136576, run the focused native macOS test and pnpm check:changed, and apply the required PR labels.
