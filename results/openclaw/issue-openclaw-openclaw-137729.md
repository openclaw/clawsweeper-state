---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-137729"
mode: "autonomous"
run_id: "33830389070"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33830389070"
head_sha: "c6dee040ad401c7df83076960dfeb52c7a59836f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-04T02:53:17.884Z"
canonical: "#137729"
canonical_issue: "#137729"
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

# issue-openclaw-openclaw-137729

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33830389070](https://github.com/openclaw/clawsweeper/actions/runs/33830389070)

Workflow conclusion: success

Worker result: blocked

Canonical: #137729

## Summary

#137729 remains a narrow, non-security shared-transcript repair: current main unconditionally trims assistant tool-call and tool-result IDs before the native Ollama caller projects messages. No code or PR was created because this read-only worker cannot provision the repository-required ../codex source checkout or dependencies needed to demonstrate the pre-fix regression and validate the repair.

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
| #1 | keep_closed | skipped | independent | Historical linked PR; no mutation applies. |
| #111864 | keep_closed | skipped | related | Already merged related predecessor, not a fix for malformed replay shapes. |
| #137729 | build_fix_artifact | blocked | canonical | Required Codex sibling inspection and test dependencies are unavailable in this read-only worker. |

## Needs Human

- Provide a writable, dependency-ready worker with a readable ../codex checkout. Cloning https://github.com/openai/codex.git failed with EROFS, and both required pnpm install attempts failed before execution because Corepack could not create its cache on the read-only filesystem.
