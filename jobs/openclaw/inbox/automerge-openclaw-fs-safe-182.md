---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-182
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
  - #182
candidates:
  - #182
cluster_refs:
  - #182
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-182
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/182#issuecomment-5472932956"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #182 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/182#issuecomment-5472932956


Source PR: https://github.com/openclaw/fs-safe/pull/182
Title: fix(archive): align gzip ratio policy

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/182"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Review exact head `60fec3b5f9faa5f8b3fc3f69a205c00c69d74aae`. Verify node-tar 7.5.22's hidden default 1000x decompression-ratio rule is disabled only at the two JavaScript parser calls that consume the immutable private staged archive after complete fs-safe raw TAR/framing/decoded-byte admission. Confirm both extraction and bounded entry reads pass node-tar's documented `Infinity` value; no public ratio option, native ratio policy, decoded ceiling, archive/entry/output limit, timeout, parser-agreement check, or publication boundary is weakened. Require the deterministic 8 MiB zero-body fixture to prove greater-than-1000x success under tight explicit limits in `off`, missing-native `auto`, real native `auto`, and `require` modes, plus fresh exact-head Linux/macOS/Windows coverage, normal, native, and package gates before merge.

