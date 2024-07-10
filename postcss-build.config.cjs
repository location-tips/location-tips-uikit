const fs = require('fs');
const path = require('path');

/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
      require('autoprefixer'),
      require("postcss-modules")({
        generateScopedName: "[name]__[local]___[hash:base64:5]",
        hashPrefix: "prefix",
        getJSON: function (cssFileName, json, outputFileName) {
          var fileToSave = outputFileName.replace(".css", ".css.js").replace("/src/", "/dist/");
          var jsonFileName = path.resolve(fileToSave);
          var newCssFileName = cssFileName.replace(".module.css", ".css");
          console.log(`[postcss-modules] Save JSON to ${jsonFileName}`);
          var destinationFolder = path.dirname(jsonFileName);
          fs.mkdirSync(destinationFolder, { recursive: true } );
          fs.writeFileSync(jsonFileName, `import "./${path.basename(newCssFileName)}";\n\nconst styles = ${JSON.stringify(json)};\nexport default styles;`);
        },
      }),
      require('postcss-nested'),
      require('postcss-url')({ url: 'copy', useHash: true }),
    ]
  }
  
  module.exports = config