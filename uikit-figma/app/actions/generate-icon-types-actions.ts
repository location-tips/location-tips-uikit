'use server'

import fs from 'fs';

export type GenerateIconTypesState = {
    tsFiles: string[];
    jsonFiles: string[];
    error?: string;
}

const UIKIT_FOLDER = "../uikit/";

export async function generateIconTypes(prevFormState: GenerateIconTypesState, formData: FormData): Promise<GenerateIconTypesState> {
    const tsFiles: string[] = [];
    const jsonFiles: string[] = [];

    const iconsFolder = formData.get("iconsFolder") as string;

    if (!iconsFolder) {
        return { ...prevFormState, error: "Icons folder is required" };
    }

    const path = `${UIKIT_FOLDER}${iconsFolder}`;
    const tsFile = `${UIKIT_FOLDER}types/Icons.ts`;
    const jsonFile = `${UIKIT_FOLDER}icons/Icons.json`;

    const folders: string[] = []
    const jsonContent: Record<string, string[]> = {};

    fs.readdirSync(path).forEach((file) => {
        if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
            const iconCatalog = file;
            const icons: string[] = [];
            jsonContent[iconCatalog] = [];

            fs.readdirSync(`${path}/${file}`).forEach((icon) => {
                if (fs.lstatSync(`${path}/${file}/${icon}`).isFile() && icon.includes('.svg')) {
                    jsonContent[iconCatalog].push(icon.replace('.svg', ''));
                    icons.push(`'${icon.replace('.svg', '')}'`);
                }
            });

            folders.push(`{ catalog: '${iconCatalog}', name: ${icons.join(' | ')} }`);
        }
    });

    const tsFileContent = `export type IconProps = ${folders.join(' |\n')};`;

    fs.writeFileSync(tsFile, tsFileContent);
    tsFiles.push(tsFile);

    fs.writeFileSync(jsonFile, JSON.stringify(jsonContent));
    jsonFiles.push(jsonFile);

    return { ...prevFormState, tsFiles, jsonFiles};
}
