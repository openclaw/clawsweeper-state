---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-112592"
mode: "autonomous"
run_id: "32334336457"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32334336457"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T05:20:14.684Z"
canonical: "#112592"
canonical_issue: "#112592"
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

# issue-openclaw-openclaw-112592

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32334336457](https://github.com/openclaw/clawsweeper/actions/runs/32334336457)

Workflow conclusion: success

Worker result: blocked

Canonical: #112592

## Summary

Current main still defaults internal completion provenance to the routing sentinel "webchat". The narrow provenance-only repair is specified, but this worker cannot edit or validate it: the filesystem is read-only, ../codex is absent (its required clone failed), and focused tests cannot start because tsx is not installed.

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
| #112592 | fix_needed | blocked | canonical | A writable executor with the required sibling Codex checkout and dependencies is needed to apply and validate the prepared narrow repair. |
| #112592 | build_fix_artifact | planned | canonical | The source-level repair scope and owner-boundary regression anchors are deterministic. |

## Needs Human

- none
