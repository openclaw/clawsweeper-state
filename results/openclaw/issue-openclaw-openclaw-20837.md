---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-20837"
mode: "autonomous"
run_id: "32959898424"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32959898424"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-26T12:08:32.657Z"
canonical: "https://github.com/openclaw/openclaw/issues/20837"
canonical_issue: "https://github.com/openclaw/openclaw/issues/20837"
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

# issue-openclaw-openclaw-20837

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32959898424](https://github.com/openclaw/clawsweeper/actions/runs/32959898424)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/20837

## Summary

Narrow command-prompt metadata repair planned for canonical issue #20837. Current main omits normalized source channel, account-aware capabilities, shell, and real host/OS/arch only in command prompt reconstruction; /context fallback and /export-session consume that shared bundle. This read-only checkout has neither node_modules nor the required sibling ../codex source, so implementation and validation remain for the executor.

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
| #20837 | fix_needed | planned | canonical | Confirmed owner-boundary omission on current main; no config, routing, plugin API, or selective-delivery policy change is required. |
| #21271 | keep_closed | skipped | superseded | Already closed context ref; no closure action is valid. |
| cluster:issue-openclaw-openclaw-20837 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-20837 after satisfying the repository's direct Codex-source and dependency-install gates. |

## Needs Human

- none
