---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-187
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
  - #187
candidates:
  - #187
cluster_refs:
  - #187
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-187
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/187#issuecomment-5481026432"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #187 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/187#issuecomment-5481026432


Source PR: https://github.com/openclaw/fs-safe/pull/187
Title: chore(release): prepare 0.7.0

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/187"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Review and land the 0.7.0 release-preparation metadata on exact head `413e15b2e8cc615bbd686cec028d9f8b70da5c9e` after normal exact-head gates pass. The user explicitly requested release 0.7.0. All package/native versions and exact pins must agree; lockfile changes must remain version-only, approved Highlights/upgrade notes must remain byte-identical apart from the dated heading, and runtime code must not change. Executed packed-consumer and compiled runtime proof is in the main PR body; local full checks and Codex review pass.

Only land this preparation PR. The coordinating maintainer owns the annotated tag and publishing workflow afterward; do not create tags, publish npm packages, create/promote releases, rewrite runtime code, or start unrelated work.

