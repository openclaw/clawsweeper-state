---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125776"
mode: "autonomous"
run_id: "32540858839"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32540858839"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-22T00:45:20.633Z"
canonical: "#125776"
canonical_issue: "#125776"
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

# issue-openclaw-openclaw-125776

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32540858839](https://github.com/openclaw/clawsweeper/actions/runs/32540858839)

Workflow conclusion: success

Worker result: blocked

Canonical: #125776

## Summary

Blocked before any source change: current main locally shows the OpenClaw-side identity-loss path, but the mandatory sibling ../codex checkout is absent and this read-only, network-restricted worker cannot obtain it. The required regression command is also blocked by Corepack attempting to create its cache on the read-only filesystem. No branch, PR, comment, label, closure, or merge action was performed.

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
| #116512 | keep_related | planned | related | Meaningfully different root cause; no mutation is authorized or needed. |
| #125776 | needs_human | blocked | needs_human | Human or writable-worker intervention is required to provide the mandated direct ../codex inspection and run the pre-fix regression before an executable fix artifact can be safely created. |
| #125779 | keep_closed | skipped | superseded | Historical source work only; no mutation. |

## Needs Human

- Provide a writable environment with the required sibling ../codex checkout and a usable Corepack/pnpm cache so the direct Codex contract check and pre-fix focused regression can be completed before creating a fix artifact for #125776.
