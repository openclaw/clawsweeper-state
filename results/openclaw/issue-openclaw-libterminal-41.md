---
repo: "openclaw/libterminal"
cluster_id: "issue-openclaw-libterminal-41"
mode: "autonomous"
run_id: "38079607595"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/38079607595"
head_sha: "fcc4c630b0a452020807dd32d97c2861caafb08d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-10T19:26:25.987Z"
canonical: "https://github.com/openclaw/libterminal/issues/41"
canonical_issue: "https://github.com/openclaw/libterminal/issues/41"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# issue-openclaw-libterminal-41

Repo: openclaw/libterminal

Run: [https://github.com/openclaw/clawsweeper/actions/runs/38079607595](https://github.com/openclaw/clawsweeper/actions/runs/38079607595)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/libterminal/issues/41

## Summary

The issue explicitly prohibits adoption before both upstream publication gates are satisfied. The hydrated review reports both unmet, and no qualifying stable wrapper was established. Implementation remains blocked with an audited no-PR artifact. The external references cannot be safely routed or classified using the incorrectly resolved preflight entries.

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
| Needs human | 2 |

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
| #41 | keep_canonical | planned | canonical | Retain the canonical adoption request pending its explicit upstream prerequisites; existing preparation does not satisfy runtime adoption. |
| cluster:issue-openclaw-libterminal-41 | fix_needed | blocked |  | Resume only after both publications are verified and an exact stable compatible wrapper is selected. The operator expressly permits stopping without a PR when the request is not yet viable. |
| #77 | keep_closed | skipped | related | Historical validation groundwork; no closure or merge action applies. |
| #169 | needs_human | blocked | needs_human | Resolve and hydrate the exact external PR before central security routing. Preserve the reported security concern as a scoped hold without assigning invented metadata or routing a same-numbered libterminal item. |
| #182 | needs_human | blocked | needs_human | Resolve and hydrate the exact external release reference before per-item classification. Do not invent a timestamp or act against a same-numbered libterminal item. |

## Needs Human

- Resolve the repository identity and hydrate https://github.com/coder/ghostty-web/pull/169 before routing the reported security concern; the supplied #169 entry belongs to openclaw/libterminal and returned 404.
- Resolve the repository identity and hydrate https://github.com/coder/ghostty-web/pull/182 before per-item classification; the supplied #182 entry belongs to openclaw/libterminal and returned 404.
