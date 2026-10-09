---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-167799"
mode: "autonomous"
run_id: "37927135981"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37927135981"
head_sha: "e679475f63b1f1e8b2f1c6f583abe5d016b5b878"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-10-09T12:11:28.600Z"
canonical: "https://github.com/openclaw/openclaw/issues/167799"
canonical_issue: "https://github.com/openclaw/openclaw/issues/167799"
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

# issue-openclaw-openclaw-167799

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37927135981](https://github.com/openclaw/clawsweeper/actions/runs/37927135981)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/167799

## Summary

Verified the missing Claude prompt-snapshot opt-out on supplied main SHA 2bf85a4b1d74cafe1d6bb513b5d7b3cb87b1a2ca. Prepared a narrow plugin-owned fix plan. No files or GitHub state changed; tests and native reproduction remain unrun.

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
| #167799 | fix_needed | planned | canonical | The reported regression remains source-supported on current supplied main and has a narrow initialization repair. Keep the issue open. |
| #80374 | keep_closed | skipped | related | Historical context for the expected behavior; the newer native snapshot regression is distinct. |
| #86433 | keep_closed | skipped | related | Preserve the merged contributor work as historical contract evidence. |
| #138707 | route_security | planned | security_sensitive | Quarantine this exact reference for central OpenClaw security handling without public mutation. The ordinary prompt-refresh repair does not depend on modifying this PR. |
| cluster:issue-openclaw-openclaw-167799 | build_fix_artifact | planned | canonical | A focused new fix PR can restore the existing prompt-refresh contract without configuration, dependency, storage, or permission changes. |

## Needs Human

- none
