---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32556337184"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32556337184"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T06:25:13.803Z"
canonical: "https://github.com/openclaw/openclaw/issues/124689"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124689"
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

# issue-openclaw-openclaw-124689

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32556337184](https://github.com/openclaw/clawsweeper/actions/runs/32556337184)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124689

## Summary

Confirmed current-main catalog-fallback defect: an Ollama Cloud API-key probe can select deprecated kimi-k2.5 because fallback selection ignores catalog lifecycle status. A narrow fix artifact is ready, but this worker cannot modify or validate the branch: the sandbox is read-only, pnpm cannot create its Corepack cache, and required sibling ../codex source is unavailable for the repository’s Codex gate.

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
| #124689 | fix_needed | blocked | canonical | Implementation is blocked only in this worker environment: filesystem writes are denied; pnpm fails with EROFS while creating its Corepack cache; ../codex is absent and cannot be cloned under the read-only sandbox. |
| cluster:issue-openclaw-openclaw-124689 | build_fix_artifact | planned | canonical | Executor should implement and validate this narrow fix on clawsweeper/issue-openclaw-openclaw-124689. |

## Needs Human

- none
