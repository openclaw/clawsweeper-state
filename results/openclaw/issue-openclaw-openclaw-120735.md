---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120735"
mode: "autonomous"
run_id: "31311685729"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31311685729"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-09T12:24:19.691Z"
canonical: "https://github.com/openclaw/openclaw/issues/120735"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120735"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-120735

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31311685729](https://github.com/openclaw/clawsweeper/actions/runs/31311685729)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/120735

## Summary

#120735 is a reproducible, narrow Telegram context defect on current main. Animated TGS and video WebM stickers are intentionally not downloaded, but that outcome is dropped before direct, group-history, and chat-window prompt projections; path-less media then exposes a raw telegram:file reference in reply/context projections. A typed unavailable reason and explicit agent notice is the canonical repair. Implementation is blocked only because this checkout is read-only and lacks dependencies.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #120735 | fix_needed | blocked | canonical | The implementation checkout is read-only and has no node_modules, so this worker cannot patch or validate a branch. The deterministic executor can apply the narrow fix artifact on clawsweeper/issue-openclaw-openclaw-120735. |
| cluster:issue-openclaw-openclaw-120735 | build_fix_artifact | planned | canonical | Produce one narrow fix PR; do not download, convert, configure, or change Telegram media policy. |

## Needs Human

- none
