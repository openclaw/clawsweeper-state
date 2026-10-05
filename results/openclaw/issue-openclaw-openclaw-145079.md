---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-145079"
mode: "autonomous"
run_id: "37303041940"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37303041940"
head_sha: "7b767cc6bf7ed7176a94b1e8732b478ea49012d2"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-05T12:32:13.818Z"
canonical: "https://github.com/openclaw/openclaw/issues/145079"
canonical_issue: "https://github.com/openclaw/openclaw/issues/145079"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-145079

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37303041940](https://github.com/openclaw/clawsweeper/actions/runs/37303041940)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/145079

## Summary

Confirmed the shared matcher gap on preflight main 83b743ac7141882378a821db5beacd14a7222745. Implementation and required transport-to-session reproduction are blocked by the read-only sandbox and missing dependencies. A narrow executor fix artifact is prepared; no files or GitHub state were changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #145079 | fix_needed | planned | canonical | Existing recovery behavior has a narrow classification gap. Keep the canonical issue open; executor must reproduce before changing production code. |
| #127338 | keep_closed | skipped | related | Historical evidence only. |
| #144583 | keep_closed | skipped | related | Historical sibling recovery evidence only. |
| #145080 | keep_closed | skipped | related | Preserve prior-work credit in the new implementation PR; no closure or branch repair action applies. |
| cluster:issue-openclaw-openclaw-145079 | build_fix_artifact | planned |  | Artifact preparation is complete. Local implementation is blocked by host restrictions; continue in a writable, independently owned executor checkout. |

## Needs Human

- none
