---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-145292"
mode: "autonomous"
run_id: "34649073324"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34649073324"
head_sha: "e74b07a40a6ecb1c9743e17201ecca0d6114bce5"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-11T21:32:38.656Z"
canonical: "https://github.com/openclaw/openclaw/issues/145292"
canonical_issue: "https://github.com/openclaw/openclaw/issues/145292"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-145292

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34649073324](https://github.com/openclaw/clawsweeper/actions/runs/34649073324)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/145292

## Summary

Reproduced the preparation-ordering defect on preflight main with simulated nvm activation and a real SQLite-capable Node. A narrow fix artifact is ready. Local implementation and full validation are blocked by the read-only filesystem and missing repository dependencies; no files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #145292 | fix_needed | planned | canonical | A usable active runtime can be displaced before the installer decides whether system provisioning is necessary. Existing selection and admission owners support a narrow bug fix without new policy. |
| cluster:issue-openclaw-openclaw-145292 | build_fix_artifact | planned |  | The fix path is clear and authorized. The deterministic executor needs a writable isolated checkout to implement, validate, review, and create or update the single issue PR. |

## Needs Human

- none
