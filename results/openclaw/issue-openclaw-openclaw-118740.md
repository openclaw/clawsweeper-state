---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118740"
mode: "autonomous"
run_id: "30857082464"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30857082464"
head_sha: "42a7674d5f25d34441c20a8164c0409eda450a68"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-03T22:11:25.853Z"
canonical: "https://github.com/openclaw/openclaw/issues/118740"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118740"
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

# issue-openclaw-openclaw-118740

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30857082464](https://github.com/openclaw/clawsweeper/actions/runs/30857082464)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118740

## Summary

#118740 remains a narrow, reproducible non-security bug on current main. In `auto` mode, the signing script classifies the raw `SIGN_IDENTITY` selector instead of the selected certificate, so a SHA-1 selector for a Developer ID Application certificate receives `--timestamp=none`. The read-only worker sandbox cannot create the requested branch or run the write-based Vitest fixture; a ready-to-apply narrow fix artifact is provided.

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
| #118740 | keep_canonical | planned | canonical | Keep the issue open as the canonical report until the planned fix PR validates and lands; the job prohibits close and merge. |
| #118740 | fix_needed | planned | canonical | A narrow repair is required: resolve the supplied selector against `security find-identity -p codesigning -v` in `auto` mode, preserve explicit `on`/`off` and `-`, and cover the result with fake command fixtures. |
| cluster:issue-openclaw-openclaw-118740 | build_fix_artifact | planned |  | The branch and PR require deterministic executor-side filesystem and GitHub mutations, unavailable to this read-only worker. |

## Needs Human

- none
