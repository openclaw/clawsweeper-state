---
repo: "openclaw/openclaw"
cluster_id: "self-heal-openclaw-openclaw-119975"
mode: "autonomous"
run_id: "37602304225"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37602304225"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-10-07T09:47:32.410Z"
canonical: "https://github.com/openclaw/openclaw/pull/119975"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119958"
canonical_pr: "https://github.com/openclaw/openclaw/pull/119975"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# self-heal-openclaw-openclaw-119975

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37602304225](https://github.com/openclaw/clawsweeper/actions/runs/37602304225)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/119975

## Summary

Plan bounded base-sync repair of the existing PR branch. Preflight confirms the expected open head and writable same-repo branch. No edits, rebase, tests, or GitHub mutations performed; existing review findings remain unresolved.

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
| #119975 | fix_needed | planned | canonical | Re-fetch open state and require the exact expected head before preparation and publication. Rebase only the existing branch; stop if conflict resolution requires a substantive behavior decision. Merge, closure, and labels are prohibited. |
| #119958 | keep_canonical | planned | canonical | Preserve the original report while the candidate remains unmerged and review-blocked. Issue closeout is outside this self-heal job. |
| #119972 | keep_closed | skipped | related | Historical implementation and contributor-credit context only. |
| #151387 | keep_closed | skipped | related | Preserve the landed managed-service behavior during any required conflict resolution. |
| cluster:self-heal-openclaw-openclaw-119975 | build_fix_artifact | planned | canonical | Produce a schema-valid, existing-branch repair plan without expanding into review-finding repair or opening a replacement PR. |

## Needs Human

- none
