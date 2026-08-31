---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-185
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
  - #185
candidates:
  - #185
cluster_refs:
  - #185
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-185
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/185#issuecomment-5477815247"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #185 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/185#issuecomment-5477815247


Source PR: https://github.com/openclaw/fs-safe/pull/185
Title: fix(lock): retry unlinked sidecar snapshots

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/185"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Review exact head `6a532994a25033cfebbb040cb87f07c22658a3e1`. Verify the owner boundary stays in `readSidecarLockSnapshot`, not `Root.open`: only a Root-backed open that fails with `path-mismatch` and is followed by same-capability `Root.stat(relative)` returning `not-found` may become an absent snapshot/retry.

Require deterministic proof for unlink before and after identity admission, handle closure, a real two-manager owner-release/waiter-acquire handoff, replacement preservation, changed-root rejection, symlink/non-file/hardlink and operational probe failures, and create-only retry safety. Keep raw-path snapshots and generic Root behavior unchanged. Require fresh exact-head Node 22/24 Linux/macOS/Windows checks, three-OS coverage, native/package/audit/analysis/security gates, and no actionable review finding before merge.

