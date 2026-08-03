---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118489"
mode: "autonomous"
run_id: "30788604089"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30788604089"
head_sha: "e55de43cfc039ea45931eb4e947364399afc280c"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-03T06:03:27.252Z"
canonical: "https://github.com/openclaw/openclaw/issues/118489"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118489"
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

# issue-openclaw-openclaw-118489

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30788604089](https://github.com/openclaw/clawsweeper/actions/runs/30788604089)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/118489

## Summary

#118489 remains the open canonical bug on current main d7ab20a727734072031af5d6f0ceeef476ae1afa. The shared finalizer still requires activeCount === 0 for exact terminal-tool settlement and still rejects hasTerminalToolPresentation without scoping it to the current failed batch. A narrow new-PR plan is ready, but this read-only checkout has neither node_modules nor sibling ../codex, so the required regressions, lifecycle-owner investigation, Code Mode contract inspection, and validation cannot be completed here.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118489 | fix_needed | blocked | canonical | The residual regression is source-reproducible, but implementation and validation require a writable checkout with dependencies plus direct inspection of ../codex before changing Code Mode-adjacent lifecycle behavior. |
| cluster:issue-openclaw-openclaw-118489 | build_fix_artifact | planned | canonical | Create one narrow credited PR from clawsweeper/issue-openclaw-openclaw-118489 after reproducing the two residual states and identifying whether lifecycle staleness must be repaired at its producer. |

## Needs Human

- none
