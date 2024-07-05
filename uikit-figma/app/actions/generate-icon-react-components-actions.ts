'use server'

import fs from 'fs';

export type GenerateIconFilesState = {
    iconsFiles: string[];
    error?: string;
}

const UIKIT_FOLDER = "../uikit/";

export async function generateIconReactComponents(prevFormState: GenerateIconFilesState, formData: FormData): Promise<GenerateIconFilesState> {
    const iconsFiles: string[] = [];

    const iconsFolder = formData.get("iconsFolder") as string;

    if (!iconsFolder) {
        return { ...prevFormState, error: "Icons folder is required" };
    }

    const path = `${UIKIT_FOLDER}${iconsFolder}`;
    const iconsPath = `${UIKIT_FOLDER}atoms/MIcon/_react/icons/`;
    const indexFile = `${UIKIT_FOLDER}atoms/MIcon/_react/index.ts`;

    fs.readdirSync(path).forEach((file) => {
        if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
            const iconCatalog = file;

            fs.readdirSync(`${path}/${file}`).forEach((icon) => {
                if (fs.lstatSync(`${path}/${file}/${icon}`).isFile() && icon.includes('.svg')) {
                    // write icon component
                    const iconName = icon.replace('.svg', '');
                    const fileName = `MIcon${iconName}.tsx`;
                    const fileContent = `
import React from 'react';
import { IconModeIndex, MIconProps } from '../types';
import Icon from '../../../../icons/${iconCatalog}/${iconName}.svg?react';

export const MIcon${iconName} = ({ mode, width, height, viewBox, ...restProps }: MIconProps) => {
    const gap = 16;
    const finalWidth = Number(width ?? 32);
    const finalHeight = Number(height ?? finalWidth);
    const xPosition = (IconModeIndex.get(mode) ?? 0) * (32 + gap);
    const finalViewBox = viewBox ?? \`\${xPosition} 0 32 32\`;

    return <>
        {<Icon width={finalWidth} height={finalHeight} viewBox={finalViewBox} {...restProps} />}
    </>
}
`;

                    fs.writeFileSync(`${iconsPath}${fileName}`, fileContent);
                    iconsFiles.push(fileName);
                }
            });
        }
    });

    const indexFileContent = iconsFiles.map((icon) => `export * from './icons/${icon}';`).join('\n');

    fs.writeFileSync(indexFile, indexFileContent);

    return { ...prevFormState, iconsFiles};
}
