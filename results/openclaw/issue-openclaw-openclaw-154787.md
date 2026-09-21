---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-154787"
mode: "plan"
run_id: "35601495777"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35601495777"
head_sha: "71fbed1ffe4ae51659be3ea9c1e2b7e18858acb1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-21T12:49:41.310Z"
canonical: "#154787"
canonical_issue: "#154787"
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

# issue-openclaw-openclaw-154787

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35601495777](https://github.com/openclaw/clawsweeper/actions/runs/35601495777)

Workflow conclusion: success

Worker result: planned

Canonical: #154787

## Summary

Prepared a narrow UI repair plan. Source inspection at preflight main 6c5bcfec435cb9c8762c849c08244b54211e8bca confirms the missing details request and contextTokens mapping. No files or GitHub state changed. Executable reproduction, validation, and screenshots remain pending. Contributor-PR recheck requires an authenticated executor.

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
| #154787 | fix_needed | planned | canonical | The configured-budget display omission has a narrow repair path. Keep the issue open and require current-main reproduction and contributor-work discovery before implementation. |
| #148575 | keep_related | planned | related | Distinct runtime producer defect; exclude it from this UI repair. |
| #124207 | keep_closed | skipped | related | Historical implementation context whose safeguards must remain intact; no closure or replacement action. |

## Needs Human

- none
