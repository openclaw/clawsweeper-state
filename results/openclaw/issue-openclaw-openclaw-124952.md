---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124952"
mode: "autonomous"
run_id: "32406042926"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32406042926"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T19:26:53.866Z"
canonical: "https://github.com/openclaw/openclaw/issues/124952"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124952"
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

# issue-openclaw-openclaw-124952

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32406042926](https://github.com/openclaw/clawsweeper/actions/runs/32406042926)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124952

## Summary

Current main reproduces #124952: Doctor leaves legacy claude-cli model-map and explicit allowlist refs when the primary is already canonical, so canonical Claude overrides are rejected. A narrow fix path is defined, but this read-only worker cannot edit, install dependencies, create the required ../codex checkout, validate, or open the PR.

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
| #124952 | fix_needed | planned | canonical | Real Doctor-owned migration defect on current main; no viable open PR exists. |
| #80408 | keep_closed | skipped | related | Already closed historical context; no closeout action is valid. |
| #80413 | keep_closed | skipped | related | Already closed historical context; no closeout action is valid. |
| cluster:issue-openclaw-openclaw-124952 | build_fix_artifact | planned | canonical | Prepare one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-124952. |
| cluster:issue-openclaw-openclaw-124952 | open_fix_pr | blocked | canonical | The deterministic executor needs a writable checkout with dependencies and the mandated ../codex source checkout before it can create or update the PR. |

## Needs Human

- none
