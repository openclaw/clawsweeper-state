---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-186
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
  - #186
candidates:
  - #186
cluster_refs:
  - #186
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-186
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/186#issuecomment-5480365436"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #186 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/186#issuecomment-5480365436


Source PR: https://github.com/openclaw/fs-safe/pull/186
Title: docs(changelog): lead with user-facing highlights

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/186"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Review and land exact head `6af017339b8033bbc2b1fd317ccb564c957ede27` after its normal exact-head checks pass. This is CHANGELOG.md only: rewrite Unreleased with five user-facing highlights, prioritize upgrade actions and user impact, and group detailed notes. All dated release sections remain byte-identical.

Verify preservation of material security qualifiers: compatible versus require-bounded cleanup, the POSIX leaf/empty-directory residual, native-only codec support, FUSE's weaker cooperating-writer contract, canonical pre-strip filter names, separate TAR decoded/manifest/output budgets, and queue claim/durability requirements. 0.7.0 is a recommendation, not a release instruction: keep Unreleased and all package versions/tags unchanged; do not release or publish.

Local proof: complete pnpm check passed (6,086 tests; 76 skipped), historical section byte comparisons passed, and the real release-note extractor preserved the full rewritten body in isolated temporary dated-version fixtures. Codex autoreview found no actionable P0/P1 findings. This is a prose edit with no runtime change; no new runtime or screenshot proof is warranted. Stop rather than broadening into unrelated implementation or dependency work.

