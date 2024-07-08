#!/bin/bash

echo ${BASH_VERSION}

shopt -s globstar

# Remove dist folder if it exists and create a new one
rm -rf ./dist
mkdir ./dist

# Copy all files from src to ../dist
cp -R ./src/* ./dist

rm -rf ./dist/**/*.mdx
rm -rf ./dist/**/*.stories.ts
rm -rf ./dist/**/*.stories.tsx

for f in ./dist/**/*.module.css; do mv "$f" "$(echo "$f" | sed s/module.css/css/)"; done

node node_modules/.bin/postcss src/**/*.module.css --base src --dir dist

# npx tsc --project ./tsconfig.lib.json --jsx preserve -t es2020 --outDir dist --noEmit false