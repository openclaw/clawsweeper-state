---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122271"
mode: "autonomous"
run_id: "31541133534"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31541133534"
head_sha: "4b79888c3f2ad4b9e0c2ee3345984adc995ea81d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-11T22:27:54.721Z"
canonical: "https://github.com/openclaw/openclaw/issues/122271"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122271"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-122271

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31541133534](https://github.com/openclaw/clawsweeper/actions/runs/31541133534)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122271

## Summary

Confirmed on current main 84c7d45f: evaluateRuntimeEligibility rejects an OS mismatch before its always check, contrary to docs/tools/skills.md:360. Skill and hook runtime callers share that owner, while hook status already treats always as unconditional. A narrow four-file fix PR is appropriate, but this read-only checkout cannot edit the branch or run the missing dependencies (tsx is absent; pnpm cannot initialize Corepack on EROFS).

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #122271 | keep_canonical | planned | canonical | Open issue is the sole hydrated canonical report and remains a narrow behavior bug. |
| #122271 | fix_needed | planned | canonical | Move the existing always return ahead of OS gating; no config, policy, or dependency change is required. |
| cluster:issue-openclaw-openclaw-122271 | build_fix_artifact | planned |  | Artifact is ready for the deterministic executor; local implementation and validation are blocked by the read-only sandbox. |
| cluster:issue-openclaw-openclaw-122271 | open_fix_pr | planned |  | A new narrow PR is the canonical fix path; no contributor PR exists to repair. |

## Needs Human

- none
