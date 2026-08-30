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
request_comment_url: "https://github.com/openclaw/fs-safe/pull/179#issuecomment-5470451099"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #179 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/179#issuecomment-5470451099


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
Review exact head `dd07ec96aa3631a66cb1575a2dec152d419bf773`. Verify the prior filter/strip P1 is fixed by removing `maxEntryBytes` and `maxExtractedBytes` from the raw TypeScript/Rust meter interfaces and retaining those public payload budgets exclusively after strip/filter acceptance in JavaScript's checker and the native accepted-plan builder. Confirm skipped and fully stripped 700-byte members succeed under three-byte payload budgets in off/auto/require, gzip, zstd, and bzip2 paths; `maxEntries`, metadata limits, canonical framing, physical-EOF draining, and the absolute decoded ceiling still cover the complete stream; large finite settings and the byte-matched candidate native proof remain valid. Require fresh exact-head Linux/macOS/Windows/musl CI and no branch repair unless a new concrete defect is found.

