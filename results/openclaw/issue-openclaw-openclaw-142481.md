---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-142481"
mode: "plan"
run_id: "34277490068"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34277490068"
head_sha: "e4c2d57ad229dc8cef15dd5ef3d613386ced664b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-08T21:28:45.355Z"
canonical: "https://github.com/openclaw/openclaw/issues/142481"
canonical_issue: "https://github.com/openclaw/openclaw/issues/142481"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-142481

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34277490068](https://github.com/openclaw/clawsweeper/actions/runs/34277490068)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/142481

## Summary

Confirmed the reported source path on preflight main eff3ce921ea402174ad17cf1c6d2a0302254f7fc. Plan one narrow fix using existing exactEnv handling for sandbox transports. No changes, runtime reproduction, or test execution performed.

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
| #142481 | fix_needed | planned | canonical | The existing launch contract supports a narrow repair. Establish a failing boundary regression before implementation, then validate preserved host and sandbox lifecycle behavior. |
| #109402 | keep_related | planned | related | Resource-cap enforcement is distinct from correcting the OOM policy applied to sandbox transports. Leave this proposal outside the implementation scope. |
| #70404 | keep_closed | skipped | related | Historical context supporting preservation of ordinary workload-child OOM behavior; no action required. |

## Needs Human

- none
