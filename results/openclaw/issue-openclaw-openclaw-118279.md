---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118279"
mode: "autonomous"
run_id: "30771394654"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30771394654"
head_sha: "de31c9959070dd22ec785fdbcc924fc8e6de1e06"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-02T23:34:57.689Z"
canonical: "https://github.com/openclaw/openclaw/issues/118279"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118279"
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

# issue-openclaw-openclaw-118279

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30771394654](https://github.com/openclaw/clawsweeper/actions/runs/30771394654)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/118279

## Summary

#118279 remains the canonical open bug. The supplied preflight identifies main as faf2602d22aa0d9d7fa7894a95ef3703b506d049, but this read-only checkout contains only 6adbd0901aa14ce09fccac76dfcc3f0f5b8f3321 and cannot resolve the required SHA. The older checkout independently shows the reported broken boundary: due commitments set disableTools without side-question mode, while the CLI handoff forwards disableTools and the CLI guard rejects tools-disabled always-on-native-tool backends. A narrow fix artifact is ready, but implementation and validation against latest main are blocked until the executor refreshes the checkout.

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
| #118279 | keep_canonical | planned | canonical | The issue is a bounded existing-behavior defect with a clear owner boundary; no closure or merge is allowed by this job. |
| #118279 | fix_needed | blocked | canonical | Implementation is blocked only by the unavailable required latest-main checkout; refresh to the preflight SHA before applying the narrow artifact. |
| cluster:issue-openclaw-openclaw-118279 | build_fix_artifact | planned | canonical | A refreshed executor can apply this small, non-security repair without new configuration, provider policy, or embedded-runner API changes. |

## Needs Human

- none
