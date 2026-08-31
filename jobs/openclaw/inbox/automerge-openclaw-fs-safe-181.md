---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-181
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
  - #181
candidates:
  - #181
cluster_refs:
  - #181
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-181
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/181#issuecomment-5472619032"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #181 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/181#issuecomment-5472619032


Source PR: https://github.com/openclaw/fs-safe/pull/181
Title: fix(archive): admit ignored TAR records

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/181"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Review exact head `f566ae1525d0072054a26f9b5815cf24ff21e8f1`. Verify ordered exactly-once admission for node-tar-hidden `A/I/M/V` and unknown records while sparse `S` remains fail closed; every logical member must receive count, raw/effective path, canonical strip/depth/collision, and filter policy before parser suppression. Confirm the shared 64 MiB-capped manifest cost is enforced before JavaScript retention and native emission, independent of maxArchiveBytes. Validate checksum, strict fixed-field UTF-8, NFC/NFD component bounds, GNU effective type/separators, and raw linkname/type rules before metadata or filters. Confirm parser-visible agreement, canonical `readArchiveEntry` identity across ZIP/TAR/gzip/zstd/bzip2, legacy NUL-typeflag files under pinned node-tar 7.5.22, destination non-publication, and byte-matched candidate native proof. Require exact-head Linux/macOS/Windows/musl CI; decompression-ratio policy remains outside scope.

