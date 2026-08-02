---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-116601"
mode: "autonomous"
run_id: "30770644706"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30770644706"
head_sha: "de31c9959070dd22ec785fdbcc924fc8e6de1e06"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-02T23:44:26.333Z"
canonical: "https://github.com/openclaw/openclaw/issues/116601"
canonical_issue: "https://github.com/openclaw/openclaw/issues/116601"
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

# issue-openclaw-openclaw-116601

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30770644706](https://github.com/openclaw/clawsweeper/actions/runs/30770644706)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/116601

## Summary

Current main at 8df95ccd087eacafa55ec16026bc40de08631e14 still exposes MiniMax-M3 as image-capable even though the bundled MiniMax and MiniMax Portal catalogs exclusively use the Anthropic-compatible route. Native-vision detection consumes that catalog input flag, so M3 bypasses the existing plugin-owned MiniMax-VL-01 fallback. Plan a narrow MiniMax catalog correction with focused regression coverage. This read-only checkout has no node_modules, so no patch or focused test execution was possible here; the executor should apply and validate the artifact on the repair branch.

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
| #116601 | fix_needed | planned | canonical | The issue remains reproducible from current source. A narrow plugin-owned metadata repair is appropriate and does not require a config, provider, core routing, or compatibility change. |
| #64244 | keep_closed | skipped | related | Already closed historical context; no mutation is valid or needed. |
| cluster:issue-openclaw-openclaw-116601 | build_fix_artifact | planned | canonical | No viable contributor PR exists; create one narrow credited repair PR from clawsweeper/issue-openclaw-openclaw-116601. |

## Needs Human

- none
