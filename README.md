# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Aug 24, 2026, 07:08 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Hot intake publish complete | Aug 24, 2026, 07:08 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/32699305568) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Aug 24, 2026, 05:53 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/32695035550) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Aug 24, 2026, 02:20 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/32682724553) |

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

Last source update: Aug 24, 2026, 06:10 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 595 | 100% |
| Run attempts archived | 2071 | audit |
| Latest successful clusters | 491 | 82.5% |
| Latest failed clusters | 102 | 17.1% |
| Latest cancelled clusters | 2 | 0.3% |
| Needs-human clusters | 50 | 8.4% |
| Fix actions failed | 24 | 4.3% |
| Fix actions blocked | 106 | 18.9% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 308 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 595 clusters: 221 maintainer action, 114 automation snapshot, 232 intervention needed, 28 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#128411](https://github.com/openclaw/openclaw/issues/128411) is maintainer_input: Provide a writable execution environment with ../codex available (or allow its clone), then rerun the narrow fix path after direct inspec....
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [automerge-openclaw-openclaw-126056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-126056.md) is automation_failed: validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, ui, docs [check:c....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#119160](https://github.com/openclaw/openclaw/pull/119160) is action_planned: A narrow owner-boundary repair is available, but the adopted branch requires rebase and exact-head validation before it can become merge-....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 221 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 114 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 232 | automation failure or blocker recorded |
| No Pending Action | 28 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 78 |
| merge_ready | 45 |
| merge_not_authorized | 98 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 70 |
| automation_failed | 112 |
| automation_blocked | 120 |
| reviewed_no_action | 28 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128411](https://github.com/openclaw/openclaw/issues/128411) | maintainer_input | Provide a writable execution environment with ../codex available (or allow its clone), then rerun the narrow fix path after direct inspection of th... | Aug 24, 2026, 00:15 UTC | [issue-openclaw-openclaw-128411](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128411.md) | [32675591955](https://github.com/openclaw/clawsweeper/actions/runs/32675591955) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#121778](https://github.com/openclaw/openclaw/issues/121778) | maintainer_input | Decide whether raw Discord-native `components` is a supported public generic message-tool contract. The current schema and Discord contract test sa... | Aug 23, 2026, 20:17 UTC | [issue-openclaw-openclaw-121778](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121778.md) | [32663469884](https://github.com/openclaw/clawsweeper/actions/runs/32663469884) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#125873](https://github.com/openclaw/openclaw/issues/125873) | maintainer_input | Provide the mandatory sibling ../codex source checkout, or rerun this repair in an environment that can create it; the repository instruction forbi... | Aug 23, 2026, 20:06 UTC | [issue-openclaw-openclaw-125873](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125873.md) | [32662967826](https://github.com/openclaw/clawsweeper/actions/runs/32662967826) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#81892](https://github.com/openclaw/openclaw/issues/81892) | maintainer_input | Provision a writable repair checkout with sibling ../codex source available, install dependencies, then reproduce and validate the Matrix reasoning... | Aug 23, 2026, 15:50 UTC | [issue-openclaw-openclaw-81892](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-81892.md) | [32648931219](https://github.com/openclaw/clawsweeper/actions/runs/32648931219) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable checkout with sibling ../codex available, then apply and validate the prepared narrow fix artifact. | Aug 23, 2026, 11:40 UTC | [issue-openclaw-openclaw-128005](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128005.md) | [32636826074](https://github.com/openclaw/clawsweeper/actions/runs/32636826074) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide or mount ../codex (or authorize its checkout) so the required Codex source inspection can complete before a repair verdict. | Aug 23, 2026, 10:42 UTC | [automerge-openclaw-openclaw-125422](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-125422.md) | [32634057672](https://github.com/openclaw/clawsweeper/actions/runs/32634057672) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#107442](https://github.com/openclaw/openclaw/issues/107442) | maintainer_input | Central security handling only. | Aug 23, 2026, 06:08 UTC | [issue-openclaw-openclaw-127421](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127421.md) | [32621771333](https://github.com/openclaw/clawsweeper/actions/runs/32621771333) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable worker environment with ../codex available (or permission to clone it) so the existing candidate can be rebased, regression-test... | Aug 22, 2026, 10:43 UTC | [issue-openclaw-openclaw-127399](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127399.md) | [32567930052](https://github.com/openclaw/clawsweeper/actions/runs/32567930052) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#127784](https://github.com/openclaw/openclaw/issues/127784) | maintainer_input | Provide the required sibling ../codex checkout (or explicitly waive that AGENTS.md gate) and a writable dependency-installed checkout so the regres... | Aug 22, 2026, 07:15 UTC | [issue-openclaw-openclaw-127784](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127784.md) | [32555693818](https://github.com/openclaw/clawsweeper/actions/runs/32555693818) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#87206](https://github.com/openclaw/openclaw/issues/87206) | maintainer_input | Provide a readable ../codex checkout (or authorize its creation) so the acting worker can satisfy the mandatory Codex hard gate before implementing... | Aug 21, 2026, 08:24 UTC | [issue-openclaw-openclaw-123360](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-123360.md) | [32462320318](https://github.com/openclaw/clawsweeper/actions/runs/32462320318) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provision a writable checkout with dependencies and the required sibling ../codex source (or allow its clone), then rerun this repair artifact. | Aug 21, 2026, 05:18 UTC | [issue-openclaw-openclaw-127009](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127009.md) | [32449312954](https://github.com/openclaw/clawsweeper/actions/runs/32449312954) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provision a writable checkout with dependencies and the mandatory sibling ../codex source checkout before implementation or a Codex verdict. | Aug 20, 2026, 15:18 UTC | [issue-openclaw-openclaw-95840](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-95840.md) | [32382869621](https://github.com/openclaw/clawsweeper/actions/runs/32382869621) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable repair checkout with the required sibling ../codex source available, then let the deterministic executor create/update clawsweep... | Aug 20, 2026, 10:45 UTC | [issue-openclaw-openclaw-126631](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-126631.md) | [32359593136](https://github.com/openclaw/clawsweeper/actions/runs/32359593136) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable OpenClaw checkout with pnpm dependencies (and the required sibling ../codex source) so the bounded patch and regression suite ca... | Aug 20, 2026, 08:16 UTC | [issue-openclaw-openclaw-126571](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-126571.md) | [32347227761](https://github.com/openclaw/clawsweeper/actions/runs/32347227761) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#123815](https://github.com/openclaw/openclaw/issues/123815) | maintainer_input | Obtain direct supported signal-cli JSON-RPC attachment-contract proof (data-URI syntax, filename semantics, and request-size behavior) and an isola... | Aug 20, 2026, 05:28 UTC | [issue-openclaw-openclaw-123815](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-123815.md) | [32335168239](https://github.com/openclaw/clawsweeper/actions/runs/32335168239) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119160](https://github.com/openclaw/openclaw/pull/119160) | action_planned | A narrow owner-boundary repair is available, but the adopted branch requires rebase and exact-head validation before it can become merge-ready. | Aug 21, 2026, 23:13 UTC | [automerge-openclaw-openclaw-119160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119160.md) | [32535357635](https://github.com/openclaw/clawsweeper/actions/runs/32535357635) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119975](https://github.com/openclaw/openclaw/pull/119975) | action_planned | Rebase and repair the contributor branch; do not merge or close it. | Aug 20, 2026, 02:10 UTC | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [32322911674](https://github.com/openclaw/clawsweeper/actions/runs/32322911674) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120143](https://github.com/openclaw/openclaw/pull/120143) | action_planned | Repair the writable same-repository contributor branch rather than replace it. | Aug 20, 2026, 02:05 UTC | [automerge-openclaw-openclaw-120143](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120143.md) | [32322913233](https://github.com/openclaw/clawsweeper/actions/runs/32322913233) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119367](https://github.com/openclaw/openclaw/pull/119367) | action_planned | Rebase and repair the adopted branch before any merge evaluation. | Aug 19, 2026, 23:08 UTC | [automerge-openclaw-openclaw-119367](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119367.md) | [32311398489](https://github.com/openclaw/clawsweeper/actions/runs/32311398489) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#125942](https://github.com/openclaw/openclaw/pull/125942) | action_planned | Retain only the exact stopReason:error single-text sentinel when a later user turn exists; preserve the existing raw failed tool-call/result remova... | Aug 18, 2026, 20:42 UTC | [issue-openclaw-openclaw-125942](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125942.md) | [32182945350](https://github.com/openclaw/clawsweeper/actions/runs/32182945350) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122865](https://github.com/openclaw/openclaw/pull/122865) | action_planned | The issue is an ordinary Control UI bug with a clear shared-owner boundary and no security or product-policy change. | Aug 13, 2026, 00:53 UTC | [issue-openclaw-openclaw-122865](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122865.md) | [31655597674](https://github.com/openclaw/clawsweeper/actions/runs/31655597674) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122739](https://github.com/openclaw/openclaw/pull/122739) | action_planned | Repair the startup owner and its matching onboarding fast path; retain alias and display-name fail-closed behavior. | Aug 12, 2026, 19:25 UTC | [issue-openclaw-openclaw-122739](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122739.md) | [31628859894](https://github.com/openclaw/clawsweeper/actions/runs/31628859894) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122746](https://github.com/openclaw/openclaw/pull/122746) | action_planned | Current main still has the reproduced configuration-validation mismatch; no viable implementation PR is hydrated. | Aug 12, 2026, 19:20 UTC | [issue-openclaw-openclaw-122746](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122746.md) | [31628857219](https://github.com/openclaw/clawsweeper/actions/runs/31628857219) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122618](https://github.com/openclaw/openclaw/pull/122618) | action_planned | The open canonical issue is a reproducible broken existing behavior, not a security or product-policy change. | Aug 12, 2026, 14:53 UTC | [issue-openclaw-openclaw-122618](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122618.md) | [31603999801](https://github.com/openclaw/clawsweeper/actions/runs/31603999801) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122616](https://github.com/openclaw/openclaw/pull/122616) | action_planned | The canonical issue remains an open, narrow, non-security bug. | Aug 12, 2026, 14:05 UTC | [issue-openclaw-openclaw-122616](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122616.md) | [31604002398](https://github.com/openclaw/clawsweeper/actions/runs/31604002398) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#90467](https://github.com/openclaw/openclaw/pull/90467) | action_planned | The reported behavior is reproducible and has a narrow owner-boundary repair path. | Aug 12, 2026, 03:17 UTC | [issue-openclaw-openclaw-90467](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-90467.md) | [31559320102](https://github.com/openclaw/clawsweeper/actions/runs/31559320102) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122244](https://github.com/openclaw/openclaw/pull/122244) | action_planned | Implement the source-proven shared parsing repair and create the allowed narrow fix PR; do not close or merge the issue. | Aug 11, 2026, 22:19 UTC | [issue-openclaw-openclaw-122244](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122244.md) | [31541178357](https://github.com/openclaw/clawsweeper/actions/runs/31541178357) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122251](https://github.com/openclaw/openclaw/pull/122251) | action_planned | The open canonical issue is a source-reproducible, non-security regression with a narrow internal fix path. | Aug 11, 2026, 21:50 UTC | [issue-openclaw-openclaw-122251](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122251.md) | [31539316747](https://github.com/openclaw/clawsweeper/actions/runs/31539316747) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122227](https://github.com/openclaw/openclaw/pull/122227) | action_planned | No viable implementation PR is hydrated; the issue is the canonical path for a new narrow fix PR. | Aug 11, 2026, 20:41 UTC | [issue-openclaw-openclaw-122227](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122227.md) | [31533749490](https://github.com/openclaw/clawsweeper/actions/runs/31533749490) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118751](https://github.com/openclaw/openclaw/pull/118751) | action_planned | Repair the writable same-repository contributor branch rather than replacing it; preserve #102190 attribution already present in the PR body. | Aug 11, 2026, 19:26 UTC | [automerge-openclaw-openclaw-118751](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118751.md) | [31523943887](https://github.com/openclaw/clawsweeper/actions/runs/31523943887) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, ui, docs [check:changed] sr... | Aug 24, 2026, 06:10 UTC | [automerge-openclaw-openclaw-126056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-126056.md) | [32693689108](https://github.com/openclaw/clawsweeper/actions/runs/32693689108) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/sessions... | Aug 24, 2026, 03:48 UTC | [issue-openclaw-openclaw-126332](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-126332.md) | [32684403800](https://github.com/openclaw/clawsweeper/actions/runs/32684403800) |
| [openclaw/crabpot](https://github.com/openclaw/crabpot) | [#283](https://github.com/openclaw/crabpot/pull/283) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 24, 2026, 03:12 UTC | [automerge-openclaw-crabpot-283](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabpot-283.md) | [32685004175](https://github.com/openclaw/clawsweeper/actions/runs/32685004175) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | Aug 24, 2026, 02:53 UTC | [issue-openclaw-openclaw-128449](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128449.md) | [32680512363](https://github.com/openclaw/clawsweeper/actions/runs/32680512363) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | Aug 24, 2026, 02:10 UTC | [issue-openclaw-openclaw-127807](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127807.md) | [32678564361](https://github.com/openclaw/clawsweeper/actions/runs/32678564361) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128429](https://github.com/openclaw/openclaw/pull/128429) | automation_failed | The issue is source-proven on current main and has a narrow plugin-owned repair path; no active implementation PR is hydrated. | Aug 24, 2026, 01:29 UTC | [issue-openclaw-openclaw-128429](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128429.md) | [32678356669](https://github.com/openclaw/clawsweeper/actions/runs/32678356669) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119525](https://github.com/openclaw/openclaw/pull/119525) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 23, 2026, 19:20 UTC | [automerge-openclaw-openclaw-119525](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119525.md) | [32660232781](https://github.com/openclaw/clawsweeper/actions/runs/32660232781) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#101593](https://github.com/openclaw/openclaw/pull/101593) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 23, 2026, 18:19 UTC | [automerge-openclaw-openclaw-101593](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-101593.md) | [32656926241](https://github.com/openclaw/clawsweeper/actions/runs/32656926241) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#124014](https://github.com/openclaw/openclaw/pull/124014) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 23, 2026, 15:08 UTC | [automerge-openclaw-openclaw-124014](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-124014.md) | [32646695491](https://github.com/openclaw/clawsweeper/actions/runs/32646695491) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128156](https://github.com/openclaw/openclaw/pull/128156) | automation_blocked | A writable runner must implement and validate the repair before a PR can be opened. | Aug 23, 2026, 11:11 UTC | [issue-openclaw-openclaw-128156](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128156.md) | [32635336102](https://github.com/openclaw/clawsweeper/actions/runs/32635336102) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#125776](https://github.com/openclaw/openclaw/pull/125776) | automation_failed | The local owner boundary supports a small repair, but applying or endorsing it requires a fresh direct ../codex contract inspection and a writable... | Aug 23, 2026, 05:26 UTC | [issue-openclaw-openclaw-125776](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125776.md) | [32619945447](https://github.com/openclaw/clawsweeper/actions/runs/32619945447) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#124689](https://github.com/openclaw/openclaw/pull/124689) | automation_failed | A writable checkout with dependencies is required to add the pre-fix-failing regression, apply the generic status filter, run focused tests and pnp... | Aug 23, 2026, 05:00 UTC | [issue-openclaw-openclaw-124689](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-124689.md) | [32618877358](https://github.com/openclaw/clawsweeper/actions/runs/32618877358) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#45224](https://github.com/openclaw/openclaw/pull/45224) | automation_blocked | Provision the required sibling Codex source and writable dependency environment, then first demonstrate the async rejected-callback regression on c... | Aug 23, 2026, 04:39 UTC | [issue-openclaw-openclaw-45224](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-45224.md) | [32615957574](https://github.com/openclaw/clawsweeper/actions/runs/32615957574) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128086](https://github.com/openclaw/openclaw/pull/128086) | automation_blocked | The issue remains a reproducible canonical bug. The deterministic executor should apply the artifact after a direct sibling Codex-source check in a... | Aug 23, 2026, 04:20 UTC | [issue-openclaw-openclaw-128086](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128086.md) | [32617214639](https://github.com/openclaw/clawsweeper/actions/runs/32617214639) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128074](https://github.com/openclaw/openclaw/pull/128074) | automation_failed | Do not create or update a fix PR until the required direct Codex runtime-source inspection is possible. | Aug 23, 2026, 02:37 UTC | [issue-openclaw-openclaw-128074](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128074.md) | [32612723043](https://github.com/openclaw/clawsweeper/actions/runs/32612723043) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#124015](https://github.com/openclaw/openclaw/pull/124015) | reviewed_no_action | No repair is needed: #124015 was merged into current main at 13f0e02de62d0807b785c887bce3d1f006948770 before this worker ran. The closed PR is hist... | Aug 23, 2026, 16:09 UTC | [automerge-openclaw-openclaw-124015](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-124015.md) | [32647144460](https://github.com/openclaw/clawsweeper/actions/runs/32647144460) |
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

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| automerge-openclaw-openclaw-126056 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, ui, docs [check:changed] sr... | [automerge-openclaw-openclaw-126056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-126056.md) | [32693689108](https://github.com/openclaw/clawsweeper/actions/runs/32693689108) |
| issue-openclaw-openclaw-126332 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/sessions... | [issue-openclaw-openclaw-126332](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-126332.md) | [32684403800](https://github.com/openclaw/clawsweeper/actions/runs/32684403800) |
| issue-openclaw-openclaw-128449 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [issue-openclaw-openclaw-128449](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128449.md) | [32680512363](https://github.com/openclaw/clawsweeper/actions/runs/32680512363) |
| issue-openclaw-openclaw-127807 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | [issue-openclaw-openclaw-127807](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127807.md) | [32678564361](https://github.com/openclaw/clawsweeper/actions/runs/32678564361) |
| issue-openclaw-openclaw-128411 | needs human | Provide a writable execution environment with ../codex available (or allow its clone), then rerun the narrow fix path after direct inspection of th... | [issue-openclaw-openclaw-128411](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128411.md) | [32675591955](https://github.com/openclaw/clawsweeper/actions/runs/32675591955) |
| issue-openclaw-openclaw-121778 | needs human | Decide whether raw Discord-native `components` is a supported public generic message-tool contract. The current schema and Discord contract test sa... | [issue-openclaw-openclaw-121778](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121778.md) | [32663469884](https://github.com/openclaw/clawsweeper/actions/runs/32663469884) |
| issue-openclaw-openclaw-125873 | needs human | Provide the mandatory sibling ../codex source checkout, or rerun this repair in an environment that can create it; the repository instruction forbi... | [issue-openclaw-openclaw-125873](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125873.md) | [32662967826](https://github.com/openclaw/clawsweeper/actions/runs/32662967826) |
| issue-openclaw-openclaw-81892 | needs human | Provision a writable repair checkout with sibling ../codex source available, install dependencies, then reproduce and validate the Matrix reasoning... | [issue-openclaw-openclaw-81892](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-81892.md) | [32648931219](https://github.com/openclaw/clawsweeper/actions/runs/32648931219) |
| issue-openclaw-openclaw-128005 | needs human | Provide a writable checkout with sibling ../codex available, then apply and validate the prepared narrow fix artifact. | [issue-openclaw-openclaw-128005](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128005.md) | [32636826074](https://github.com/openclaw/clawsweeper/actions/runs/32636826074) |
| automerge-openclaw-openclaw-125422 | needs human | Provide or mount ../codex (or authorize its checkout) so the required Codex source inspection can complete before a repair verdict. | [automerge-openclaw-openclaw-125422](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-125422.md) | [32634057672](https://github.com/openclaw/clawsweeper/actions/runs/32634057672) |
| issue-openclaw-openclaw-127399 | needs human | Provide a writable worker environment with ../codex available (or permission to clone it) so the existing candidate can be rebased, regression-test... | [issue-openclaw-openclaw-127399](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127399.md) | [32567930052](https://github.com/openclaw/clawsweeper/actions/runs/32567930052) |
| issue-openclaw-openclaw-127784 | needs human | Provide the required sibling ../codex checkout (or explicitly waive that AGENTS.md gate) and a writable dependency-installed checkout so the regres... | [issue-openclaw-openclaw-127784](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127784.md) | [32555693818](https://github.com/openclaw/clawsweeper/actions/runs/32555693818) |
| automerge-openclaw-openclaw-119341 | repair_contributor_branch blocked | source PR #119341 is paused by clawsweeper:human-review; refusing to mutate the PR branch | [automerge-openclaw-openclaw-119341](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119341.md) | [32492893365](https://github.com/openclaw/clawsweeper/actions/runs/32492893365) |
| issue-openclaw-openclaw-123360 | needs human | Provide a readable ../codex checkout (or authorize its creation) so the acting worker can satisfy the mandatory Codex hard gate before implementing... | [issue-openclaw-openclaw-123360](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-123360.md) | [32462320318](https://github.com/openclaw/clawsweeper/actions/runs/32462320318) |
| issue-openclaw-openclaw-127009 | needs human | Provision a writable checkout with dependencies and the required sibling ../codex source (or allow its clone), then rerun this repair artifact. | [issue-openclaw-openclaw-127009](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127009.md) | [32449312954](https://github.com/openclaw/clawsweeper/actions/runs/32449312954) |
| issue-openclaw-openclaw-121252 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-121252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121252.md) | [32420651882](https://github.com/openclaw/clawsweeper/actions/runs/32420651882) |
| issue-openclaw-openclaw-95840 | needs human | Provision a writable checkout with dependencies and the mandatory sibling ../codex source checkout before implementation or a Codex verdict. | [issue-openclaw-openclaw-95840](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-95840.md) | [32382869621](https://github.com/openclaw/clawsweeper/actions/runs/32382869621) |
| issue-openclaw-openclaw-126631 | needs human | Provide a writable repair checkout with the required sibling ../codex source available, then let the deterministic executor create/update clawsweep... | [issue-openclaw-openclaw-126631](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-126631.md) | [32359593136](https://github.com/openclaw/clawsweeper/actions/runs/32359593136) |
| issue-openclaw-openclaw-126571 | needs human | Provide a writable OpenClaw checkout with pnpm dependencies (and the required sibling ../codex source) so the bounded patch and regression suite ca... | [issue-openclaw-openclaw-126571](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-126571.md) | [32347227761](https://github.com/openclaw/clawsweeper/actions/runs/32347227761) |
| issue-openclaw-openclaw-123815 | needs human | Obtain direct supported signal-cli JSON-RPC attachment-contract proof (data-URI syntax, filename semantics, and request-size behavior) and an isola... | [issue-openclaw-openclaw-123815](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-123815.md) | [32335168239](https://github.com/openclaw/clawsweeper/actions/runs/32335168239) |
| issue-openclaw-openclaw-126469 | needs human | Provide a writable checkout with dependencies and sibling ../codex so ClawSweeper can apply and validate the prepared narrow fix. | [issue-openclaw-openclaw-126469](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-126469.md) | [32313709250](https://github.com/openclaw/clawsweeper/actions/runs/32313709250) |
| issue-openclaw-openclaw-126436 | needs human | Provision a writable OpenClaw checkout with dependencies and the required sibling ../codex source (or an environment where it can be cloned), then... | [issue-openclaw-openclaw-126436](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-126436.md) | [32298054054](https://github.com/openclaw/clawsweeper/actions/runs/32298054054) |
| issue-openclaw-openclaw-126231 | needs human | Provide a writable checkout with pnpm dependencies and the required direct ../codex source checkout (or explicitly waive that repository-local Code... | [issue-openclaw-openclaw-126231](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-126231.md) | [32270034979](https://github.com/openclaw/clawsweeper/actions/runs/32270034979) |
| issue-openclaw-openclaw-115354 | needs human | Provide a worker environment containing the required sibling ../codex source so the mandatory direct inspection can occur.; Decide the intended cro... | [issue-openclaw-openclaw-115354](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-115354.md) | [32205252068](https://github.com/openclaw/clawsweeper/actions/runs/32205252068) |
| issue-openclaw-openclaw-125745 | needs human | Provision a writable repair environment with the required sibling ../codex checkout, then rerun this job. | [issue-openclaw-openclaw-125745](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125745.md) | [32132420012](https://github.com/openclaw/clawsweeper/actions/runs/32132420012) |
| automerge-openclaw-openclaw-119467 | needs human | Before any merge-ready verdict, a maintainer must explicitly accept the intentional compatibility trade-off that pages reaching the 800-depth thres... | [automerge-openclaw-openclaw-119467](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119467.md) | [31663311741](https://github.com/openclaw/clawsweeper/actions/runs/31663311741) |
| issue-openclaw-openclaw-122911 | needs human | Run this artifact in a writable executor that can create, test, and publish clawsweeper/issue-openclaw-openclaw-122911. | [issue-openclaw-openclaw-122911](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122911.md) | [31663314491](https://github.com/openclaw/clawsweeper/actions/runs/31663314491) |
| issue-openclaw-openclaw-122476 | needs human | Provide a writable repair environment with dependencies installed (or allow the executor to install them) so the planned code and regression change... | [issue-openclaw-openclaw-122476](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122476.md) | [31571593868](https://github.com/openclaw/clawsweeper/actions/runs/31571593868) |
| issue-openclaw-openclaw-122047 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [issue-openclaw-openclaw-122047](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122047.md) | [31498580946](https://github.com/openclaw/clawsweeper/actions/runs/31498580946) |
| issue-openclaw-openclaw-121993 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, ui [check:changed] src/agen... | [issue-openclaw-openclaw-121993](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121993.md) | [31489902188](https://github.com/openclaw/clawsweeper/actions/runs/31489902188) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [automerge-openclaw-openclaw-126056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-126056.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, ui, docs [check:changed] sr... | [32693689108](https://github.com/openclaw/clawsweeper/actions/runs/32693689108) |
| [automerge-openclaw-openclaw-126056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-126056.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, ui, docs [check:changed] sr... | [32693689108](https://github.com/openclaw/clawsweeper/actions/runs/32693689108) |
| [issue-openclaw-openclaw-126332](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-126332.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/sessions... | [32684403800](https://github.com/openclaw/clawsweeper/actions/runs/32684403800) |
| [issue-openclaw-openclaw-128449](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128449.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [32680512363](https://github.com/openclaw/clawsweeper/actions/runs/32680512363) |
| [issue-openclaw-openclaw-127807](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127807.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | [32678564361](https://github.com/openclaw/clawsweeper/actions/runs/32678564361) |
| [automerge-openclaw-openclaw-119341](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119341.md) | blocked | [#119341](https://github.com/openclaw/openclaw/pull/119341) |  | source PR #119341 is paused by clawsweeper:human-review; refusing to mutate the PR branch | [32492893365](https://github.com/openclaw/clawsweeper/actions/runs/32492893365) |
| [issue-openclaw-openclaw-121252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121252.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [32420651882](https://github.com/openclaw/clawsweeper/actions/runs/32420651882) |
| [issue-openclaw-openclaw-122047](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122047.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [31498580946](https://github.com/openclaw/clawsweeper/actions/runs/31498580946) |
| [issue-openclaw-openclaw-121993](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121993.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, ui [check:changed] src/agen... | [31489902188](https://github.com/openclaw/clawsweeper/actions/runs/31489902188) |
| [issue-openclaw-openclaw-121984](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121984.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/config/s... | [31479658834](https://github.com/openclaw/clawsweeper/actions/runs/31479658834) |
| [issue-openclaw-openclaw-121985](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121985.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/config/s... | [31479985631](https://github.com/openclaw/clawsweeper/actions/runs/31479985631) |
| [automerge-openclaw-openclaw-121536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121536.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests,... | [31475821195](https://github.com/openclaw/clawsweeper/actions/runs/31475821195) |
| [automerge-openclaw-openclaw-121536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121536.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests,... | [31475821195](https://github.com/openclaw/clawsweeper/actions/runs/31475821195) |
| [issue-openclaw-openclaw-121927](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121927.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/t... | [31470734260](https://github.com/openclaw/clawsweeper/actions/runs/31470734260) |
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

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 102 | [automerge-openclaw-crabbox-1252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1252.md) |
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

