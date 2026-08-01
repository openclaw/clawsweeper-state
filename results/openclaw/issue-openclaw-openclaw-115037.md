---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-115037"
mode: "autonomous"
run_id: "30691695818"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30691695818"
head_sha: "b347894406412c2b52bfa97a73bf9f5da4ea1598"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-01T08:34:54.151Z"
canonical: "https://github.com/openclaw/openclaw/issues/115037"
canonical_issue: "https://github.com/openclaw/openclaw/issues/115037"
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

# issue-openclaw-openclaw-115037

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30691695818](https://github.com/openclaw/clawsweeper/actions/runs/30691695818)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/115037

## Summary

#115037 is a real, still-open P1 lifecycle bug on current main. The merged #90799 correctly waits for same-process continuation after the exact resumed Claude synthetic placeholder, but its terminal-grace path deliberately returns an empty output. That re-enters the normal CLI empty-response failure path and the outer model-fallback runner can execute the user turn on a configured fallback model. Build one narrow PR that performs a bounded, replay-safe same-model redispatch from the Claude live-session owner when this exact terminal lifecycle state occurs; do not change generic empty-response or fallback policy.

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
| #90799 | keep_closed | skipped | related | Closed historical context; no mutation is valid or needed. |
| #99131 | keep_closed | skipped | related | Closed historical context; the open issue has distinct remaining work. |
| #99139 | keep_closed | skipped | superseded | Already closed as superseded; no closure action may be emitted. |
| #115037 | fix_needed | planned | canonical | The exact terminal synthetic lifecycle is still converted into generic empty-response fallback; no viable open PR exists. |
| cluster:issue-openclaw-openclaw-115037 | build_fix_artifact | planned | canonical | Create or update the required branch clawsweeper/issue-openclaw-openclaw-115037 with one focused implementation PR. |

## Needs Human

- none
