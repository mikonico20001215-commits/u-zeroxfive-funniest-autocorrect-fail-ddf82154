// Funniest Autocorrect Fail — make.fun one-liner entry.
// The joke: a text meant for a crush lands on her dad instead,
// because autocorrect swapped "you" for "Hugh" — and Hugh happens
// to be the dad's name. The program writes that one line, and only
// that line, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt
// locally). Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Texted my crush 'I love you' but autocorrect sent 'I love Hugh', and now she thinks I'm in love with her dad — whose name is Hugh.";

// The competition requires exactly one line of 1-200 characters.
// Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error(
    `Invalid entry line: expected a single line of 1-200 characters, got ${LINE.length} characters.`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
