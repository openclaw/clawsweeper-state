---
repo: openclaw/openclaw
cluster_id: clawsweeper-openclaw-openclaw-124269
mode: autonomous
job_intent: repair_cluster
allowed_actions:
  - comment
  - label
  - close
  - fix
  - raise_pr
blocked_actions:
  - merge
require_human_for:
  - merge
canonical:
  - #124269
candidates:
  - #124269
cluster_refs:
  - #124269
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: true
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clawsweeper/clawsweeper-openclaw-openclaw-124269
source: clawsweeper
---

# ClawSweeper-promoted fix PR candidate

ClawSweeper Repair should create or update one implementation PR from `clawsweeper/clawsweeper-openclaw-openclaw-124269`.

## Operator Prompt

Repair and land https://github.com/openclaw/openclaw/pull/124269 in place.

The current remote head is `add62c65a3527a12f64e39da62d5ee148079c8da`. The latest durable ClawSweeper finding is valid: cached unresolved workspace-icon preparations bypass the new timeout, admission, and disconnect lifecycle in `src/gateway/workspace-icon-http.ts`.

Implement one Gateway-owner lifecycle for both requests arriving before snapshot publication and requests arriving after a still-pending snapshot was published. Resolved snapshots must bypass admission immediately. Preserve `null` as the stable no-icon 404 result; only no publication, timeout, disconnect, or saturation may produce unavailable/503. Keep the HTTP hot path filesystem- and session-store-free.

Add real HTTP regressions by stalling icon file reads after `chat.startup` publishes a pending snapshot. Prove four requests consume the per-session allowance and the fifth gets 503. Prove disconnecting those requests releases capacity for a later request. The saturation regression must fail on the current head because the fifth request remains unsettled.

Independent local proof already established the repair shape: the regression failed on the current head, the intended owner-boundary repair passed 167 focused Gateway tests, and full-branch Codex autoreview returned no findings (`patch is correct`, confidence 0.98). Reconstruct and verify the fix yourself under the root and scoped `AGENTS.md` policies.

Read the latest ClawSweeper comment and apply every actionable finding and Rank-up move. Keep the repair owner-local and lean. Run focused tests, exact-head hosted CI, and a fresh exact-head ClawSweeper review. Land only when the current head and PR body are clean, proof is sufficient, required checks are green, and normal merge gates pass. Preserve the source author's credit.

## Related Refs

- #124269

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; reuse `clawsweeper/clawsweeper-openclaw-openclaw-124269` if it already exists.
- Preserve contributor credit and release-note context when the target repo expects it.
