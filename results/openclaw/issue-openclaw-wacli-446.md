---
repo: "openclaw/wacli"
cluster_id: "issue-openclaw-wacli-446"
mode: "autonomous"
run_id: "36367334318"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36367334318"
head_sha: "8d659e7cb903370596e26acea5b81399f291c174"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-28T02:53:53.486Z"
canonical: "https://github.com/openclaw/wacli/issues/446"
canonical_issue: "https://github.com/openclaw/wacli/issues/446"
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

# issue-openclaw-wacli-446

Repo: openclaw/wacli

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36367334318](https://github.com/openclaw/clawsweeper/actions/runs/36367334318)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/wacli/issues/446

## Summary

Verified #446 on main b87e6178: the default delegated-send queue can execute a request after its caller times out. A narrow fix PR is needed. No code or GitHub state was changed.

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
| #446 | fix_needed | planned | canonical | The default queue can dispatch after the caller has reported a timeout. |
| cluster:issue-openclaw-wacli-446 | build_fix_artifact | planned |  | Prepare one implementation PR from clawsweeper/issue-openclaw-wacli-446. |

## Needs Human

- none
