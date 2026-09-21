---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-155190"
mode: "autonomous"
run_id: "35655167878"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35655167878"
head_sha: "ffdff711463380f2636e8e9f7fb152770f26b9c3"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-21T21:25:54.480Z"
canonical: "https://github.com/openclaw/openclaw/issues/155190"
canonical_issue: "https://github.com/openclaw/openclaw/issues/155190"
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

# issue-openclaw-openclaw-155190

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35655167878](https://github.com/openclaw/clawsweeper/actions/runs/35655167878)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/155190

## Summary

Source confirms the direct startup ordering defect on preflight main. Narrow fix artifact prepared; implementation and runtime reproduction are blocked by the read-only checkout and absent dependencies. No files or GitHub state changed. The silent-call symptom remains unverified.

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
| #155190 | fix_needed | planned | canonical | A narrow existing-owner repair is supported by source. Runtime reproduction must precede implementation in a writable executor checkout. |
| cluster:issue-openclaw-openclaw-155190 | build_fix_artifact | planned |  | Emit the executor handoff without claiming a patched or validated branch. Reuse the designated branch and require failing socket-boundary proof before repair. |

## Needs Human

- none
