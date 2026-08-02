---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-73478"
mode: "autonomous"
run_id: "30742828341"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30742828341"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-02T10:06:15.704Z"
canonical: "https://github.com/openclaw/openclaw/issues/73478"
canonical_issue: "https://github.com/openclaw/openclaw/issues/73478"
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

# issue-openclaw-openclaw-73478

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30742828341](https://github.com/openclaw/clawsweeper/actions/runs/30742828341)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/73478

## Summary

#73478 remains an open canonical Gateway behavior bug on main 30c87bde99774fdbd0b3b31c1921e3750a1d61e4. The live-chat projector rejects assistant events that contain mediaUrls without text/delta, and the Gateway delta/final projection builds text-only message content, so generated images are omitted from WebSocket chat subscribers. A narrow new fix PR is appropriate; #81136 is closed historical source work only.

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
| #73478 | fix_needed | planned | canonical | Current main still drops assistant media from Gateway live chat. The closed prior PR is not a viable branch, so the canonical issue needs a narrow credited replacement PR. |
| #81136 | keep_closed | skipped | superseded | Already closed historical contributor work; no closeout or mutation is valid. Preserve its idea and attribution in the replacement PR. |
| cluster:issue-openclaw-openclaw-73478 | build_fix_artifact | planned | canonical | Prepare a new narrow PR from the current main base; do not reuse the closed fork branch. |

## Needs Human

- none
