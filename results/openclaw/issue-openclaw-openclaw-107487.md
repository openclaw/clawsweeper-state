---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-107487"
mode: "autonomous"
run_id: "33010055491"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33010055491"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-26T20:41:41.399Z"
canonical: "https://github.com/openclaw/openclaw/issues/107487"
canonical_issue: "https://github.com/openclaw/openclaw/issues/107487"
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

# issue-openclaw-openclaw-107487

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33010055491](https://github.com/openclaw/clawsweeper/actions/runs/33010055491)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/107487

## Summary

#107487 remains a reproducible canonical bug on current local main a27f7fe56c2868d89a60db534f9dcd041fe2fdda: `/acp close` omits durable discard, and ACPX only has an in-memory fresh marker. A narrow four-file repair is specified, but this read-only checkout lacks dependencies and the required sibling ../codex source, so no branch or validation can be produced here.

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
| #107487 | fix_needed | planned | canonical | The issue is a broken established close invariant; no viable open PR exists. |
| cluster:issue-openclaw-openclaw-107487 | build_fix_artifact | blocked | canonical | Implementation and validation require a writable checkout with installed pinned dependencies and the mandated Codex sibling source. |
| #109270 | keep_closed | skipped | related | Already closed; not a mutation target. |
| #111628 | keep_closed | skipped | superseded | Already closed; retain attribution in the replacement PR rather than attempting closure or merge. |

## Needs Human

- none
