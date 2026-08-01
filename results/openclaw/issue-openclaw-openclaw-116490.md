---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-116490"
mode: "autonomous"
run_id: "30702491319"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30702491319"
head_sha: "5b0ff665559a1d680248caf321402bf66a36a94b"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-01T14:12:10.721Z"
canonical: "https://github.com/openclaw/openclaw/issues/116490"
canonical_issue: "https://github.com/openclaw/openclaw/issues/116490"
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

# issue-openclaw-openclaw-116490

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30702491319](https://github.com/openclaw/clawsweeper/actions/runs/30702491319)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/116490

## Summary

#116490 remains a narrow, non-security canonical bug on current main. The Skill Workshop approval-policy owner returns a generic description both when workspace context is absent and when proposal lookup throws, even though the approval remains pending. Build one credited fix PR that makes this degraded state visible, preserves any requested proposal identity within the approval-description cap, updates the documented contract, and adds focused regression coverage. #100498 is closed contextual evidence and explicitly security-sensitive, so it is quarantined from this repair path.

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
| #100498 | route_security | planned | security_sensitive | Quarantine the exact security-sensitive contextual PR without blocking the unrelated non-security repair for #116490. |
| #116490 | fix_needed | planned | canonical | Current main still silently converts two distinct resolution failures into the same bare generic approval card. The repair belongs in the Skill Workshop policy resolver, not in a downstream channel renderer or caller guard. |
| cluster:issue-openclaw-openclaw-116490 | build_fix_artifact | planned |  | A narrow, executable new-fix-PR plan is available; the deterministic executor should apply it on clawsweeper/issue-openclaw-openclaw-116490 and run validation in a writable dependency-ready environment. |

## Needs Human

- none
