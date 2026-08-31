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
request_comment_url: "https://github.com/openclaw/fs-safe/pull/171#issuecomment-5474882484"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #171 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/171#issuecomment-5474882484


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
Review exact head `0cfe2102e2ae0ceff503a8151487ce82ccdc455c`. The branch now merges current `main`, including the independently landed exact-bigint append-identity fix from [PR #183](https://github.com/openclaw/fs-safe/pull/183); the previous Windows fallback failures must not be carried forward.

Retain every prior bounded-cleanup, compatible-fallback, strict pre-creation, enumeration-identity, mount-crossing, POSIX residual, Windows handle-deletion, packed-consumer, and exact-head cross-platform requirement. Verify the merge commit introduces no semantic conflict: default `cleanupSafety: "compatible"` still preserves native-off/unavailable creation and cleanup, while `cleanupSafety: "require-bounded"` still rejects before child creation unless native no-replace quarantine plus descriptor-relative owned-tree removal are available.

Require fresh exact-head Node 22/24 checks on Linux, macOS, and Windows; three-OS coverage; native Linux, macOS, Windows, and musl; package smoke on all three OSes; Cargo audit/clippy; analysis/security gates; and an exact-head ClawSweeper review with no actionable finding before merge. In particular, require the hosted Windows production append proof now present on the merged head and all existing Windows owned-tree, replacement-preservation, file-ID binding, handle-deletion, directory-rename, and reparse-rejection proofs.

