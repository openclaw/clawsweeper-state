---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-149232"
mode: "autonomous"
run_id: "34991996967"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34991996967"
head_sha: "1ed7bd4e13fb03334798e4d027ba3383ac9e5f01"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-15T17:07:10.307Z"
canonical: "https://github.com/openclaw/openclaw/issues/149232"
canonical_issue: "https://github.com/openclaw/openclaw/issues/149232"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-149232

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34991996967](https://github.com/openclaw/clawsweeper/actions/runs/34991996967)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/149232

## Summary

Confirmed the configured agentDir discovery omission in source at preflight main 31557782c74924813994c9054247ed20398c3e0b. Prepared a narrow fix artifact. Implementation and runtime reproduction are blocked by the read-only host and absent dependencies; no files or GitHub state were changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #149232 | fix_needed | blocked | canonical | Implementation requires a writable isolated checkout and dependencies. Establish the failing regression against refreshed main before editing; source verification alone is not runtime reproduction. |
| #148529 | keep_related | planned | related | Keep the broader startup-performance investigation open and outside this fix. |
| #142476 | keep_closed | skipped | related | Historical context for a separate recurring performance defect. |
| cluster:issue-openclaw-openclaw-149232 | build_fix_artifact | planned | canonical | A narrow non-security repair is supported by source evidence; the deterministic executor must reproduce, implement, review, and validate before publishing. |

## Needs Human

- none
