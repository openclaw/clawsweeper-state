---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-189
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
  - #189
candidates:
  - #189
cluster_refs:
  - #189
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-189
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/189#issuecomment-5489986588"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #189 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/189#issuecomment-5489986588


Source PR: https://github.com/openclaw/fs-safe/pull/189
Title: fix: guard lock handoffs and ZIP read integrity

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/189"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Land only PR 189 at exact reviewed head `cce3a4059da04cdbc1c6e55f10fedec21e82da7c` through the normal merge gates. Maintainer review is complete: the durable exact-head review has sufficient proof and no actionable code/security finding, and the final CI matrix is green, including native Windows/Linux/macOS/musl, Node 22/24, coverage, package smoke, audit, and CodeQL.

The main body contains the complete packaged Windows authority trace, actual short-path before/after proof, Linux installed-consumer ZIP/lock/release controls, and 4,800 Linux/Windows source+installed contended acquisitions. Full Linux validation passed 6,274 tests, 63 Rust tests, 78 security tests, and 150 selected native regressions. The final test-only inode-fixture correction passed 103 Windows tests and scoped-clean Codex autoreview; all production/package inputs are unchanged from the fully reviewed and proved candidate.

Do not change source, rebase, bypass checks, start unrelated work, create tags, bump versions, publish packages, or modify existing 0.7.0 release artifacts. If the head changes or a gate regresses, stop rather than merging another candidate. This authorizes landing the existing reviewed fixes only; a future 0.7.1 release is separate.

