#!/bin/bash

echo ${BASH_VERSION}

shopt -s globstar

# Remove dist folder if it exists and create a new one
rm -rf ./dist
mkdir ./dist

# Copy all files from src to ../dist
cp -R ./src/* ./dist

rm -rf ./dist/**/*.mdx
rm -rf ./dist/**/*.ts
rm -rf ./dist/**/*.tsx
rm -rf ./dist/**/*.map

npx tsc --project ./tsconfig.lib.json -t es2020 --outDir dist --noEmit false

node node_modules/.bin/postcss src/**/*.module.css --base src --dir dist

cp -R ./src/**/*.d.ts ./dist

for f in ./dist/**/*.module.css; do mv "$f" "$(echo "$f" | sed s/module.css/css/)"; done

echo "import \"./index.d.ts\";"  | tee -a ./dist/globals.d.ts
