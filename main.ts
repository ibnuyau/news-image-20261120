// Entry for make.fun news-image-20261120: "Sum up 20 November's world news
// in one image".
//
// The image is drawn in this repository (entry.png, a 1024x1024 newspaper
// front page of Friday 20 November 2026: Trump putting the Iran decision
// off until 2027, the Houthi missile that hit Riyadh's PIF Tower, the
// JPMorgan/Visa/Mastercard vendor hack, Anthropic's debut close, the Gaza
// aid call, and New Zealand's 368 against India) and this program copies
// it to the output directory the harness provides. No network, no
// randomness: every run writes the same bytes.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(join(here, 'entry.png'));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
