// Copy the prepared news image to the make.fun output directory.
import { copyFile, mkdir, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? 'out');
await mkdir(outputDirectory, { recursive: true });
const outputPath = resolve(outputDirectory, 'entry.png');
await copyFile(new URL('./entry.png', import.meta.url), outputPath);
const { size } = await stat(outputPath);
console.log(`Wrote ${outputPath} (${size} bytes)`);
