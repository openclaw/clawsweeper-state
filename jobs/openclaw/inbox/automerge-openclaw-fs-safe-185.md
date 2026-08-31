---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-185
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
  - #185
candidates:
  - #185
cluster_refs:
  - #185
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-185
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/185#issuecomment-5478055586"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #185 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/185#issuecomment-5478055586


Source PR: https://github.com/openclaw/fs-safe/pull/185
Title: fix(lock): retry unlinked sidecar snapshots

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/185"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Review exact head `5581c300829ba572d61fefd725989509a44dd1c2`. The PR body now includes the requested inspectable runtime JSON from the compiled public file-lock and Root APIs.

Require exact-head hosted Node 24 Linux and macOS proof showing: one post-identity hook call; owner release while the waiter holds the opened descriptor; Root.open records `path-mismatch`; same-capability `stat` records `not-found`; create-only retry transitions from `already-exists` to `created`; waiter payload/bytes are exact; `verifyStillHeld()` succeeds; the opened handle closes; and the path is absent after release. Separately require the after-open replacement trace to reject with `FsSafeError("path-mismatch")`, observe same-capability `present`, close the opened handle, and preserve exact replacement and displaced-original bytes.

Keep the production owner boundary unchanged in `readSidecarLockSnapshot`, generic Root behavior fail-closed, raw-path snapshots unchanged, and all previous deterministic replacement/root-drift/probe-failure coverage. Require fresh exact-head Node/native/coverage/package/audit/analysis/security gates and no actionable review finding before merge.

