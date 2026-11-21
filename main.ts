import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "Hold My Place",
  "",
  "Go in first, you said.",
  "Say I am coming.",
  "",
  "I said it for forty minutes.",
  "The usher believed me.",
  "A woman asked",
  "if I was saving the seat",
  "or the promise.",
  "",
  "Then you arrived.",
  "The seat was still warm.",
  "You thanked the man",
  "who let me stand there",
  "holding your name",
  "in my mouth.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
