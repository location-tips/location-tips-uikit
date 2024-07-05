'use server'

import { toKebabCase, toLowerCase } from "js-convert-case";
import { Collection, Mode, ModeValues, Variable, VariableAlias } from "uikit-figma/types/types";
import { nameToVar } from "uikit-figma/utils/nameToVar";
import { variableAlias } from "uikit-figma/utils/variableAlias";
import fs from 'fs';
import { valueToCss } from "uikit-figma/utils/valueToCss";
import { ROOT_FONT_SIZE } from "../constants/base";

export type GenerateVarsState = {
    cssFiles: string[];
    jsonFiles: string[];
    error?: string;
}

const UIKIT_FOLDER = "../uikit/";

export async function generateVars(prevFormState: GenerateVarsState, formData: FormData): Promise<GenerateVarsState> {
    const cssFiles: string[] = [];
    const jsonFiles: string[] = [];

    try {
        const pAccessToken = "figd_njA0mG8XerczIIYqNMyhXcI9fAQC-n6mhbLa8442";

        const fileId = formData.get("fileId") as string;

        if (!fileId) {
            return { ...prevFormState, error: "File ID is required" };
        }
    
        const fileResponse = await fetch(`https://api.figma.com/v1/files/${fileId}/variables/local?access_token=${pAccessToken}`, { headers: { 'X-Figma-Token': pAccessToken } });
        const fileParams = await fileResponse.json();

        const collections = new Map<Collection["id"], Collection & { modeVars?: Map<Mode["modeId"], Mode & {variables?: {name: Variable["name"], id: Variable["id"], resolvedType: Variable["resolvedType"], value: ModeValues}[]}> }>(Object.entries(fileParams.meta.variableCollections));
        const variables = new Map<Variable["id"], Variable>(Object.entries(fileParams.meta.variables));

        Object.values<Variable>(fileParams.meta.variables).forEach((variable) => {
        const collection = collections.get(variable.variableCollectionId);

        if (collection) {
            Object.entries(variable.valuesByMode).forEach(([modeId, value]) => {
            if (!collection.modeVars) collection.modeVars = new Map<Mode["modeId"], Mode & {variables?: {name: Variable["name"], id: Variable["id"], resolvedType: Variable["resolvedType"], value: ModeValues}[]}>();

            const mode = collection.modeVars.get(modeId);

            if (mode) {
                mode.variables?.push({name: variable.name, id: variable.id, resolvedType: variable.resolvedType, value});
            } else {
                collection.modeVars.set(modeId, { modeId, name: collection.modes.find((m) => m.modeId === modeId)?.name ?? "unknown mode", variables: [{name: variable.name, id: variable.id, resolvedType: variable.resolvedType, value}] });
            }
            });
        }
        });

        Array.from(collections.values()).map((collection) => {
            const folderName = `${toLowerCase(collection.name)}`;
            
            Array.from(collection.modeVars?.values() ?? [])?.forEach((mode) => {
                const jsonToSave: {name: string; variables: { name: string; value: ModeValues; cssVar: string; cssValue: string; resolvedType: string }[]} = {
                    name: mode.name,
                    variables: []
                };
                const fileName = `${toLowerCase(mode.name)}`;
                let fileContent = `:root[data-${toKebabCase(collection.name)}="${toKebabCase(mode.name)}"] {\n`;
                    mode.variables?.forEach((variable) => {
                        const cssValue = ((variable.value as VariableAlias).type === "VARIABLE_ALIAS") ? variableAlias((variable.value as VariableAlias).id, variables) : valueToCss(variable.resolvedType, variable.value);
                        const cssVar = nameToVar(variable.name);

                        fileContent += `\t${cssVar}: ${cssValue};\n`

                        jsonToSave.variables.push({
                            name: variable.name,
                            value: variable.value,
                            cssVar,
                            cssValue,
                            resolvedType: variable.resolvedType,
                        });
                    })
                fileContent +='}';

                fs.mkdirSync(`${UIKIT_FOLDER}styles/${folderName}`, { recursive: true });
                fs.writeFileSync(`${UIKIT_FOLDER}styles/${folderName}/${fileName}.css`, fileContent);
                fs.writeFileSync(`${UIKIT_FOLDER}styles/${folderName}/${fileName}.json`, JSON.stringify(jsonToSave, null, 2));
                cssFiles.push(`styles/${folderName}/${fileName}.css`);
                jsonFiles.push(`styles/${folderName}/${fileName}.json`);
            });
        });
    } catch (e: any) {
        return { ...prevFormState, error: e.message };
    }

    let indexCssContent = cssFiles.map((cssFile) => `@import "./${cssFile.replace("styles/", "")}";`).join("\n");

    indexCssContent += `
@import url('https://fonts.googleapis.com/css?family=Roboto');
html {
    font-size: 16px;
    font-family: Roboto, sans-serif;
}
`; // TODO: a bullshit to fix (the best approach is to put that into brands files)

    fs.writeFileSync(`${UIKIT_FOLDER}styles/index.css`, indexCssContent);

    return { ...prevFormState, cssFiles, jsonFiles };
}
