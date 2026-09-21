---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-154446"
mode: "autonomous"
run_id: "35563862786"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35563862786"
head_sha: "71fbed1ffe4ae51659be3ea9c1e2b7e18858acb1"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-21T05:31:38.734Z"
canonical: "https://github.com/openclaw/openclaw/issues/154446"
canonical_issue: "https://github.com/openclaw/openclaw/issues/154446"
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

# issue-openclaw-openclaw-154446

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35563862786](https://github.com/openclaw/clawsweeper/actions/runs/35563862786)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/154446

## Summary

Current source supports the reported layout defect. Prepared a narrow fix artifact; implementation, browser reproduction, screenshots, and validation are blocked on this read-only host, which lacks dependencies and Chromium. No files or GitHub state changed.

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
| #154446 | fix_needed | planned | canonical | A narrow CSS repair and browser regression are appropriate. Browser failure on current main must be established before production edits. |
| #149108 | keep_closed | skipped | related | Historical context only. Preserve its long-name and phone behavior. |
| cluster:issue-openclaw-openclaw-154446 | build_fix_artifact | planned | canonical | Return the scoped artifact for a writable executor. Do not publish a fix PR until browser reproduction, repair, review, validation, and screenshot delivery are complete. |

## Needs Human

- none
