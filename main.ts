import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "You pasted the error and nothing else — no code, no context, just the part where it screams — and I'm the one who has to figure out what you did.");
