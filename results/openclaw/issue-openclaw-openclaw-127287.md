---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32547102029"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32547102029"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T02:56:36.246Z"
canonical: "https://github.com/openclaw/openclaw/issues/127287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127287"
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

# issue-openclaw-openclaw-127287

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32547102029](https://github.com/openclaw/clawsweeper/actions/runs/32547102029)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127287

## Summary

Confirmed narrow provider regression on current main fcc0bb74900b2b7d93543012a9dea2430b4e4a59. GHE domain resolution reaches runtime auth, but inference, live catalog, starter-model discovery, and embeddings retain an unconditional copilot-developer-cli identity. Implementation is blocked in this worker because the checkout is read-only, dependencies are absent and pnpm install fails with Corepack EROFS, and required sibling ../codex source is absent.

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
| #127287 | fix_needed | blocked | canonical | The issue remains canonical and repairable, but this worker cannot legally edit, install dependencies, validate, or satisfy the repository’s direct ../codex inspection gate. |
| cluster:issue-openclaw-openclaw-127287 | build_fix_artifact | planned | canonical | Create the narrow credited fix PR once a writable executor with dependencies and ../codex source is available. |

## Needs Human

- none
