---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-116937"
mode: "autonomous"
run_id: "30647490374"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30647490374"
head_sha: "c319ba7b34e1f311e292066ff860b14edcd78bf4"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-07-31T17:30:35.814Z"
canonical: "https://github.com/openclaw/openclaw/issues/116937"
canonical_issue: "https://github.com/openclaw/openclaw/issues/116937"
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

# issue-openclaw-openclaw-116937

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30647490374](https://github.com/openclaw/clawsweeper/actions/runs/30647490374)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/116937

## Summary

Verified on current main `500fed6d4a91efc2ee3beb1b2d437cb58e5691cb`: `qmd-index-missing` is explicitly non-fixable, but `memory status` prints the generic `memory status --fix` hint for every audit issue. The dedicated `memory index` path owns synchronization. A narrow two-file repair is appropriate; no GitHub mutation was performed.

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
| #116937 | fix_needed | planned | canonical | The issue is a current, narrow command-remediation defect with an existing diagnosis code and recovery command; it needs a new fix PR. |
| cluster:issue-openclaw-openclaw-116937 | build_fix_artifact | planned | canonical | Create one narrow PR from `clawsweeper/issue-openclaw-openclaw-116937`; repair implementation and test coverage are fully bounded. |

## Needs Human

- none
