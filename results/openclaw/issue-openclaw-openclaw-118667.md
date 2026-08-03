---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118667"
mode: "autonomous"
run_id: "30815806503"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30815806503"
head_sha: "4f67ca516da0fc29fed5ae2b8e17fce14d49354d"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-03T13:48:13.925Z"
canonical: "https://github.com/openclaw/openclaw/issues/118667"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118667"
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

# issue-openclaw-openclaw-118667

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30815806503](https://github.com/openclaw/clawsweeper/actions/runs/30815806503)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/118667

## Summary

#118667 is a current-main, narrow configuration-contract bug: the strict ModelCompatSchema omits six fields already declared by ModelCompatConfig and consumed by compatibility routing. Static reproduction and fix design are complete, but this worker cannot create the requested branch or run validation because the checkout is read-only, node_modules is absent, and pnpm cannot initialize Corepack on the read-only filesystem.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/118680 | clawsweeper/issue-openclaw-openclaw-118667 |  |
| issue_implementation_status_comment | updated | #118667 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118680 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118667 | fix_needed | blocked | canonical | Implementation is appropriate and bounded, but this worker has no writable checkout and no runnable dependency install. The deterministic executor should apply the attached new-PR artifact in a writable trusted environment. |
| cluster:issue-openclaw-openclaw-118667 | build_fix_artifact | planned |  | Create one narrow PR from clawsweeper/issue-openclaw-openclaw-118667 once a writable executor with dependencies is available. |

## Needs Human

- none
