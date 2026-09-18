const QRCode = require('qrcode');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const configPath = path.join(rootDir, 'qr-codes.json');

let config;
try {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (error) {
  console.error(`Failed to read QR config from ${configPath}: ${error.message}`);
  process.exitCode = 1;
  return;
}

const outputDir = config.outputDir || 'images';
const codes = Array.isArray(config.codes) ? config.codes : [];

if (codes.length === 0) {
  console.warn('No QR codes configured; skipping generation.');
  process.exit(0);
}

const absoluteOutputDir = path.join(rootDir, outputDir);
fs.mkdirSync(absoluteOutputDir, { recursive: true });

Promise.all(codes.map(({ name, url }) => {
  if (!name || !url) {
    throw new Error('Each QR code config entry must include both name and url.');
  }

  return QRCode.toFile(path.join(absoluteOutputDir, `qr-${name}.png`), url, {
    width: 640,
    margin: 4,
    errorCorrectionLevel: 'M',
  });
})).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
