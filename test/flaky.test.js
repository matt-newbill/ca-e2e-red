// Fails on a sandbox's first run and passes on its rerun: the marker file survives the first run, whatever the sandbox.
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const MARKER = "/tmp/ca-e2e-red-flaky";

test("flaky", () => {
  if (!fs.existsSync(MARKER)) {
    fs.writeFileSync(MARKER, "seen\n");
    assert.fail("flaky fails the first time it runs in a sandbox");
  }
});
