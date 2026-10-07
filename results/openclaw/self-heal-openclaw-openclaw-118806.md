---
repo: "openclaw/openclaw"
cluster_id: "self-heal-openclaw-openclaw-118806"
mode: "autonomous"
run_id: "37638519646"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37638519646"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-07T14:46:50.896Z"
canonical: "https://github.com/openclaw/openclaw/pull/118806"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118776"
canonical_pr: "https://github.com/openclaw/openclaw/pull/118806"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# self-heal-openclaw-openclaw-118806

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37638519646](https://github.com/openclaw/clawsweeper/actions/runs/37638519646)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/pull/118806

## Summary

Prepared a blocked rebase artifact. Preflight confirms the expected open head, but an actionable continuation-contract finding remains, and the result schema cannot express the required deterministic_rebase_only flag. No files or GitHub state changed.

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
| Needs human | 1 |

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
| #118806 | fix_needed | blocked | canonical | The job permits only bounded base sync. Its required deterministic flag cannot be represented in the result schema, and the planner excludes that flag when actionable review findings remain. Omitting it would select the executor's substantive Codex repair path. Do not expand this job to resolve the continuation finding. |
| #118776 | keep_related | planned | related | Preserve the source report and its continuation-contract discussion; issue resolution is outside this self-rebase job. |
| #141474 | keep_related | planned | related | Distinct remaining scope; leave open without expanding this rebase job. |
| #125850 | keep_closed | skipped | related | Merged historical context only. |
| #146716 | keep_closed | skipped | related | Merged historical context only. |
| #147571 | keep_closed | skipped | related | Merged historical context only. |
| cluster:self-heal-openclaw-openclaw-118806 | build_fix_artifact | blocked |  | Do not execute until the automation can represent and enforce the authorized rebase-only scope. Existing review findings remain unresolved and must not be silently treated as repaired. |

## Needs Human

- The existing PR review requires an owner decision on the proposed default leaf-yield restriction versus supported external continuations. That substantive decision belongs outside this bounded self-rebase job.
