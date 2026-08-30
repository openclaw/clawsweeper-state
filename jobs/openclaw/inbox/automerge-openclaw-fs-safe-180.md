---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-180
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
  - #180
candidates:
  - #180
cluster_refs:
  - #180
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-180
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/180#issuecomment-5470809491"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #180 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/180#issuecomment-5470809491


Source PR: https://github.com/openclaw/fs-safe/pull/180
Title: fix(archive): canonicalize filter paths

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/180"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Verify exact head `a6af14a11bb755623b43e0c3ef201dc5c9bd03ba`. Raw paths must reject traversal/absolute/drive/NUL forms before normalization; one canonical pre-strip path must control `entryFilter`, stripping, collisions, and extraction across JavaScript/native ZIP, TAR/gzip, zstd, and bzip2. Confirm backslash, dot, repeated-separator, ZIP Unicode, PAX, and GNU names cannot create policy aliases. Verify shared GNU L/K admission rejects malformed UTF-8/NUL/repeated/mixed/dangling metadata before filters while preserving valid bytes. Confirm native device/FIFO and GNUDumpDir behavior matches JavaScript with filter-before-reject semantics, destination non-publication, and exact candidate-binding proof. Keep ignored typeflag `V` records outside scope, and require fresh exact-head Linux/macOS/Windows/musl CI.

