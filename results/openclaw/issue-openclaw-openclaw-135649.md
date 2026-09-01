---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-135649"
mode: "autonomous"
run_id: "33571265545"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33571265545"
head_sha: "7b645130563f366f3cdefab956e3181636125d68"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-01T23:47:03.748Z"
canonical: "https://github.com/openclaw/openclaw/issues/135649"
canonical_issue: "https://github.com/openclaw/openclaw/issues/135649"
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

# issue-openclaw-openclaw-135649

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33571265545](https://github.com/openclaw/clawsweeper/actions/runs/33571265545)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/135649

## Summary

#135649 is a confirmed narrow Control UI bug on current main (6104dfd409c7a06a9e3bd6fa5302963671ddd0bb). The map Add Entry handler autosaves an empty custom-N key before a sensitive MCP Env/Headers value can be entered; the subsequent server-redacted sentinel correctly blocks rename. A draft-first repair and regression are specified, but this read-only worker cannot modify the branch, cannot run pnpm because Corepack cannot create its cache, and cannot satisfy the required direct ../codex source inspection because that sibling checkout is absent.

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
| #135649 | keep_canonical | planned | canonical | Keep the source-proven canonical issue open while the planned fix PR is created. |
| #135649 | fix_needed | blocked | canonical | Implementation is blocked only by this worker environment. A writable executor with ../codex available should apply the artifact on clawsweeper/issue-openclaw-openclaw-135649. |
| cluster:issue-openclaw-openclaw-135649 | build_fix_artifact | planned | canonical | Prepare a new narrow fix PR; no contributor PR exists to repair. |

## Needs Human

- none
