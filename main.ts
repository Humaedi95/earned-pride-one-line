import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: a mother who worked night shifts for years,
// finally hearing her child read a bedtime story all the way through
// without stumbling once.
const LINE =
  "After seven years of night shifts, she slipped home, sat on the edge of the bed, and listened while her daughter read the whole bedtime story through without stumbling once.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
console.log(`entry length: ${LINE.length} characters`);
