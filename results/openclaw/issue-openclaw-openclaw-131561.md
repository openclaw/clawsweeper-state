---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-131561"
mode: "autonomous"
run_id: "33163328848"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33163328848"
head_sha: "d56daf07f0c32a58f28283936dc4568cf5069828"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-28T10:40:36.450Z"
canonical: "#131561"
canonical_issue: "#131561"
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

# issue-openclaw-openclaw-131561

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33163328848](https://github.com/openclaw/clawsweeper/actions/runs/33163328848)

Workflow conclusion: success

Worker result: blocked

Canonical: #131561

## Summary

#131561 remains the canonical, source-reproducible Gateway terminal-persistence defect. Latest main stamps terminal pending state but, when async agent-event dispatch is lost, retains neither the terminal event nor a maintenance path that persists it while the controller expiry is still future. A narrow fix should retain the exact terminal lifecycle projection and replay it after grace through persistGatewaySessionLifecycleEvent; no branch or PR was created because this worker sandbox is read-only and the required ../codex checkout is absent.

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
| #119714 | keep_closed | skipped | related | Already closed; partial historical overlap only. |
| #121756 | keep_closed | skipped | independent | Already closed and independently resolved. |
| #123192 | keep_closed | skipped | related | Merged partial predecessor; it does not cover this canonical defect. |
| #126850 | keep_related | planned | related | Same session-state symptom family, distinct owner boundary and repair. |
| #131561 | build_fix_artifact | blocked | canonical | Narrow bug-only repair is clear, but implementation and local validation are blocked by the worker environment. |

## Needs Human

- none
