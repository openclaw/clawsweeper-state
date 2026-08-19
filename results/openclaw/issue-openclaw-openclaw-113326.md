---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32201786890"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32201786890"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T00:51:13.063Z"
canonical: "https://github.com/openclaw/openclaw/issues/113326"
canonical_issue: "https://github.com/openclaw/openclaw/issues/113326"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-113326

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32201786890](https://github.com/openclaw/clawsweeper/actions/runs/32201786890)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

Current main contains the documented OpenAI device-code command, maps --device-code to method=device-code, and then rejects all non-TTY login calls before the provider flow. The narrow fix is blocked here because ../codex is absent and this read-only sandbox cannot clone it or edit/test a branch; the executor must complete the required direct Codex-source inspection before applying the supplied repair artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #113326 | fix_needed | blocked | canonical | Implementation requires a writable checkout and direct inspection of the Codex device-code protocol/runtime source before any code change or proof-sufficiency claim. |
| #100067 | keep_related | planned | related | Keep open independently; it is not covered by this narrow CLI repair. |
| #50452 | keep_closed | skipped |  | Already closed; no mutation. |
| #71864 | keep_closed | skipped |  | Already closed; no mutation. |
| #79021 | keep_closed | skipped |  | Already closed; no mutation. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | planned | canonical | Narrow fix path is defined, but this worker cannot create or validate its branch. |

## Needs Human

- none
