---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120228"
mode: "autonomous"
run_id: "31184221539"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31184221539"
head_sha: "f6f6bfca7d65aa54eec9daa82ab84cda9ad6e0e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-07T14:33:57.611Z"
canonical: "https://github.com/openclaw/openclaw/issues/120228"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120228"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-120228

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31184221539](https://github.com/openclaw/clawsweeper/actions/runs/31184221539)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120228

## Summary

#120228 reproduces on current main: five inline 48dp controls leave about 35dp for the Android chat editor at a 360dp viewport. Plan one narrow responsive composer repair and focused Compose proof.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/120247 | clawsweeper/issue-openclaw-openclaw-120228 |  |
| issue_implementation_status_comment | updated | #120228 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120247 | merge_canonical | blocked | fix_pr | checks are not clean: native-i18n: FAILURE, android-build-play: IN_PROGRESS, android-ktlint: QUEUED |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120228 | keep_canonical | planned | canonical | This is a reproducible default-path Android layout regression with a narrow, non-security repair path. |
| cluster:issue-openclaw-openclaw-120228 | fix_needed | planned | canonical | An attachment menu alone would still leave the editor too narrow. The two-row compact layout directly repairs the invariant without changing transport, attachment, voice, or Talk contracts. |
| cluster:issue-openclaw-openclaw-120228 | build_fix_artifact | planned | canonical | Build a single new fix PR from the requested ClawSweeper branch; no contributor PR requires repair or replacement. |

## Needs Human

- none
