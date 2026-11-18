// Copies the bundled entry.png into the configured output directory.
// The output file is always named entry.png.
import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
const outputFile = resolve(outputDir, 'entry.png');

await mkdir(outputDir, { recursive: true });
await copyFile(new URL('./entry.png', import.meta.url), outputFile);
console.log(`Output written to ${outputFile}`);
