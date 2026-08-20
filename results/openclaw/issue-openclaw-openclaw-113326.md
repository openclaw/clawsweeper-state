---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32344748188"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32344748188"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T07:44:52.452Z"
canonical: "#113326"
canonical_issue: "#113326"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-113326

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32344748188](https://github.com/openclaw/clawsweeper/actions/runs/32344748188)

Workflow conclusion: success

Worker result: blocked

Canonical: #113326

## Summary

Current main has the documented OpenAI device-code route, but modelsAuthLoginCommand rejects non-TTY stdin before method dispatch. Implementation is blocked because the mandatory sibling ../codex source checkout is absent and this read-only worker cannot clone it for the required direct protocol/runtime inspection.

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
| #113326 | fix_needed | blocked | canonical | Await a writable environment with sibling Codex source before implementing or opening the permitted fix PR. |
| #100067 | keep_independent | planned | independent | Do not broaden this narrow CLI-login repair into migration or fallback policy. |
| #50452 | keep_closed | skipped | related | Historical context only; no closure action is valid. |
| #71864 | keep_closed | skipped | related | Historical context only; no closure action is valid. |
| #79021 | keep_closed | skipped | related | Historical context only; no closure action is valid. |

## Needs Human

- Provide a writable repair environment containing sibling ../codex (https://github.com/openai/codex.git), then inspect the exact device-code/login protocol runtime before patching. This is required by AGENTS.md:11 and cannot be satisfied in the current read-only worker.
