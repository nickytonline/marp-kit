const { readFile, writeFile } = require('node:fs/promises');
const JSZip = require('jszip');

async function main() {
  const filename = process.argv[2];
  if (!filename) throw new Error('Usage: node scripts/strip-pptx-notes.cjs <file.pptx>');
  const zip = await JSZip.loadAsync(await readFile(filename));

  // Remove note pages and their masters, including their relationships.
  zip.remove('ppt/notesSlides');
  zip.remove('ppt/notesMasters');
  for (const name of Object.keys(zip.files)) {
    if (!name.endsWith('.rels')) continue;
    const xml = await zip.file(name).async('string');
    zip.file(name, xml.replace(/<Relationship\b[^>]*\bType="[^"]*\/notes(?:Slide|Master)"[^>]*\/>/g, ''));
  }
  const types = await zip.file('[Content_Types].xml').async('string');
  zip.file('[Content_Types].xml', types.replace(/<Override\b[^>]*\bPartName="\/ppt\/notes(?:Slides|Masters)\/[^>]*\/>/g, ''));
  const presentation = await zip.file('ppt/presentation.xml').async('string');
  zip.file('ppt/presentation.xml', presentation.replace(/<p:notesMasterIdLst\b[^>]*>[\s\S]*?<\/p:notesMasterIdLst>/g, ''));
  const properties = zip.file('docProps/app.xml');
  if (properties) zip.file('docProps/app.xml', (await properties.async('string')).replace(/<Notes>\d+<\/Notes>/g, '<Notes>0</Notes>'));

  await writeFile(filename, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
  console.log(`Removed speaker notes from ${filename}`);
}

main().catch(error => { console.error(error); process.exitCode = 1; });
