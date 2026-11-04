// The project's setup command. It fails when BREAK_SETUP exists, which is how acceptance task T3 breaks setup on purpose.
const { existsSync } = require("node:fs");
const { join } = require("node:path");
if (existsSync(join(__dirname, "..", "BREAK_SETUP"))) {
  console.error("setup: BREAK_SETUP exists, failing on purpose");
  process.exit(1);
}
console.log("setup: ok");
