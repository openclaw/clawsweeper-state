---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-101"
mode: "autonomous"
run_id: "37859363192"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37859363192"
head_sha: "ef343c0d9cd8084fabc459aa6ad831ce6c70e0f2"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-08T23:30:27.601Z"
canonical: "https://github.com/openclaw/notcrawl/issues/101"
canonical_issue: "https://github.com/openclaw/notcrawl/issues/101"
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

# issue-openclaw-notcrawl-101

Repo: openclaw/notcrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37859363192](https://github.com/openclaw/clawsweeper/actions/runs/37859363192)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/notcrawl/issues/101

## Summary

Verified the rich-block URL omission on preflight main. Prepared a narrow implementation artifact; local implementation and validation are blocked by read-only filesystem access and unavailable Go 1.27.1. No code or GitHub changes were made.

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
| #101 | fix_needed | planned | canonical | The URL/caption rendering gap remains on supplied current main and has a narrow fix path. Table support does not cover it. |
| #155 | keep_closed | skipped | related | Historical table-fix context; no closure action is permitted or needed. |
| #161 | keep_closed | skipped | related | Historical evidence only; not an active implementation candidate for #101. |
| cluster:issue-openclaw-notcrawl-101 | build_fix_artifact | planned |  | The artifact is reviewable, but implementation is blocked until the executor has a writable checkout and Go 1.27.1 or newer. |

## Needs Human

- none
