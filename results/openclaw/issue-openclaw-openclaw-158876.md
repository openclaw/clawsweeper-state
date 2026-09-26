---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158876"
mode: "plan"
run_id: "36245328592"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36245328592"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-26T13:32:41.478Z"
canonical: "#158876"
canonical_issue: "#158876"
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

# issue-openclaw-openclaw-158876

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36245328592](https://github.com/openclaw/clawsweeper/actions/runs/36245328592)

Workflow conclusion: success

Worker result: planned

Canonical: #158876

## Summary

Plan a narrow fix for #158876. The job and hydrated issue report the retired public OpenAI Videos API still appears as an available video candidate. First reproduce that behavior through the registered plugin and video_generate path on the supplied main SHA. No files or GitHub state were changed.

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
| #158874 | keep_independent | planned | independent | Failure diagnostics remain relevant regardless of OpenAI video availability. |
| #158875 | keep_independent | planned | independent | Task attribution can fail with providers other than OpenAI. |
| #158876 | fix_needed | planned | canonical | Repair public-endpoint availability while preserving existing custom base-URL behavior. |

## Needs Human

- none
