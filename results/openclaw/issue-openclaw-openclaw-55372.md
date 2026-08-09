---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-55372"
mode: "autonomous"
run_id: "31309791488"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31309791488"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-09T11:17:27.045Z"
canonical: "https://github.com/openclaw/openclaw/issues/55372"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55372"
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

# issue-openclaw-openclaw-55372

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31309791488](https://github.com/openclaw/clawsweeper/actions/runs/31309791488)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/55372

## Summary

#55372 is a reproducible Control UI routing defect. A narrow new fix PR should carry explicit webchat delivery context on both config writers, preserving the restart wake while preventing a stale Telegram notice. Implementation is blocked here because the checkout is read-only, lacks dependencies, and does not contain preflight main SHA 8d152c185284e167558075856b1f5412ed703c83 for exact-base validation.

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
| #55372 | keep_canonical | planned | canonical | Keep open until the narrow fix PR is created and validated. |
| #53940 | keep_closed | skipped | related | Already closed; no closeout or mutation is valid. |
| cluster:issue-openclaw-openclaw-55372 | fix_needed | planned | canonical | The established protocol has the needed field; the defect is a narrow Control UI omission rather than a request for a new restart-sentinel configuration option. |
| cluster:issue-openclaw-openclaw-55372 | build_fix_artifact | planned | canonical | Create one narrow credited PR from clawsweeper/issue-openclaw-openclaw-55372. |
| cluster:issue-openclaw-openclaw-55372 | open_fix_pr | blocked | canonical | Executor must rebase or start from preflight main, apply the artifact, then run the listed validations before opening the labeled PR. |

## Needs Human

- none
