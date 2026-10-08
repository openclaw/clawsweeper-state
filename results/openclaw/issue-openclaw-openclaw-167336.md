---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-167336"
mode: "autonomous"
run_id: "37813765092"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37813765092"
head_sha: "fb5a0d95b269f412aa185cf4deda1c115a83af69"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-10-08T17:41:08.971Z"
canonical: "https://github.com/openclaw/openclaw/issues/167336"
canonical_issue: "https://github.com/openclaw/openclaw/issues/167336"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-167336

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37813765092](https://github.com/openclaw/clawsweeper/actions/runs/37813765092)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/167336

## Summary

Verified the missing recall-session provenance on supplied main 0363122eb1ba8568b12b2107e728dd418e9700d5. Prepared a narrow producer fix for the existing System filters. No files or GitHub state changed; implementation and validation require the executor.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #167336 | fix_needed | planned | canonical | Fix creation provenance at the plugin producer using existing public SessionEntry fields. No new classifier, key heuristic, configuration, or cleanup policy is needed. |
| #146124 | keep_related | planned | related | Distinct producer and visibility contract; retain its existing implementation lane. |
| #146234 | keep_related | planned | related | Useful separate contributor work. This issue-specific job does not authorize repairing or merging its heartbeat lane. |
| #121851 | keep_closed | skipped | related | Historical context only. |
| #121855 | keep_closed | skipped | related | Existing filter infrastructure; it did not stamp recall entries. |
| #145951 | keep_closed | skipped | independent | Independent historical context; no prompt changes belong in this repair. |
| #160367 | keep_closed | skipped | related | Historical sibling fix, not coverage of the canonical issue. |
| cluster:issue-openclaw-openclaw-167336 | build_fix_artifact | planned | canonical | Prepare one narrow implementation PR on clawsweeper/issue-openclaw-openclaw-167336, reusing any existing PR for that branch after live-state reconciliation. |

## Needs Human

- none
