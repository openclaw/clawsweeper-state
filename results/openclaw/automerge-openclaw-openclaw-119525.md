---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-119525"
mode: "autonomous"
run_id: "32438286038"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32438286038"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-21T02:08:00.329Z"
canonical: "https://github.com/openclaw/openclaw/pull/119525"
canonical_issue: "https://github.com/openclaw/openclaw/issues/93199"
canonical_pr: "https://github.com/openclaw/openclaw/pull/119525"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-119525

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32438286038](https://github.com/openclaw/clawsweeper/actions/runs/32438286038)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/119525

## Summary

Repair #119525 on its writable contributor branch. Current main routes its deadline through corpus-attempt normalization before the cooldown owner, so the timeout identity is lost and the 60-second provider cooldown is recorded. No merge or close action is authorized.

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
| https://github.com/openclaw/openclaw/issues/93199 | keep_canonical | planned | canonical | Keep the issue open while the canonical repair is rebased and validated. |
| https://github.com/openclaw/openclaw/pull/119525 | fix_needed | planned | canonical | Rebase and move the timeout classification through the current corpus-result boundary before deciding whether to record provider cooldown. |
| https://github.com/openclaw/openclaw/pull/119525 | build_fix_artifact | planned | canonical | Provide the bounded repair contract for ClawSweeper's deterministic edit pass. |

## Needs Human

- none
