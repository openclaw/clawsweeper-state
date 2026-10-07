---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127119"
mode: "autonomous"
run_id: "37583769476"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37583769476"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-07T07:28:42.970Z"
canonical: "https://github.com/openclaw/openclaw/issues/127119"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127119"
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

# issue-openclaw-openclaw-127119

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37583769476](https://github.com/openclaw/clawsweeper/actions/runs/37583769476)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127119

## Summary

Current-main source still contains the Model Studio token-field mismatch. A narrow fix artifact is prepared, but implementation and executable reproduction are blocked by the read-only host and missing dependencies. No files or GitHub state changed; vendor cap enforcement remains unverified.

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
| #127119 | fix_needed | planned | canonical | A bounded compatibility-default repair remains justified by current source and hydrated evidence. Local implementation is blocked by read-only filesystem permissions and missing dependencies, rather than an unresolved product decision. |
| #127135 | keep_closed | skipped | related | Preserve the closed historical reference and credit its useful endpoint-scoping research. No closure, reopening, merge, or comment is proposed. |
| cluster:issue-openclaw-openclaw-127119 | build_fix_artifact | planned | canonical | Prepare one narrow new-fix PR on clawsweeper/issue-openclaw-openclaw-127119 for the deterministic executor. Artifact preparation is complete; local implementation and validation remain blocked. |

## Needs Human

- none
