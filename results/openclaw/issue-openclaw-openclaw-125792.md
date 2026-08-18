---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125792"
mode: "autonomous"
run_id: "32138418730"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32138418730"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T12:55:11.891Z"
canonical: "https://github.com/openclaw/openclaw/issues/125792"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125792"
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

# issue-openclaw-openclaw-125792

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32138418730](https://github.com/openclaw/clawsweeper/actions/runs/32138418730)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125792

## Summary

#125792 is a reproducible canonical bug: managed embedding presets omit ctx-size while local embedding inputs are bounded at 2048. A narrow fix plan is ready, but this checkout is read-only, lacks dependencies (tsx), and lacks the mandatory sibling Codex source checkout; no implementation or PR can be safely completed here.

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
| #125792 | fix_needed | planned | canonical | The issue remains open and current in the hydrated preflight artifact; no viable candidate PR exists. |
| cluster:issue-openclaw-openclaw-125792 | build_fix_artifact | planned | canonical | Artifact is narrow and ready for an executor with a writable checkout and dependencies. |
| cluster:issue-openclaw-openclaw-125792 | open_fix_pr | blocked | canonical | Implementation must be performed and validated by the deterministic executor in a writable, dependency-ready checkout before opening clawsweeper/issue-openclaw-openclaw-125792. |

## Needs Human

- none
