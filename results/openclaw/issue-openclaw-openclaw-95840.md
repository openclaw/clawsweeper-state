---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32349986427"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32349986427"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T08:50:51.605Z"
canonical: "https://github.com/openclaw/openclaw/issues/95840"
canonical_issue: "https://github.com/openclaw/openclaw/issues/95840"
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

# issue-openclaw-openclaw-95840

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32349986427](https://github.com/openclaw/clawsweeper/actions/runs/32349986427)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

#95840 remains a narrow, source-reproducible bug on main 45ed68e6ea62abd115d91481d31803e11269bd88. Direct OpenAI has no provider-owned cache-TTL eligibility hook, so configured pruning neither installs its idle-gap projection nor records cache-TTL markers. A new credited fix PR is appropriate, but this read-only checkout cannot edit or validate it: the focused Vitest runner fails because tsx is absent, and ../codex source is unavailable for the required direct inspection gate.

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
| #95840 | fix_needed | blocked | canonical | Implementation is blocked only by this worker environment; the canonical issue and narrow new-PR path remain clear. |
| #95610 | keep_related | planned | related | Keep open independently; this repair neither replaces nor fixes its prompt-stability work. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | planned | canonical | Executor should create the single task branch PR after restoring a writable checkout, dependencies, and the required Codex source inspection. |

## Needs Human

- none
