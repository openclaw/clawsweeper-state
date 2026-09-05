---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-42986"
mode: "autonomous"
run_id: "33953676025"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33953676025"
head_sha: "6a3ee13a060a6de078e372e7da666cc929f56cd9"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-05T08:37:38.492Z"
canonical: "https://github.com/openclaw/openclaw/issues/42986"
canonical_issue: "https://github.com/openclaw/openclaw/issues/42986"
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

# issue-openclaw-openclaw-42986

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33953676025](https://github.com/openclaw/clawsweeper/actions/runs/33953676025)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/42986

## Summary

Plan one narrow fix for Telegram persistent-session capability advertising. Existing binding infrastructure is present; source inspection found a child-thread-only gate in both advertisement paths. Implementation and runtime validation remain pending.

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
| #42986 | fix_needed | planned | canonical | The documented workflow still has a source-evidenced advertisement gap. Preserve this issue as canonical and prepare the authorized implementation PR; closure and merge are disabled. |
| cluster:issue-openclaw-openclaw-42986 | build_fix_artifact | planned |  | A focused capability repair can reuse the existing adapter and routing flow without adding configuration, storage, or Telegram transport behavior. |

## Needs Human

- none
