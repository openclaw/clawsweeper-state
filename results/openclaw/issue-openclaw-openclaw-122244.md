---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122244"
mode: "autonomous"
run_id: "31536421907"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31536421907"
head_sha: "4b79888c3f2ad4b9e0c2ee3345984adc995ea81d"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-11T21:44:41.442Z"
canonical: "https://github.com/openclaw/openclaw/issues/122244"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122244"
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

# issue-openclaw-openclaw-122244

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31536421907](https://github.com/openclaw/clawsweeper/actions/runs/31536421907)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/122244

## Summary

Confirmed on main c2ad148cb8b750587217b249d0ade95fcb534bdd: `HTTP 502 Bad Gateway` followed by a complete HTML document reaches the raw-status formatting branch because `isCloudflareOrHtmlErrorPage` only accepts HTML at the beginning of `status.rest`. A narrow shared-owner repair and regression coverage are planned. Local validation could not run because Corepack cannot create its cache in this read-only worker environment.

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
| #122244 | fix_needed | planned | canonical | This is a reproducible existing UI-formatting defect with a narrow shared owner and no config, provider-policy, or security-boundary change. |
| cluster:issue-openclaw-openclaw-122244 | build_fix_artifact | planned |  | Create or update the required narrow fix PR from clawsweeper/issue-openclaw-openclaw-122244. |

## Needs Human

- none
