---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-161431"
mode: "autonomous"
run_id: "36647679863"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36647679863"
head_sha: "7829cdce71310b549c119c670e7bd69e04f7e242"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-30T00:31:37.554Z"
canonical: "https://github.com/openclaw/openclaw/issues/161431"
canonical_issue: "https://github.com/openclaw/openclaw/issues/161431"
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

# issue-openclaw-openclaw-161431

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36647679863](https://github.com/openclaw/clawsweeper/actions/runs/36647679863)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/161431

## Summary

Current main still drops the responding agent ID before TTS summary model selection. A narrow fix can carry that ID through summarization and preserve explicit-owner rejection when no ID is supplied. No code was changed in this read-only worker checkout.

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
| #161431 | fix_needed | planned | canonical | The reported multi-agent TTS failure remains in current-main source. |
| cluster:issue-openclaw-openclaw-161431 | build_fix_artifact | planned |  | Create or reuse the job's single implementation PR after the focused fix and validation. |

## Needs Human

- none
