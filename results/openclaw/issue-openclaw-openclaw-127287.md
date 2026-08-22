---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32544819355"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32544819355"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T02:05:24.503Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32544819355](https://github.com/openclaw/clawsweeper/actions/runs/32544819355)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127287

## Summary

#127287 remains the open canonical regression. Current main 557a5c131b2f2713063520aac10c0afbeabddf5d unconditionally applies copilot-developer-cli after resolving a valid GHE domain, across prepared inference headers, catalog/starter discovery, and embeddings. A narrow provider-owned repair is clear, but this read-only checkout cannot install dependencies or modify/test a branch, and the mandatory sibling ../codex source is absent; no PR should be opened from this run.

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
| #127287 | fix_needed | blocked | canonical | Implementation is blocked only by the immutable environment and missing required Codex source; the source-level regression and narrow owner boundary are established. |
| cluster:issue-openclaw-openclaw-127287 | build_fix_artifact | planned | canonical | Create the fix only in a writable, dependency-ready checkout after the required direct ../codex inspection and redacted GHE proof. |

## Needs Human

- none
