---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-129784"
mode: "autonomous"
run_id: "32932883581"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32932883581"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-26T05:16:01.924Z"
canonical: "#129784"
canonical_issue: null
canonical_pr: "#129784"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-129784

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32932883581](https://github.com/openclaw/clawsweeper/actions/runs/32932883581)

Workflow conclusion: success

Worker result: blocked

Canonical: #129784

## Summary

#129784 remains the maintainer-designated canonical PR. Preflight records exact-head CI and Package Telegram acceptance as passed, but this read-only checkout lacks both the PR commit object and required sibling ../codex source, so no Codex merge verdict or repair patch can be produced here. #129860 is quarantined as security-sensitive; #120107 is historical and already closed.

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
| #120107 | keep_closed | skipped |  | Historical context only; closure actions are invalid for an already-closed PR. |
| #129784 | keep_canonical | planned | canonical | Keep the selected canonical PR open for the deterministic exact-head re-review/merge router; no merge action is authorized or sufficiently evidenced. |
| #129860 | route_security | planned | security_sensitive | Quarantine only this PR; its requested post-merge supersession remains for the authorized post-landing flow. |

## Needs Human

- none
