---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-130977"
mode: "autonomous"
run_id: "33093436084"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33093436084"
head_sha: "2129a78a502e4e6ed3dd0c521db5034743f1757a"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-27T17:00:20.997Z"
canonical: "https://github.com/openclaw/openclaw/issues/130977"
canonical_issue: "https://github.com/openclaw/openclaw/issues/130977"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-130977

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33093436084](https://github.com/openclaw/clawsweeper/actions/runs/33093436084)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/130977

## Summary

#130977 is a real CI-harness concern, but the preflight omits the raw passing/failing startup-memory sample distributions needed to calibrate a non-arbitrary Linux Blacksmith threshold or sampling rule. Current main uses three cold samples, a 1 MiB tolerance, and a 400 MiB Blacksmith plugins-list base limit (401 MiB effective).

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | skipped |  |  | worker marked the fix path as non-executable; closure actions may still apply |
| issue_implementation_status_comment | updated | #130977 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #130977 | fix_needed | blocked | canonical | Do not weaken this regression gate by choosing a new tolerance or base limit without the raw distributions and an accepted sustained-regression rule. |
| #128904 | keep_independent | planned | independent | Different root cause and owner surface. |
| #130893 | keep_independent | planned | independent | Different user-visible failure and owner surface. |
| cluster:issue-openclaw-openclaw-130977 | build_fix_artifact | planned | canonical | A narrow implementation is likely, but its calibration input is absent from preflight. |

## Needs Human

- Provide or approve the raw plugins-list RSS samples from the failing Blacksmith run and comparable passing runs, plus the intended sustained-regression acceptance rule; this determines whether the narrow repair changes only the Blacksmith CI limit or the checker’s sampling/tolerance policy.
