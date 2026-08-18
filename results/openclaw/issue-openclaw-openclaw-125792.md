---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125792"
mode: "autonomous"
run_id: "32129705353"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32129705353"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T11:14:00.477Z"
canonical: "https://github.com/openclaw/openclaw/issues/125792"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125792"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-125792

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32129705353](https://github.com/openclaw/clawsweeper/actions/runs/32129705353)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125792

## Summary

Current main reproduces the missing embedding ctx-size. A narrow llama.cpp fix is appropriate, but implementation is blocked: the required sibling ../codex source checkout is absent, the pinned b10357 models-preset contract and runnable binary/model are unavailable, and preserving arbitrary manual models.ini edits needs an owner decision.

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
| Needs human | 1 |

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
| #125792 | keep_canonical | planned | canonical | Canonical reproducible bug; no implementation PR exists. |
| cluster:issue-openclaw-openclaw-125792 | fix_needed | blocked | canonical | Do not encode an unverified llama.cpp preset setting or change preset-ownership semantics without the dependency contract and a writable validation environment. |
| cluster:issue-openclaw-openclaw-125792 | build_fix_artifact | planned | canonical | Prepared narrow artifact for an executor that can inspect the dependency, edit, and run the required live proof. |

## Needs Human

- Define the required preservation semantics for manual models.ini edits. Current prepareManagedLlamaServer atomically overwrites the file on every preparation (extensions/llama-cpp/src/managed-server.ts:347); preserving arbitrary edits while updating generated entries needs an explicit ownership/merge rule.
