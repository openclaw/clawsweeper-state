---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-138652"
mode: "plan"
run_id: "33931137403"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33931137403"
head_sha: "e5fffb689e4ae012121be84dbb47c0b8306b14b4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-05T00:01:26.724Z"
canonical: "https://github.com/openclaw/openclaw/issues/138652"
canonical_issue: "https://github.com/openclaw/openclaw/issues/138652"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-138652

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33931137403](https://github.com/openclaw/clawsweeper/actions/runs/33931137403)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/138652

## Summary

Plan a narrow startup/Doctor repair for empty retired plugins.installs values. Local HEAD matches preflight main 62ff6248557ce2d5193fe4aeade38be5652fb5f6, and source inspection supports the reported migration gap. Runtime reproduction and validation remain pending: the checkout is read-only, node_modules is absent, and pnpm docs:list failed during Corepack initialization with EROFS. No files or GitHub state were changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| https://github.com/openclaw/openclaw/issues/138652 | fix_needed | planned | canonical | Keep the issue open and prepare the bounded repair below. Reproduce on the executor's refreshed main before production edits or PR publication. No unresolved maintainer product decision is needed for this plan. |

## Needs Human

- none
