---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-171
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
  - #171
candidates:
  - #171
cluster_refs:
  - #171
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-171
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/171#issuecomment-5473607726"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #171 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/171#issuecomment-5473607726


Source PR: https://github.com/openclaw/fs-safe/pull/171
Title: fix(temp): preserve workspace cleanup ownership

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/171"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Review exact head `80d52b71d628cecaccf141c8201e1030fa1b5fee`. Retain every bounded-cleanup, compatible-fallback, strict pre-creation, enumeration-identity, mount-crossing, POSIX residual, Windows handle-deletion, packed-consumer, and cross-platform proof requirement from the previous exact-head request. Verify the only new commit types the Windows directory-enumeration buffer arithmetic as `usize`, fixing the hosted `E0689` compile failure without changing allocation size or cleanup behavior. Require fresh exact-head Windows native, coverage, and package jobs plus every normal Linux/macOS/musl gate and a clean exact-head review before merge.

