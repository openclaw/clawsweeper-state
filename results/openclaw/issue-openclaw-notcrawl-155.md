---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-155"
mode: "autonomous"
run_id: "36436308088"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36436308088"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-28T14:39:00.336Z"
canonical: "https://github.com/openclaw/notcrawl/issues/155"
canonical_issue: "https://github.com/openclaw/notcrawl/issues/155"
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

# issue-openclaw-notcrawl-155

Repo: openclaw/notcrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36436308088](https://github.com/openclaw/clawsweeper/actions/runs/36436308088)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/notcrawl/issues/155

## Summary

Issue #155 remains reproducible on main at 204af2f8be192709ee3f0acaef120d583465ab3c. Plan a narrow fix for archived simple-table Markdown and search; keep related issue #101 open.

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
| #155 | fix_needed | planned | canonical | The archived cell data is available, but Markdown export and search omit it. |
| #101 | keep_related | planned | related | The table fix does not resolve #101's broader rendering request. |
| cluster:issue-openclaw-notcrawl-155 | build_fix_artifact | planned |  | A bounded fix can read the cells already stored in properties_json without a storage schema change. |

## Needs Human

- none
