---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-164328"
mode: "autonomous"
run_id: "37127473106"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37127473106"
head_sha: "15a53b4f065fd96d4ceeff86cc47384c9902e153"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-03T14:28:35.189Z"
canonical: "https://github.com/openclaw/openclaw/issues/164328"
canonical_issue: "https://github.com/openclaw/openclaw/issues/164328"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-164328

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37127473106](https://github.com/openclaw/clawsweeper/actions/runs/37127473106)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/164328

## Summary

Confirmed the reported request-policy gap from source at preflight main 60e849f1a4aa2101382883e91e97f87aaf297451. Implementation and executable reproduction are blocked by the read-only host and missing dependencies. No files or GitHub state changed. A narrow executor fix artifact is provided; reproduction must pass its failing-regression gate before implementation or PR creation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #164328 | fix_needed | planned | canonical | The narrow bug fix has an existing documented contract and owner. Actual implementation is blocked by host filesystem restrictions; the executor must first reproduce through the real request boundary. |
| #164327 | keep_related | planned | related | Related provider symptoms have distinct verification and recovery work. Keep open for its own scoped investigation. |
| #132625 | keep_closed | skipped | related | Historical context only; no closure or reopening action is authorized or needed. |
| cluster:issue-openclaw-openclaw-164328 | build_fix_artifact | planned |  | A concrete narrow fix plan is available without product or security-boundary changes. Execution requires a writable independently owned checkout and demonstrated pre-fix regression. |

## Needs Human

- none
