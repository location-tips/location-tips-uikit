import fs from 'fs';
import path from 'path';
import autoprefixer from 'autoprefixer';
import postcssModules from 'postcss-modules';
import postcssNested from 'postcss-nested';
import postcssUrl from 'postcss-url';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    autoprefixer,
    postcssModules({
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      hashPrefix: "prefix",
      getJSON: function (cssFileName, json, outputFileName) {
        console.log(`[postcss-modules] CSS file: ${cssFileName}`);
        var fileToSave = outputFileName.replace(".css", ".css.js").replace("/src/", "/dist/");
        var jsonFileName = path.resolve(fileToSave);
        var newCssFileName = cssFileName.replace(".module.css", ".css");
        console.log(`[postcss-modules] Save JSON to ${jsonFileName}`);
        var destinationFolder = path.dirname(jsonFileName);
        fs.mkdirSync(destinationFolder, { recursive: true } );
        fs.writeFileSync(jsonFileName, `import "./${path.basename(newCssFileName)}";\n\nconst styles = ${JSON.stringify(json)};\nexport default styles;`);
      },
    }),
    postcssNested,
    postcssUrl({ url: 'copy', useHash: true }),
  ]
}
  
export default config