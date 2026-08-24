---
repo: openclaw/crabbox
cluster_id: automerge-openclaw-crabbox-1499
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
  - #1499
candidates:
  - #1499
cluster_refs:
  - #1499
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-crabbox-1499
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/crabbox/pull/1499#issuecomment-5390940840"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #1499 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/crabbox/pull/1499#issuecomment-5390940840


Source PR: https://github.com/openclaw/crabbox/pull/1499
Title: fix(machine0): preserve explicit native size precedence

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/crabbox/pull/1499"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Keep the `CHANGELOG.md` entry. This is an intentional maintainer-authored, user-visible corrective repair, and the requested Unreleased changelog update is part of the accepted scope. Retain the Machine0 provenance, precedence, catalog compatibility, tests, provider documentation, and changelog exactly as reviewed. Exact-head CI and required checks are green; the empty cancelled duplicate dispatch runs are concurrency artifacts, not engineering CI failures. Re-review the current head and merge only if branch protection and the exact-head gates pass.

