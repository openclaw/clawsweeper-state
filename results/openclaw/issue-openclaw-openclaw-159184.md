---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159184"
mode: "autonomous"
run_id: "36299687795"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36299687795"
head_sha: "f5b521426512c17d5036a6589004a2509bc9f937"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-27T06:22:00.368Z"
canonical: "https://github.com/openclaw/openclaw/issues/159184"
canonical_issue: "https://github.com/openclaw/openclaw/issues/159184"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-159184

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36299687795](https://github.com/openclaw/clawsweeper/actions/runs/36299687795)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/159184

## Summary

At preflight main SHA 168ebc5b, the reported HTTP 400 prompt-length case is already covered by code that prevents same-model retries. The remaining misleading rate-limit guidance may need a separate fix, but the requested retry regression could not be established on this checkout. Dependencies are absent and the workspace is read-only, so no tests or implementation were run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| issue_implementation_status_comment | updated | #159184 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #159184 | keep_canonical | planned | canonical | Keep the issue open for triage of the remaining user guidance. The job requires stopping if the reported retry defect cannot be reproduced on latest main. |

## Needs Human

- none
