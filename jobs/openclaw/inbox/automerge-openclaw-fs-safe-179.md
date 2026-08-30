---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-179
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
  - #179
candidates:
  - #179
cluster_refs:
  - #179
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-179
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/179#issuecomment-5470295454"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #179 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/179#issuecomment-5470295454


Source PR: https://github.com/openclaw/fs-safe/pull/179
Title: fix(archive): canonicalize TAR framing

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/179"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Re-review exact head `e9ba72d738d0580668b6f0680a8d0c45ba0bd1c2`. Verify the prior P1 is fixed by clamping all internal TAR byte limits to `Number.MAX_SAFE_INTEGER` and logical entry counts to `2^32 - 1` before JavaScript/native backend selection, while malformed direct native values still reject. Confirm valid plain/gzip/zstd/bzip2 extraction and selected-entry reads accept `Number.MAX_VALUE` settings, ordinary limits still reject, and the posted fresh native `require`-mode consumer proof uses a byte-matched locally packed candidate binding. Retain all prior canonical framing, physical EOF, decoded-budget, PAX/GNU, non-publication, CI worker, and cross-platform checks as exact-head landing gates.

