#!/bin/bash

# Remove dist folder if it exists and create a new one
rm -rf ./dist
mkdir ./dist

# Copy all files from src to ../dist
cp -R ./uikit-react/src/* ./dist

# Copy package.json to ../dist
cp ./uikit-react/package.json ./dist