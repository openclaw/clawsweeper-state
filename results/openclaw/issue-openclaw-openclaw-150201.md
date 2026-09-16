---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-150201"
mode: "autonomous"
run_id: "35143928667"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35143928667"
head_sha: "f48f1cee58c5ac867114cc77fb088b172aa4e9a9"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-16T20:40:35.287Z"
canonical: "https://github.com/openclaw/openclaw/issues/150201"
canonical_issue: "https://github.com/openclaw/openclaw/issues/150201"
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

# issue-openclaw-openclaw-150201

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35143928667](https://github.com/openclaw/clawsweeper/actions/runs/35143928667)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/150201

## Summary

Prepared a narrow fix artifact for the remaining Doctor archive refusal. Implementation and runtime reproduction are blocked by the read-only host. The shallow checkout also differs from preflight main. No files or GitHub state changed; no tests or Doctor reproduction ran.

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
| #150201 | fix_needed | blocked | canonical | Source inspection supports the reported defect, but implementation requires a writable executor and a failing regression on verified current main before editing. |
| #148545 | keep_related | planned | related | Shared update symptom does not establish duplicate root cause. |
| #149913 | keep_related | planned | related | Distinct maintainer-owned update work; this issue-specific repair should neither replace nor modify that PR. |
| #144688 | keep_closed | skipped | related | Historical context; does not resolve the remaining Doctor archive refusal. |
| #147762 | keep_closed | skipped | related | Historical context outside this narrow repair. |
| #149956 | keep_closed | skipped | related | Separate retained-history fix; preserve as context without duplicating it. |
| cluster:issue-openclaw-openclaw-150201 | build_fix_artifact | planned | canonical | A narrow executor plan is supported; local implementation remains blocked by host permissions and base verification. |

## Needs Human

- none
