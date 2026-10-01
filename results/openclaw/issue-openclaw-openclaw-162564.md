---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-162564"
mode: "autonomous"
run_id: "36840592424"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36840592424"
head_sha: "7849c6a870349fdd9a5940b9e833d814f4caa02d"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-01T09:51:35.378Z"
canonical: "https://github.com/openclaw/openclaw/issues/162564"
canonical_issue: "https://github.com/openclaw/openclaw/issues/162564"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-162564

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36840592424](https://github.com/openclaw/clawsweeper/actions/runs/36840592424)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/162564

## Summary

Verified overlapping SQLite cleanup ownership on preflight main f59b75644636e93de17dee9a4e096790b76e5ffb. Prepared a narrow repair artifact. Implementation and native reproduction are blocked by the read-only Linux host; swift --version returns permissionDenied. No files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=apps [check:changed] apps/shared/OpenClawKit/Tests/OpenClawNativeStateTests/OpenClawNativeStateSQLiteTests.swift: app surface [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- apps/shared/OpenClawKit/Tests/OpenClawNativeStateTests/OpenClawNativeStateSQLiteTests.swift No files found matching the given patterns. [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] lint apps (swiftlint unavailable on this host) [check:changed] Swift app lint skipped: swiftlint is unavailable on this non-macOS host; macOS CI owns SwiftLint coverage. [check:changed] macOS app CI tests $ pnpm test:macos:ci:1 && pnpm test:macos:ci:2 && pnpm test:macos:ci:3 $ node --import ./scripts/tsx.mjs scripts/test-projects.mts test/scripts/mac-elevation-host.test.ts [test] starting test/vitest/vitest.tooling.config.ts [test] passed 1 Vitest shard in 2.37s $ node --import ./scripts/tsx.mjs scripts/test-projects.mts test/scripts/vitest-process-group.test.ts test/scripts/package-mac-app.test.ts test/scripts/stage-cloudflared-macos.test.ts test/scripts/stage-openclaw-bun-macos.test.ts test/scripts/build-mac-sqlite.test.ts test/scripts/restart-mac.test.ts test/scripts/mac-runtime.test.ts test/scripts/package-mac-dist.test.ts test/scripts/codesign-mac-app.test.ts test/scripts/notarize-mac-artifact.test.ts test/scripts/mac-elevation-artifact.test.ts [test] starting test/vitest/vitest.tooling.config.ts [test] passed 1 Vitest shard in 8.09s $ node --import ./scripts/tsx.mjs scripts/test-projects.mts test/scripts/ci-platform-checkout.test.ts test/scripts/macos-native-test-launch.test.ts src/daemon/launchd.test.ts src/daemon/runtime-paths.test.ts src/daemon/runtime-binary.test.ts src/gateway/worker-environments/workspace-rsync-path.test.ts src/infra/brew.test.ts src/infra/stable-node-path.test.ts src/process/supervisor/adapters/child.service-lifecycle.test.ts test/scripts/verify-mac-runtime-fs.test.ts test/scripts/create-dmg.test.ts src/skills/runtime/refresh.test.ts src/skills/runtime/refresh.missing-root.integration.test.ts [test] starting test/vitest/vitest.unit-fast.config.ts [test] starting test/vitest/vitest.unit.config.ts node_modules/.pnpm/@mdx-js+mdx@3.1.1_supports-color@10.2.2/node_modules/@mdx-js/mdx/lib/util/resolve-evaluate-options.js (48:0) [33m[MODULE_LEVEL_DIRECTIVE] [0mThe semantics of the module level directive "" in "node_modules/.pnpm/@mdx-js+mdx@3.1.1_supports-color@10.2.2/node_modules/@mdx-js/mdx/lib/util/resolve-evaluate-options.js" may not be preserved when bundling. [38;5;246m╭[0m[38;5;246m─[0m[38;5;246m[[0m node_modules/.pnpm/@mdx-js+mdx@3.1.1_supports-color@10.2.2/node_modules/@mdx-js/mdx/lib/util/resolve-evaluate-options.js:48:1 [38;5;246m][0m [38;5;246m│[0m [38;5;246m48 │[0m '' [38;5;240m │[0m ─┬ [38;5;240m │[0m ╰── module level directive may not be preserved [38;5;240m │[0m [38;5;240m │[0m [38;5;115mHelp[0m: For more information, see https://rolldown.rs/in-depth/directives#other-directives [38;5;246m────╯[0m node_modules/.pnpm/@mdx-js+mdx@3.1.1_supports-color@10.2.2/node_modules/@mdx-js/mdx/lib/util/estree-util-create.js (6:0) [33m[MODULE_LEVEL_DIRECTIVE] [0mThe semantics of the module level directive "" in "node_modules/.pnpm/@mdx-js+mdx@3.1.1_supports-color@10.2.2/node_modules/@mdx-js/mdx/lib/util/estree-util-create.js" may not be preserved when bundling. [38;5;246m╭[0m[38;5;246m─[0m[38;5;246m[[0m node_modules/.pnpm/@mdx-js+mdx@3.1.1_supports-color@10.2.2/node_modules/@mdx-js/mdx/lib/util/estree-util-create.js:6:1 [38;5;246m][0m [38;5;246m│[0m [38;5;246m6 │[0m '' [38;5;240m │[0m ─┬ [38;5;240m │[0m ╰── module level directive may not be preserved [38;5;240m │[0m [38;5;240m │[0m [38;5;115mHelp[0m: For more information, see https://rolldown.rs/in-depth/directives#other-directives [38;5;246m───╯[0m node_modules/.pnpm/@mdx-js+mdx@3.1.1_supports-color@10.2.2/node_modules/@mdx-js/mdx/lib/util/estree-util-is-declaration.js (11:0) [33m[MODULE_LEVEL_DIRECTIVE] [0mThe semantics of the module level directive "" in "node_modules/.pnpm/@mdx-js+mdx@3.1.1_supports-color@10.2.2/node_modules/@mdx-js/mdx/lib/util/estree-util-is-declaration.js" may not be preserved when bundling. [38;5;246m╭[0m[38;5;246m─[0m[38;5;246m[[0m node_modules/.pnpm/@mdx-js+mdx@3.1.1_supports-color@10.2.2/node_modules/@mdx-js/mdx/lib/util/estree-util-is-declaration.js:11:1 [38;5;246m][0m [38;5;246m│[0m [38;5;246m11 │[0m '' [38;5;240m │[0m ─┬ [38;5;240m │[0m ╰── module level directive may not be preserved [38;5;240m │[0m [38;5;240m │[0m [38;5;115mHelp[0m: For more information, see https://rolldown.rs/in-depth/directives#other-directives [38;5;246m────╯[0m node_modules/.pnpm/hast-util-to-estree@3.1.3_supports-color@10.2.2/node_modules/hast-util-to-estree/lib/handlers/comment.js (12:0) [33m[MODULE_LEVEL_DIRECTIVE] [0mThe semantics of the module level directive "" in "node_modules/.pnpm/hast-util-to-estree@3.1.3_sup ...  [30m[46m tooling [49m[39m test/scripts/ci-platform-checkout.test.ts [2m([22m[2m73 tests[22m[2m)[22m[33m 50969[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=false, timeouts-exhausted)[33m 736[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=false, recovery)[33m 3320[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=false, early-leader-exit)[33m 896[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=false, harness-timeout)[33m 804[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=false, git-failure)[33m 393[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=false, git-exit-124)[33m 4515[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=false, cancel-SIGTERM)[33m 9516[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=false, cancel-SIGINT)[33m 5437[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=false, cancel-SIGHUP)[33m 5464[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=false, cleanup-failure)[33m 391[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=true, timeouts-exhausted)[33m 2017[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=true, recovery)[33m 3810[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=true, early-leader-exit)[33m 943[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=true, git-failure)[33m 1991[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=true, checkout-failure)[33m 2267[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=true, harness-recovery)[33m 1694[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=true, cancel-SIGTERM)[33m 9616[2mms[22m[39m [33m[2m✓[22m[39m preserves checkout ownership and fixture isolation (Linux=true, cleanup-failure)[33m 452[2mms[22m[39m [33m[2m✓[22m[39m materializes linux-node trusted harness (push, workflow=same, target=selected, retained=false) without mutating the candidate[33m 1396[2mms[22m[39m [33m[2m✓[22m[39m materializes linux-node trusted harness (push, workflow=previous, target=selected, retained=false) without mutating the candidate[33m 1814[2mms[22m[39m [33m[2m✓[22m[39m materializes platform trusted harness (push, workflow=same, target=selected, retained=false) without mutating the candidate[33m 1354[2mms[22m[39m [33m[2m✓[22m[39m materializes platform trusted harness (push, workflow=same, target=selected, retained=true) without mutating the candidate[33m 1362[2mms[22m[39m [33m[2m✓[22m[39m materializes platform trusted harness (push, workflow=previous, target=selected, retained=false) without mutating the candidate[33m 1740[2mms[22m[39m [33m[2m✓[22m[39m materializes preflight trusted harness (push, workflow=same, target=selected, retained=false) without mutating the candidate[33m 2006[2mms[22m[39m [33m[2m✓[22m[39m materializes preflight trusted harness (pull_request, workflow=same, target=selected, retained=false) without mutating the candidate[33m 2019[2mms[22m[39m [33m[2m✓[22m[39m materializes preflight trusted harness (pull_request, workflow=previous, target=selected, retained=false) without mutating the candidate[33m 1524[2mms[22m[39m [33m[2m✓[22m[39m materializes preflight trusted harness (workflow_dispatch, workflow=previous, target=selected, retained=false) without mutating the candidate[33m 1400[2mms[22m[39m [33m[2m✓[22m[39m materializes preflight trusted harness (workflow_dispatch, workflow=previous, target=missing-branch, retained=false) without mutating the candidate[33m 1563[2mms[22m[39m [33m[2m✓[22m[39m materializes preflight trusted harness (pull_request, workflow=missing, target=selected, retained=false) without mutating the candidate[33m 1651[2mms[22m[39m [33m[2m✓[22m[39m materializes preflight trusted harness (push, workflow=missing-action, target=selected, retained=false) without mutating the candidate[33m 1935[2mms[22m[39m [33m[2m✓[22m[39m materializes preflight trusted harness (workflow_dispatch, workflow=previous, target=moved-event, retained=false) without mutating the candidate[33m 1821[2mms[22m[39m [33m[2m✓[22m[39m materializes preflight trusted harness (push, workflow=same, target=missing-sha, retained=false) without mutating the candidate[33m 802[2mms[22m[39m [33m[2m✓[22m[39m materializes preflight trusted harness (workflow_dispatch, workflow=previous, target=missing-sha, retained=false) without mutating the candidate[33m 1031[2mms[22m[39m [33m[2m✓[22m[39m waits for legal slow tree startup before cancellation[33m 9527[2mms[22m[39m [2m Test Files [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m2 passed[39m[22m[2m | [22m[33m1 skipped[39m[90m (4)[39m [2m Tests [22m [1m[31m23 failed[39m[22m[2m | [22m[1m[32m86 passed[39m[22m[2m | [22m[33m17 skipped[39m[90m (126)[39m [2m Start at [22m 09:47:56 [2m Duration [22m 52.09s[2m (tests 96%, worker 1%, transform 1%, import 1%)[22m [2m Test Files [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m2 passed[39m[22m[2m | [22m[33m1 skipped[39m[90m (4)[39m [2m Tests [22m [1m[31m23 failed[39m[22m[2m | [22m[1m[32m86 passed[39m[22m[2m | [22m[33m17 skipped[39m[90m (126)[39m [2m Start at [22m 09:47:56 [2m Duration [22m 52.10s[2m (tests 96%, worker 1%, transform 1%, import 1%)[22m |
| issue_implementation_status_comment | updated | #162564 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #162564 | fix_needed | blocked | canonical | Requires a writable macOS execution environment to establish a failing regression through the real initializer before implementing or publishing the repair. Source inspection alone does not satisfy the reproduction gate. |
| #158090 | keep_independent | planned | independent | Distinct implementation work whose tested merge exposed the native symptom; it is not a canonical fix or replacement source for this cluster. |
| cluster:issue-openclaw-openclaw-162564 | build_fix_artifact | planned | canonical | A bounded existing-behavior repair remains appropriate for an executor with a writable checkout and macOS proof capability. |

## Needs Human

- none
