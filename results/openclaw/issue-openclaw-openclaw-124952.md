---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124952"
mode: "autonomous"
run_id: "32407950333"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32407950333"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T19:42:18.253Z"
canonical: "#124952"
canonical_issue: "#124952"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-124952

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32407950333](https://github.com/openclaw/clawsweeper/actions/runs/32407950333)

Workflow conclusion: success

Worker result: blocked

Canonical: #124952

## Summary

#124952 remains the canonical open bug. Current main leaves legacy claude-cli model-map keys and modelPolicy.allow entries outside the same Doctor migration; canonical Anthropic overrides are therefore rejected. A narrow repair is identified, but this worker cannot modify, test, or open its branch: the sandbox is read-only, pnpm cannot create its Corepack cache, local Vitest is absent, and mandatory ../codex source is unavailable for direct inspection.

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
| Needs human | 1 |

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
| #124952 | fix_needed | blocked | canonical | A writable repair environment with the required sibling Codex source is needed before implementation and validation. |
| #124952 | build_fix_artifact | planned | canonical | Narrow replacement repair is ready for a writable worker; no GitHub mutation was performed. |

## Needs Human

- Provide a writable checkout with dependencies and the mandatory sibling ../codex source available, then run the fix artifact’s regression and documentation validation before opening the permitted PR.
