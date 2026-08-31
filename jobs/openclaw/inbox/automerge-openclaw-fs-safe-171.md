---
repo: openclaw/fs-safe
cluster_id: automerge-openclaw-fs-safe-171
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
  - #171
candidates:
  - #171
cluster_refs:
  - #171
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-fs-safe-171
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/fs-safe/pull/171#issuecomment-5476897222"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #171 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/fs-safe/pull/171#issuecomment-5476897222


Source PR: https://github.com/openclaw/fs-safe/pull/171
Title: fix(temp): preserve workspace cleanup ownership

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/fs-safe/pull/171"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Special instructions:
Review exact head `139644fd89394f8de971104f212016b819872b67`. The accepted POSIX final-unlink result mismatch is fixed without changing the documented residual race: a leaf-to-directory substitution that makes `unlinkat` return `EISDIR` or platform `EPERM` is reinspected with no symlink following; confirmed type/identity drift becomes native `path-mismatch` and public stable `indeterminate`, while the same expected leaf still propagates its operational permission error. The symmetric directory-to-file `ENOTDIR` result also maps to ownership uncertainty.

Require the deterministic native final-gap proof to preserve the substituted nonempty directory and original leaf bytes, the same-leaf operational-error proof, and public async/sync cleanup proof with absent public name, exact preserved bytes, one routed remover call, and no retry. Retain all previous exact-head requirements for Linux runtime `openat2`/`RESOLVE_NO_XDEV` admission, compatible fallback, strict pre-creation rejection, Windows exact-handle reparse leaf/root behavior, quarantine-swap terminal proof, POSIX residual limits, packed consumer, Windows append, Node/native/coverage/package/audit/analysis/security gates, and no actionable review finding before merge.

