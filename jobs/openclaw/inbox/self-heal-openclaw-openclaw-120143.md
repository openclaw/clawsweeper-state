---
repo: openclaw/openclaw
cluster_id: self-heal-openclaw-openclaw-120143
mode: autonomous
job_intent: clawsweeper_self_rebase
allowed_actions:
  - comment
  - fix
blocked_actions:
  - close
  - merge
  - label
require_human_for:
  - close
  - merge
canonical:
  - #120143
candidates:
  - #120143
cluster_refs:
  - #120143
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/issue-openclaw-openclaw-89254
source: clawsweeper_self_rebase
self_heal_target_pr: "120143"
expected_head_sha: "bc3012edd4df6fb5d53e313c412aa42701639816"
self_heal_merge_state: "mergeStateStatus is BEHIND"
self_heal_run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31922698631"
---

# ClawSweeper self-heal PR rebase

ClawSweeper detected that #120143 is a ClawSweeper-owned PR whose same-repo branch needs a rebase or conflict repair.

Source PR: https://github.com/openclaw/openclaw/pull/120143
Title: fix(matrix): warn when open DMs lack an allowlist wildcard
Target branch: `clawsweeper/issue-openclaw-openclaw-89254`
Target head SHA: `bc3012edd4df6fb5d53e313c412aa42701639816`
Detected state: mergeStateStatus is BEHIND
Repair run: https://github.com/openclaw/clawsweeper/actions/runs/31922698631

Use this job only for bounded conflict/behind self-heal:

- Before changing anything, verify that https://github.com/openclaw/openclaw/pull/120143 is still open and its head SHA is exactly `bc3012edd4df6fb5d53e313c412aa42701639816`; if it changed, stop without editing or pushing.
- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"`, `deterministic_rebase_only: true`, and `source_prs: ["https://github.com/openclaw/openclaw/pull/120143"]` for a pure rebase/base-sync repair.
- Rebase the existing same-repo branch onto latest `main`, resolve conflicts only when the resolution is directly required by the rebase, and run the narrow validation available for the touched surface.
- Do not add `clawsweeper:automerge`, `clawsweeper:merge-ready`, or any merge-ready labels.
- Do not merge or close this PR. A fresh exact-head ClawSweeper review is required after any successful push.
