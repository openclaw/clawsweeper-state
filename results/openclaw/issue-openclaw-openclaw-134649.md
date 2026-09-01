---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-134649"
mode: "autonomous"
run_id: "33462362362"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33462362362"
head_sha: "ced376c343537d09f840bb9093c5cc1c8ff23c88"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-01T02:43:01.375Z"
canonical: "https://github.com/openclaw/openclaw/issues/134649"
canonical_issue: "https://github.com/openclaw/openclaw/issues/134649"
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

# issue-openclaw-openclaw-134649

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33462362362](https://github.com/openclaw/clawsweeper/actions/runs/33462362362)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/134649

## Summary

#134649 remains the canonical open bug. Current main sends only SIGTERM during normal managed-local-service shutdown and returns; the existing restart path already waits and escalates. Implementation is blocked in this read-only checkout: no node_modules are present, Corepack cannot create its cache (EROFS), and the mandatory sibling ../codex source is absent and cannot be cloned here. A narrow, credited new-fix-PR artifact is prepared for an executor with a writable checkout.

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
| #134649 | fix_needed | blocked | canonical | A writable executor must inspect the required Codex source, add the pre-fix regression, implement the owner-boundary repair, and run the declared validations. |
| cluster:issue-openclaw-openclaw-134649 | build_fix_artifact | planned | canonical | Prepared for a writable ClawSweeper executor. |

## Needs Human

- none
