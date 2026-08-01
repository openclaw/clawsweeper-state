---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-113663"
mode: "autonomous"
run_id: "30706569262"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30706569262"
head_sha: "e9f97b34fd5950884dd6b9ec45f46f4851cf506c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-01T15:49:28.333Z"
canonical: "#113663"
canonical_issue: "#113662"
canonical_pr: "#113663"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-113663

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30706569262](https://github.com/openclaw/clawsweeper/actions/runs/30706569262)

Workflow conclusion: success

Worker result: planned

Canonical: #113663

## Summary

Current main at b83a966c056288adaef187e3e5826188d9f67724 already contains the narrow Grok OAuth inference-header repair in the xAI stream owner, with direct regression coverage. The adopted contributor PR is therefore superseded rather than a candidate for further repair or merge; this job cannot close or merge it.

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
| #113662 | keep_closed | skipped | fixed_by_candidate | Historical closed issue; retain as evidence only. |
| #113663 | keep_related | planned | superseded | No additional repair PR is warranted: main already carries the more precise owner-boundary fix. A later deterministic closeout can supersede the stale contributor PR after hydrating the landed fix reference. |
| #114510 | keep_independent | planned | independent | Separate provider-auth product decision; leave open outside this repair cluster. |

## Needs Human

- none
