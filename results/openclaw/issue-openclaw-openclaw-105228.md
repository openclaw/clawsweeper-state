---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-105228"
mode: "autonomous"
run_id: "32575696543"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32575696543"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-22T13:40:03.176Z"
canonical: "https://github.com/openclaw/openclaw/issues/105228"
canonical_issue: "https://github.com/openclaw/openclaw/issues/105228"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-105228

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32575696543](https://github.com/openclaw/clawsweeper/actions/runs/32575696543)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/105228

## Summary

Current main retains the ACP requester-stop race: the run is registered after Gateway dispatch without revalidating requester abort authority. A narrow credited fix PR is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #105228 | fix_needed | planned | canonical | The owner-boundary repair is to propagate the requester signal and reject ACP admission both before work starts and immediately after Gateway dispatch, using existing failed-spawn cleanup. |
| cluster:issue-openclaw-openclaw-105228 | build_fix_artifact | planned | canonical | No open viable contributor PR exists; all rechecked candidate PRs are closed historical attempts. |
| cluster:issue-openclaw-openclaw-105228 | open_fix_pr | planned | canonical | The deterministic executor should create one narrow repair PR from the supplied branch. |
| #105346 | keep_closed | skipped | superseded | Already closed; no mutation is permitted or needed. |
| #105766 | keep_closed | skipped | superseded | Already closed; no mutation is permitted or needed. |
| #108357 | keep_closed | skipped | superseded | Already closed; no mutation is permitted or needed. |
| #116406 | keep_closed | skipped | superseded | Already closed; do not resurrect or mutate the historical PR. |

## Needs Human

- none
