---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-102190"
mode: "autonomous"
run_id: "30829062455"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30829062455"
head_sha: "4f67ca516da0fc29fed5ae2b8e17fce14d49354d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-03T16:26:28.575Z"
canonical: "https://github.com/openclaw/openclaw/issues/102190"
canonical_issue: "https://github.com/openclaw/openclaw/issues/102190"
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

# issue-openclaw-openclaw-102190

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30829062455](https://github.com/openclaw/clawsweeper/actions/runs/30829062455)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/102190

## Summary

Verified on current main f9baa3e89421772d92a3ec54248dfa390b089214: the embedded prompt dispatcher receives a structured image result with failedMediaCount but ignores it and can call the provider with only remaining images. CLI and plugin-harness siblings reject that exact condition before their model boundary. A narrow new fix PR should add the same rejection at the embedded dispatch owner and a focused no-submission regression. This read-only worker sandbox cannot apply or validate the patch itself.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/118751 | clawsweeper/issue-openclaw-openclaw-102190 |  |
| issue_implementation_status_comment | updated | #102190 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118751 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #102190 | fix_needed | planned | canonical | Real existing-behavior bug with an established sibling invariant: structured image hydration failure must stop provider submission rather than silently omit user input. |
| cluster:issue-openclaw-openclaw-102190 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-102190; no configuration, provider policy, prompt marker, path-bearing error text, or parallel fallback is needed. |

## Needs Human

- none
