---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-131711"
mode: "autonomous"
run_id: "33180780863"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33180780863"
head_sha: "f72ea010c1d7fd134b1bd0826b3a707778c312bc"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-28T14:59:28.462Z"
canonical: "#131711"
canonical_issue: "#131711"
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

# issue-openclaw-openclaw-131711

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33180780863](https://github.com/openclaw/clawsweeper/actions/runs/33180780863)

Workflow conclusion: success

Worker result: blocked

Canonical: #131711

## Summary

Current main still has the narrow abortability gap, but this read-only worker cannot create the required branch/test changes or complete required validation. A focused replacement fix artifact is ready for #131711.

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
| #131711 | fix_needed | blocked | canonical | A stopped/finalizing embedded handle remains abortable through the Gateway bridge. Creating and validating the repair is blocked by the supplied read-only environment, missing dependencies, and unavailable required Codex source checkout. |

## Needs Human

- none
