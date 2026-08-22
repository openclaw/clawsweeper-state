---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127784"
mode: "autonomous"
run_id: "32554198106"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32554198106"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T05:35:34.417Z"
canonical: "https://github.com/openclaw/openclaw/issues/127784"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127784"
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

# issue-openclaw-openclaw-127784

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32554198106](https://github.com/openclaw/clawsweeper/actions/runs/32554198106)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127784

## Summary

#127784 is the canonical open bug. Current main directly inlines inbound context into runtime-only prompt text, while submission bypasses the existing hidden carrier. A narrow repair is planned, but this read-only checkout lacks both the mandatory ../codex source checkout and test dependencies, so no branch or validated PR can be produced here.

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
| #127784 | fix_needed | blocked | canonical | A writable dependency-ready checkout with ../codex is required before changing code or claiming a validated repair. |
| #127276 | keep_closed | skipped | independent | Closed historical context only; no mutation or close action is applicable. |
| cluster:issue-openclaw-openclaw-127784 | build_fix_artifact | planned | canonical | Narrow new-fix-PR plan prepared for a writable executor. |

## Needs Human

- none
