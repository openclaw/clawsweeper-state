---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-130144"
mode: "autonomous"
run_id: "33244662422"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33244662422"
head_sha: "e1eefe217304f0f510acb3890db1155cef61682e"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-29T09:20:01.840Z"
canonical: "#130144"
canonical_issue: "#130144"
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

# issue-openclaw-openclaw-130144

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33244662422](https://github.com/openclaw/clawsweeper/actions/runs/33244662422)

Workflow conclusion: success

Worker result: blocked

Canonical: #130144

## Summary

#130144 is a confirmed narrow Telegram rendering defect: the shared, configured progress-line budget is bypassed by Telegram’s fixed 300-unit clipping. A new fix PR is appropriate, but this read-only checkout has neither dependencies nor build output, so required regression validation and Telegram Test Server proof cannot run or be published.

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
| #130144 | fix_needed | blocked | canonical | Filesystem access is read-only, so no branch or patch can be created. The checkout is shallow, has no node_modules or dist/entry.js, and lacks the runtime prerequisites for mandatory Telegram Test Server proof; pnpm docs:list also fails because Corepack cannot create its cache on the read-only filesystem. |

## Needs Human

- none
