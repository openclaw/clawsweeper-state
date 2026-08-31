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
request_comment_url: "https://github.com/openclaw/fs-safe/pull/171#issuecomment-5476603295"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #171 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/171#issuecomment-5476603295


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
Review exact head `0d61e42b8a62648d788e89db6257de3d52f3595f`. This head merges the automated `df49e8f` repair into the stronger reviewed `7a23cc9` implementation; the resulting tree is byte-identical to `7a23cc9`, with no force-push or lost history.

Verify the final Windows quarantine-root boundary through the compiled public API for async and sync cleanup: a junction/reparse replacement installed immediately before native removal is opened as a non-followed direct leaf, fails the retained descriptor identity/reparse check, remains preserved, returns stable `indeterminate`, leaves the public workspace absent, preserves the original owned tree, and leaves outside bytes exact. The PR body includes the expanded terminal JSON, and the standalone proof runs on Linux, macOS, Windows, and musl.

Retain all previous requirements for runtime Linux `openat2`/`RESOLVE_NO_XDEV` admission, compatible fallback, strict pre-creation rejection, enumerated-child binding, Windows exact-handle leaf deletion, POSIX residual limits, packed-consumer proof, Windows append proof, and fresh exact-head Node, native, coverage, package, audit, analysis, and security gates. Require a new exact-head review with no actionable finding before merge.

