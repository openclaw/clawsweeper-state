---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126396"
mode: "autonomous"
run_id: "32293690514"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32293690514"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-19T19:49:14.223Z"
canonical: "#126396"
canonical_issue: "#126396"
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

# issue-openclaw-openclaw-126396

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32293690514](https://github.com/openclaw/clawsweeper/actions/runs/32293690514)

Workflow conclusion: success

Worker result: blocked

Canonical: #126396

## Summary

#126396 remains an open canonical documentation bug on main, but no branch or PR was created: the filesystem is read-only, the mandatory sibling ../codex checkout is absent, and pnpm validation cannot initialize Corepack's cache in this sandbox.

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
| #126396 | fix_needed | blocked | canonical | A narrow documentation-only repair is identified, but the required direct-Codex gate and writable validation environment are unavailable. |

## Needs Human

- none
