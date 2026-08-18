---
repo: openclaw/openclaw
cluster_id: automerge-openclaw-openclaw-125294
mode: autonomous
repair_mode: automerge
job_intent: automerge_pr
allowed_actions:
  - comment
  - label
  - fix
  - raise_pr
blocked_actions:
  - close
  - merge
require_human_for:
  - close
  - merge
canonical:
  - #125294
candidates:
  - #125294
cluster_refs:
  - #125294
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-openclaw-125294
source: pr_automerge
requested_by: "obviyus"
requested_by_id: "22031114"
request_comment_url: "https://github.com/openclaw/openclaw/pull/125294#issuecomment-5324347132"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #125294 into ClawSweeper automerge.

Requested by: obviyus
Request comment: https://github.com/openclaw/openclaw/pull/125294#issuecomment-5324347132


Source PR: https://github.com/openclaw/openclaw/pull/125294
Title: fix(ci): parse Telegram QA launcher on macOS Bash

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/openclaw/pull/125294"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Maintainer landing: local exact-head gates green on 8fde5cb9d240f6a0526206a7df8eec1794d75021 (focused workflow test 15/15, local ClawSweeper review clean: 0 findings, security cleared).

