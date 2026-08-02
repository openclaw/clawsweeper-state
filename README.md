# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Aug 2, 2026, 18:33 UTC

### Fleet

| Metric | Count |
| --- | ---: |
| Covered repositories | 3 |
| Open review records | 0 |
| Archived closed records | 0 |
| Fresh reviews, 7d | 0 |
| Proposed closes awaiting apply | 0 |
| Work candidates awaiting promotion | 0 |
| Failed or stale reviews | 0 |

### Current Runs

| Repository | State | Updated | Run |
| --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Review in progress | Aug 2, 2026, 18:33 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/30761286142) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Planning review | Aug 2, 2026, 18:17 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/30760776976) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Aug 2, 2026, 15:22 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/30754177344) |

### Repositories

| Repository | Open records | Archived | Fresh | Proposed closes | Work candidates | Failed/stale | Last review | Last close |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 0 | 0 | 0 | 0 | 0 | 0 | unknown | unknown |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | 0 | 0 | 0 | 0 | 0 | 0 | unknown | unknown |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | 0 | 0 | 0 | 0 | 0 | 0 | unknown | unknown |

### Work Candidates

| Repository | Item | Title | Priority | Reviewed | Report |
| --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

### Recently Closed

| Repository | Item | Title | Reason | Closed | Report |
| --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

<details>
<summary>Recently Reviewed</summary>

| Repository | Item | Title | Outcome | Status | Reviewed |
| --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

</details>

### Audit Health

| Repository | Status | Last audit | Missing eligible | Stale records | Protected proposed | Scan complete |
| --- | --- | --- | ---: | ---: | ---: | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | missing records | Jul 19, 2026, 12:31 UTC | 167 | 1 | 0 | yes |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | missing records | Jul 28, 2026, 07:09 UTC | 5 | 0 | 0 | yes |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | clean | Jul 19, 2026, 07:11 UTC | 0 | 0 | 0 | yes |


## Action Ledger

Last source event: unknown

Immutable source: 0 events across 0 JSONL shards; 0 duplicate replays collapsed. Snapshot: `4f53cda18c2b`.

Current indexes and this dashboard section are replaceable projections, never mutation authority.

| Event family | Events | Latest |
| --- | ---: | --- |
| _None_ |  |  |

| Repository | Events | Latest |
| --- | ---: | --- |
| _None_ |  |  |

| Action status | Events | Latest |
| --- | ---: | --- |
| _None_ |  |  |

| Freshness | Events | Latest |
| --- | ---: | --- |
| _None_ |  |  |


## Repair Dashboard

Last source update: Aug 2, 2026, 18:30 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 308 | 100% |
| Run attempts archived | 831 | audit |
| Latest successful clusters | 271 | 88.0% |
| Latest failed clusters | 36 | 11.7% |
| Latest cancelled clusters | 1 | 0.3% |
| Needs-human clusters | 23 | 7.5% |
| Fix actions failed | 20 | 5.3% |
| Fix actions blocked | 76 | 20.1% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 245 | 99.6% |
| Skipped mutation attempts | 1 | 0.4% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 308 clusters: 162 maintainer action, 48 automation snapshot, 81 intervention needed, 17 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#107479](https://github.com/openclaw/openclaw/pull/107479) is merge_not_authorized: job does not allow merge.
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#117976](https://github.com/openclaw/openclaw/pull/117976) is automation_failed: Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a sepa....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#114609](https://github.com/openclaw/openclaw/pull/114609) is action_planned: The branch is stale but writable and the source PR is useful, focused contributor work. Repairing it is preferable to retaining a bot-aut....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 162 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 48 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 81 | automation failure or blocker recorded |
| No Pending Action | 17 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 41 |
| merge_ready | 23 |
| merge_not_authorized | 98 |
| checks_blocked | 29 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 18 |
| automation_failed | 44 |
| automation_blocked | 37 |
| reviewed_no_action | 17 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#107479](https://github.com/openclaw/openclaw/pull/107479) | merge_not_authorized | job does not allow merge | Aug 2, 2026, 16:57 UTC | [automerge-openclaw-openclaw-107479](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107479.md) | [30757037741](https://github.com/openclaw/clawsweeper/actions/runs/30757037741) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118064](https://github.com/openclaw/openclaw/pull/118064) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 16:52 UTC | [issue-openclaw-openclaw-118029](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118029.md) | [30756039551](https://github.com/openclaw/clawsweeper/actions/runs/30756039551) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118055](https://github.com/openclaw/openclaw/pull/118055) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 16:48 UTC | [issue-openclaw-openclaw-118039](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118039.md) | [30756285434](https://github.com/openclaw/clawsweeper/actions/runs/30756285434) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117976](https://github.com/openclaw/openclaw/pull/117976) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 12:12 UTC | [issue-openclaw-openclaw-90786](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-90786.md) | [30746149392](https://github.com/openclaw/clawsweeper/actions/runs/30746149392) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117954](https://github.com/openclaw/openclaw/pull/117954) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 10:43 UTC | [issue-openclaw-openclaw-117941](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117941.md) | [30742939447](https://github.com/openclaw/clawsweeper/actions/runs/30742939447) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117952](https://github.com/openclaw/openclaw/pull/117952) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 10:40 UTC | [issue-openclaw-openclaw-117899](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117899.md) | [30742823338](https://github.com/openclaw/clawsweeper/actions/runs/30742823338) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117881](https://github.com/openclaw/openclaw/pull/117881) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 07:05 UTC | [issue-openclaw-openclaw-67366](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-67366.md) | [30736012393](https://github.com/openclaw/clawsweeper/actions/runs/30736012393) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#67202](https://github.com/openclaw/openclaw/issues/67202) | maintainer_input | Route this exact security-sensitive historical PR to central OpenClaw security handling; do not let it block the unrelated non-security repair path. | Aug 2, 2026, 05:30 UTC | [issue-openclaw-openclaw-67136](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-67136.md) | [30733333491](https://github.com/openclaw/clawsweeper/actions/runs/30733333491) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117620](https://github.com/openclaw/openclaw/pull/117620) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 1, 2026, 20:45 UTC | [issue-openclaw-openclaw-117545](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117545.md) | [30716583623](https://github.com/openclaw/clawsweeper/actions/runs/30716583623) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#100498](https://github.com/openclaw/openclaw/issues/100498) | maintainer_input | Quarantine the exact security-sensitive contextual PR without blocking the unrelated non-security repair for #116490. | Aug 1, 2026, 14:12 UTC | [issue-openclaw-openclaw-116490](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116490.md) | [30702491319](https://github.com/openclaw/clawsweeper/actions/runs/30702491319) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#116976](https://github.com/openclaw/openclaw/pull/116976) | merge_not_authorized | job does not allow merge | Jul 31, 2026, 18:04 UTC | [automerge-openclaw-openclaw-114611](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-114611.md) | [30652227116](https://github.com/openclaw/clawsweeper/actions/runs/30652227116) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#111745](https://github.com/openclaw/openclaw/issues/111745) | maintainer_input | Obtain the sanitized reproduction evidence requested in the July 31, 2026 maintainer comment: effective npm_config values, npm config list --json,... | Jul 31, 2026, 14:06 UTC | [issue-openclaw-openclaw-111745](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-111745.md) | [30636586682](https://github.com/openclaw/clawsweeper/actions/runs/30636586682) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#67584](https://github.com/openclaw/openclaw/issues/67584) | maintainer_input | Quarantine this exact PR for central OpenClaw security handling without affecting classification of the non-security items. | Jul 17, 2026, 09:01 UTC | [gitcrawl-59-memory-wiki-per-agent-vault-path-isolation-for-multi-tenant-depl](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-59-memory-wiki-per-agent-vault-path-isolation-for-multi-tenant-depl.md) | [29568070623](https://github.com/openclaw/clawsweeper/actions/runs/29568070623) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) | [#1044](https://github.com/openclaw/crabbox/issues/1044) | maintainer_input | For https://github.com/openclaw/crabbox/issues/1044, identify a contributor willing to own ongoing Google Cloud Run sandbox support and provide liv... | Jul 17, 2026, 07:23 UTC | [issue-openclaw-crabbox-1044](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-1044.md) | [29562638791](https://github.com/openclaw/clawsweeper/actions/runs/29562638791) |
| [openclaw/discrawl](https://github.com/openclaw/discrawl) | [#130](https://github.com/openclaw/discrawl/pull/130) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Jul 14, 2026, 13:53 UTC | [issue-openclaw-discrawl-127](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-discrawl-127.md) | [29336372221](https://github.com/openclaw/clawsweeper/actions/runs/29336372221) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#114609](https://github.com/openclaw/openclaw/pull/114609) | action_planned | The branch is stale but writable and the source PR is useful, focused contributor work. Repairing it is preferable to retaining a bot-authored dupl... | Aug 2, 2026, 16:45 UTC | [automerge-openclaw-openclaw-114609](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-114609.md) | [30757123131](https://github.com/openclaw/clawsweeper/actions/runs/30757123131) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117911](https://github.com/openclaw/openclaw/pull/117911) | checks_blocked | checks are not clean: check-sqlite-session-flip-proof: FAILURE, openclaw/ci-gate: FAILURE | Aug 2, 2026, 08:37 UTC | [issue-openclaw-openclaw-69242](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-69242.md) | [30738935968](https://github.com/openclaw/clawsweeper/actions/runs/30738935968) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117906](https://github.com/openclaw/openclaw/pull/117906) | action_planned | Repair the active same-repository PR branch to restore direct mention-prefixed command probing without reverting agent-facing self-mention context. | Aug 2, 2026, 08:34 UTC | [issue-openclaw-openclaw-72504](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-72504.md) | [30739116200](https://github.com/openclaw/clawsweeper/actions/runs/30739116200) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117717](https://github.com/openclaw/openclaw/pull/117717) | action_planned | Run the bounded repair/rebase/review loop against the existing canonical branch; do not replace or merge it. | Aug 2, 2026, 03:35 UTC | [automerge-openclaw-openclaw-117717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117717.md) | [30730754729](https://github.com/openclaw/clawsweeper/actions/runs/30730754729) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117721](https://github.com/openclaw/openclaw/pull/117721) | checks_blocked | checks are not clean: openclaw/ci-gate: IN_PROGRESS | Aug 2, 2026, 01:12 UTC | [issue-openclaw-openclaw-88079](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-88079.md) | [30725508395](https://github.com/openclaw/clawsweeper/actions/runs/30725508395) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117633](https://github.com/openclaw/openclaw/pull/117633) | action_planned | Implement the ownerHandle propagation regression fix on the designated ClawSweeper branch. The job forbids merge and issue closure. | Aug 2, 2026, 00:03 UTC | [issue-openclaw-openclaw-117633](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117633.md) | [30721376353](https://github.com/openclaw/clawsweeper/actions/runs/30721376353) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117697](https://github.com/openclaw/openclaw/pull/117697) | checks_blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS, openclaw/ci-gate: QUEUED | Aug 1, 2026, 23:58 UTC | [issue-openclaw-openclaw-117672](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117672.md) | [30723386747](https://github.com/openclaw/clawsweeper/actions/runs/30723386747) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#116188](https://github.com/openclaw/openclaw/pull/116188) | action_planned | Repair the useful contributor branch rather than replacing it: rebase once onto current main, retain its focused implementation and contributor his... | Aug 1, 2026, 19:23 UTC | [automerge-openclaw-openclaw-116188](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116188.md) | [30710888629](https://github.com/openclaw/clawsweeper/actions/runs/30710888629) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117521](https://github.com/openclaw/openclaw/pull/117521) | action_planned | Reuse the existing same-repository ClawSweeper branch as the sole implementation path; repair is narrow but requires exact-head focused validation... | Aug 1, 2026, 17:52 UTC | [issue-openclaw-openclaw-117491](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117491.md) | [30710889861](https://github.com/openclaw/clawsweeper/actions/runs/30710889861) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117485](https://github.com/openclaw/openclaw/pull/117485) | checks_blocked | checks are not clean: Scan iOS dead code: FAILURE, Intersect shared OpenClawKit dead code: FAILURE, ios-build: FAILURE, openclaw/ci-gate: FAILURE | Aug 1, 2026, 16:04 UTC | [issue-openclaw-openclaw-110171](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-110171.md) | [30706593455](https://github.com/openclaw/clawsweeper/actions/runs/30706593455) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117443](https://github.com/openclaw/openclaw/pull/117443) | checks_blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS | Aug 1, 2026, 14:34 UTC | [issue-openclaw-openclaw-89532](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-89532.md) | [30702513540](https://github.com/openclaw/clawsweeper/actions/runs/30702513540) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117144](https://github.com/openclaw/openclaw/pull/117144) | checks_blocked | checks are not clean: check-dependencies: FAILURE, openclaw/ci-gate: FAILURE | Aug 1, 2026, 01:47 UTC | [issue-openclaw-openclaw-98276](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-98276.md) | [30676738440](https://github.com/openclaw/clawsweeper/actions/runs/30676738440) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#116937](https://github.com/openclaw/openclaw/pull/116937) | action_planned | The issue has a single, source-proven command-hint defect with an existing command owner and an isolated regression-test seam. | Jul 31, 2026, 20:06 UTC | [issue-openclaw-openclaw-116937](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116937.md) | [30653134299](https://github.com/openclaw/clawsweeper/actions/runs/30653134299) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#116921](https://github.com/openclaw/openclaw/pull/116921) | action_planned | The hydrated issue evidence and current source agree on a bounded existing-behavior regression. It needs a new narrow implementation PR; no closure... | Jul 31, 2026, 18:00 UTC | [issue-openclaw-openclaw-116921](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116921.md) | [30649401183](https://github.com/openclaw/clawsweeper/actions/runs/30649401183) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#116939](https://github.com/openclaw/openclaw/pull/116939) | action_planned | The current-main message-loss defect remains real, non-security-sensitive, and safely repairable with a narrow shared-sanitizer change. | Jul 31, 2026, 17:11 UTC | [issue-openclaw-openclaw-116939](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116939.md) | [30649395263](https://github.com/openclaw/clawsweeper/actions/runs/30649395263) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117976](https://github.com/openclaw/openclaw/pull/117976) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 2, 2026, 18:30 UTC | [automerge-openclaw-openclaw-117976](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117976.md) | [30760170638](https://github.com/openclaw/clawsweeper/actions/runs/30760170638) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118083](https://github.com/openclaw/openclaw/pull/118083) | automation_failed | Repair the shared producer instead of adding downstream Cron-only duplicate classification policy. | Aug 2, 2026, 18:26 UTC | [issue-openclaw-openclaw-118083](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118083.md) | [30760125757](https://github.com/openclaw/clawsweeper/actions/runs/30760125757) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#100845](https://github.com/openclaw/openclaw/pull/100845) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 2, 2026, 18:21 UTC | [automerge-openclaw-openclaw-100845](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100845.md) | [30759664367](https://github.com/openclaw/clawsweeper/actions/runs/30759664367) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117951](https://github.com/openclaw/openclaw/pull/117951) | automation_blocked | autofix-only job cannot merge | Aug 2, 2026, 16:29 UTC | [automerge-openclaw-openclaw-117951](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117951.md) | [30755743580](https://github.com/openclaw/clawsweeper/actions/runs/30755743580) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117911](https://github.com/openclaw/openclaw/pull/117911) | automation_blocked | autofix-only job cannot merge | Aug 2, 2026, 15:45 UTC | [automerge-openclaw-openclaw-117911](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117911.md) | [30754089504](https://github.com/openclaw/clawsweeper/actions/runs/30754089504) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): validation command runtime budget exhausted | Aug 2, 2026, 15:40 UTC | [automerge-openclaw-openclaw-117952](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117952.md) | [30751961574](https://github.com/openclaw/clawsweeper/actions/runs/30751961574) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | Aug 2, 2026, 15:26 UTC | [issue-openclaw-openclaw-113631](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-113631.md) | [30754058583](https://github.com/openclaw/clawsweeper/actions/runs/30754058583) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117906](https://github.com/openclaw/openclaw/pull/117906) | automation_blocked | autofix-only job cannot merge | Aug 2, 2026, 09:00 UTC | [automerge-openclaw-openclaw-117906](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117906.md) | [30739808879](https://github.com/openclaw/clawsweeper/actions/runs/30739808879) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | Aug 2, 2026, 07:45 UTC | [automerge-openclaw-openclaw-117869](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117869.md) | [30737716674](https://github.com/openclaw/clawsweeper/actions/runs/30737716674) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | Aug 2, 2026, 07:40 UTC | [automerge-openclaw-openclaw-117881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117881.md) | [30737052850](https://github.com/openclaw/clawsweeper/actions/runs/30737052850) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117721](https://github.com/openclaw/openclaw/pull/117721) | automation_blocked | autofix-only job cannot merge | Aug 2, 2026, 02:19 UTC | [automerge-openclaw-openclaw-117721](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117721.md) | [30727766810](https://github.com/openclaw/clawsweeper/actions/runs/30727766810) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#113663](https://github.com/openclaw/openclaw/pull/113663) | automation_blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | Aug 2, 2026, 00:08 UTC | [automerge-openclaw-openclaw-113663](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-113663.md) | [30723992316](https://github.com/openclaw/clawsweeper/actions/runs/30723992316) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#116976](https://github.com/openclaw/openclaw/pull/116976) | automation_blocked | protected or paused repair label: security | Aug 1, 2026, 22:59 UTC | [automerge-openclaw-openclaw-116976](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116976.md) | [30721754676](https://github.com/openclaw/clawsweeper/actions/runs/30721754676) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117521](https://github.com/openclaw/openclaw/pull/117521) | automation_blocked | autofix-only job cannot merge | Aug 1, 2026, 19:43 UTC | [automerge-openclaw-openclaw-117521](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117521.md) | [30714010173](https://github.com/openclaw/clawsweeper/actions/runs/30714010173) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117144](https://github.com/openclaw/openclaw/pull/117144) | automation_blocked | autofix-only job cannot merge | Aug 1, 2026, 18:43 UTC | [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | [30710002508](https://github.com/openclaw/clawsweeper/actions/runs/30710002508) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #73478 open as the canonical bug report and retain #117951 as its active, validated implementation PR. Current main still projects assistant e... | Aug 2, 2026, 10:58 UTC | [issue-openclaw-openclaw-73478](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-73478.md) | [30744624314](https://github.com/openclaw/clawsweeper/actions/runs/30744624314) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Live preflight shows both the hinted canonical PR #70585 and listed candidate PR #61620 are already closed. Current main f5bb19e028fb69f1b837c2a0cf... | Jul 16, 2026, 09:38 UTC | [gitcrawl-55-subagent-announce-fall-back-to-best-effort-delivery](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-55-subagent-announce-fall-back-to-best-effort-delivery.md) | [29487615730](https://github.com/openclaw/clawsweeper/actions/runs/29487615730) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | All hydrated issues and pull requests are already closed. Current main at 17a533ce268957780a3480c9f0691593efa94153 contains the safer channel-owned... | Jul 12, 2026, 08:58 UTC | [gitcrawl-13714-fix-count-discord-acp-block-deliveries-as-visible-text](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-13714-fix-count-discord-acp-block-deliveries-as-visible-text.md) | [29186574234](https://github.com/openclaw/clawsweeper/actions/runs/29186574234) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#105100](https://github.com/openclaw/openclaw/pull/105100) | reviewed_no_action | The hydrated cluster materially changed after the automerge job was created: PR #104718 is already closed as superseded, PR #105100 is merged, and... | Jul 12, 2026, 08:15 UTC | [automerge-openclaw-openclaw-104718](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-104718.md) | [29185239992](https://github.com/openclaw/clawsweeper/actions/runs/29185239992) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | [#494](https://github.com/openclaw/clawsweeper/pull/494) | reviewed_no_action | No repair or mutation remains: PR #494 was merged into current main after a passing exact-head Codex review and successful checks, and linked issue... | Jul 11, 2026, 05:48 UTC | [automerge-openclaw-clawsweeper-494](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawsweeper-494.md) | [29141701220](https://github.com/openclaw/clawsweeper/actions/runs/29141701220) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#101489](https://github.com/openclaw/openclaw/pull/101489) | reviewed_no_action | Canonical PR #101489 is already closed and its fix is present on current main. Current main registers a detached child error listener before unref... | Jul 7, 2026, 11:55 UTC | [automerge-openclaw-openclaw-101489](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-101489.md) | [28863930775](https://github.com/openclaw/clawsweeper/actions/runs/28863930775) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#880](https://github.com/openclaw/openclaw-windows-node/issues/880) | reviewed_no_action | No new implementation PR should be created from this run. The hydrated live state shows #880 is already closed, and current main is at 87dc3dc79d7c... | Jun 28, 2026, 08:49 UTC | [issue-openclaw-openclaw-windows-node-880](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-880.md) | [28316917944](https://github.com/openclaw/clawsweeper/actions/runs/28316917944) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Preflight shows every hydrated cluster item is already closed. No open canonical PR needs repair, no close action is valid, and no fix PR is needed... | Jun 26, 2026, 09:26 UTC | [gitcrawl-6257-fix-use-ssrf-guarded-fetch-for-tts-provider-requests](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-6257-fix-use-ssrf-guarded-fetch-for-tts-provider-requests.md) | [28229160559](https://github.com/openclaw/clawsweeper/actions/runs/28229160559) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#95666](https://github.com/openclaw/openclaw/pull/95666) | reviewed_no_action | #95666 was already merged and closed in the hydrated preflight state, with maintainer merge proof and passing post-repair checks. Current main at 6... | Jun 23, 2026, 07:30 UTC | [automerge-openclaw-openclaw-95666](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-95666.md) | [28009633334](https://github.com/openclaw/clawsweeper/actions/runs/28009633334) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#853](https://github.com/openclaw/gogcli/issues/853) | reviewed_no_action | No repair PR should be opened from this run. The hydrated source issue #853 is already closed, a maintainer explicitly stopped automation to take t... | Jun 20, 2026, 15:01 UTC | [issue-openclaw-gogcli-853](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-853.md) | [27851639404](https://github.com/openclaw/clawsweeper/actions/runs/27851639404) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#837](https://github.com/openclaw/gogcli/pull/837) | reviewed_no_action | Current main is c02fdf7bc1a1b469e41e59c54ac0d71b83cc4024. The original repair target #834 is already closed and superseded by maintainer rewrite #8... | Jun 18, 2026, 11:53 UTC | [automerge-openclaw-gogcli-834](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-gogcli-834.md) | [27750240321](https://github.com/openclaw/clawsweeper/actions/runs/27750240321) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | The hydrated preflight artifact shows the representative #54217 and both requested open candidates #59138 and #61172 are already closed. No open ca... | Jun 16, 2026, 10:03 UTC | [gitcrawl-8567-claude-document-architecture-ta-vz-n](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-8567-claude-document-architecture-ta-vz-n.md) | [27609622955](https://github.com/openclaw/clawsweeper/actions/runs/27609622955) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No mutating action is available or needed. The hydrated preflight shows all primary cluster refs are already closed, and current main at 3ce3ed668d... | Jun 15, 2026, 10:25 UTC | [gitcrawl-7925-fix-plugin-sdk-add-compat-to-exported-subpaths](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-7925-fix-plugin-sdk-add-compat-to-exported-subpaths.md) | [27539722216](https://github.com/openclaw/clawsweeper/actions/runs/27539722216) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Hydrated preflight state does not contain any open ClawHub account-deletion login-loop issue or PR. All provided candidate refs are already closed,... | Jun 13, 2026, 09:20 UTC | [gitcrawl-17429-clawdhub-login-loop-after-account-deletion-oauth-completes-but-n](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-17429-clawdhub-login-loop-after-account-deletion-oauth-completes-but-n.md) | [27462675568](https://github.com/openclaw/clawsweeper/actions/runs/27462675568) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | The hydrated live refs do not match the iFly false-positive reports named by the job. All eight target refs are already closed and concern unrelate... | Jun 12, 2026, 12:30 UTC | [gitcrawl-17427-false-positive-ifly-image-understanding-is-100-safe-flagged-inco](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-17427-false-positive-ifly-image-understanding-is-100-safe-flagged-inco.md) | [27415606776](https://github.com/openclaw/clawsweeper/actions/runs/27415606776) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| automerge-openclaw-openclaw-107479 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-107479](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107479.md) | [30757037741](https://github.com/openclaw/clawsweeper/actions/runs/30757037741) |
| automerge-openclaw-openclaw-117951 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117951](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117951.md) | [30755743580](https://github.com/openclaw/clawsweeper/actions/runs/30755743580) |
| automerge-openclaw-openclaw-117911 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117911](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117911.md) | [30754089504](https://github.com/openclaw/clawsweeper/actions/runs/30754089504) |
| automerge-openclaw-openclaw-117952 | fix failed | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [automerge-openclaw-openclaw-117952](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117952.md) | [30751961574](https://github.com/openclaw/clawsweeper/actions/runs/30751961574) |
| issue-openclaw-openclaw-113631 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-113631](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-113631.md) | [30754058583](https://github.com/openclaw/clawsweeper/actions/runs/30754058583) |
| automerge-openclaw-openclaw-117906 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117906](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117906.md) | [30739808879](https://github.com/openclaw/clawsweeper/actions/runs/30739808879) |
| issue-openclaw-openclaw-69242 | merge_canonical blocked | checks are not clean: check-sqlite-session-flip-proof: FAILURE, openclaw/ci-gate: FAILURE | [issue-openclaw-openclaw-69242](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-69242.md) | [30738935968](https://github.com/openclaw/clawsweeper/actions/runs/30738935968) |
| automerge-openclaw-openclaw-117869 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [automerge-openclaw-openclaw-117869](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117869.md) | [30737716674](https://github.com/openclaw/clawsweeper/actions/runs/30737716674) |
| automerge-openclaw-openclaw-117881 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [automerge-openclaw-openclaw-117881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117881.md) | [30737052850](https://github.com/openclaw/clawsweeper/actions/runs/30737052850) |
| automerge-openclaw-openclaw-117721 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117721](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117721.md) | [30727766810](https://github.com/openclaw/clawsweeper/actions/runs/30727766810) |
| issue-openclaw-openclaw-88079 | merge_canonical blocked | checks are not clean: openclaw/ci-gate: IN_PROGRESS | [issue-openclaw-openclaw-88079](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-88079.md) | [30725508395](https://github.com/openclaw/clawsweeper/actions/runs/30725508395) |
| automerge-openclaw-openclaw-113663 | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-113663](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-113663.md) | [30723992316](https://github.com/openclaw/clawsweeper/actions/runs/30723992316) |
| issue-openclaw-openclaw-117672 | merge_canonical blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS, openclaw/ci-gate: QUEUED | [issue-openclaw-openclaw-117672](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117672.md) | [30723386747](https://github.com/openclaw/clawsweeper/actions/runs/30723386747) |
| automerge-openclaw-openclaw-116976 | merge_canonical blocked | protected or paused repair label: security | [automerge-openclaw-openclaw-116976](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116976.md) | [30721754676](https://github.com/openclaw/clawsweeper/actions/runs/30721754676) |
| automerge-openclaw-openclaw-117521 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117521](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117521.md) | [30714010173](https://github.com/openclaw/clawsweeper/actions/runs/30714010173) |
| automerge-openclaw-openclaw-117144 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | [30710002508](https://github.com/openclaw/clawsweeper/actions/runs/30710002508) |
| automerge-openclaw-openclaw-117485 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117485](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117485.md) | [30708141549](https://github.com/openclaw/clawsweeper/actions/runs/30708141549) |
| issue-openclaw-openclaw-110171 | merge_canonical blocked | checks are not clean: Scan iOS dead code: FAILURE, Intersect shared OpenClawKit dead code: FAILURE, ios-build: FAILURE, openclaw/ci-gate: FAILURE | [issue-openclaw-openclaw-110171](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-110171.md) | [30706593455](https://github.com/openclaw/clawsweeper/actions/runs/30706593455) |
| issue-openclaw-openclaw-89532 | merge_canonical blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS | [issue-openclaw-openclaw-89532](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-89532.md) | [30702513540](https://github.com/openclaw/clawsweeper/actions/runs/30702513540) |
| issue-openclaw-openclaw-117411 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/gateway/... | [issue-openclaw-openclaw-117411](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117411.md) | [30701138555](https://github.com/openclaw/clawsweeper/actions/runs/30701138555) |
| issue-openclaw-openclaw-115037 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [issue-openclaw-openclaw-115037](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-115037.md) | [30699344393](https://github.com/openclaw/clawsweeper/actions/runs/30699344393) |
| issue-openclaw-openclaw-117338 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-117338](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117338.md) | [30698090859](https://github.com/openclaw/clawsweeper/actions/runs/30698090859) |
| issue-openclaw-openclaw-117358 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [issue-openclaw-openclaw-117358](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117358.md) | [30696730693](https://github.com/openclaw/clawsweeper/actions/runs/30696730693) |
| issue-openclaw-openclaw-108002 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-108002](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-108002.md) | [30695990259](https://github.com/openclaw/clawsweeper/actions/runs/30695990259) |
| issue-openclaw-openclaw-115475 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, tooling [check:changed] con... | [issue-openclaw-openclaw-115475](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-115475.md) | [30683325957](https://github.com/openclaw/clawsweeper/actions/runs/30683325957) |
| issue-openclaw-openclaw-112226 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, tooling [check:changed] con... | [issue-openclaw-openclaw-112226](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-112226.md) | [30683470970](https://github.com/openclaw/clawsweeper/actions/runs/30683470970) |
| issue-openclaw-openclaw-115073 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/plug... | [issue-openclaw-openclaw-115073](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-115073.md) | [30677342367](https://github.com/openclaw/clawsweeper/actions/runs/30677342367) |
| issue-openclaw-openclaw-98276 | merge_canonical blocked | checks are not clean: check-dependencies: FAILURE, openclaw/ci-gate: FAILURE | [issue-openclaw-openclaw-98276](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-98276.md) | [30676738440](https://github.com/openclaw/clawsweeper/actions/runs/30676738440) |
| automerge-openclaw-openclaw-116909 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | [automerge-openclaw-openclaw-116909](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116909.md) | [30675697277](https://github.com/openclaw/clawsweeper/actions/runs/30675697277) |
| issue-openclaw-openclaw-93917 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/ag... | [issue-openclaw-openclaw-93917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-93917.md) | [30651770665](https://github.com/openclaw/clawsweeper/actions/runs/30651770665) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [automerge-openclaw-openclaw-117952](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117952.md) | failed |  |  | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [30751961574](https://github.com/openclaw/clawsweeper/actions/runs/30751961574) |
| [automerge-openclaw-openclaw-117952](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117952.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [30751961574](https://github.com/openclaw/clawsweeper/actions/runs/30751961574) |
| [issue-openclaw-openclaw-113631](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-113631.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [30754058583](https://github.com/openclaw/clawsweeper/actions/runs/30754058583) |
| [automerge-openclaw-openclaw-117869](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117869.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [30737716674](https://github.com/openclaw/clawsweeper/actions/runs/30737716674) |
| [automerge-openclaw-openclaw-117869](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117869.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [30737716674](https://github.com/openclaw/clawsweeper/actions/runs/30737716674) |
| [automerge-openclaw-openclaw-117881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117881.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [30737052850](https://github.com/openclaw/clawsweeper/actions/runs/30737052850) |
| [automerge-openclaw-openclaw-117881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117881.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [30737052850](https://github.com/openclaw/clawsweeper/actions/runs/30737052850) |
| [automerge-openclaw-openclaw-113663](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-113663.md) | blocked | [#113663](https://github.com/openclaw/openclaw/pull/113663) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [30723992316](https://github.com/openclaw/clawsweeper/actions/runs/30723992316) |
| [issue-openclaw-openclaw-117411](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117411.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/gateway/... | [30701138555](https://github.com/openclaw/clawsweeper/actions/runs/30701138555) |
| [issue-openclaw-openclaw-115037](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-115037.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [30699344393](https://github.com/openclaw/clawsweeper/actions/runs/30699344393) |
| [issue-openclaw-openclaw-117338](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117338.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [30698090859](https://github.com/openclaw/clawsweeper/actions/runs/30698090859) |
| [issue-openclaw-openclaw-117358](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117358.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [30696730693](https://github.com/openclaw/clawsweeper/actions/runs/30696730693) |
| [issue-openclaw-openclaw-108002](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-108002.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [30695990259](https://github.com/openclaw/clawsweeper/actions/runs/30695990259) |
| [issue-openclaw-openclaw-115475](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-115475.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, tooling [check:changed] con... | [30683325957](https://github.com/openclaw/clawsweeper/actions/runs/30683325957) |
| [issue-openclaw-openclaw-112226](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-112226.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, tooling [check:changed] con... | [30683470970](https://github.com/openclaw/clawsweeper/actions/runs/30683470970) |
| [issue-openclaw-openclaw-115073](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-115073.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/plug... | [30677342367](https://github.com/openclaw/clawsweeper/actions/runs/30677342367) |
| [automerge-openclaw-openclaw-116909](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116909.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | [30675697277](https://github.com/openclaw/clawsweeper/actions/runs/30675697277) |
| [automerge-openclaw-openclaw-116909](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116909.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | [30675697277](https://github.com/openclaw/clawsweeper/actions/runs/30675697277) |
| [issue-openclaw-openclaw-93917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-93917.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/ag... | [30651770665](https://github.com/openclaw/clawsweeper/actions/runs/30651770665) |
| [automerge-openclaw-openclaw-114611](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-114611.md) | blocked | [#114611](https://github.com/openclaw/openclaw/pull/114611) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [30652227116](https://github.com/openclaw/clawsweeper/actions/runs/30652227116) |
| [issue-openclaw-openclaw-116967](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116967.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [30652172891](https://github.com/openclaw/clawsweeper/actions/runs/30652172891) |
| [automerge-openclaw-openclaw-116584](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116584.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, apps [check:changed] apps/a... | [30597758157](https://github.com/openclaw/clawsweeper/actions/runs/30597758157) |
| [automerge-openclaw-openclaw-116584](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116584.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, apps [check:changed] apps/a... | [30597758157](https://github.com/openclaw/clawsweeper/actions/runs/30597758157) |
| [automerge-openclaw-openclaw-110725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-110725.md) | failed |  |  | validation command failed (pnpm check:changed): validation command left 4 background process(es) after exit | [29692504658](https://github.com/openclaw/clawsweeper/actions/runs/29692504658) |
| [automerge-openclaw-openclaw-110725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-110725.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command left 4 background process(es) after exit | [29692504658](https://github.com/openclaw/clawsweeper/actions/runs/29692504658) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 102 | [automerge-openclaw-openclaw-107479](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107479.md) |
| checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | 9 | [issue-openclaw-gogcli-917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-917.md) |
| autofix-only job cannot merge | 7 | [automerge-openclaw-openclaw-117951](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117951.md) |
| checks are not clean: Go: IN_PROGRESS, Release Check: IN_PROGRESS | 7 | [issue-openclaw-crabbox-756](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-756.md) |
| checks are not clean: windows: IN_PROGRESS | 2 | [issue-openclaw-gogcli-872](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-872.md) |
| checks are not clean: check-sqlite-session-flip-proof: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-69242](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-69242.md) |
| checks are not clean: openclaw/ci-gate: IN_PROGRESS | 1 | [issue-openclaw-openclaw-88079](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-88079.md) |
| replacement pull request requires a fresh current-head ClawSweeper review; automatic merge disabled | 1 | [automerge-openclaw-openclaw-113663](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-113663.md) |
| checks are not clean: checks-node-compact-large-8: IN_PROGRESS, openclaw/ci-gate: QUEUED | 1 | [issue-openclaw-openclaw-117672](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117672.md) |
| protected or paused repair label: security | 1 | [automerge-openclaw-openclaw-116976](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116976.md) |
| checks are not clean: Scan iOS dead code: FAILURE, Intersect shared OpenClawKit dead code: FAILURE, ios-build: FAILURE, openclaw/ci-gate:... | 1 | [issue-openclaw-openclaw-110171](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-110171.md) |
| checks are not clean: checks-node-compact-large-8: IN_PROGRESS | 1 | [issue-openclaw-openclaw-89532](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-89532.md) |
| checks are not clean: check-dependencies: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-98276](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-98276.md) |
| Superseded closeout is clear, but the job requires fix-first closeout and #87800 has not landed. | 1 | [gitcrawl-2284-feat-google-add-google-vertex-ai-provider-with-adc-auth-and-glob](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-2284-feat-google-add-google-vertex-ai-provider-with-adc-auth-and-glob.md) |
| checks are not clean: build: FAILURE | 1 | [issue-openclaw-spogo-32](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-spogo-32.md) |

### Latest Repair Closures

| Target | Action | Title | Closed | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

