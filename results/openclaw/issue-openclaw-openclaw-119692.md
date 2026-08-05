---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119692"
mode: "autonomous"
run_id: "31034789647"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31034789647"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-05T19:01:23.585Z"
canonical: "https://github.com/openclaw/openclaw/issues/119692"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119692"
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

# issue-openclaw-openclaw-119692

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31034789647](https://github.com/openclaw/clawsweeper/actions/runs/31034789647)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/119692

## Summary

A narrow fix is warranted on main e69c3df: the shared parser recognizes nested cached_tokens and prompt_cache_hit_tokens but not top-level cached_tokens. This read-only sandbox cannot apply or run the regression; the executor should create the planned fix PR.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119712 | clawsweeper/issue-openclaw-openclaw-119692 |  |
| issue_implementation_status_comment | updated | #119692 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119712 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119692 | fix_needed | blocked | canonical | Implementation is blocked only by the worker's read-only filesystem and absent installed dependency source; no local patch or test execution is permitted. |
| cluster:issue-openclaw-openclaw-119692 | build_fix_artifact | planned | canonical | Create one narrow PR from clawsweeper/issue-openclaw-openclaw-119692 after the executor rechecks live issue state and installed OpenAI SDK types. |

## Needs Human

- none
