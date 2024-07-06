import fs from 'fs';
import path from 'path';
import * as glob from 'glob';
// import mv from 'mv';

const distPath = path.join(import.meta.dirname, '../dist');
const cssFiles = glob.sync('**/*.css', { cwd: distPath });

let aggregatedCss = '';
cssFiles.forEach(file => {
  const cssContent = fs.readFileSync(path.join(distPath, file), 'utf8');
  aggregatedCss += '\n/* -------------------------- '+ file + ' ------------------------- */\n' + cssContent + '\n';
});

fs.writeFileSync(path.join(distPath, 'index.css'), aggregatedCss);
console.log('Aggregated CSS into index.css', path.join(distPath, 'index.css'));

