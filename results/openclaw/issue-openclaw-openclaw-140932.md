---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-140932"
mode: "autonomous"
run_id: "37678177176"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37678177176"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-07T20:42:28.802Z"
canonical: "https://github.com/openclaw/openclaw/issues/140932"
canonical_issue: "https://github.com/openclaw/openclaw/issues/140932"
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

# issue-openclaw-openclaw-140932

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37678177176](https://github.com/openclaw/clawsweeper/actions/runs/37678177176)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/140932

## Summary

Reproduced missing query and document formatting on supplied main 2d6024975f2dc1246ca2fe4be1b144142626659d. A narrow fix artifact is ready. Implementation and required validation are blocked by the read-only filesystem and absent dependencies; no files or GitHub state were changed.

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
| #140932 | fix_needed | planned | canonical | The default local model's retrieval formatting remains missing. Repair can remain plugin-owned and use existing identity mismatch/rebuild handling. |
| #147181 | keep_related | planned | related | Distinct feature scope; leave open and exclude configurable instructions and Qwen behavior from this repair. |
| #42408 | keep_related | planned | related | Different causes of retrieval quality problems; this formatting repair does not cover the remaining diagnostics and corpus-hygiene work. |
| cluster:issue-openclaw-openclaw-140932 | build_fix_artifact | planned |  | Artifact preparation is complete. Implementation and PR readiness remain blocked by this host's read-only filesystem; the authorized executor must implement and validate before publication. |

## Needs Human

- none
