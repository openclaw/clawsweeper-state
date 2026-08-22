---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32565528484"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32565528484"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T09:51:39.597Z"
canonical: "https://github.com/openclaw/openclaw/issues/127287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127287"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-127287

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32565528484](https://github.com/openclaw/clawsweeper/actions/runs/32565528484)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127287

## Summary

#127287 is a real, narrow github-copilot regression on main 54257e02001172a32d782fdedd9299f88d7a05de: an allowlisted GHE domain is resolved correctly, but runtime, catalog, and embedding requests still install the public copilot-developer-cli identity. A provider-local canonical helper can retain the public identity for github.com and use vscode-chat for *.ghe.com without adding configuration or changing the host allowlist. Implementation is blocked in this worker because the checkout is read-only, ../codex is absent (the repository hard gate prevents a code-change verdict without direct source inspection), and no GHE tenant is available for the required after-fix proof.

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
| #127287 | fix_needed | planned | canonical | The issue is distinct from the merged GHE-routing work: routing remains correct, but the later public request identity is applied to GHE traffic. |
| cluster:issue-openclaw-openclaw-127287 | build_fix_artifact | planned | canonical | Artifact is ready for a write-enabled executor; do not open the PR until it has direct Codex source inspection, focused regression proof, and redacted GHE tenant validation. |
| cluster:issue-openclaw-openclaw-127287 | open_fix_pr | blocked | canonical | The current worker cannot create a branch, run the required new regression, inspect ../codex, or obtain tenant proof; a write-enabled executor should implement the attached artifact. |

## Needs Human

- none
