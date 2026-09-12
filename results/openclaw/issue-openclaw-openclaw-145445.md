---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-145445"
mode: "autonomous"
run_id: "34662503323"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34662503323"
head_sha: "d47259a07a62294e032018259aaf117ef12ed4fe"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-12T01:47:58.958Z"
canonical: "https://github.com/openclaw/openclaw/issues/145445"
canonical_issue: "https://github.com/openclaw/openclaw/issues/145445"
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

# issue-openclaw-openclaw-145445

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34662503323](https://github.com/openclaw/clawsweeper/actions/runs/34662503323)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/145445

## Summary

Source confirms the request/result mismatch on preflight main ab2219d36361f1538e5f772cb07bd3d04b1f969e. Narrow fix artifact prepared. Implementation and regression validation are blocked by the read-only host and missing dependencies; no files or GitHub state changed.

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
| #145445 | fix_needed | planned | canonical | A narrow plugin-owned repair is supported by source. Establish the failing callback-level regression before implementation in a writable executor. |
| #139279 | keep_related | planned | related | Progress cues and timeout policy are separate from incorrect request/result sharing. Leave open outside this repair. |
| #139472 | keep_related | planned | related | Background delegation is a separate feature request. This repair preserves bounded single-flight execution. |
| cluster:issue-openclaw-openclaw-145445 | build_fix_artifact | planned |  | The repair fits the authorized bug-only scope without config, SDK, provider, persistence, queue, or policy changes. |
| cluster:issue-openclaw-openclaw-145445 | open_fix_pr | blocked |  | Blocked until a writable executor establishes the failing regression, implements the narrow repair, completes review and validation, and opens or updates the single authorized branch. |

## Needs Human

- none
