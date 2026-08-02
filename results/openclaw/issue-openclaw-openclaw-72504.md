---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-72504"
mode: "autonomous"
run_id: "30738917010"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30738917010"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-02T08:29:53.259Z"
canonical: "https://github.com/openclaw/openclaw/issues/72504"
canonical_issue: "https://github.com/openclaw/openclaw/issues/72504"
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

# issue-openclaw-openclaw-72504

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30738917010](https://github.com/openclaw/clawsweeper/actions/runs/30738917010)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/72504

## Summary

Current main at 86a95b459c94ff7d03b5279d5166b03a39ba1473 still strips the receiving bot's own Feishu mention in normalizeMentions, while group command handling separately computes a normalized probe but still dispatches the unnormalized CommandBody. The issue remains a narrow, non-security Feishu parser/context repair; plan one new credited fix PR.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/117906 | clawsweeper/issue-openclaw-openclaw-72504 |  |
| issue_implementation_status_comment | updated | #72504 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117906 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72504 | fix_needed | planned | canonical | The canonical issue remains reproducible from current source and has a narrow owner-boundary repair. |
| #40768 | keep_related | planned | related | Keep open as a distinct Feishu identity/activation decision; do not add cross-app identity fallbacks to this repair. |
| #72532 | keep_closed | skipped | superseded | Historical contributor work is creditable source evidence only; no mutation is valid for an already-closed PR. |
| #72661 | keep_closed | skipped | superseded | Historical alternative only; no closure or merge action is valid. |
| #87004 | keep_closed | skipped | duplicate | Already-closed duplicate retained as historical evidence only. |
| cluster:issue-openclaw-openclaw-72504 | build_fix_artifact | planned | canonical | Create one current-main fix PR using the supplied cluster branch and preserve contributor attribution in its body. |
| cluster:issue-openclaw-openclaw-72504 | open_fix_pr | planned | canonical | Open only after the planned narrow patch, validation, and exact-head Codex review are clean. |

## Needs Human

- none
