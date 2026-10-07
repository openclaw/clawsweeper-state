---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-140932"
mode: "autonomous"
run_id: "37671870209"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37671870209"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-07T19:28:08.414Z"
canonical: "https://github.com/openclaw/openclaw/issues/140932"
canonical_issue: "https://github.com/openclaw/openclaw/issues/140932"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-140932

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37671870209](https://github.com/openclaw/clawsweeper/actions/runs/37671870209)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/140932

## Summary

Reproduced missing query/document prefixes through the unmodified provider adapter at preflight main 9df0cd095766ff05864aa67aa91b627a347a4d1a. Prepared a narrow repair artifact. Implementation is blocked by the read-only workspace; dependencies and a managed EmbeddingGemma server are unavailable. No files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #140932 | fix_needed | blocked | canonical | The bug is reproduced and has a narrow existing-owner repair path. Read-only filesystem permissions prohibit adding regressions or implementing the fix; node_modules, compiled runtime, and a managed llama-server are unavailable for required validation. |
| #147181 | keep_related | planned | related | Distinct feature scope; keep open and exclude configuration additions and other model families from this repair. |
| #42408 | keep_related | planned | related | Related retrieval-quality symptoms with different causes and remaining work; keep open without expanding this implementation. |
| cluster:issue-openclaw-openclaw-140932 | build_fix_artifact | planned |  | Artifact preparation is complete. A writable executor must implement, validate, obtain fresh review, and create or update the single authorized PR branch. |

## Needs Human

- none
