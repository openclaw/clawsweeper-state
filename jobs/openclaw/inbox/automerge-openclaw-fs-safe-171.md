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
request_comment_url: "https://github.com/openclaw/fs-safe/pull/171#issuecomment-5477289258"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #171 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/171#issuecomment-5477289258


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
Review exact head `6f86e32cbf30514d44a476f6003f12d1b58fafb2`. The accepted POSIX final-root type-swap result mismatch is fixed: `ENOTDIR` and platform `EPERM` are followed by no-symlink reinspection; confirmed file/symlink/type/identity drift returns native `preserved` and public stable `indeterminate`, absence is preserved completion, and the same expected directory still propagates genuine operational errors.

Distinguish that repaired result contract from the intentional, documented OS limit. POSIX has no unlink-by-fd or expected-inode/CAS directory unlink, so a raced **empty directory** replacement can still be removed successfully after the final check. This is why the public option is named `require-bounded`, not exact/owned. The exact final-gap regression now proves that residual explicitly: the empty replacement name is removed as one entry, the original owned tree remains under its raced name after contents were removed, and an outside target remains untouched. Nonempty replacement trees are never traversed and remain preserved.

Require the deterministic native file/symlink root-swap tests, same-directory operational-error test, empty-directory residual test, and public async/sync stable-`indeterminate` mapping tests. Retain all earlier exact-head requirements for runtime Linux `openat2`/`RESOLVE_NO_XDEV` admission, compatible fallback, strict pre-creation rejection, Windows exact-handle reparse leaf/root behavior, quarantine-swap terminal proof, packed consumer, Windows append proof, Node/native/coverage/package/audit/analysis/security gates, and no actionable finding outside the explicitly documented POSIX residual before merge.

