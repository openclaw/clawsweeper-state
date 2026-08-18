---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125570"
mode: "autonomous"
run_id: "32111363188"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32111363188"
head_sha: "055ffba223f033a8cac3dc4287e207f6ab509369"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T07:35:36.761Z"
canonical: "https://github.com/openclaw/openclaw/issues/125570"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125570"
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

# issue-openclaw-openclaw-125570

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32111363188](https://github.com/openclaw/clawsweeper/actions/runs/32111363188)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125570

## Summary

#125570 is a real, narrow Skill Workshop update bug on main ebe9d38a5f9233ae62699ae582f548ac7a73bcd0. Proposal rendering writes the concise proposal summary into the proposal frontmatter, and apply preserves that field into the live SKILL.md. The repair path is a new focused PR, but this worker cannot create or validate it: the checkout and /tmp are read-only, ../codex is absent, node_modules is absent, and pnpm fails before tests because Corepack cannot create its cache directory.

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
| #125570 | keep_canonical | planned | canonical | The issue is the canonical report for proposal-summary-to-live-description coupling. |
| #107707 | keep_related | planned | related | Related unsafe-apply family, but it has different root cause and required policy behavior. |
| #109650 | keep_related | planned | related | Adjacent product-feedback request; leave open independently. |
| #124486 | keep_independent | planned | independent | Independent lifecycle-integrity defect. |
| #125570 | fix_needed | blocked | canonical | Implementation is blocked only by the immutable worker environment; use the attached narrow new-PR artifact in a writable repair worker. |
| cluster:issue-openclaw-openclaw-125570 | build_fix_artifact | planned | canonical | Create a narrow credited fix PR once a writable, dependency-ready worker is available. |

## Needs Human

- none
