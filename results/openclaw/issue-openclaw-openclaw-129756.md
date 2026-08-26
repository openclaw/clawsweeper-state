---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-129756"
mode: "autonomous"
run_id: "32921005538"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32921005538"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-26T03:17:43.823Z"
canonical: "https://github.com/openclaw/openclaw/issues/129756"
canonical_issue: "https://github.com/openclaw/openclaw/issues/129756"
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

# issue-openclaw-openclaw-129756

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32921005538](https://github.com/openclaw/clawsweeper/actions/runs/32921005538)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/129756

## Summary

#129756 is a source-confirmed TUI bug on main c841a9958abc8344b37ce5c6c5a06bec4cfa6b91. A narrow fix plan is ready, but this read-only checkout cannot modify a branch; ../codex is absent (required direct-inspection gate), and focused Vitest cannot start because tsx is not installed.

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
| #129756 | fix_needed | blocked | canonical | Implementation is narrow and suitable for a new fix PR, but local modification and required validation are blocked by the worker environment. |
| cluster:issue-openclaw-openclaw-129756 | build_fix_artifact | planned | canonical | Create the narrow credited fix PR once a writable checkout with dependencies and the required ../codex sibling checkout is available. |

## Needs Human

- none
