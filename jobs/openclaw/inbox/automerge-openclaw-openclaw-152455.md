---
repo: openclaw/openclaw
cluster_id: automerge-openclaw-openclaw-152455
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
  - #152455
candidates:
  - #152455
cluster_refs:
  - #152455
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-openclaw-152455
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/openclaw/pull/152455#issuecomment-5739787933"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #152455 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/openclaw/pull/152455#issuecomment-5739787933


Source PR: https://github.com/openclaw/openclaw/pull/152455
Title: refactor(ui): simplify new-session worktree preferences

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/openclaw/pull/152455"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

The current head is d2acaeea3d26f906a1c5e9a4ae89e0b92c6218c2. The queued-disconnect finding is fixed and regression-tested; the completed review is ready, and CI run 35421948793 attempt 2 is green. The PR body retains the earlier unrelated CI failures and their limitations. Please land the reviewed cleanup through the normal merge gates.

