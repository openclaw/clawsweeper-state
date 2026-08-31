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
request_comment_url: "https://github.com/openclaw/fs-safe/pull/186#issuecomment-5480601891"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #186 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/186#issuecomment-5480601891


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
Re-review exact head `6af017339b8033bbc2b1fd317ccb564c957ede27` with the updated main PR body. It now contains actual after-change terminal output from the production release-note generator, the generated Highlights Markdown, ordered section list, complete-body byte comparison, SHA-256 of the generated notes, and historical-release preservation proof. The temporary fixture only supplies the dated heading required by the generator; the repository remains Unreleased at package version 0.6.0.

This is inspectable real generated-artifact proof for the changed documentation surface, not a claim about new runtime behavior. CI and coverage are now fully green on this unchanged head. Confirm the content/qualifiers remain accurate, accept the generator evidence for this docs-only edit, and land the PR through normal gates. Do not modify runtime code, bump any version, tag, release, or publish.

