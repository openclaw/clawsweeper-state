# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Aug 17, 2026, 05:15 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Review publish complete | Aug 17, 2026, 05:15 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31996711601) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Aug 17, 2026, 04:58 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31996191006) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Aug 17, 2026, 03:09 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31990193001) |

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

Last source update: Aug 13, 2026, 10:50 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 507 | 100% |
| Run attempts archived | 1411 | audit |
| Latest successful clusters | 437 | 86.2% |
| Latest failed clusters | 68 | 13.4% |
| Latest cancelled clusters | 2 | 0.4% |
| Needs-human clusters | 31 | 6.1% |
| Fix actions failed | 24 | 4.5% |
| Fix actions blocked | 102 | 19.1% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 308 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 507 clusters: 199 maintainer action, 115 automation snapshot, 166 intervention needed, 27 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [automerge-openclaw-openclaw-119467](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119467.md) is maintainer_input: Before any merge-ready verdict, a maintainer must explicitly accept the intentional compatibility trade-off that pages reaching the 800-d....
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#123112](https://github.com/openclaw/openclaw/pull/123112) is automation_blocked: Repair the Telegram-owned label producer only; do not change routing, session keys, outbound transcript ownership, or configuration..
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#122865](https://github.com/openclaw/openclaw/pull/122865) is action_planned: The issue is an ordinary Control UI bug with a clear shared-owner boundary and no security or product-policy change..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 199 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 115 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 166 | automation failure or blocker recorded |
| No Pending Action | 27 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 55 |
| merge_ready | 45 |
| merge_not_authorized | 99 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 71 |
| automation_failed | 80 |
| automation_blocked | 86 |
| reviewed_no_action | 27 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Before any merge-ready verdict, a maintainer must explicitly accept the intentional compatibility trade-off that pages reaching the 800-depth thres... | Aug 13, 2026, 04:07 UTC | [automerge-openclaw-openclaw-119467](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119467.md) | [31663311741](https://github.com/openclaw/clawsweeper/actions/runs/31663311741) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Run this artifact in a writable executor that can create, test, and publish clawsweeper/issue-openclaw-openclaw-122911. | Aug 13, 2026, 03:23 UTC | [issue-openclaw-openclaw-122911](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122911.md) | [31663314491](https://github.com/openclaw/clawsweeper/actions/runs/31663314491) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#116910](https://github.com/openclaw/openclaw/issues/116910) | maintainer_input | Quarantine this linked item to central OpenClaw security handling; it does not block classification of #122473. | Aug 12, 2026, 07:27 UTC | [issue-openclaw-openclaw-122473](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122473.md) | [31573132548](https://github.com/openclaw/clawsweeper/actions/runs/31573132548) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable repair environment with dependencies installed (or allow the executor to install them) so the planned code and regression change... | Aug 12, 2026, 07:02 UTC | [issue-openclaw-openclaw-122476](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122476.md) | [31571593868](https://github.com/openclaw/clawsweeper/actions/runs/31571593868) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | A maintainer must accept or revise the catalog-gated first-run default policy identified by the latest ClawSweeper `clawsweeper:human-review` resul... | Aug 10, 2026, 10:02 UTC | [automerge-openclaw-openclaw-121414](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121414.md) | [31376872780](https://github.com/openclaw/clawsweeper/actions/runs/31376872780) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#96935](https://github.com/openclaw/openclaw/issues/96935) | maintainer_input | Quarantined from ClawSweeper Repair; no code, comment, close, or merge action is planned for this item. | Aug 10, 2026, 06:56 UTC | [issue-openclaw-openclaw-121446](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121446.md) | [31363526692](https://github.com/openclaw/clawsweeper/actions/runs/31363526692) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a checkout containing the repair commit and reachable base 00194139bad357f31e71a81586a25cf67649f7d6. | Aug 9, 2026, 14:41 UTC | [issue-openclaw-openclaw-121021](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121021.md) | [31318751267](https://github.com/openclaw/clawsweeper/actions/runs/31318751267) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120652](https://github.com/openclaw/openclaw/pull/120652) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 8, 2026, 17:52 UTC | [issue-openclaw-openclaw-97601](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-97601.md) | [31267879445](https://github.com/openclaw/clawsweeper/actions/runs/31267879445) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120583](https://github.com/openclaw/openclaw/pull/120583) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 8, 2026, 12:18 UTC | [issue-openclaw-openclaw-120567](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120567.md) | [31255589161](https://github.com/openclaw/clawsweeper/actions/runs/31255589161) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120569](https://github.com/openclaw/openclaw/pull/120569) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 8, 2026, 11:30 UTC | [issue-openclaw-openclaw-120356](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120356.md) | [31253293896](https://github.com/openclaw/clawsweeper/actions/runs/31253293896) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) | [#1252](https://github.com/openclaw/crabbox/pull/1252) | merge_not_authorized | job does not allow merge | Aug 8, 2026, 08:43 UTC | [automerge-openclaw-crabbox-1252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1252.md) | [31248338546](https://github.com/openclaw/clawsweeper/actions/runs/31248338546) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120347](https://github.com/openclaw/openclaw/issues/120347) | maintainer_input | Approve or reject changing sessions_send so arbitrary explicit missing key-shaped targets return structured not-found instead of materializing a se... | Aug 7, 2026, 20:52 UTC | [issue-openclaw-openclaw-87336](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-87336.md) | [31216402645](https://github.com/openclaw/clawsweeper/actions/runs/31216402645) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120298](https://github.com/openclaw/openclaw/pull/120298) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 7, 2026, 17:13 UTC | [issue-openclaw-openclaw-120253](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120253.md) | [31198891319](https://github.com/openclaw/clawsweeper/actions/runs/31198891319) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#99518](https://github.com/openclaw/openclaw/issues/99518) | maintainer_input | Route this exact approval-boundary report to central OpenClaw security handling without blocking the non-security fix. | Aug 7, 2026, 12:31 UTC | [issue-openclaw-openclaw-120134](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120134.md) | [31176038883](https://github.com/openclaw/clawsweeper/actions/runs/31176038883) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120215](https://github.com/openclaw/openclaw/pull/120215) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 7, 2026, 10:26 UTC | [issue-openclaw-openclaw-120178](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120178.md) | [31166546343](https://github.com/openclaw/clawsweeper/actions/runs/31166546343) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122865](https://github.com/openclaw/openclaw/pull/122865) | action_planned | The issue is an ordinary Control UI bug with a clear shared-owner boundary and no security or product-policy change. | Aug 13, 2026, 00:53 UTC | [issue-openclaw-openclaw-122865](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122865.md) | [31655597674](https://github.com/openclaw/clawsweeper/actions/runs/31655597674) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122739](https://github.com/openclaw/openclaw/pull/122739) | action_planned | Repair the startup owner and its matching onboarding fast path; retain alias and display-name fail-closed behavior. | Aug 12, 2026, 19:25 UTC | [issue-openclaw-openclaw-122739](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122739.md) | [31628859894](https://github.com/openclaw/clawsweeper/actions/runs/31628859894) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122746](https://github.com/openclaw/openclaw/pull/122746) | action_planned | Current main still has the reproduced configuration-validation mismatch; no viable implementation PR is hydrated. | Aug 12, 2026, 19:20 UTC | [issue-openclaw-openclaw-122746](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122746.md) | [31628857219](https://github.com/openclaw/clawsweeper/actions/runs/31628857219) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122618](https://github.com/openclaw/openclaw/pull/122618) | action_planned | The open canonical issue is a reproducible broken existing behavior, not a security or product-policy change. | Aug 12, 2026, 14:53 UTC | [issue-openclaw-openclaw-122618](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122618.md) | [31603999801](https://github.com/openclaw/clawsweeper/actions/runs/31603999801) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122616](https://github.com/openclaw/openclaw/pull/122616) | action_planned | The canonical issue remains an open, narrow, non-security bug. | Aug 12, 2026, 14:05 UTC | [issue-openclaw-openclaw-122616](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122616.md) | [31604002398](https://github.com/openclaw/clawsweeper/actions/runs/31604002398) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#90467](https://github.com/openclaw/openclaw/pull/90467) | action_planned | The reported behavior is reproducible and has a narrow owner-boundary repair path. | Aug 12, 2026, 03:17 UTC | [issue-openclaw-openclaw-90467](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-90467.md) | [31559320102](https://github.com/openclaw/clawsweeper/actions/runs/31559320102) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122352](https://github.com/openclaw/openclaw/pull/122352) | action_planned | The issue remains an ordinary Android presentation-state bug with a narrow in-memory owner-boundary repair; it does not require protocol, configura... | Aug 12, 2026, 00:49 UTC | [issue-openclaw-openclaw-122352](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122352.md) | [31551204299](https://github.com/openclaw/clawsweeper/actions/runs/31551204299) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122244](https://github.com/openclaw/openclaw/pull/122244) | action_planned | Implement the source-proven shared parsing repair and create the allowed narrow fix PR; do not close or merge the issue. | Aug 11, 2026, 22:19 UTC | [issue-openclaw-openclaw-122244](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122244.md) | [31541178357](https://github.com/openclaw/clawsweeper/actions/runs/31541178357) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122251](https://github.com/openclaw/openclaw/pull/122251) | action_planned | The open canonical issue is a source-reproducible, non-security regression with a narrow internal fix path. | Aug 11, 2026, 21:50 UTC | [issue-openclaw-openclaw-122251](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122251.md) | [31539316747](https://github.com/openclaw/clawsweeper/actions/runs/31539316747) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122227](https://github.com/openclaw/openclaw/pull/122227) | action_planned | No viable implementation PR is hydrated; the issue is the canonical path for a new narrow fix PR. | Aug 11, 2026, 20:41 UTC | [issue-openclaw-openclaw-122227](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122227.md) | [31533749490](https://github.com/openclaw/clawsweeper/actions/runs/31533749490) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118751](https://github.com/openclaw/openclaw/pull/118751) | action_planned | Repair the writable same-repository contributor branch rather than replacing it; preserve #102190 attribution already present in the PR body. | Aug 11, 2026, 19:26 UTC | [automerge-openclaw-openclaw-118751](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118751.md) | [31523943887](https://github.com/openclaw/clawsweeper/actions/runs/31523943887) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118696](https://github.com/openclaw/openclaw/pull/118696) | action_planned | Repair the existing same-repository writable branch, preserving the PR body attribution to #118652 and @yozakura-ava. Merge is disabled by this job. | Aug 11, 2026, 19:21 UTC | [automerge-openclaw-openclaw-118696](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118696.md) | [31523946548](https://github.com/openclaw/clawsweeper/actions/runs/31523946548) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#121050](https://github.com/openclaw/openclaw/pull/121050) | action_planned | The PR is the correct owner-boundary fix but needs a current-main rebase and post-rebase validation before it can be reconsidered for merge. | Aug 11, 2026, 18:47 UTC | [automerge-openclaw-openclaw-121050](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121050.md) | [31523949498](https://github.com/openclaw/clawsweeper/actions/runs/31523949498) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122121](https://github.com/openclaw/openclaw/pull/122121) | action_planned | The canonical issue has a bounded root-cause repair with no config, policy, dependency, or security-boundary change. | Aug 11, 2026, 16:46 UTC | [issue-openclaw-openclaw-122121](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122121.md) | [31513687260](https://github.com/openclaw/clawsweeper/actions/runs/31513687260) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119160](https://github.com/openclaw/openclaw/pull/119160) | action_planned | Repair the existing credited PR rather than replace it; merge is explicitly disabled. | Aug 11, 2026, 15:47 UTC | [automerge-openclaw-openclaw-119160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119160.md) | [31508354955](https://github.com/openclaw/clawsweeper/actions/runs/31508354955) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#123112](https://github.com/openclaw/openclaw/pull/123112) | automation_blocked | Repair the Telegram-owned label producer only; do not change routing, session keys, outbound transcript ownership, or configuration. | Aug 13, 2026, 10:50 UTC | [issue-openclaw-openclaw-123112](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-123112.md) | [31692425362](https://github.com/openclaw/clawsweeper/actions/runs/31692425362) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#84486](https://github.com/openclaw/openclaw/pull/84486) | automation_blocked | The canonical issue remains a narrow reproducible bug. Implementation and regression validation require a writable checkout with dependencies avail... | Aug 13, 2026, 10:23 UTC | [issue-openclaw-openclaw-84486](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-84486.md) | [31690409936](https://github.com/openclaw/clawsweeper/actions/runs/31690409936) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#107814](https://github.com/openclaw/openclaw/pull/107814) | automation_blocked | The shared Responses stream owner should preserve valid streamed JSON when terminal data is an empty object, without a Spark-specific branch. | Aug 13, 2026, 03:19 UTC | [issue-openclaw-openclaw-107814](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-107814.md) | [31663313156](https://github.com/openclaw/clawsweeper/actions/runs/31663313156) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118303](https://github.com/openclaw/openclaw/pull/118303) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 12, 2026, 20:41 UTC | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [31637779031](https://github.com/openclaw/clawsweeper/actions/runs/31637779031) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119718](https://github.com/openclaw/openclaw/pull/119718) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 12, 2026, 20:07 UTC | [automerge-openclaw-openclaw-119718](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119718.md) | [31635376117](https://github.com/openclaw/clawsweeper/actions/runs/31635376117) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-122625](cluster:issue-openclaw-openclaw-122625) | automation_blocked | The deterministic executor needs a writable checkout with dependencies to apply and validate the repair. | Aug 12, 2026, 14:48 UTC | [issue-openclaw-openclaw-122625](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122625.md) | [31603997159](https://github.com/openclaw/clawsweeper/actions/runs/31603997159) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118806](https://github.com/openclaw/openclaw/pull/118806) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 12, 2026, 13:59 UTC | [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | [31599975367](https://github.com/openclaw/clawsweeper/actions/runs/31599975367) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122615](https://github.com/openclaw/openclaw/pull/122615) | automation_blocked | The source-proven repair is narrow, but this worker cannot edit the checkout or execute the mandatory regression suites. | Aug 12, 2026, 13:27 UTC | [issue-openclaw-openclaw-122615](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122615.md) | [31600716790](https://github.com/openclaw/clawsweeper/actions/runs/31600716790) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-122448](cluster:issue-openclaw-openclaw-122448) | automation_blocked | Rehydrate the artifact main SHA in a writable checkout with dependencies installed, then apply and validate the artifact before opening the permitt... | Aug 12, 2026, 06:04 UTC | [issue-openclaw-openclaw-122448](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122448.md) | [31567960057](https://github.com/openclaw/clawsweeper/actions/runs/31567960057) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122353](https://github.com/openclaw/openclaw/pull/122353) | automation_blocked | The repair requires edits and validation, but the worker has no write access. The working tree remains clean. | Aug 12, 2026, 01:26 UTC | [issue-openclaw-openclaw-122353](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122353.md) | [31553240528](https://github.com/openclaw/clawsweeper/actions/runs/31553240528) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122295](https://github.com/openclaw/openclaw/pull/122295) | automation_blocked | The filesystem sandbox is read-only, preventing the required source/test edits, dependency installation, branch update, and PR creation. | Aug 11, 2026, 22:47 UTC | [issue-openclaw-openclaw-122295](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122295.md) | [31543212443](https://github.com/openclaw/clawsweeper/actions/runs/31543212443) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122298](https://github.com/openclaw/openclaw/pull/122298) | automation_blocked | A writable executor must apply and validate the narrow source-boundary repair; this worker cannot write files or run the fixture-writing regression... | Aug 11, 2026, 22:43 UTC | [issue-openclaw-openclaw-122298](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122298.md) | [31543210482](https://github.com/openclaw/clawsweeper/actions/runs/31543210482) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122170](https://github.com/openclaw/openclaw/issues/122170) | automation_blocked | Preserve the already-probed readiness fact across the setup result and hatch handoff so only a ready-Gateway hatch uses the normal Gateway TUI path... | Aug 11, 2026, 18:52 UTC | [issue-openclaw-openclaw-122170](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122170.md) | [31523941364](https://github.com/openclaw/clawsweeper/actions/runs/31523941364) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122090](https://github.com/openclaw/openclaw/issues/122090) | automation_blocked | A test-only owner-boundary repair is identified, but this runner cannot edit the branch or install the missing focused-test dependency. | Aug 11, 2026, 16:20 UTC | [issue-openclaw-openclaw-122090](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122090.md) | [31511259522](https://github.com/openclaw/clawsweeper/actions/runs/31511259522) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | Aug 11, 2026, 14:55 UTC | [issue-openclaw-openclaw-122047](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122047.md) | [31498580946](https://github.com/openclaw/clawsweeper/actions/runs/31498580946) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #123073 open as the canonical report and #123083 as its canonical contributor fix path. The PR is narrow and writable, but its hydrated CI is... | Aug 13, 2026, 08:58 UTC | [issue-openclaw-openclaw-123073](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-123073.md) | [31683927347](https://github.com/openclaw/clawsweeper/actions/runs/31683927347) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | #119968 is already closed and its requested ACP model-forwarding repair is present on current main via merged #120046. No branch repair, replacemen... | Aug 12, 2026, 21:41 UTC | [automerge-openclaw-openclaw-119968](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119968.md) | [31643205081](https://github.com/openclaw/clawsweeper/actions/runs/31643205081) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120557](https://github.com/openclaw/openclaw/issues/120557) | reviewed_no_action | No new fix PR: current origin/main already implements the requested session-provider-first quota selection and regression coverage. Focused validat... | Aug 11, 2026, 10:45 UTC | [issue-openclaw-openclaw-120557](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120557.md) | [31483039146](https://github.com/openclaw/clawsweeper/actions/runs/31483039146) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #114169 open as the canonical issue and #119735 open as its viable canonical fix PR. The closed configuration PR #114840 is historical partial... | Aug 5, 2026, 21:22 UTC | [issue-openclaw-openclaw-114169](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-114169.md) | [31045738534](https://github.com/openclaw/clawsweeper/actions/runs/31045738534) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #92199 as the canonical issue and #119589 as its active narrow fix PR. The Feishu report is related but has a distinct dispatcher root cause;... | Aug 5, 2026, 11:37 UTC | [issue-openclaw-openclaw-92199](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-92199.md) | [31000389101](https://github.com/openclaw/clawsweeper/actions/runs/31000389101) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #119557 and the narrow, green #119567 implementation as canonical. Keep the error-terminal work (#119554/#119556) and contributor quiet-stream... | Aug 5, 2026, 10:26 UTC | [issue-openclaw-openclaw-119557](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119557.md) | [30996832702](https://github.com/openclaw/clawsweeper/actions/runs/30996832702) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117669](https://github.com/openclaw/openclaw/issues/117669) | reviewed_no_action | No implementation PR is needed: current main at 18c9f27e2de3cb1d3ac6555588a356d56c6fd9bb already applies the requested path-scoped transcript excep... | Aug 3, 2026, 03:39 UTC | [issue-openclaw-openclaw-117669](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117669.md) | [30775617626](https://github.com/openclaw/clawsweeper/actions/runs/30775617626) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Current main d9669ce72cbe31ff8e1ae66de03f34f2014a4f1e does not reproduce the reported Claude CLI guard rejection: Claude now declares selectable na... | Aug 3, 2026, 03:34 UTC | [issue-openclaw-openclaw-118279](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118279.md) | [30775874159](https://github.com/openclaw/clawsweeper/actions/runs/30775874159) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep issue #118274 and its focused implementation PR #118315 as the canonical fix path. The hydrated state shows no security-sensitive items, no ac... | Aug 3, 2026, 00:19 UTC | [issue-openclaw-openclaw-118274](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118274.md) | [30772786025](https://github.com/openclaw/clawsweeper/actions/runs/30772786025) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No implementation PR is needed. Hydrated GitHub state marks #118244 closed as of 2026-08-02T23:42:16Z, and latest main at b7f9cd0a01671f7be5fc34b4b... | Aug 2, 2026, 23:48 UTC | [issue-openclaw-openclaw-118244](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118244.md) | [30772787106](https://github.com/openclaw/clawsweeper/actions/runs/30772787106) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #73478 open as the canonical bug report and retain #117951 as its active, validated implementation PR. Current main still projects assistant e... | Aug 2, 2026, 10:58 UTC | [issue-openclaw-openclaw-73478](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-73478.md) | [30744624314](https://github.com/openclaw/clawsweeper/actions/runs/30744624314) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Live preflight shows both the hinted canonical PR #70585 and listed candidate PR #61620 are already closed. Current main f5bb19e028fb69f1b837c2a0cf... | Jul 16, 2026, 09:38 UTC | [gitcrawl-55-subagent-announce-fall-back-to-best-effort-delivery](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-55-subagent-announce-fall-back-to-best-effort-delivery.md) | [29487615730](https://github.com/openclaw/clawsweeper/actions/runs/29487615730) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | All hydrated issues and pull requests are already closed. Current main at 17a533ce268957780a3480c9f0691593efa94153 contains the safer channel-owned... | Jul 12, 2026, 08:58 UTC | [gitcrawl-13714-fix-count-discord-acp-block-deliveries-as-visible-text](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-13714-fix-count-discord-acp-block-deliveries-as-visible-text.md) | [29186574234](https://github.com/openclaw/clawsweeper/actions/runs/29186574234) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#105100](https://github.com/openclaw/openclaw/pull/105100) | reviewed_no_action | The hydrated cluster materially changed after the automerge job was created: PR #104718 is already closed as superseded, PR #105100 is merged, and... | Jul 12, 2026, 08:15 UTC | [automerge-openclaw-openclaw-104718](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-104718.md) | [29185239992](https://github.com/openclaw/clawsweeper/actions/runs/29185239992) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | [#494](https://github.com/openclaw/clawsweeper/pull/494) | reviewed_no_action | No repair or mutation remains: PR #494 was merged into current main after a passing exact-head Codex review and successful checks, and linked issue... | Jul 11, 2026, 05:48 UTC | [automerge-openclaw-clawsweeper-494](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawsweeper-494.md) | [29141701220](https://github.com/openclaw/clawsweeper/actions/runs/29141701220) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| automerge-openclaw-openclaw-119467 | needs human | Before any merge-ready verdict, a maintainer must explicitly accept the intentional compatibility trade-off that pages reaching the 800-depth thres... | [automerge-openclaw-openclaw-119467](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119467.md) | [31663311741](https://github.com/openclaw/clawsweeper/actions/runs/31663311741) |
| issue-openclaw-openclaw-122911 | needs human | Run this artifact in a writable executor that can create, test, and publish clawsweeper/issue-openclaw-openclaw-122911. | [issue-openclaw-openclaw-122911](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122911.md) | [31663314491](https://github.com/openclaw/clawsweeper/actions/runs/31663314491) |
| issue-openclaw-openclaw-122476 | needs human | Provide a writable repair environment with dependencies installed (or allow the executor to install them) so the planned code and regression change... | [issue-openclaw-openclaw-122476](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122476.md) | [31571593868](https://github.com/openclaw/clawsweeper/actions/runs/31571593868) |
| issue-openclaw-openclaw-122047 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [issue-openclaw-openclaw-122047](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122047.md) | [31498580946](https://github.com/openclaw/clawsweeper/actions/runs/31498580946) |
| issue-openclaw-openclaw-121993 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, ui [check:changed] src/agen... | [issue-openclaw-openclaw-121993](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121993.md) | [31489902188](https://github.com/openclaw/clawsweeper/actions/runs/31489902188) |
| issue-openclaw-openclaw-121984 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/config/s... | [issue-openclaw-openclaw-121984](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121984.md) | [31479658834](https://github.com/openclaw/clawsweeper/actions/runs/31479658834) |
| issue-openclaw-openclaw-121985 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/config/s... | [issue-openclaw-openclaw-121985](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121985.md) | [31479985631](https://github.com/openclaw/clawsweeper/actions/runs/31479985631) |
| automerge-openclaw-openclaw-121536 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests,... | [automerge-openclaw-openclaw-121536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121536.md) | [31475821195](https://github.com/openclaw/clawsweeper/actions/runs/31475821195) |
| issue-openclaw-openclaw-121927 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/t... | [issue-openclaw-openclaw-121927](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121927.md) | [31470734260](https://github.com/openclaw/clawsweeper/actions/runs/31470734260) |
| issue-openclaw-openclaw-113326 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/co... | [issue-openclaw-openclaw-113326](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-113326.md) | [31451582495](https://github.com/openclaw/clawsweeper/actions/runs/31451582495) |
| issue-openclaw-openclaw-121702 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/compone... | [issue-openclaw-openclaw-121702](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121702.md) | [31427240236](https://github.com/openclaw/clawsweeper/actions/runs/31427240236) |
| issue-openclaw-openclaw-121617 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/ag... | [issue-openclaw-openclaw-121617](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121617.md) | [31406251242](https://github.com/openclaw/clawsweeper/actions/runs/31406251242) |
| issue-openclaw-openclaw-119715 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | [issue-openclaw-openclaw-119715](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119715.md) | [31394165338](https://github.com/openclaw/clawsweeper/actions/runs/31394165338) |
| automerge-openclaw-openclaw-121422 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=all [check:changed] extension-impacting surf... | [automerge-openclaw-openclaw-121422](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121422.md) | [31390672949](https://github.com/openclaw/clawsweeper/actions/runs/31390672949) |
| issue-openclaw-openclaw-97067 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/auto-rep... | [issue-openclaw-openclaw-97067](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-97067.md) | [31381192346](https://github.com/openclaw/clawsweeper/actions/runs/31381192346) |
| automerge-openclaw-openclaw-121414 | needs human | A maintainer must accept or revise the catalog-gated first-run default policy identified by the latest ClawSweeper `clawsweeper:human-review` resul... | [automerge-openclaw-openclaw-121414](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121414.md) | [31376872780](https://github.com/openclaw/clawsweeper/actions/runs/31376872780) |
| issue-openclaw-openclaw-121513 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [issue-openclaw-openclaw-121513](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121513.md) | [31372808261](https://github.com/openclaw/clawsweeper/actions/runs/31372808261) |
| issue-openclaw-openclaw-110153 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/ag... | [issue-openclaw-openclaw-110153](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-110153.md) | [31369391922](https://github.com/openclaw/clawsweeper/actions/runs/31369391922) |
| issue-openclaw-openclaw-121351 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/shared/t... | [issue-openclaw-openclaw-121351](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121351.md) | [31351253782](https://github.com/openclaw/clawsweeper/actions/runs/31351253782) |
| issue-openclaw-openclaw-121251 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [issue-openclaw-openclaw-121251](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121251.md) | [31337812652](https://github.com/openclaw/clawsweeper/actions/runs/31337812652) |
| issue-openclaw-openclaw-121021 | needs human | Provide a checkout containing the repair commit and reachable base 00194139bad357f31e71a81586a25cf67649f7d6. | [issue-openclaw-openclaw-121021](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121021.md) | [31318751267](https://github.com/openclaw/clawsweeper/actions/runs/31318751267) |
| issue-openclaw-openclaw-121059 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=scripts, testRoot, tooling [check:changed] s... | [issue-openclaw-openclaw-121059](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121059.md) | [31313946287](https://github.com/openclaw/clawsweeper/actions/runs/31313946287) |
| issue-openclaw-openclaw-121039 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/w... | [issue-openclaw-openclaw-121039](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121039.md) | [31313921201](https://github.com/openclaw/clawsweeper/actions/runs/31313921201) |
| issue-openclaw-openclaw-55372 | merge_canonical blocked | checks are not clean: checks-ui-e2e (1/4): IN_PROGRESS, checks-node-compact-large-6: IN_PROGRESS, checks-node-compact-large-8: IN_PROGRESS, checks-... | [issue-openclaw-openclaw-55372](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-55372.md) | [31310453395](https://github.com/openclaw/clawsweeper/actions/runs/31310453395) |
| issue-openclaw-openclaw-120832 | merge_canonical blocked | checks are not clean: checks-node-compact-large-7: FAILURE, checks-windows-node-test: IN_PROGRESS | [issue-openclaw-openclaw-120832](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120832.md) | [31291121700](https://github.com/openclaw/clawsweeper/actions/runs/31291121700) |
| issue-openclaw-openclaw-120536 | merge_canonical blocked | checks are not clean: checks-node-compact-small-7: IN_PROGRESS | [issue-openclaw-openclaw-120536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120536.md) | [31249008962](https://github.com/openclaw/clawsweeper/actions/runs/31249008962) |
| automerge-openclaw-openclaw-118685 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118685](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118685.md) | [31249116745](https://github.com/openclaw/clawsweeper/actions/runs/31249116745) |
| automerge-openclaw-crabbox-1252 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-crabbox-1252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1252.md) | [31248338546](https://github.com/openclaw/clawsweeper/actions/runs/31248338546) |
| issue-openclaw-openclaw-120488 | execute_fix blocked | Codex /review timed out after 113403ms | [issue-openclaw-openclaw-120488](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120488.md) | [31242527292](https://github.com/openclaw/clawsweeper/actions/runs/31242527292) |
| issue-openclaw-openclaw-120449 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/a... | [issue-openclaw-openclaw-120449](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120449.md) | [31240016267](https://github.com/openclaw/clawsweeper/actions/runs/31240016267) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-openclaw-122047](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122047.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [31498580946](https://github.com/openclaw/clawsweeper/actions/runs/31498580946) |
| [issue-openclaw-openclaw-121993](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121993.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, ui [check:changed] src/agen... | [31489902188](https://github.com/openclaw/clawsweeper/actions/runs/31489902188) |
| [issue-openclaw-openclaw-121984](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121984.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/config/s... | [31479658834](https://github.com/openclaw/clawsweeper/actions/runs/31479658834) |
| [issue-openclaw-openclaw-121985](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121985.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/config/s... | [31479985631](https://github.com/openclaw/clawsweeper/actions/runs/31479985631) |
| [automerge-openclaw-openclaw-121536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121536.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests,... | [31475821195](https://github.com/openclaw/clawsweeper/actions/runs/31475821195) |
| [automerge-openclaw-openclaw-121536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121536.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests,... | [31475821195](https://github.com/openclaw/clawsweeper/actions/runs/31475821195) |
| [issue-openclaw-openclaw-121927](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121927.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/t... | [31470734260](https://github.com/openclaw/clawsweeper/actions/runs/31470734260) |
| [issue-openclaw-openclaw-113326](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-113326.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/co... | [31451582495](https://github.com/openclaw/clawsweeper/actions/runs/31451582495) |
| [issue-openclaw-openclaw-121702](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121702.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/compone... | [31427240236](https://github.com/openclaw/clawsweeper/actions/runs/31427240236) |
| [issue-openclaw-openclaw-121617](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121617.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/ag... | [31406251242](https://github.com/openclaw/clawsweeper/actions/runs/31406251242) |
| [issue-openclaw-openclaw-119715](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119715.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | [31394165338](https://github.com/openclaw/clawsweeper/actions/runs/31394165338) |
| [automerge-openclaw-openclaw-121422](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121422.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=all [check:changed] extension-impacting surf... | [31390672949](https://github.com/openclaw/clawsweeper/actions/runs/31390672949) |
| [automerge-openclaw-openclaw-121422](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121422.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=all [check:changed] extension-impacting surf... | [31390672949](https://github.com/openclaw/clawsweeper/actions/runs/31390672949) |
| [issue-openclaw-openclaw-97067](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-97067.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/auto-rep... | [31381192346](https://github.com/openclaw/clawsweeper/actions/runs/31381192346) |
| [issue-openclaw-openclaw-121513](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121513.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [31372808261](https://github.com/openclaw/clawsweeper/actions/runs/31372808261) |
| [issue-openclaw-openclaw-110153](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-110153.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/ag... | [31369391922](https://github.com/openclaw/clawsweeper/actions/runs/31369391922) |
| [issue-openclaw-openclaw-121351](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121351.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/shared/t... | [31351253782](https://github.com/openclaw/clawsweeper/actions/runs/31351253782) |
| [issue-openclaw-openclaw-121251](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121251.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [31337812652](https://github.com/openclaw/clawsweeper/actions/runs/31337812652) |
| [issue-openclaw-openclaw-121059](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121059.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=scripts, testRoot, tooling [check:changed] s... | [31313946287](https://github.com/openclaw/clawsweeper/actions/runs/31313946287) |
| [issue-openclaw-openclaw-121039](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121039.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/w... | [31313921201](https://github.com/openclaw/clawsweeper/actions/runs/31313921201) |
| [issue-openclaw-openclaw-120488](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120488.md) | blocked |  |  | Codex /review timed out after 113403ms | [31242527292](https://github.com/openclaw/clawsweeper/actions/runs/31242527292) |
| [issue-openclaw-openclaw-120449](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120449.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/a... | [31240016267](https://github.com/openclaw/clawsweeper/actions/runs/31240016267) |
| [issue-openclaw-openclaw-92884](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-92884.md) | blocked |  |  | Codex /review did not pass after final base synchronization: Merge blocked by one P1 correctness issue in closer-origin schema precedence. | [31198629777](https://github.com/openclaw/clawsweeper/actions/runs/31198629777) |
| [issue-openclaw-openclaw-120207](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120207.md) | blocked |  |  | Codex /review timed out after 30000ms | [31171079611](https://github.com/openclaw/clawsweeper/actions/runs/31171079611) |
| [automerge-openclaw-openclaw-120143](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120143.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs, bundledChannelConfigM... | [31155145929](https://github.com/openclaw/clawsweeper/actions/runs/31155145929) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 103 | [automerge-openclaw-crabbox-1252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1252.md) |
| autofix-only job cannot merge | 16 | [automerge-openclaw-openclaw-118685](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118685.md) |
| checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | 9 | [issue-openclaw-gogcli-917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-917.md) |
| checks are not clean: Go: IN_PROGRESS, Release Check: IN_PROGRESS | 7 | [issue-openclaw-crabbox-756](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-756.md) |
| checks are not clean: checks-node-compact-large-8: IN_PROGRESS | 3 | [issue-openclaw-openclaw-91860](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-91860.md) |
| checks are not clean: build-artifacts: IN_PROGRESS | 2 | [issue-openclaw-openclaw-119350](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119350.md) |
| checks are not clean: windows: IN_PROGRESS | 2 | [issue-openclaw-gogcli-872](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-872.md) |
| checks are not clean: checks-ui-e2e (1/4): IN_PROGRESS, checks-node-compact-large-6: IN_PROGRESS, checks-node-compact-large-8: IN_PROGRES... | 1 | [issue-openclaw-openclaw-55372](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-55372.md) |
| checks are not clean: checks-node-compact-large-7: FAILURE, checks-windows-node-test: IN_PROGRESS | 1 | [issue-openclaw-openclaw-120832](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120832.md) |
| checks are not clean: checks-node-compact-small-7: IN_PROGRESS | 1 | [issue-openclaw-openclaw-120536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120536.md) |
| checks are not clean: checks-node-compact-large-1: FAILURE, checks-node-compact-large-3: FAILURE, check-dependencies: FAILURE, check-test... | 1 | [issue-openclaw-openclaw-120019](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120019.md) |
| checks are not clean: preflight: QUEUED | 1 | [issue-openclaw-openclaw-119962](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119962.md) |
| checks are not clean: checks-node-compact-large-6: IN_PROGRESS | 1 | [issue-openclaw-openclaw-119958](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119958.md) |
| checks are not clean: preflight: QUEUED, Scan changed paths (precise): QUEUED | 1 | [issue-openclaw-openclaw-119758](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119758.md) |
| checks are not clean: QA Smoke CI (profile 2/4): FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-94679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-94679.md) |

### Latest Repair Closures

| Target | Action | Title | Closed | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

