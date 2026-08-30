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
request_comment_url: "https://github.com/openclaw/fs-safe/pull/179#issuecomment-5470198831"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #179 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/179#issuecomment-5470198831


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
Verify the exact head enforces one raw TAR contract before JavaScript/native parsing for plain, gzip, zstd, and bzip2: directory/hardlink/symlink raw sizes are zero; EOF is two zero blocks followed only by bounded zero padding; hidden headers, malformed/truncated framing, unsafe numeric sizes, and nonzero trailers reject with JS/native error parity. Check every native inspect/extract/read pass drains its retained meter through physical EOF, all decoded bytes count toward the derived ceiling, member/metadata budgets reject before bodies, and `readArchiveEntry.maxBytes` remains selected-output-only. Confirm PAX/GNU payload compatibility, destination non-publication on late errors, built-binding execution in Linux/macOS/Windows/musl CI, and the non-Windows four-worker CI cap does not alter workloads, timeouts, assertions, or coverage.

