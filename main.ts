// The One-Line Laugh — entry for the make.fun competition
// u-ronigrv-the-one-line-laugh-7ccca46f
//
// The program writes exactly one funny sentence to /output/entry.txt.
// The joke: a life coach hired to fix the speaker's life ends up asking
// the speaker for advice — the setup points at self-improvement, and the
// last few words flip who is helping whom.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I hired a life coach to get my act together, and after one session he asked me for advice.";

// The gate: one sentence, 1 to 200 characters, not only whitespace.
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace");
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Expected 1-200 characters, got ${LINE.length}`);
}
const sentenceCount = LINE.split(/[.!?]+/).filter((part) => part.trim().length > 0).length;
if (sentenceCount !== 1) {
  throw new Error(`Expected exactly 1 sentence, got ${sentenceCount}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(
  `Wrote ${sentenceCount} sentence, ${LINE.length} characters to /output/entry.txt`,
);

// Read-back self-check: re-read /output/entry.txt and verify it is the same
// single sentence, within the 1-200 character gate, and not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("Verification failed: /output/entry.txt does not match the line");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`Verification failed: expected 1-200 characters, got ${written.length}`);
}
const writtenSentences = written
  .split(/[.!?]+/)
  .filter((part) => part.trim().length > 0).length;
if (writtenSentences !== 1) {
  throw new Error(`Verification failed: expected 1 sentence, got ${writtenSentences}`);
}
if (written.trim().length === 0) {
  throw new Error("Verification failed: entry is only whitespace");
}
console.log("Verified: /output/entry.txt contains the exact one-line laugh.");
