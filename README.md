# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Aug 25, 2026, 13:20 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Hot intake publish complete | Aug 25, 2026, 13:20 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/32850296817) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Aug 25, 2026, 12:38 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/32848573761) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Aug 24, 2026, 19:44 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/32769888516) |

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

Last source update: Aug 25, 2026, 12:51 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 618 | 100% |
| Run attempts archived | 2132 | audit |
| Latest successful clusters | 516 | 83.5% |
| Latest failed clusters | 100 | 16.2% |
| Latest cancelled clusters | 2 | 0.3% |
| Needs-human clusters | 56 | 9.1% |
| Fix actions failed | 26 | 4.4% |
| Fix actions blocked | 118 | 19.9% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 312 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 618 clusters: 227 maintainer action, 114 automation snapshot, 249 intervention needed, 28 no pending action, 0 completed.
- Maintainer first: [openclaw/clawhub](https://github.com/openclaw/clawhub) [#3507](https://github.com/openclaw/clawhub/issues/3507) is maintainer_input: An OpenClaw Foundation Vercel-team member must authorize the Vercel deployment for the exact post-rebase #3528 head after its required ch....
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [issue-openclaw-openclaw-128826](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128826.md) is automation_blocked: validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] sr....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#119160](https://github.com/openclaw/openclaw/pull/119160) is action_planned: A narrow owner-boundary repair is available, but the adopted branch requires rebase and exact-head validation before it can become merge-....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 227 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 114 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 249 | automation failure or blocker recorded |
| No Pending Action | 28 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 84 |
| merge_ready | 45 |
| merge_not_authorized | 98 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 70 |
| automation_failed | 112 |
| automation_blocked | 137 |
| reviewed_no_action | 28 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | [#3507](https://github.com/openclaw/clawhub/issues/3507) | maintainer_input | An OpenClaw Foundation Vercel-team member must authorize the Vercel deployment for the exact post-rebase #3528 head after its required checks and f... | Aug 25, 2026, 12:51 UTC | [automerge-openclaw-clawhub-3528](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawhub-3528.md) | [32848991944](https://github.com/openclaw/clawsweeper/actions/runs/32848991944) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#125838](https://github.com/openclaw/openclaw/issues/125838) | maintainer_input | Provide a writable repair worker with ../codex available for the mandatory direct inspection, a writable Corepack cache, and installed dependencies... | Aug 25, 2026, 08:09 UTC | [issue-openclaw-openclaw-125838](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125838.md) | [32824136836](https://github.com/openclaw/clawsweeper/actions/runs/32824136836) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128971](https://github.com/openclaw/openclaw/issues/128971) | maintainer_input | Provide a readable sibling ../codex checkout (or a writable environment that can clone it) and a writable dependency-capable OpenClaw checkout; the... | Aug 25, 2026, 02:47 UTC | [issue-openclaw-openclaw-128971](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128971.md) | [32801882278](https://github.com/openclaw/clawsweeper/actions/runs/32801882278) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128877](https://github.com/openclaw/openclaw/issues/128877) | maintainer_input | Capture the exact b10453 managed llama-server --version output or an equivalent redacted trace from a writable, network-enabled environment; the jo... | Aug 24, 2026, 22:23 UTC | [issue-openclaw-openclaw-128877](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128877.md) | [32783416042](https://github.com/openclaw/clawsweeper/actions/runs/32783416042) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128859](https://github.com/openclaw/openclaw/issues/128859) | maintainer_input | Provide a repair environment containing the required sibling ../codex source and writable dependency cache/node_modules, then rerun direct Codex co... | Aug 24, 2026, 21:00 UTC | [issue-openclaw-openclaw-128859](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128859.md) | [32776033565](https://github.com/openclaw/clawsweeper/actions/runs/32776033565) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable checkout with dependencies and a readable sibling ../codex checkout; then execute the supplied new-fix-PR artifact and run its r... | Aug 24, 2026, 16:51 UTC | [issue-openclaw-openclaw-128743](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128743.md) | [32752310301](https://github.com/openclaw/clawsweeper/actions/runs/32752310301) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128411](https://github.com/openclaw/openclaw/issues/128411) | maintainer_input | Provide a writable execution environment with ../codex available (or allow its clone), then rerun the narrow fix path after direct inspection of th... | Aug 24, 2026, 00:15 UTC | [issue-openclaw-openclaw-128411](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128411.md) | [32675591955](https://github.com/openclaw/clawsweeper/actions/runs/32675591955) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#121778](https://github.com/openclaw/openclaw/issues/121778) | maintainer_input | Decide whether raw Discord-native `components` is a supported public generic message-tool contract. The current schema and Discord contract test sa... | Aug 23, 2026, 20:17 UTC | [issue-openclaw-openclaw-121778](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121778.md) | [32663469884](https://github.com/openclaw/clawsweeper/actions/runs/32663469884) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#125873](https://github.com/openclaw/openclaw/issues/125873) | maintainer_input | Provide the mandatory sibling ../codex source checkout, or rerun this repair in an environment that can create it; the repository instruction forbi... | Aug 23, 2026, 20:06 UTC | [issue-openclaw-openclaw-125873](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125873.md) | [32662967826](https://github.com/openclaw/clawsweeper/actions/runs/32662967826) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#81892](https://github.com/openclaw/openclaw/issues/81892) | maintainer_input | Provision a writable repair checkout with sibling ../codex source available, install dependencies, then reproduce and validate the Matrix reasoning... | Aug 23, 2026, 15:50 UTC | [issue-openclaw-openclaw-81892](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-81892.md) | [32648931219](https://github.com/openclaw/clawsweeper/actions/runs/32648931219) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable checkout with sibling ../codex available, then apply and validate the prepared narrow fix artifact. | Aug 23, 2026, 11:40 UTC | [issue-openclaw-openclaw-128005](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128005.md) | [32636826074](https://github.com/openclaw/clawsweeper/actions/runs/32636826074) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide or mount ../codex (or authorize its checkout) so the required Codex source inspection can complete before a repair verdict. | Aug 23, 2026, 10:42 UTC | [automerge-openclaw-openclaw-125422](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-125422.md) | [32634057672](https://github.com/openclaw/clawsweeper/actions/runs/32634057672) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#107442](https://github.com/openclaw/openclaw/issues/107442) | maintainer_input | Central security handling only. | Aug 23, 2026, 06:08 UTC | [issue-openclaw-openclaw-127421](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127421.md) | [32621771333](https://github.com/openclaw/clawsweeper/actions/runs/32621771333) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable worker environment with ../codex available (or permission to clone it) so the existing candidate can be rebased, regression-test... | Aug 22, 2026, 10:43 UTC | [issue-openclaw-openclaw-127399](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127399.md) | [32567930052](https://github.com/openclaw/clawsweeper/actions/runs/32567930052) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#127784](https://github.com/openclaw/openclaw/issues/127784) | maintainer_input | Provide the required sibling ../codex checkout (or explicitly waive that AGENTS.md gate) and a writable dependency-installed checkout so the regres... | Aug 22, 2026, 07:15 UTC | [issue-openclaw-openclaw-127784](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-127784.md) | [32555693818](https://github.com/openclaw/clawsweeper/actions/runs/32555693818) |

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/flows/bu... | Aug 25, 2026, 11:33 UTC | [issue-openclaw-openclaw-128826](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128826.md) | [32835796158](https://github.com/openclaw/clawsweeper/actions/runs/32835796158) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | Aug 25, 2026, 08:54 UTC | [issue-openclaw-openclaw-129116](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129116.md) | [32822909844](https://github.com/openclaw/clawsweeper/actions/runs/32822909844) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/pages/c... | Aug 25, 2026, 08:47 UTC | [issue-openclaw-openclaw-129118](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129118.md) | [32822804057](https://github.com/openclaw/clawsweeper/actions/runs/32822804057) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#129154](https://github.com/openclaw/openclaw/pull/129154) | automation_blocked | Blocked before code changes by the repository-required Codex-source check; package validation is additionally unavailable because pnpm/Corepack can... | Aug 25, 2026, 08:38 UTC | [issue-openclaw-openclaw-129154](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129154.md) | [32826720081](https://github.com/openclaw/clawsweeper/actions/runs/32826720081) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/a... | Aug 25, 2026, 07:48 UTC | [issue-openclaw-openclaw-129054](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129054.md) | [32818179703](https://github.com/openclaw/clawsweeper/actions/runs/32818179703) |
| [openclaw/crabpot](https://github.com/openclaw/crabpot) | [#283](https://github.com/openclaw/crabpot/pull/283) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 25, 2026, 05:23 UTC | [automerge-openclaw-crabpot-283](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabpot-283.md) | [32812081965](https://github.com/openclaw/clawsweeper/actions/runs/32812081965) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | Aug 25, 2026, 04:32 UTC | [issue-openclaw-openclaw-128962](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128962.md) | [32805030674](https://github.com/openclaw/clawsweeper/actions/runs/32805030674) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/b... | Aug 25, 2026, 03:38 UTC | [issue-openclaw-openclaw-128967](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128967.md) | [32802072835](https://github.com/openclaw/clawsweeper/actions/runs/32802072835) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/gateway/... | Aug 25, 2026, 02:04 UTC | [issue-openclaw-openclaw-128889](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128889.md) | [32795097816](https://github.com/openclaw/clawsweeper/actions/runs/32795097816) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] packages/ai/... | Aug 24, 2026, 22:03 UTC | [issue-openclaw-openclaw-128858](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128858.md) | [32776039638](https://github.com/openclaw/clawsweeper/actions/runs/32776039638) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128860](https://github.com/openclaw/openclaw/pull/128860) | automation_blocked | Cannot satisfy the mandatory Codex-source gate, create the requested branch delta, or run the regression in this read-only dependency-incomplete wo... | Aug 24, 2026, 21:45 UTC | [issue-openclaw-openclaw-128860](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128860.md) | [32780373416](https://github.com/openclaw/clawsweeper/actions/runs/32780373416) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/prog... | Aug 24, 2026, 21:20 UTC | [issue-openclaw-openclaw-128821](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128821.md) | [32772024845](https://github.com/openclaw/clawsweeper/actions/runs/32772024845) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex /review did not pass after final base synchronization: Do not merge. The prior Codex macOS/Codex finding is addressed, but the artifact remai... | Aug 24, 2026, 20:40 UTC | [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | [32772319914](https://github.com/openclaw/clawsweeper/actions/runs/32772319914) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128797](https://github.com/openclaw/openclaw/pull/128797) | automation_blocked | The reported behavior is reproducible from current source, but the requested implementation and validation cannot run in this environment. | Aug 24, 2026, 19:42 UTC | [issue-openclaw-openclaw-128797](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128797.md) | [32763541171](https://github.com/openclaw/clawsweeper/actions/runs/32763541171) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128782](https://github.com/openclaw/openclaw/pull/128782) | automation_blocked | Remove the postinstall migration call; retain the established Doctor migration path. | Aug 24, 2026, 17:29 UTC | [issue-openclaw-openclaw-128782](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128782.md) | [32754979437](https://github.com/openclaw/clawsweeper/actions/runs/32754979437) |

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
| automerge-openclaw-clawhub-3528 | needs human | An OpenClaw Foundation Vercel-team member must authorize the Vercel deployment for the exact post-rebase #3528 head after its required checks and f... | [automerge-openclaw-clawhub-3528](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawhub-3528.md) | [32848991944](https://github.com/openclaw/clawsweeper/actions/runs/32848991944) |
| issue-openclaw-openclaw-128826 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/flows/bu... | [issue-openclaw-openclaw-128826](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128826.md) | [32835796158](https://github.com/openclaw/clawsweeper/actions/runs/32835796158) |
| issue-openclaw-openclaw-129116 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [issue-openclaw-openclaw-129116](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129116.md) | [32822909844](https://github.com/openclaw/clawsweeper/actions/runs/32822909844) |
| issue-openclaw-openclaw-129118 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/pages/c... | [issue-openclaw-openclaw-129118](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129118.md) | [32822804057](https://github.com/openclaw/clawsweeper/actions/runs/32822804057) |
| issue-openclaw-openclaw-125838 | needs human | Provide a writable repair worker with ../codex available for the mandatory direct inspection, a writable Corepack cache, and installed dependencies... | [issue-openclaw-openclaw-125838](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125838.md) | [32824136836](https://github.com/openclaw/clawsweeper/actions/runs/32824136836) |
| issue-openclaw-openclaw-129054 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/a... | [issue-openclaw-openclaw-129054](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129054.md) | [32818179703](https://github.com/openclaw/clawsweeper/actions/runs/32818179703) |
| issue-openclaw-openclaw-128962 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [issue-openclaw-openclaw-128962](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128962.md) | [32805030674](https://github.com/openclaw/clawsweeper/actions/runs/32805030674) |
| issue-openclaw-openclaw-128967 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/b... | [issue-openclaw-openclaw-128967](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128967.md) | [32802072835](https://github.com/openclaw/clawsweeper/actions/runs/32802072835) |
| issue-openclaw-openclaw-128971 | needs human | Provide a readable sibling ../codex checkout (or a writable environment that can clone it) and a writable dependency-capable OpenClaw checkout; the... | [issue-openclaw-openclaw-128971](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128971.md) | [32801882278](https://github.com/openclaw/clawsweeper/actions/runs/32801882278) |
| issue-openclaw-openclaw-128889 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/gateway/... | [issue-openclaw-openclaw-128889](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128889.md) | [32795097816](https://github.com/openclaw/clawsweeper/actions/runs/32795097816) |
| issue-openclaw-openclaw-128877 | needs human | Capture the exact b10453 managed llama-server --version output or an equivalent redacted trace from a writable, network-enabled environment; the jo... | [issue-openclaw-openclaw-128877](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128877.md) | [32783416042](https://github.com/openclaw/clawsweeper/actions/runs/32783416042) |
| issue-openclaw-openclaw-128858 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] packages/ai/... | [issue-openclaw-openclaw-128858](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128858.md) | [32776039638](https://github.com/openclaw/clawsweeper/actions/runs/32776039638) |
| issue-openclaw-openclaw-128821 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/prog... | [issue-openclaw-openclaw-128821](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128821.md) | [32772024845](https://github.com/openclaw/clawsweeper/actions/runs/32772024845) |
| issue-openclaw-openclaw-128859 | needs human | Provide a repair environment containing the required sibling ../codex source and writable dependency cache/node_modules, then rerun direct Codex co... | [issue-openclaw-openclaw-128859](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128859.md) | [32776033565](https://github.com/openclaw/clawsweeper/actions/runs/32776033565) |
| automerge-openclaw-openclaw-117144 | fix failed | Codex /review did not pass after final base synchronization: Do not merge. The prior Codex macOS/Codex finding is addressed, but the artifact remai... | [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | [32772319914](https://github.com/openclaw/clawsweeper/actions/runs/32772319914) |
| issue-openclaw-openclaw-128743 | needs human | Provide a writable checkout with dependencies and a readable sibling ../codex checkout; then execute the supplied new-fix-PR artifact and run its r... | [issue-openclaw-openclaw-128743](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128743.md) | [32752310301](https://github.com/openclaw/clawsweeper/actions/runs/32752310301) |
| issue-openclaw-openclaw-128755 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/gateway/... | [issue-openclaw-openclaw-128755](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128755.md) | [32742857815](https://github.com/openclaw/clawsweeper/actions/runs/32742857815) |
| automerge-openclaw-openclaw-118806 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/a... | [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | [32736207721](https://github.com/openclaw/clawsweeper/actions/runs/32736207721) |
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

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-openclaw-128826](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128826.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/flows/bu... | [32835796158](https://github.com/openclaw/clawsweeper/actions/runs/32835796158) |
| [issue-openclaw-openclaw-129116](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129116.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [32822909844](https://github.com/openclaw/clawsweeper/actions/runs/32822909844) |
| [issue-openclaw-openclaw-129118](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129118.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/pages/c... | [32822804057](https://github.com/openclaw/clawsweeper/actions/runs/32822804057) |
| [issue-openclaw-openclaw-129054](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129054.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/a... | [32818179703](https://github.com/openclaw/clawsweeper/actions/runs/32818179703) |
| [issue-openclaw-openclaw-128962](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128962.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [32805030674](https://github.com/openclaw/clawsweeper/actions/runs/32805030674) |
| [issue-openclaw-openclaw-128967](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128967.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/b... | [32802072835](https://github.com/openclaw/clawsweeper/actions/runs/32802072835) |
| [issue-openclaw-openclaw-128889](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128889.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/gateway/... | [32795097816](https://github.com/openclaw/clawsweeper/actions/runs/32795097816) |
| [issue-openclaw-openclaw-128858](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128858.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] packages/ai/... | [32776039638](https://github.com/openclaw/clawsweeper/actions/runs/32776039638) |
| [issue-openclaw-openclaw-128821](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128821.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/prog... | [32772024845](https://github.com/openclaw/clawsweeper/actions/runs/32772024845) |
| [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | failed |  |  | Codex /review did not pass after final base synchronization: Do not merge. The prior Codex macOS/Codex finding is addressed, but the artifact remai... | [32772319914](https://github.com/openclaw/clawsweeper/actions/runs/32772319914) |
| [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | blocked |  |  | Codex /review did not pass after final base synchronization: Do not merge. The prior Codex macOS/Codex finding is addressed, but the artifact remai... | [32772319914](https://github.com/openclaw/clawsweeper/actions/runs/32772319914) |
| [issue-openclaw-openclaw-128755](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128755.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/gateway/... | [32742857815](https://github.com/openclaw/clawsweeper/actions/runs/32742857815) |
| [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/a... | [32736207721](https://github.com/openclaw/clawsweeper/actions/runs/32736207721) |
| [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/a... | [32736207721](https://github.com/openclaw/clawsweeper/actions/runs/32736207721) |
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

