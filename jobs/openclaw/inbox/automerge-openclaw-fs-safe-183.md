---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-183
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
  - #183
candidates:
  - #183
cluster_refs:
  - #183
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-183
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/183#issuecomment-5474315850"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #183 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/183#issuecomment-5474315850


Source PR: https://github.com/openclaw/fs-safe/pull/183
Title: fix(file): verify append identities exactly

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/183"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Review exact head `180dd9720dd2e9946d26e4f9d0024907ddc46413`. Retain every prior exact-bigint, rounded-equal, same-object Windows reinspection, current-path, no-mutation, and compatibility requirement. The PR body now includes real exact-head Windows production-API proof from Node 22: async and sync timing hooks both ran, both raced calls rejected with the intended identity-change error, original/replacement bytes remained exact, and stable async/sync appends both produced `ab`; the same step passed on Node 24. The maintainer decision is explicit: persistent unknown Windows identities must fail closed before mutation. Verify the new test-only hooks cannot activate outside the existing test gate, require all exact-head CI gates plus the linked Windows proof, and merge only after a clean review.

