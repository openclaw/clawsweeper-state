---
repo: openclaw/openclaw
cluster_id: self-heal-openclaw-openclaw-119735
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
  - #119735
candidates:
  - #119735
cluster_refs:
  - #119735
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/issue-openclaw-openclaw-114169
source: clawsweeper_self_rebase
self_heal_target_pr: "119735"
expected_head_sha: "f57eb9ab76670b2a0484db32e1e63ee9026ed190"
self_heal_merge_state: "mergeStateStatus is DIRTY"
self_heal_run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37615031756"
---

# ClawSweeper self-heal PR rebase

ClawSweeper detected that #119735 is a ClawSweeper-owned PR whose same-repo branch needs a rebase or conflict repair.

Source PR: https://github.com/openclaw/openclaw/pull/119735
Title: fix(whatsapp): refresh activity for pending inbound work
Target branch: `clawsweeper/issue-openclaw-openclaw-114169`
Target head SHA: `f57eb9ab76670b2a0484db32e1e63ee9026ed190`
Detected state: mergeStateStatus is DIRTY
Repair run: https://github.com/openclaw/clawsweeper/actions/runs/37615031756

Use this job only for bounded conflict/behind self-heal:

- Before changing anything, verify that https://github.com/openclaw/openclaw/pull/119735 is still open and its head SHA is exactly `f57eb9ab76670b2a0484db32e1e63ee9026ed190`; if it changed, stop without editing or pushing.
- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"`, `deterministic_rebase_only: true`, and `source_prs: ["https://github.com/openclaw/openclaw/pull/119735"]` for a pure rebase/base-sync repair.
- Rebase the existing same-repo branch onto latest `main`, resolve conflicts only when the resolution is directly required by the rebase, and run the narrow validation available for the touched surface.
- Do not add `clawsweeper:automerge`, `clawsweeper:merge-ready`, or any merge-ready labels.
- Do not merge or close this PR. A fresh exact-head ClawSweeper review is required after any successful push.
