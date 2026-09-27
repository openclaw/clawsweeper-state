---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-153502"
mode: "autonomous"
run_id: "36343980736"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36343980736"
head_sha: "3a18b3d1a20770d6b719c377f2a9be24f214a082"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-27T20:06:44.159Z"
canonical: "https://github.com/openclaw/openclaw/issues/153502"
canonical_issue: "https://github.com/openclaw/openclaw/issues/153502"
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

# issue-openclaw-openclaw-153502

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36343980736](https://github.com/openclaw/clawsweeper/actions/runs/36343980736)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/153502

## Summary

At preflight main SHA 272605d6d54800a2690332d1142faf64951bd60d, Doctor's retained-source settlement rejects historical_transcript_deferred even though the shared migration contract classifies it as a warning. A runnable regression, patch, and validation remain blocked by the read-only checkout and unavailable dependencies. No PR was opened.

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
| #153502 | fix_needed | planned | canonical | The source-level mismatch supports a narrow Doctor fix, but the required failing entry-point regression could not be run in this read-only checkout. |
| cluster:issue-openclaw-openclaw-153502 | build_fix_artifact | blocked |  | Implementation is blocked by the read-only filesystem. Reproduce through Doctor and plugin completion on writable latest main before applying the narrow fix. |

## Needs Human

- none
