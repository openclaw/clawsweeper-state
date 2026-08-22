---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32594162885"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32594162885"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T19:48:20.518Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32594162885](https://github.com/openclaw/clawsweeper/actions/runs/32594162885)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124689

## Summary

#124689 remains the canonical open bug. Current main deterministically selects deprecated `ollama-cloud/kimi-k2.5` when configured defaults contain only `ollama/gemma4:31b-cloud`, because catalog fallback preserves the first same-provider row. A narrow generic status filter fixes it while retaining explicit legacy selections. Implementation and local validation are blocked because this worker checkout is read-only, has no dependencies, and the required sibling ../codex checkout is absent.

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
| #124689 | fix_needed | blocked | canonical | The code-level repair path is clear, but branch edits and required validation cannot run in this read-only environment. |
| cluster:issue-openclaw-openclaw-124689 | build_fix_artifact | planned | canonical | Produce one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-124689. |

## Needs Human

- none
