---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-190
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
  - #190
candidates:
  - #190
cluster_refs:
  - #190
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-190
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/190#issuecomment-5491556290"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #190 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/190#issuecomment-5491556290


Source PR: https://github.com/openclaw/fs-safe/pull/190
Title: fix(lock): keep callback errors out of acquisition retries

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/190"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Land only PR 190 at exact reviewed head `d9d1a2c4211c07d24a14945bd419b4c4131b59f1` through normal merge gates. Maintainer review is complete: the durable exact-head review has sufficient installed-consumer proof and no actionable code/security findings, and the complete hosted CI/coverage/native/package/audit matrix is green.

The main body contains the real Windows before/after callback and Root-observation traces, unchanged Node 22/24 consumer controls, preserved foreign bytes, and a genuine current-loss control that still requires fresh exclusive creation. Frozen-tree Linux validation passed 6,317 tests, 63 Rust tests, 78 security tests, package smoke, and 1,200 contended acquisitions. Windows focused validation passed 113 tests with platform skips explicitly reported. Codex autoreview is scoped-clean at the configured threshold; the earlier local Root timeouts were resolved by unchanged-source isolated proof, not increased deadlines.

Do not change source, rebase, bypass checks, start unrelated work, bump versions, create tags, publish packages, or modify 0.7.0 artifacts. If the head changes or a gate regresses, stop rather than merging a different candidate. This authorizes landing the existing reviewed follow-up only; release remains separate.

