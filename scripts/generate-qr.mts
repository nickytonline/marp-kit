import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';

type QRCodeConfig = {
  outputDir?: string;
  codes?: Array<{ name: string; url: string }>;
};

async function main() {
  const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const configPath = path.join(rootDir, 'qr-codes.json');

  let config: QRCodeConfig;
  try {
    config = JSON.parse(fs.readFileSync(configPath, 'utf8')) as QRCodeConfig;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to read QR config from ${configPath}: ${message}`);
    process.exit(1);
  }

  const outputDir = config.outputDir || 'images';
  const codes = Array.isArray(config.codes) ? config.codes : [];

  if (codes.length === 0) {
    console.warn('No QR codes to generate.');
    process.exit(0);
  }

  for (const { name, url } of codes) {
    if (!name || !url) {
      throw new Error('Each QR code config entry must include both name and url.');
    }
  }

  const absoluteOutputDir = path.join(rootDir, outputDir);
  fs.mkdirSync(absoluteOutputDir, { recursive: true });

  await Promise.all(codes.map(({ name, url }) => {
    const outputPath = path.join(absoluteOutputDir, `qr-${name}.png`);
    return QRCode.toFile(outputPath, url, {
      width: 640,
      margin: 4,
      errorCorrectionLevel: 'M',
    }).then(() => console.log(`Generated ${path.relative(rootDir, outputPath)}`));
  })).catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
