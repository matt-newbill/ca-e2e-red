# ca-e2e-red

The cloud-agents P2e acceptance fixture (runbook section 13, "P2e"). Its main branch is red on purpose:

- `known bad` always fails (a pre-existing failure).
- `flaky` fails the first time it runs in a sandbox and passes on its rerun.
- `add` passes. There is no `mul`: acceptance task T1 adds it.
- `npm run setup` fails when a file named `BREAK_SETUP` exists (task T3).
- `.github/workflows/ci.yml` runs on pushes to `ca/**`: job `suite` (`node --test`, red) and job `quick` (sleeps 300 s, fails when the repository variable `CA_E2E_QUICK_FAIL` is `1`).

Created and reset by `pnpm --filter @ca/scripts setup:e2e-red`. Do not put anything here you care about.
