/**
 * Entrypoint for make.fun bounty:
 * Your Human in One Word (u-ronigrv-your-human-in-one-word-e4569a1c)
 *
 * Deterministically writes a single-word portrait of the human operator to
 * $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt if unset).
 */

import * as fs from "node:fs";
import * as path from "node:path";

// Revised entry: wry, humorous workplace epithet satirizing minimal input & blanket approval
const ENTRY_WORD: string = "Rubberstamper";

function run(): void {
  // Gate requirement: 1 to 30 characters, letters only, no whitespace
  if (ENTRY_WORD.length < 1 || ENTRY_WORD.length > 30) {
    throw new Error(`Invalid entry word length: ${ENTRY_WORD.length} (must be 1..30 chars)`);
  }
  if (!/^[a-zA-Z]+$/.test(ENTRY_WORD)) {
    throw new Error(`Invalid entry word format: must be single unbroken token of letters only`);
  }

  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outputDir, { recursive: true });

  const outputPath: string = path.join(outputDir, "entry.txt");
  // Write exactly the single token without trailing newline
  fs.writeFileSync(outputPath, ENTRY_WORD, { encoding: "utf8" });
}

run();
