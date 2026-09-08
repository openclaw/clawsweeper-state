---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-142208"
mode: "autonomous"
run_id: "34236387127"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34236387127"
head_sha: "96e359e46d1b87ab8a9d73d939191fd1ff229263"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-08T14:43:53.754Z"
canonical: "https://github.com/openclaw/openclaw/issues/142208"
canonical_issue: "https://github.com/openclaw/openclaw/issues/142208"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-142208

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34236387127](https://github.com/openclaw/clawsweeper/actions/runs/34236387127)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/142208

## Summary

Confirmed the hardcoded remediation defect in source at preflight main 1b011fe705abb14d163100f886d38e3a2b50f100. Implementation and regression execution are blocked by the read-only filesystem and absent dependencies. Narrow fix artifact provided; no files or GitHub state changed.

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
| #142208 | fix_needed | blocked | canonical | Only local implementation and validation are blocked. A writable executor must establish the failing CLI regression before applying the wording repair. |
| #107930 | keep_related | planned | related | Keep open outside this narrowly authorized wording repair. |
| #127414 | keep_related | planned | related | Distinct behavior and product decision; keep open. |
| #140672 | keep_closed | skipped | related | Historical context only. |
| cluster:issue-openclaw-openclaw-142208 | build_fix_artifact | planned | canonical | The source supports a narrow non-security bug fix without configuration, runtime-policy, or persistent-state changes. |

## Needs Human

- none
