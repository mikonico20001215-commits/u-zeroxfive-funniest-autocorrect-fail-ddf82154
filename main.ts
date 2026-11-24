// Funniest Autocorrect Fail: writes the entry line to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Texted my crush 'I love you' but autocorrect sent 'I love Hugh', and now she thinks I'm in love with her dad — whose name is Hugh.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
