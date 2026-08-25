---
repo: openclaw/crabbox
cluster_id: automerge-openclaw-crabbox-1519
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
  - #1519
candidates:
  - #1519
cluster_refs:
  - #1519
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/automerge-openclaw-crabbox-1519
source: pr_automerge
requested_by: "steipete"
requested_by_id: "58493"
request_comment_url: "https://github.com/openclaw/crabbox/pull/1519#issuecomment-5414171433"
---

# ClawSweeper adopted PR repair candidate

Maintainer opted #1519 into ClawSweeper automerge.

Requested by: steipete
Request comment: https://github.com/openclaw/crabbox/pull/1519#issuecomment-5414171433


Source PR: https://github.com/openclaw/crabbox/pull/1519
Title: fix(aws): prevent early readiness and brokered SSH lockouts

ClawSweeper should use this job only for the bounded ClawSweeper review/fix loop:

- Emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/crabbox/pull/1519"]` so the Codex edit pass can make this PR merge-ready.
- The edit pass should rebase onto latest main, address PR comments and review findings, fix CI/check failures, preserve release-note context when required, run the relevant validation, and keep iterating until the branch is ready or an external blocker is proven.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Never add forbidden changelog credit lines for `@codex`, `@openclaw`, or `@steipete`; preserve contributor credit through source links, PR body, and commit/PR history.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

Maintainer special instructions:

Maintainer decision: accept the remaining pinned-policy live-deployment proof gap and land this exact head.

The attempted pinned heartbeat used the production coordinator, which necessarily runs current `main`, not this PR's Worker code; its widened response therefore demonstrated the pre-fix behavior and cannot adjudicate the exact-head Worker change without deploying a separate credentialed coordinator. I am not treating that production response as PR-head proof.

The exact-head source tests cover the forbidden transition and authoritative persisted result, while the live AWS evidence covers current-boot readiness, real cross-zone IPv6 refresh, retained IPv4 SSH connectivity, and cleanup. Exact-head CI and full-branch P0/P1 autoreview are green, and ClawSweeper reports no code or security findings.

All task-owned AWS/Hetzner leases and both temporary Workers are deleted or released and absent. Proceed with the repository's normal merge gates; do not bypass a failing check.

