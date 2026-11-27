import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: a mother who worked night shifts for years,
// finally hearing her child read a bedtime story all the way through
// without stumbling once.
const LINE =
  "Setelah tujuh tahun pulang larut dari shift malam, Ibu akhirnya duduk di tepi ranjang dan mendengar anaknya membacakan dongeng sampai habis tanpa sekali pun tersendat.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
console.log(`entry length: ${LINE.length} characters`);
