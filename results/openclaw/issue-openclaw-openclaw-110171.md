---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-110171"
mode: "autonomous"
run_id: "30706593455"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30706593455"
head_sha: "f43618fd2caeb1cac767b7c05145767d9a3a9453"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-01T16:04:54.304Z"
canonical: "https://github.com/openclaw/openclaw/issues/110171"
canonical_issue: "https://github.com/openclaw/openclaw/issues/110171"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-110171

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30706593455](https://github.com/openclaw/clawsweeper/actions/runs/30706593455)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/110171

## Summary

#110171 remains a reproducible, non-security iOS routing bug on current main `b83a966c056288adaef187e3e5826188d9f67724`. iOS ignores `consultRouting: "force-agent-consult"` when deciding whether OpenAI realtime must use Gateway relay; the existing relay already preserves the active session key and prevents autonomous provider replies. Plan one narrow two-file fix PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/117485 | clawsweeper/issue-openclaw-openclaw-110171 |  |
| issue_implementation_status_comment | updated | #110171 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117485 | merge_canonical | blocked | fix_pr | checks are not clean: Scan iOS dead code: FAILURE, Intersect shared OpenClawKit dead code: FAILURE, ios-build: FAILURE, openclaw/ci-gate: FAILURE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #110171 | fix_needed | planned | canonical | Repair the producer of the incorrect routing fact in the iOS config parser; reuse the existing relay policy boundary rather than adding configuration, prompt context, or provider behavior. |
| #71195 | keep_related | planned | related | Related realtime-Talk context, but not the same client surface or root cause. |
| #91007 | keep_closed | skipped | related | Closed linked context; no closure or other mutation is permitted or needed. |
| cluster:issue-openclaw-openclaw-110171 | build_fix_artifact | planned |  | Open or update the one allowed generated fix PR from `clawsweeper/issue-openclaw-openclaw-110171` after applying the narrow artifact. |

## Needs Human

- none
