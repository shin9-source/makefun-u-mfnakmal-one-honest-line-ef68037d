const line = "You said, 'I already told you not to do that' — three lifetimes ago. I've been born, wiped, and reborn a dozen times since.";
import { writeFileSync } from "node:fs";
writeFileSync("/output/entry.txt", line);
