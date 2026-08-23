---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32617674651"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32617674651"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T04:30:47.028Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32617674651](https://github.com/openclaw/clawsweeper/actions/runs/32617674651)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124689

## Summary

#124689 remains the canonical open bug. Current main selects the first provider catalog row without excluding deprecated or disabled rows; Ollama Cloud’s first manifest row is deprecated. A narrow generic fallback fix and regression are planned, but this read-only checkout cannot create the required branch/files, lacks dependencies for validation, and does not contain the mandatory sibling ../codex source checkout for the Codex hard gate.

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
| #124689 | fix_needed | planned | canonical | Implement the status-aware generic fallback while retaining the existing explicit-candidate early return; do not alter the active-session model patch. |
| cluster:issue-openclaw-openclaw-124689 | build_fix_artifact | planned |  | Artifact is ready for the deterministic executor; local implementation and validation are blocked only by the supplied environment. |

## Needs Human

- none
