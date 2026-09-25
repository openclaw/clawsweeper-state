---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158386"
mode: "autonomous"
run_id: "36196581758"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36196581758"
head_sha: "9fb3a5d5887891c08e0310cafc54b09ab3023c2a"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-25T23:01:07.144Z"
canonical: "https://github.com/openclaw/openclaw/issues/158386"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158386"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-158386

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36196581758](https://github.com/openclaw/clawsweeper/actions/runs/36196581758)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/158386

## Summary

The Windows Scheduled Task audit still appears to misclassify omitted default-true Enabled fields, but implementation is blocked: this worker has a read-only checkout at 0b8ac75b, while preflight identifies c935d718 as main. Dependencies are absent, so a failing regression and validation could not be run. No code or GitHub state was changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #158386 | fix_needed | planned | canonical | A narrow shared-audit fix is indicated, subject to reproduction on the preflight main revision. |
| #158332 | keep_independent | planned | independent | Separate behavior and owner. |
| #158333 | keep_independent | planned | independent | Separate product decision outside this bug-only job. |
| #158331 | keep_closed | skipped | independent | Historical linked context only. |
| cluster:issue-openclaw-openclaw-158386 | build_fix_artifact | blocked |  | The executor needs a writable checkout at current main before it can reproduce, patch, review, and validate the fix. |

## Needs Human

- none
