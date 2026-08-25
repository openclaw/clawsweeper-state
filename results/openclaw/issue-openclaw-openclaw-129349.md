---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-129349"
mode: "autonomous"
run_id: "32854055898"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32854055898"
head_sha: "d61664303d1bcab286362c8386cc2b5cb77e2c7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-25T14:46:18.271Z"
canonical: "https://github.com/openclaw/openclaw/issues/129349"
canonical_issue: "https://github.com/openclaw/openclaw/issues/129349"
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

# issue-openclaw-openclaw-129349

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32854055898](https://github.com/openclaw/clawsweeper/actions/runs/32854055898)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/129349

## Summary

Current main reproduces the parser defect at extensions/line/src/card-command.ts:64: unconditional comma splitting truncates URI actions before both /card action and /card buttons consume the shared parser. A narrow two-file repair is planned; this worker cannot edit or validate because the checkout is read-only and Corepack cannot initialize its cache.

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
| #129349 | fix_needed | blocked | canonical | Implementation is appropriate and narrowly scoped, but this worker cannot modify the branch or run the focused test in the supplied read-only checkout. |
| cluster:issue-openclaw-openclaw-129349 | build_fix_artifact | planned | canonical | Executor should create or update the requested ClawSweeper branch after restoring a writable checkout and dependencies. |

## Needs Human

- none
