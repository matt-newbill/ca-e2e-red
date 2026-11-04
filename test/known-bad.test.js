// Fails on main, always: the pre-existing failure that excuse mode must excuse and strict mode must not.
const test = require("node:test");
const assert = require("node:assert");

test("known bad", () => {
  assert.fail("known bad fails on main on purpose");
});
