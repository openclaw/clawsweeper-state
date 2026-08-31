---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-188
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
  - #188
candidates:
  - #188
cluster_refs:
  - #188
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-188
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/188#issuecomment-5481513689"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #188 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/188#issuecomment-5481513689


Source PR: https://github.com/openclaw/fs-safe/pull/188
Title: docs: open 0.7.1 unreleased changelog

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/188"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Land only this two-line post-release changelog follow-up, on exact reviewed head `d875ecfcfe8e179db60f46104003c6e90f80ef47`, after normal review/proof gates pass. All exact-head hosted checks are green, including the complete Node 22/24 OS matrix, four native execution targets, package smoke, coverage, and audit. Local Codex autoreview is scoped-clean with no findings. The main PR body contains complete executed generator output and exact-head proof for both the released and intentionally unreleased CLI paths; a re-review is already requested.

Local validation caveat: an unrestricted full-suite attempt was stopped after host-contention timeouts. The four-worker CI-mode rerun passed 6,085 tests with one 5-second PAX timeout; its unchanged isolated suite then passed all 158 tests. Package validation and diff whitespace checks passed. No tests, timeouts, runtime files, package versions, or release artifacts were changed. Hosted full checks on this exact head passed without retries.

Do not bypass a missing review/proof gate or change code to satisfy the docs-only proof policy. Preserve the byte-identical 0.7.0 release notes and package version, and do not create tags, publish packages, edit the existing Release, or start any unrelated work. The 0.7.0 release is already public and independently verified.

